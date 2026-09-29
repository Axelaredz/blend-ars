// Blend Ars — локальный кэш веб-версии в браузере БЕЗ service worker
// + клиентская распаковка gzip (хостинг сжатие не отдаёт).
//
// Почему так: хост (ca6p.sourcecraft.site) отдаёт
//   content-security-policy: frame-ancestors 'none'; worker-src 'none'
//   cache-control: no-store
// и НЕ отдаёт content-encoding: площадка SourceCraft Sites настраивается только
// ключами root/ref в .sourcecraft/sites.yaml — ни заголовков, ни сжатия.
// Значит и кэш, и сжатие делает сама страница:
//   * IndexedDB — байты между визитами (service worker запрещён CSP, HTTP-кэш
//     запрещён no-store);
//   * gzip — tools/build_web.sh кладёт рядом index.wasm.gz / index.pck.gz,
//     здесь они качаются и распаковываются через DecompressionStream('gzip').
//     В сеть уходит 10 МБ вместо 39,5 МБ wasm (−74,5 %), в IndexedDB лежат
//     СЖАТЫЕ байты — 10 МБ вместо 39,5 МБ.
//
// Ключ инвалидации — sha256 своего файла (подставляет tools/build_web.sh):
// обновился только pck → перекачается только он, wasm останется в кэше.
//
// Почему запросы .gz идут с cache:"reload": хостинг на GET не отдаёт ни
// cache-control, ни etag, ни last-modified (проверено на ca6p.sourcecraft.site
// 17.09.2026: только CSP, content-type и set-cookie). Такой ответ браузер вправе
// кэшировать «по эвристике», и тогда промах по IndexedDB мог закрыться СТАРЫМ
// файлом из HTTP-кэша — из-за этого обновление сайта не доезжало до игрока, пока
// он не нажимал «удалить данные сайта». cache:"reload" всегда идёт в сеть;
// лишних загрузок нет: при совпадении хэша IndexedDB отдаёт файл без сети.
// Хэш проверяется и для .gz (целостность сжатого файла), а корректность
// распаковки доказывается тестом: sha256 распакованных байт == sha256 сырого.
//
// Откаты (игра не ломается никогда):
//   * нет .gz рядом с файлом → тихо качаем сырой файл, как раньше;
//   * браузер без DecompressionStream (Chrome <80, Firefox <113, Safari <16.4)
//     → распаковывает мини-инфлятор (tools/inflate_raw.js), сырые файлы не нужны;
//   * любая ошибка кэша/распаковки → обычная загрузка по сети.
//
// Отключить кэш (транспорт gzip при этом работает): ?nocache=1 или
// localStorage["blend-ars-nocache"]="1".

(function () {
	"use strict";

	// {"index.wasm": {"gz": "<sha256 .gz>", "raw": "<sha256 сырого>"}, ...}
	var FILES = {"index.wasm":{"gz":"64f64b23cc8ca180546364dc392a1ca6b49ee2734232457b56f9c0fb261cd740","raw":"d37e06f7126849a81fa099f1cf89f0d8ccbb87502b8c857492490dff66fad95a"},"index.pck":{"gz":"0929e76d3a6cb532255a82c820a8241b1081248b20a7dd9caae7e5394e5b97ca","raw":"b85d0aad286e4a6038a822af9e42f449ae938cb48d3326112377c9d180f23818"},"index.side.wasm":{"gz":"4168ded4e644391a64cd495a7127229db36e422b06f7def92962d1c2e10b6c65","raw":"e0c3b75ff009c54b83a02ae819e04dd1f533f457c54e516f440a564d8f308a07"},"godot_rapier.wasm":{"gz":"6f1275f5012faa849009241abc5b8083a8ad4e7a57890c53a50b5666029637da","raw":"009892d9b9fb96c5e1417f59fb6480138703a0fee419ecffb1b98500b9dc5897"}};
	// Мини-инфлятор gzip (tools/inflate_raw.js, подставляется tools/build_web.sh).
	// Нужен только браузерам без DecompressionStream: там распаковываем сами.
	var INFLATE = (function () {
var module = { exports: {} };
// Blend Ars — мини-инфлятор gzip (DEFLATE) без зависимостей.
//
// Зачем: хостинг не сжимает (см. docs/LOADER.md §7), поэтому сборка кладёт рядом
// index.wasm.gz / index.pck.gz, а распаковывает браузер. Современные браузеры
// делают это нативно (DecompressionStream('gzip'), Chrome 80+ / Firefox 113+ /
// Safari 16.4+), но если его нет — нужен свой распаковщик, иначе в сборке
// пришлось бы держать ещё и несжатые index.wasm (39,5 МБ) / index.pck.
//
// Что внутри: разбор gzip-контейнера (FEXTRA/FNAME/FCOMMENT/FHCRC, CRC32 и ISIZE
// проверяются) и raw DEFLATE: stored-, fixed- и dynamic-блоки Хаффмана с табличным
// декодированием (таблица на 15 бит — как в zlib, а не побитный поиск).
//
// Файл подставляется в build/web/web_cache.js сборкой (tools/build_web.sh,
// плейсхолдер __INFLATE__) и тестируется в Node: tools/tests/check_inflate.mjs.
// UMD: в браузере отдаёт BlendArsInflate, в Node — module.exports.

(function (root, factory) {
	if (typeof module === "object" && module.exports) {
		module.exports = factory();
	} else {
		root.BlendArsInflate = factory();
	}
})(typeof self !== "undefined" ? self : this, function () {
	"use strict";

	// Длины и расстояния DEFLATE (RFC 1951, 3.2.5).
	var LENGTH_BASE = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
		43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
	var LENGTH_EXTRA = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3,
		4, 4, 4, 4, 5, 5, 5, 5, 0];
	var DIST_BASE = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
		385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
	var DIST_EXTRA = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
		9, 10, 10, 11, 11, 12, 12, 13, 13];
	// Порядок длин кодов для алфавита длин кодов (RFC 1951, 3.2.7).
	var CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	var MAX_BITS = 15;
	var TABLE_SIZE = 1 << MAX_BITS;

	// --- CRC32 (для проверки gzip-трейлера) ---------------------------------
	var CRC_TABLE = null;
	function crc32(bytes, from, to) {
		if (!CRC_TABLE) {
			CRC_TABLE = new Int32Array(256);
			for (var n = 0; n < 256; n++) {
				var c = n;
				for (var k = 0; k < 8; k++) {
					c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
				}
				CRC_TABLE[n] = c;
			}
		}
		var crc = -1;
		for (var i = from; i < to; i++) {
			crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
		}
		return (crc ^ -1) >>> 0;
	}

	// --- таблица Хаффмана ---------------------------------------------------
	// entry = (длина кода << 16) | символ, 0 = пустая ячейка.
	function reverseBits(value, len) {
		var out = 0;
		for (var i = 0; i < len; i++) {
			out = (out << 1) | (value & 1);
			value >>>= 1;
		}
		return out;
	}

	function buildTable(lengths) {
		var n = lengths.length;
		var counts = new Int32Array(16);
		for (var i = 0; i < n; i++) counts[lengths[i]]++;
		counts[0] = 0;
		var offsets = new Int32Array(16);
		var total = 0;
		for (var len = 1; len <= MAX_BITS; len++) {
			offsets[len] = total;
			total += counts[len];
		}
		var symbols = new Int32Array(total);
		for (var s = 0; s < n; s++) {
			if (lengths[s]) symbols[offsets[lengths[s]]++] = s;
		}
		// канонические коды (RFC 1951, 3.2.2), сразу развёрнутые — поток читается LSB-первым
		var codes = new Int32Array(n);
		var code = 0;
		var idx = 0;
		for (var l = 1; l <= MAX_BITS; l++) {
			for (var c = 0; c < counts[l]; c++) {
				var sym = symbols[idx++];
				codes[sym] = reverseBits(code, l);
				code++;
			}
			code <<= 1;
		}
		var table = new Int32Array(TABLE_SIZE);
		for (var j = 0; j < n; j++) {
			var bits = lengths[j];
			if (!bits) continue;
			var entry = (bits << 16) | j;
			for (var slot = codes[j]; slot < TABLE_SIZE; slot += (1 << bits)) {
				table[slot] = entry;
			}
		}
		return table;
	}

	// --- raw DEFLATE --------------------------------------------------------
	function deflateToBytes(src, start, end) {
		var pos = start;
		var bitBuf = 0;
		var bitCnt = 0;
		var out = new Uint8Array(1 << 16);
		var outLen = 0;

		function ensure(extra) {
			if (outLen + extra <= out.length) return;
			var cap = out.length;
			while (cap < outLen + extra) cap *= 2;
			var grown = new Uint8Array(cap);
			grown.set(out.subarray(0, outLen));
			out = grown;
		}
		function refill(need) {
			while (bitCnt < need && pos < end) {
				bitBuf |= src[pos++] << bitCnt;
				bitCnt += 8;
			}
		}
		function bits(need) {
			refill(need);
			if (bitCnt < need) throw new Error("inflate: неожиданный конец потока");
			var value = bitBuf & ((1 << need) - 1);
			bitBuf >>>= need;
			bitCnt -= need;
			return value;
		}
		function byte() {
			refill(8);
			if (bitCnt < 8) throw new Error("inflate: конец потока в stored-блоке");
			var value = bitBuf & 0xff;
			bitBuf >>>= 8;
			bitCnt -= 8;
			return value;
		}
		function decode(table) {
			refill(MAX_BITS);  // в конце потока добираем нулями — проверка длины ниже
			var entry = table[bitBuf & (TABLE_SIZE - 1)];
			if (!entry) throw new Error("inflate: недопустимый код Хаффмана");
			var len = entry >>> 16;
			if (bitCnt < len) throw new Error("inflate: код выходит за границу потока");
			bitBuf >>>= len;
			bitCnt -= len;
			return entry & 0xffff;
		}

		var fixedLit = null;
		var fixedDist = null;
		function fixedTables() {
			if (!fixedLit) {
				var litLengths = new Uint8Array(288);
				var i = 0;
				for (; i < 144; i++) litLengths[i] = 8;
				for (; i < 256; i++) litLengths[i] = 9;
				for (; i < 280; i++) litLengths[i] = 7;
				for (; i < 288; i++) litLengths[i] = 8;
				var distLengths = new Uint8Array(30);
				for (i = 0; i < 30; i++) distLengths[i] = 5;
				fixedLit = buildTable(litLengths);
				fixedDist = buildTable(distLengths);
			}
			return [fixedLit, fixedDist];
		}

		function storedBlock() {
			// биты текущего байта отброшены — он уже прочитан целиком
			bitBuf = 0;
			bitCnt = 0;
			var len = byte() | (byte() << 8);
			var nlen = byte() | (byte() << 8);
			if (((len ^ 0xffff) & 0xffff) !== nlen) {
				throw new Error("inflate: LEN и NLEN не совпали");
			}
			if (pos + len > end) throw new Error("inflate: stored-блок обрезан");
			ensure(len);
			out.set(src.subarray(pos, pos + len), outLen);
			outLen += len;
			pos += len;
		}

		function dynamicTables() {
			var hlit = bits(5) + 257;
			var hdist = bits(5) + 1;
			var hclen = bits(4) + 4;
			var clenLengths = new Uint8Array(19);
			for (var i = 0; i < hclen; i++) clenLengths[CLEN_ORDER[i]] = bits(3);
			var clenTable = buildTable(clenLengths);
			var lengths = new Uint8Array(hlit + hdist);
			var n = 0;
			while (n < hlit + hdist) {
				var sym = decode(clenTable);
				if (sym < 16) {
					lengths[n++] = sym;
					continue;
				}
				var repeat;
				var value = 0;
				if (sym === 16) {
					if (n === 0) throw new Error("inflate: повтор без предыдущего кода");
					value = lengths[n - 1];
					repeat = 3 + bits(2);
				} else if (sym === 17) {
					repeat = 3 + bits(3);
				} else {
					repeat = 11 + bits(7);
				}
				if (n + repeat > hlit + hdist) throw new Error("inflate: повтор за границей");
				while (repeat-- > 0) lengths[n++] = value;
			}
			return [buildTable(lengths.subarray(0, hlit)), buildTable(lengths.subarray(hlit))];
		}

		function block(litTable, distTable) {
			for (;;) {
				var sym = decode(litTable);
				if (sym < 256) {
					ensure(1);
					out[outLen++] = sym;
					continue;
				}
				if (sym === 256) return;  // конец блока
				var li = sym - 257;
				if (li >= LENGTH_BASE.length) throw new Error("inflate: длина вне таблицы");
				var length = LENGTH_BASE[li] + bits(LENGTH_EXTRA[li]);
				var dsym = decode(distTable);
				if (dsym >= DIST_BASE.length) throw new Error("inflate: дистанция вне таблицы");
				var distance = DIST_BASE[dsym] + bits(DIST_EXTRA[dsym]);
				if (distance > outLen) throw new Error("inflate: дистанция за началом вывода");
				ensure(length);
				var from = outLen - distance;
				for (var k = 0; k < length; k++) out[outLen++] = out[from++];
			}
		}

		var finalBlock = 0;
		do {
			finalBlock = bits(1);
			var type = bits(2);
			if (type === 0) {
				storedBlock();
			} else if (type === 1) {
				var fixed = fixedTables();
				block(fixed[0], fixed[1]);
			} else if (type === 2) {
				var dyn = dynamicTables();
				block(dyn[0], dyn[1]);
			} else {
				throw new Error("inflate: тип блока 3 зарезервирован");
			}
		} while (!finalBlock);

		return out.subarray(0, outLen);
	}

	// --- gzip-контейнер -----------------------------------------------------
	function gzipToBytes(bytes) {
		if (bytes.length < 18) throw new Error("gzip: файл короче заголовка");
		if (bytes[0] !== 0x1f || bytes[1] !== 0x8b) throw new Error("gzip: нет магических байтов");
		if (bytes[2] !== 8) throw new Error("gzip: метод сжатия не deflate");
		var flags = bytes[3];
		var pos = 10;
		if (flags & 0x04) {  // FEXTRA
			var xlen = bytes[pos] | (bytes[pos + 1] << 8);
			pos += 2 + xlen;
		}
		if (flags & 0x08) {  // FNAME
			while (pos < bytes.length && bytes[pos] !== 0) pos++;
			pos++;
		}
		if (flags & 0x10) {  // FCOMMENT
			while (pos < bytes.length && bytes[pos] !== 0) pos++;
			pos++;
		}
		if (flags & 0x02) pos += 2;  // FHCRC
		var trailer = bytes.length - 8;
		var wantCrc = (bytes[trailer] | (bytes[trailer + 1] << 8)
			| (bytes[trailer + 2] << 16) | (bytes[trailer + 3] << 24)) >>> 0;
		var wantSize = (bytes[trailer + 4] | (bytes[trailer + 5] << 8)
			| (bytes[trailer + 6] << 16) | (bytes[trailer + 7] << 24)) >>> 0;
		var out = deflateToBytes(bytes, pos, trailer);
		if (out.length !== wantSize) {
			throw new Error("gzip: размер не совпал с ISIZE (" + out.length + " != " + wantSize + ")");
		}
		var gotCrc = crc32(out, 0, out.length);
		if (gotCrc !== wantCrc) {
			throw new Error("gzip: CRC32 не совпал");
		}
		return out;
	}

	return { gzipToBytes: gzipToBytes, deflateToBytes: deflateToBytes };
});

return module.exports;
})();
	var DB_NAME = "blend-ars-web-cache";
	var DB_VERSION = 1;
	var STORE = "files";
	var state = {
		build: FILES,
		hits: [],
		misses: [],
		stored: [],
		errors: [],
		requests: [],
		transport: {},  // чем отдан файл в этом визите: "gzip" | "raw" | "gzip-mini"
		fallback: false,  // true, если gzip распаковывал мини-инфлятор, а не браузер
		hasInflate: !!(INFLATE && typeof INFLATE.gzipToBytes === "function"),
		disabled: false,
	};
	window.__blendArsCache = state;

	function cacheDisabled() {
		try {
			return /[?&]nocache=1/.test(location.search)
				|| localStorage.getItem("blend-ars-nocache") === "1";
		} catch (err) {
			return false;
		}
	}
	state.disabled = cacheDisabled();

	function openDB() {
		return new Promise(function (resolve, reject) {
			if (!("indexedDB" in window)) {
				reject(new Error("indexedDB недоступен"));
				return;
			}
			var req = indexedDB.open(DB_NAME, DB_VERSION);
			req.onupgradeneeded = function () {
				var db = req.result;
				if (!db.objectStoreNames.contains(STORE)) {
					db.createObjectStore(STORE, { keyPath: "name" });
				}
			};
			req.onsuccess = function () { resolve(req.result); };
			req.onerror = function () { reject(req.error); };
		});
	}

	// Ожидаемый sha256 файла. Ключи карты сборки — "gz" и "raw", а у записи в
	// IndexedDB enc = "gzip"/"raw": без этого перевода expectedHash ВСЕГДА
	// возвращал null, из-за чего:
	//   * readCached сравнивал null === null и отдавал старую запись при любой
	//     новой сборке (обновление сайта не доезжало до игрока до ручного
	//     «удалить данные сайта»);
	//   * fetchGzip пропускал проверку sha256 (null — ложное значение), то есть
	//     в кэш попадали любые байты.
	// Проверено воспроизведением в Chromium: записи в IndexedDB лежали с hash=null,
	// перезагрузка отдавала старый index.pck (438 641 Б) при новом на сайте.
	function expectedHash(name, enc) {
		var entry = FILES[name];
		if (!entry) return null;
		return entry[enc === "gzip" ? "gz" : enc] || null;
	}

	function mimeFor(name) {
		// Content-Type обязателен: WebAssembly.instantiateStreaming принимает
		// только application/wasm
		return /\.wasm$/.test(name) ? "application/wasm" : "application/octet-stream";
	}

	function inflateSupported() {
		return typeof DecompressionStream === "function";
	}

	function sha256Hex(blob) {
		return blob.arrayBuffer().then(function (buf) {
			return crypto.subtle.digest("SHA-256", buf);
		}).then(function (digest) {
			return Array.prototype.map.call(new Uint8Array(digest), function (b) {
				return ("0" + b.toString(16)).slice(-2);
			}).join("");
		});
	}

	function readCached(name) {
		return openDB().then(function (db) {
			return new Promise(function (resolve) {
				var tx = db.transaction(STORE, "readonly");
				var req = tx.objectStore(STORE).get(name);
				req.onsuccess = function () {
					var rec = req.result;
					if (!rec || !rec.blob) {
						resolve(null);
						return;
					}
					var enc = rec.enc || "raw";  // записи старого формата — сырые
					resolve(rec.hash === expectedHash(name, enc) ? rec : null);
				};
				req.onerror = function () { resolve(null); };
			});
		}).catch(function (err) {
			state.errors.push("read: " + err);
			return null;
		});
	}

	function writeRecord(rec) {
		return openDB().then(function (db) {
			return new Promise(function (resolve) {
				var tx = db.transaction(STORE, "readwrite");
				tx.objectStore(STORE).put(rec);
				tx.oncomplete = function () { resolve(true); };
				tx.onerror = function () { resolve(false); };
			});
		}).catch(function (err) {
			state.errors.push("write: " + err);
			return false;
		});
	}

	var origFetch = window.fetch ? window.fetch.bind(window) : null;
	if (!origFetch) {
		console.warn("[blend-ars cache] fetch недоступен — кэш выключен");
		return;
	}

	var lookups = {};
	var inflight = {};

	// Ответ для движка (всегда Promise). gzip распаковывается нативно потоком —
	// 39,5 МБ не копируются лишний раз. Если DecompressionStream нет (Chrome <80,
	// Firefox <113, Safari <16.4) — распаковывает мини-инфлятор: он медленнее, но
	// позволяет не держать в сборке сырые 39,5 МБ ради старых браузеров.
	function responseFor(rec) {
		var mime = mimeFor(rec.name);
		if (rec.enc === "gzip" && !inflateSupported()) {
			if (!INFLATE || typeof INFLATE.gzipToBytes !== "function") {
				state.errors.push("fallback: нет DecompressionStream и мини-инфлятора");
				return Promise.resolve(null);
			}
			return rec.blob.arrayBuffer().then(function (buf) {
				var bytes = INFLATE.gzipToBytes(new Uint8Array(buf));
				state.transport[rec.name] = "gzip-mini";
				state.fallback = true;
				console.info("[blend-ars cache] распаковано мини-инфлятором: " + rec.name
					+ " (" + bytes.length + " Б)");
				return new Response(bytes, {
					status: 200,
					statusText: "OK",
					headers: { "Content-Type": mime },
				});
			});
		}
		if (rec.enc === "gzip") {
			var stream = rec.blob.stream().pipeThrough(new DecompressionStream("gzip"));
			return Promise.resolve(new Response(stream, {
				status: 200,
				statusText: "OK",
				headers: { "Content-Type": mime },
			}));
		}
		return Promise.resolve(new Response(rec.blob, {
			status: 200,
			statusText: "OK",
			headers: { "Content-Type": mime, "Content-Length": String(rec.blob.size) },
		}));
	}

	// Что отдать движку: запись из кэша/сети или, если ничего не вышло, сеть напрямую.
	function answer(rec, input, init) {
		if (!rec || !rec.blob) {
			return origFetch(input, init);
		}
		return responseFor(rec).then(function (resp) {
			return resp || origFetch(input, init);
		});
	}

	function store(name, enc, blob, persist) {
		var rec = { name: name, enc: enc, hash: expectedHash(name, enc), blob: blob, size: blob.size };
		if (!persist) {
			return Promise.resolve(rec);
		}
		return writeRecord(rec).then(function (ok) {
			if (ok) {
				state.stored.push(name);
				lookups[name] = Promise.resolve(rec);
			}
			return rec;
		});
	}

	// gzip-ветка: качаем <файл>.gz, сверяем sha256 сжатого файла с ожидаемым
	// и кладём в кэш сжатые байты.
	function fetchGzip(name, srcUrl, persist) {
		return origFetch(srcUrl + ".gz", { credentials: "same-origin", cache: "reload" })
			.then(function (resp) {
				if (!resp || !resp.ok) {
					return null;  // сборка без .gz — тихий откат на сырой файл
				}
				var blob = resp.blob();
				return blob;
			})
			.then(function (blob) {
				if (!blob) return null;
				return sha256Hex(blob).then(function (hash) {
					var want = expectedHash(name, "gzip");
					if (want && hash !== want) {
						throw new Error("sha256 .gz не совпал: " + name);
					}
					return store(name, "gzip", blob, persist).then(function (rec) {
						state.transport[name] = "gzip";
						console.info("[blend-ars cache] загружено (gzip): " + name
							+ " — " + rec.size + " Б" + (persist ? " в кэше" : " без кэша"));
						return rec;
					});
				});
			})
			.catch(function (err) {
				state.errors.push("gz: " + name + ": " + err);
				return null;
			});
	}

	function fetchRaw(name, input, init, persist) {
		// cache:"reload" — обойти HTTP-кэш хостинга (он не запрещает кэширование)
		return origFetch(input, Object.assign({}, init || {}, { cache: "reload" }))
			.then(function (resp) {
				if (!resp || !resp.ok) return null;
				return resp.blob().then(function (blob) {
					state.transport[name] = "raw";
					return store(name, "raw", blob, persist).then(function (rec) {
						console.info("[blend-ars cache] загружено: " + name
							+ " (" + rec.size + " Б)" + (persist ? " в кэше" : " без кэша"));
						return rec;
					});
				});
			})
			.catch(function (err) {
				state.errors.push("net: " + err);
				return null;
			});
	}

	// Один сетевой запрос на файл: движок может запросить wasm дважды
	// (проверка + инстанцирование), качать и распаковывать дважды нельзя.
	function fetchOnce(name, input, init, srcUrl, persist) {
		if (!inflight[name]) {
			if (persist) state.misses.push(name);
			var attempt = inflateSupported()
				? fetchGzip(name, srcUrl, persist)
				: Promise.resolve(null);
			inflight[name] = attempt
				.then(function (rec) {
					return rec ? rec : fetchRaw(name, input, init, persist);
				})
				.then(function (rec) {
					if (!rec) inflight[name] = null;
					return rec;
				});
		}
		return inflight[name];
	}

	function resolveName(input) {
		var url = typeof input === "string" ? input : (input && input.url) || "";
		var abs = new URL(url, location.href);
		if (abs.origin !== location.origin) {
			return null;
		}
		return { name: abs.pathname.split("/").pop(), url: abs.href };
	}

	window.fetch = function (input, init) {
		var target;
		try {
			target = resolveName(input);
			if (!target || !(target.name in FILES)) {
				return origFetch(input, init);
			}
		} catch (err) {
			state.errors.push("fetch: " + err);
			return origFetch(input, init);
		}

		var name = target.name;

		// ?nocache=1: не читаем и не пишем IndexedDB, но gzip-транспорт остаётся
		// (иначе пришлось бы держать в сборке ещё и сырые файлы).
		if (state.disabled) {
			return fetchOnce(name, input, init, target.url, false)
				.then(function (rec) {
					return answer(rec, input, init);
				})
				.catch(function (err) {
					state.errors.push("nocache: " + err);
					return origFetch(input, init);
				});
		}

		state.requests.push(name);
		if (!lookups[name]) {
			lookups[name] = readCached(name);
		}

		return lookups[name].then(function (rec) {
			if (rec && rec.blob) {
				state.hits.push(name);
				state.transport[name] = rec.enc || "raw";
				console.info("[blend-ars cache] из кэша браузера: " + name + " ("
					+ (rec.enc === "gzip" ? "gzip " : "") + rec.size + " Б)");
				return rec;
			}
			return fetchOnce(name, input, init, target.url, true);
		}).then(function (rec) {
			return answer(rec, input, init);
		}).catch(function (err) {
			// страховка: любая неожиданная ошибка — обычная загрузка по сети
			state.errors.push("fetch: " + err);
			return origFetch(input, init);
		});
	};

	console.info("[blend-ars cache] перехват fetch активен (gzip + IndexedDB"
		+ (inflateSupported() ? "" : ", DecompressionStream нет — сырые файлы") + "); кэшируем: "
		+ Object.keys(FILES).join(", ") + (state.disabled ? " (кэш отключён флагом)" : ""));
})();
