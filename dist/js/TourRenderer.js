/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Options defaulting function
 *
**/
function defaultOptions(options) {
    if (!options) {
        options = {
            attributes: [],
            ips: true,
            emails: true,
            urls: true,
            files: true,
            truncate: Infinity,
            defaultProtocol: "http://",
            list: false
        };
    }
    if (typeof options.attributes !== "object")
        options.attributes = [];
    if (typeof options.ips !== "boolean")
        options.ips = true;
    if (typeof options.emails !== "boolean")
        options.emails = true;
    if (typeof options.urls !== "boolean")
        options.urls = true;
    if (typeof options.files !== "boolean")
        options.files = true;
    if (typeof options.list !== "boolean")
        options.list = false;
    if (typeof options.defaultProtocol !== "string" && typeof options.defaultProtocol !== "function")
        options.defaultProtocol = "http://";
    if (typeof options.truncate !== "number" && (typeof options.truncate !== "object" || options.truncate === null))
        options.truncate = Infinity;
    return options;
}
exports.defaultOptions = defaultOptions;
/**
 *
 * Returns whether passed string
 * can be a valid port number or not
 *
**/
function isPort(value) {
    if (isNaN(Number(value)))
        return false;
    if ((Number(value)) > 65535)
        return false;
    else
        return true;
}
exports.isPort = isPort;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tlds = ["com", "org", "net", "uk", "gov", "edu", "io", "cc", "co", "aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "boots", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "chloe", "christmas", "chrome", "chrysler", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "coach", "codes", "coffee", "college", "cologne", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotmail", "house", "how", "hr", "hsbc", "ht", "htc", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mcd", "mcdonalds", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "montblanc", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtpc", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "organic", "orientexpress", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "pamperedchef", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "xn--11b4c3d", "xn--1ck2e1b", "xn--1qqw23a", "xn--30rr7y", "xn--3bst00m", "xn--3ds443g", "xn--3e0b707e", "xn--3oq18vl8pn36a", "xn--3pxu8k", "xn--42c2d9a", "xn--45brj9c", "xn--45q11c", "xn--4gbrim", "xn--54b7fta0cc", "xn--55qw42g", "xn--55qx5d", "xn--5su34j936bgsg", "xn--5tzm5g", "xn--6frz82g", "xn--6qq986b3xl", "xn--80adxhks", "xn--80ao21a", "xn--80aqecdr1a", "xn--80asehdb", "xn--80aswg", "xn--8y0a063a", "xn--90a3ac", "xn--90ae", "xn--90ais", "xn--9dbq2a", "xn--9et52u", "xn--9krt00a", "xn--b4w605ferd", "xn--bck1b9a5dre4c", "xn--c1avg", "xn--c2br7g", "xn--cck2b3b", "xn--cg4bki", "xn--clchc0ea0b2g2a9gcd", "xn--czr694b", "xn--czrs0t", "xn--czru2d", "xn--d1acj3b", "xn--d1alf", "xn--e1a4c", "xn--eckvdtc9d", "xn--efvy88h", "xn--estv75g", "xn--fct429k", "xn--fhbei", "xn--fiq228c5hs", "xn--fiq64b", "xn--fiqs8s", "xn--fiqz9s", "xn--fjq720a", "xn--flw351e", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--fzys8d69uvgm", "xn--g2xx48c", "xn--gckr3f0f", "xn--gecrj9c", "xn--gk3at1e", "xn--h2brj9c", "xn--hxt814e", "xn--i1b6b1a6a2e", "xn--imr513n", "xn--io0a7i", "xn--j1aef", "xn--j1amh", "xn--j6w193g", "xn--jlq61u9w7b", "xn--jvr189m", "xn--kcrx77d1x4a", "xn--kprw13d", "xn--kpry57d", "xn--kpu716f", "xn--kput3i", "xn--l1acc", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a3ejt", "xn--mgba3a4f16a", "xn--mgba7c0bbn0a", "xn--mgbaam7a8h", "xn--mgbab2bd", "xn--mgbai9azgqp6j", "xn--mgbayh7gpa", "xn--mgbb9fbpob", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgbca7dzdo", "xn--mgberp4a5d4ar", "xn--mgbi4ecexp", "xn--mgbpl2fh", "xn--mgbt3dhd", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--mix891f", "xn--mk1bu44c", "xn--mxtq1m", "xn--ngbc5azd", "xn--ngbe9e0a", "xn--node", "xn--nqv7f", "xn--nqv7fs00ema", "xn--nyqy26a", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1acf", "xn--p1ai", "xn--pbt977c", "xn--pgbs0dh", "xn--pssy2u", "xn--q9jyb4c", "xn--qcka1pmc", "xn--qxam", "xn--rhqv96g", "xn--rovu88b", "xn--s9brj9c", "xn--ses554g", "xn--t60b56a", "xn--tckwe", "xn--tiq49xqyj", "xn--unup4y", "xn--vermgensberater-ctb", "xn--vermgensberatung-pwb", "xn--vhquv", "xn--vuq861b", "xn--w4r85el8fhu5dnra", "xn--w4rs40l", "xn--wgbh1c", "xn--wgbl6a", "xn--xhq521b", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zfr164b", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"];
exports.htmlAttrs = ["src=", "data=", "href=", "cite=", "formaction=", "icon=", "manifest=", "poster=", "codebase=", "background=", "profile=", "usemap="];


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/**
 * JSX/hyperscript reviver.
 * @see http://jasonformat.com/wtf-is-jsx
 * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *
 * Note: this is exported as both `h()` and `createElement()` for compatibility reasons.
 *
 * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a lightweight representation
 * of the structure of a DOM tree. This structure can be realized by recursively comparing it against
 * the current _actual_ DOM structure, and applying only the differences.
 *
 * `h()`/`createElement()` accepts an element name, a list of attributes/props,
 * and optionally children to append to the element.
 *
 * @example The following DOM tree
 *
 * `<div id="foo" name="bar">Hello!</div>`
 *
 * can be constructed using this function as:
 *
 * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
 *
 * @param {string} nodeName	An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} attributes	Any attributes/props to set on the created element.
 * @param rest			Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 *
 * @public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {VNode} vnode		The virutal DOM element to clone
 * @param {Object} props	Attributes/props to add when cloning
 * @param {VNode} rest		Any additional arguments will be used as replacement children.
 */
function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/**
 * Check if two nodes are equivalent.
 *
 * @param {Node} node			DOM Node to compare
 * @param {VNode} vnode			Virtual DOM node to compare
 * @param {boolean} [hyrdating=false]	If true, ignores component constructors when comparing.
 * @private
 */
function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }
  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }
  return hydrating || node._componentConstructor === vnode.nodeName;
}

/**
 * Check if an Element has a given nodeName, case-insensitively.
 *
 * @param {Element} node	A DOM Element to inspect the name of.
 * @param {String} nodeName	Unnormalized name to compare against.
 */
function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 *
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;

  var defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};


/* harmony default export */ __webpack_exports__["default"] = (preact);
//# sourceMappingURL=preact.esm.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lists_1 = __webpack_require__(1);
// pattern that an emails MUST have
var pattern = /^[a-z0-9!#$%&'*+\-/=?^_`{|}~.]+@([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?$/i;
// patterns that an email can not have
var negativePatterns = [
    /^[!#$%&'*+\-/=?^_`{|}~.]/,
    /[.]{2,}[a-z0-9!#$%&'*+\-/=?^_`{|}~.]+@/i,
    /\.@/
];
function default_1(str) {
    // general pattern recognition
    var match = str.match(pattern);
    if (match === null)
        return false;
    // doesn't have a negative pattern
    for (var i = negativePatterns.length - 1; i >= 0; i--) {
        if (negativePatterns[i].test(str))
            return false;
    }
    // valid TLD
    var tld = match[2];
    if (!tld)
        return false;
    if (lists_1.tlds.indexOf(tld) === -1)
        return false;
    return true;
}
exports.default = default_1;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
// general IP pattern https://regex101.com/r/rzUcJ4/1
var pattern = /^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
function default_1(str) {
    if (!pattern.test(str))
        return false;
    var IPArray = str.split(".");
    // validate oc1
    var oc1 = Number(IPArray[0]);
    if ((isNaN(oc1)) || oc1 > 255 || oc1 < 0)
        return false;
    // validate oc2
    var oc2 = Number(IPArray[1]);
    if ((isNaN(oc2)) || oc2 > 255 || oc2 < 0)
        return false;
    // validate oc3
    var oc3 = Number(IPArray[2]);
    if ((isNaN(oc3)) || oc3 > 255 || oc3 < 0)
        return false;
    // validate oc4
    var oc4 = Number((IPArray[3].match(/^\d+/) || [])[0]);
    if ((isNaN(oc4)) || oc4 > 255 || oc4 < 0)
        return false;
    // validate port
    var port = (IPArray[3].match(/(^\d+)(:)(\d+)/) || [])[3];
    if (port && (!util_1.isPort(port)))
        return false;
    return true;
}
exports.default = default_1;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var lists_1 = __webpack_require__(1);
var pattern = /^(https?:\/\/|ftps?:\/\/)?([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?(:(\d{1,5}))?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
function default_1(str) {
    // general pattern recognition https://regex101.com/r/RgKTA4/2
    var match = str.match(pattern);
    if (match === null)
        return false;
    // validate TLD
    if (typeof match[3] !== "string")
        return false;
    if (lists_1.tlds.indexOf(match[3].toLowerCase()) === -1)
        return false;
    // validate port
    if (match[5] && (!util_1.isPort(match[5])))
        return false;
    return true;
}
exports.default = default_1;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fix_1 = __webpack_require__(17);
/**
 *
 * Split the string with word separators
 * such as punctuation marks and spaces
 *
**/
function separate(input) {
    var splitted = input
        .replace(/([\s\(\)\[\]<>"'])/g, "\0$1\0")
        .replace(/([?;:,.!]+)(?=(\0|$|\s))/g, "\0$1\0")
        .split("\0");
    var fixed = fix_1.default(splitted);
    return fixed;
}
exports.separate = separate;
/**
 *
 * Join the resulting array into a string
 *
**/
function deSeparate(input) {
    return input.join("");
}
exports.deSeparate = deSeparate;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(str) {
    str = str.toLowerCase();
    if (str.indexOf("http://") === 0)
        return "http://";
    else if (str.indexOf("https://") === 0)
        return "https://";
    else if (str.indexOf("ftp://") === 0)
        return "ftp://";
    else if (str.indexOf("ftps://") === 0)
        return "ftps://";
    else if (str.indexOf("file:///") === 0)
        return "file:///";
    else if (str.indexOf("mailto:") === 0)
        return "mailto:";
    else
        return false;
}
exports.default = default_1;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(9);
__webpack_require__(10);
const preact_1 = __webpack_require__(2);
const helpers_1 = __webpack_require__(11);
const Defer_1 = __webpack_require__(12);
const InfoElement_1 = __webpack_require__(13);
const Hashtable_1 = __webpack_require__(20);
class TourRenderer {
    constructor(tour, dom) {
        this._classPrefix = 'tr';
        this._tour = tour;
        if (typeof dom === 'string') {
            dom = document.querySelector(dom);
        }
        this._dom = dom;
        this._init();
    }
    get panos() {
        return this._panos;
    }
    destroy() {
        this._viewer.destroy();
    }
    selectPOVInViewer() {
        if (!this._isLoaded) {
            return Promise.reject(new Error('viewer not loaded'));
        }
        const that = this;
        this._isSelectingPOV = true;
        this._selectPOVDeferred = new Defer_1.default();
        this.toggleControls(false);
        this._dom.classList.add(this._createClass('selecting-pov'));
        this._selectPOVDeferred.promise.then(() => {
            this.toggleControls(true);
            this._dom.classList.remove(this._createClass('selecting-pov'));
        });
        return this._selectPOVDeferred.promise;
    }
    toggleControls(show) {
        this._dom.querySelector('.pnlm-controls-container').classList.toggle(this._createClass('hide'), !show);
        this._dom.querySelector('.pnlm-panorama-info').classList.toggle(this._createClass('hide'), !show);
    }
    addDOM(elm) {
        this._dom.appendChild(elm);
    }
    deleteDOM(elm) {
        this._dom.removeChild(elm);
    }
    addOverlay(elm, pov) {
        const params = {
            id: helpers_1.generateId(),
            pitch: pov.pitch,
            yaw: pov.yaw,
            type: 'info',
            createTooltipFunc: (divParent) => preact_1.render(elm, divParent)
        };
        this._viewer.addHotSpot(params);
    }
    deleteOverlay(item) {
        let index;
        if (typeof item === 'object') {
            index = item.id;
        }
        else {
            index = item;
        }
        this._viewer.removeHotSpot(index);
    }
    forceToRender() {
        this._viewer.setYaw(this._viewer.getYaw());
    }
    addInfoElement(obj) {
        let { id, title, description, POV, isEdit } = obj;
        id = id || helpers_1.generateId();
        description = description || 'Description';
        title = title || 'Title';
        isEdit = typeof isEdit === 'boolean' ? isEdit : false;
        const pano = this.getPano();
        const info = {
            id,
            POV,
            title,
            description,
            infoElement: (preact_1.h(InfoElement_1.default, { isEdit: isEdit, classPrefix: this._classPrefix, title: title, description: description, id: id }))
        };
        pano.infos.add(info);
        this._addInfo(info);
    }
    deleteInfoElement(elem) {
        const pano = this.getPano();
        if (typeof elem === 'string') {
            elem = pano.infos.get(elem);
        }
        pano.infos.delete(elem);
        this.deleteOverlay(elem);
    }
    getPano(id = this._viewer.getScene()) {
        return this._panos.get(id);
    }
    /**
     * @deprecated Use get pano
     */
    getCurrentPano() {
        return this.getPano();
    }
    getPOV() {
        const pov = {
            pitch: 0,
            yaw: 0
        };
        if (this._viewer) {
            pov.yaw = this._viewer.getYaw(),
                pov.pitch = this._viewer.getPitch();
        }
        return pov;
    }
    deleteLink(link) {
        const pano = this.getPano();
        if (typeof link === 'string') {
            link = pano.links.get(link);
        }
        pano.links.delete(link.id);
        this._viewer.removeHotSpot(link.id);
    }
    createLinkTo(pano, pov = this.getPOV(), targetPOV = { pitch: 0, yaw: 0 }) {
        if (!this._isLoaded)
            return console.info('Viewer not loaded');
        if (typeof pano !== 'object') {
            pano = this.getPano(pano);
        }
        if (!pano)
            throw new Error('parameter missing: pano');
        const link = {
            POV: pov,
            id: helpers_1.generateId(),
            targetPOV,
            to: pano
        };
        const currentPano = this.getCurrentPano();
        currentPano.links.add(link);
        this._addLink(link);
        const event = new CustomEvent('newLink', { detail: link });
        this._dom.dispatchEvent(event);
    }
    // ----------------------------------- PRIVATE ----------------------------------------------------------------
    _init() {
        this._processTour();
        this._initViewer();
        this._setListeners();
    }
    _initViewer() {
        const params = {
            autoLoad: false,
            // zoom level 120, 100 default, 50 most
            default: {
                firstScene: this._first.id,
                pitch: 0,
                sceneFadeDuration: 1000,
                yaw: 0
            },
            hfov: 120,
            scenes: this._pannellumPanos.table,
            showControls: true
        };
        if (this._preview) {
            params.preview = this._preview.url;
        }
        this._viewer = pannellum.viewer(this._dom, params);
    }
    _createClass(className) {
        return `${this._classPrefix}-${className}`;
    }
    _processPanos() {
        // check to refactor this part
        this._panos = new Hashtable_1.default(this._tour.photoSpheres.map((photoSphere) => {
            return {
                id: photoSphere.id,
                infoElements: new Hashtable_1.default(photoSphere.infoElements),
                name: photoSphere.name,
                POV: photoSphere.POV,
                url: photoSphere.link,
            };
        }));
        this._tour.photoSpheres.forEach((photoSphere) => {
            const pano = this._panos.get(photoSphere.id);
            pano.links = new Hashtable_1.default(photoSphere.links.map(this._transformToLink.bind(this)));
            pano.infos = new Hashtable_1.default(photoSphere.infoElements.map(this._transformToInfo.bind(this)));
        });
        this._pannellumPanos = new Hashtable_1.default(this._panos.array.map(this._transformToPannellumPano.bind(this)));
    }
    _processTour() {
        const image = this._tour.images && this._tour.images[0];
        if (image) {
            this._preview = { url: image.link, name: image.name, id: image.id };
        }
        this._name = this._tour.name;
        this._description = this._tour.description;
        this._processPanos();
        if (this._tour.firstPhotoSphereId) {
            this._first = this._panos.get(this._tour.firstPhotoSphereId);
            this._first.POV = this._tour.POV;
        }
        else {
            this._first = this._panos.get();
            this._first.POV = {
                pitch: 0,
                yaw: 0
            };
        }
    }
    _setListeners() {
        this._viewer.on('load', this._onLoadPano.bind(this));
        this._viewer.on('mousedown', this._onClick.bind(this));
        this._viewer.on('touchstart', this._onClick.bind(this));
        this._dom.addEventListener(InfoElement_1.default.EVENTS.TOGGLE_INFO_ELEMENT, this.forceToRender.bind(this));
        this._dom.addEventListener(InfoElement_1.default.EVENTS.UPDATE_INFO_ELEMENT, this._updateInfoListener.bind(this));
        this._dom.addEventListener(InfoElement_1.default.EVENTS.DELETE_INFO_ELEMENT, this._deleteInfoListener.bind(this));
    }
    _deleteInfoListener(ev) {
        const data = ev.detail;
        this.deleteInfoElement(data.id);
    }
    _updateInfoListener(ev) {
        const data = ev.detail;
        const info = this.getPano().infos.get(data.id);
        info.title = data.title;
        info.description = data.title;
    }
    _onClick(mouseEvent) {
        if (!this._isSelectingPOV) {
            return;
        }
        const event = (mouseEvent.targetTouches && mouseEvent.targetTouches[0]) || mouseEvent;
        const coords = this._viewer.mouseEventToCoords(event);
        const pov = {
            pitch: coords[0],
            yaw: coords[1]
        };
        this._isSelectingPOV = false;
        this._selectPOVDeferred.resolve(pov);
        this._selectPOVDeferred = null;
    }
    _onLoadPano(id) {
        this._isLoaded = true;
        this._setLinks();
        this._setInfos();
        // NOTE use CustomEvent to pass data
        const event = new Event('load');
        this._dom.dispatchEvent(event);
    }
    _setLinks() {
        const links = this.getCurrentPano().links;
        links.array.forEach((link) => {
            this._addLink(link);
        });
    }
    _setInfos() {
        const infos = this.getCurrentPano().infos;
        infos.array.forEach((info) => {
            this._addInfo(info);
        });
    }
    _addInfo(info) {
        this._viewer.addHotSpot(this._transformToPannellumOverlay(info));
    }
    _addLink(link) {
        this._viewer.addHotSpot(this._transformToPannellumLink(link));
    }
    _transformToLink(link) {
        const pano = this._panos.get(link.toPhotoSphereId);
        return {
            POV: link.POV,
            id: link.id,
            targetPOV: link.targetPOV,
            to: pano
        };
    }
    _transformToInfo(infoElement) {
        const { POV, id, name, description } = infoElement;
        return {
            title: name,
            description,
            POV,
            id,
            infoElement: (preact_1.h(InfoElement_1.default, { classPrefix: this._classPrefix, id: id, title: name, description: description }))
        };
    }
    _transformToPannellumOverlay(info) {
        return {
            id: info.id,
            pitch: info.POV.pitch,
            yaw: info.POV.yaw,
            type: 'info',
            cssClass: 'n',
            createTooltipFunc: (divParent) => preact_1.render(info.infoElement, divParent)
        };
    }
    _transformToPannellumLink(link) {
        return {
            id: link.id,
            pitch: link.POV.pitch,
            sceneId: link.to.id,
            targetPitch: link.targetPOV.pitch,
            targetYaw: link.targetPOV.yaw,
            text: link.to.name,
            type: 'scene',
            yaw: link.POV.yaw
        };
    }
    _transformToPannellumPano(pano) {
        const params = {
            id: pano.id,
            panorama: pano.url,
            title: pano.name,
            type: 'equirectangular'
        };
        if (pano.POV) {
            params.pitch = pano.POV.pitch;
            params.yaw = pano.POV.yaw;
        }
        // TODO if we initialize the tour with scenes we dont need to use _setLinks
        if (pano.links && pano.links.length) {
            // params.hotSpots = pano.links.array().map(this._transformToPannellumLink);
        }
        return params;
    }
}
TourRenderer.EVENTS = Object.assign({}, InfoElement_1.default.EVENTS, {
    CREATE_INFO_ELEMENT: 'CREATE_INFO_ELEMENT',
    CREATE_LINK: 'CREATE_LINK',
    DELETE_LINK: 'DELETE_LINK'
});
exports.default = TourRenderer;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Pannellum 7617f97, https://github.com/mpetroff/pannellum
/*
 * libpannellum - A WebGL and CSS 3D transform based Panorama Renderer
 * Copyright (c) 2012-2017 Matthew Petroff
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

window.libpannellum = (function(window, document, undefined) {

'use strict';

/**
 * Creates a new panorama renderer.
 * @constructor
 * @param {HTMLElement} container - The container element for the renderer.
 */
function Renderer(container) {
    var canvas = document.createElement('canvas');
    canvas.style.width = canvas.style.height = '100%';
    container.appendChild(canvas);

    var program, gl, vs, fs;
    var fallbackImgSize;
    var world;
    var vtmps;
    var pose;
    var image, imageType, dynamic;
    var texCoordBuffer, cubeVertBuf, cubeVertTexCoordBuf, cubeVertIndBuf;

    /**
     * Initialize renderer.
     * @memberof Renderer
     * @instance
     * @param {Image|Array|Object} image - Input image; format varies based on
     *      `imageType`. For `equirectangular`, this is an image; for
     *      `cubemap`, this is an array of images for the cube faces in the
     *      order [+z, +x, -z, -x, +y, -y]; for `multires`, this is a
     *      configuration object.
     * @param {string} imageType - The type of the image: `equirectangular`,
     *      `cubemap`, or `multires`.
     * @param {boolean} dynamic - Whether or not the image is dynamic (e.g. video).
     * @param {number} haov - Initial horizontal angle of view.
     * @param {number} vaov - Initial vertical angle of view.
     * @param {number} voffset - Initial vertical offset angle.
     * @param {function} callback - Load callback function.
     * @param {Object} [params] - Other configuration parameters (`horizonPitch`, `horizonRoll`, `backgroundColor`).
     */
    this.init = function(_image, _imageType, _dynamic, haov, vaov, voffset, callback, params) {
        // Default argument for image type
        if (typeof _imageType === undefined)
            _imageType = 'equirectangular';

        if (_imageType != 'equirectangular' && _imageType != 'cubemap' &&
            _imageType != 'multires') {
            console.log('Error: invalid image type specified!');
            throw {type: 'config error'};
        }

        imageType = _imageType;
        image = _image;
        dynamic = _dynamic;

        // Clear old data
        if (program) {
            if (vs) {
                gl.detachShader(program, vs);
                gl.deleteShader(vs);
            }
            if (fs) {
                gl.detachShader(program, fs);
                gl.deleteShader(fs);
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
            if (program.texture)
                gl.deleteTexture(program.texture);
            if (program.nodeCache)
                for (var i = 0; i < program.nodeCache.length; i++)
                    gl.deleteTexture(program.nodeCache[i].texture);
            gl.deleteProgram(program);
            program = undefined;
        }
        pose = undefined;

        var s;
        
        // This awful browser specific test exists because iOS 8/9 and IE 11
        // don't display non-power-of-two cubemap textures but also don't
        // throw an error (tested on an iPhone 5c / iOS 8.1.3 / iOS 9.2 /
        // iOS 10.3.1).
        // Therefore, the WebGL context is never created for these browsers for
        // NPOT cubemaps, and the CSS 3D transform fallback renderer is used
        // instead.
        if (!(imageType == 'cubemap' &&
            (image[0].width & (image[0].width - 1)) !== 0 &&
            (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/) ||
            navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/) ||
            navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/) ||
            navigator.userAgent.match(/Trident.*rv[ :]*11\./)))) {
            // Enable WebGL on canvas
            if (!gl)
                gl = canvas.getContext('experimental-webgl', {alpha: false, depth: false});
            if (gl && gl.getError() == 1286)
                handleWebGLError1286();
        }
        
        // If there is no WebGL, fall back to CSS 3D transform renderer.
        // While browser specific tests are usually frowned upon, the
        // fallback viewer only really works with WebKit/Blink and IE 10/11
        // (it doesn't work properly in Firefox).
        if (!gl && ((imageType == 'multires' && image.hasOwnProperty('fallbackPath')) ||
            imageType == 'cubemap') &&
            ('WebkitAppearance' in document.documentElement.style ||
            navigator.userAgent.match(/Trident.*rv[ :]*11\./) ||
            navigator.appVersion.indexOf('MSIE 10') !== -1)) {
            // Remove old world if it exists
            if (world) {
                container.removeChild(world);
            }
            
            // Initialize renderer
            world = document.createElement('div');
            world.className = 'pnlm-world';
            
            // Add images
            var path;
            if (image.basePath) {
                path = image.basePath + image.fallbackPath;
            } else {
                path = image.fallbackPath;
            }
            var sides = ['f', 'r', 'b', 'l', 'u', 'd'];
            var loaded = 0;
            var onLoad = function() {
                // Draw image on canvas
                var faceCanvas = document.createElement('canvas');
                faceCanvas.className = 'pnlm-face pnlm-' + sides[this.side] + 'face';
                world.appendChild(faceCanvas);
                var faceContext = faceCanvas.getContext('2d');
                faceCanvas.style.width = this.width + 4 + 'px';
                faceCanvas.style.height = this.height + 4 + 'px';
                faceCanvas.width = this.width + 4;
                faceCanvas.height = this.height + 4;
                faceContext.drawImage(this, 2, 2);
                var imgData = faceContext.getImageData(0, 0, faceCanvas.width, faceCanvas.height);
                var data = imgData.data;
                
                // Duplicate edge pixels
                var i;
                var j;
                for (i = 2; i < faceCanvas.width - 2; i++) {
                    for (j = 0; j < 4; j++) {
                        data[(i + faceCanvas.width) * 4 + j] = data[(i + faceCanvas.width * 2) * 4 + j];
                        data[(i + faceCanvas.width * (faceCanvas.height - 2)) * 4 + j] = data[(i + faceCanvas.width * (faceCanvas.height - 3)) * 4 + j];
                    }
                }
                for (i = 2; i < faceCanvas.height - 2; i++) {
                    for (j = 0; j < 4; j++) {
                        data[(i * faceCanvas.width + 1) * 4 + j] = data[(i * faceCanvas.width + 2) * 4 + j];
                        data[((i + 1) * faceCanvas.width - 2) * 4 + j] = data[((i + 1) * faceCanvas.width - 3) * 4 + j];
                    }
                }
                for (j = 0; j < 4; j++) {
                    data[(faceCanvas.width + 1) * 4 + j] = data[(faceCanvas.width * 2 + 2) * 4 + j];
                    data[(faceCanvas.width * 2 - 2) * 4 + j] = data[(faceCanvas.width * 3 - 3) * 4 + j];
                    data[(faceCanvas.width * (faceCanvas.height - 2) + 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 3) + 2) * 4 + j];
                    data[(faceCanvas.width * (faceCanvas.height - 1) - 2) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 2) - 3) * 4 + j];
                }
                for (i = 1; i < faceCanvas.width - 1; i++) {
                    for (j = 0; j < 4; j++) {
                        data[i * 4 + j] = data[(i + faceCanvas.width) * 4 + j];
                        data[(i + faceCanvas.width * (faceCanvas.height - 1)) * 4 + j] = data[(i + faceCanvas.width * (faceCanvas.height - 2)) * 4 + j];
                    }
                }
                for (i = 1; i < faceCanvas.height - 1; i++) {
                    for (j = 0; j < 4; j++) {
                        data[(i * faceCanvas.width) * 4 + j] = data[(i * faceCanvas.width + 1) * 4 + j];
                        data[((i + 1) * faceCanvas.width - 1) * 4 + j] = data[((i + 1) * faceCanvas.width - 2) * 4 + j];
                    }
                }
                for (j = 0; j < 4; j++) {
                    data[j] = data[(faceCanvas.width + 1) * 4 + j];
                    data[(faceCanvas.width - 1) * 4 + j] = data[(faceCanvas.width * 2 - 2) * 4 + j];
                    data[(faceCanvas.width * (faceCanvas.height - 1)) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 2) + 1) * 4 + j];
                    data[(faceCanvas.width * faceCanvas.height - 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 1) - 2) * 4 + j];
                }
                
                // Draw image width duplicated edge pixels on canvas
                faceContext.putImageData(imgData, 0, 0);
                
                loaded++;
                if (loaded == 6) {
                    fallbackImgSize = this.width;
                    container.appendChild(world);
                    callback();
                }
            };
            for (s = 0; s < 6; s++) {
                var faceImg = new Image();
                faceImg.crossOrigin = 'anonymous';
                faceImg.side = s;
                faceImg.onload = onLoad;
                if (imageType == 'multires') {
                    faceImg.src = encodeURI(path.replace('%s', sides[s]) + '.' + image.extension);
                } else {
                    faceImg.src = encodeURI(image[s].src);
                }
            }
            
            return;
        } else if (!gl) {
            console.log('Error: no WebGL support detected!');
            throw {type: 'no webgl'};
        }
        if (image.basePath) {
            image.fullpath = image.basePath + image.path;
        } else {
            image.fullpath = image.path;
        }
        image.invTileResolution = 1 / image.tileResolution;
        
        var vertices = createCube();
        vtmps = [];
        for (s = 0; s < 6; s++) {
            vtmps[s] = vertices.slice(s * 12, s * 12 + 12);
            vertices = createCube();
        }
        
        // Make sure image isn't too big
        var width, maxWidth;
        if (imageType == 'equirectangular') {
            width = Math.max(image.width, image.height);
            maxWidth = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            if (width > maxWidth) {
                console.log('Error: The image is too big; it\'s ' + width + 'px wide, but this device\'s maximum supported width is ' + maxWidth + 'px.');
                throw {type: 'webgl size error', width: width, maxWidth: maxWidth};
            }
        } else if (imageType == 'cubemap') {
            width = image[0].width;
            maxWidth = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
            if (width > maxWidth) {
                console.log('Error: The cube face image is too big; it\'s ' + width + 'px wide, but this device\'s maximum supported width is ' + maxWidth + 'px.');
                throw {type: 'webgl size error', width: width, maxWidth: maxWidth};
            }
        }

        // Store horizon pitch and roll if applicable
        if (params !== undefined && (params.horizonPitch !== undefined || params.horizonRoll !== undefined))
            pose = [params.horizonPitch == undefined ? 0 : params.horizonPitch,
                    params.horizonRoll == undefined ? 0 : params.horizonRoll];

        // Set 2d texture binding
        var glBindType = gl.TEXTURE_2D;

        // Create viewport for entire canvas
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

        // Create vertex shader
        vs = gl.createShader(gl.VERTEX_SHADER);
        var vertexSrc = v;
        if (imageType == 'multires') {
            vertexSrc = vMulti;
        }
        gl.shaderSource(vs, vertexSrc);
        gl.compileShader(vs);

        // Create fragment shader
        fs = gl.createShader(gl.FRAGMENT_SHADER);
        var fragmentSrc = fragEquirectangular;
        if (imageType == 'cubemap') {
            glBindType = gl.TEXTURE_CUBE_MAP;
            fragmentSrc = fragCube;
        } else if (imageType == 'multires') {
            fragmentSrc = fragMulti;
        }
        gl.shaderSource(fs, fragmentSrc);
        gl.compileShader(fs);

        // Link WebGL program
        program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        // Log errors
        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS))
            console.log(gl.getShaderInfoLog(vs));
        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS))
            console.log(gl.getShaderInfoLog(fs));
        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
            console.log(gl.getProgramInfoLog(program));

        // Use WebGL program
        gl.useProgram(program);

        program.drawInProgress = false;

        // Look up texture coordinates location
        program.texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
        gl.enableVertexAttribArray(program.texCoordLocation);

        if (imageType != 'multires') {
            // Provide texture coordinates for rectangle
            if (!texCoordBuffer)
                texCoordBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]), gl.STATIC_DRAW);
            gl.vertexAttribPointer(program.texCoordLocation, 2, gl.FLOAT, false, 0, 0);

            // Pass aspect ratio
            program.aspectRatio = gl.getUniformLocation(program, 'u_aspectRatio');
            gl.uniform1f(program.aspectRatio, canvas.clientWidth / canvas.clientHeight);

            // Locate psi, theta, focal length, horizontal extent, vertical extent, and vertical offset
            program.psi = gl.getUniformLocation(program, 'u_psi');
            program.theta = gl.getUniformLocation(program, 'u_theta');
            program.f = gl.getUniformLocation(program, 'u_f');
            program.h = gl.getUniformLocation(program, 'u_h');
            program.v = gl.getUniformLocation(program, 'u_v');
            program.vo = gl.getUniformLocation(program, 'u_vo');
            program.rot = gl.getUniformLocation(program, 'u_rot');

            // Pass horizontal extent, vertical extent, and vertical offset
            gl.uniform1f(program.h, haov / (Math.PI * 2.0));
            gl.uniform1f(program.v, vaov / Math.PI);
            gl.uniform1f(program.vo, voffset / Math.PI * 2);

            // Set background color
            if (imageType == 'equirectangular') {
                program.backgroundColor = gl.getUniformLocation(program, 'u_backgroundColor');
                var color = params.backgroundColor ? params.backgroundColor : [0, 0, 0];
                gl.uniform4fv(program.backgroundColor, color.concat([1]));
            }

            // Create texture
            program.texture = gl.createTexture();
            gl.bindTexture(glBindType, program.texture);

            // Upload images to texture depending on type
            if (imageType == 'cubemap') {
                // Load all six sides of the cube map
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[1]);
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[3]);
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[4]);
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[5]);
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[0]);
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[2]);
            } else {
                // Upload image to the texture
                gl.texImage2D(glBindType, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
            }

            // Set parameters for rendering any size
            gl.texParameteri(glBindType, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(glBindType, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(glBindType, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(glBindType, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        } else {
            // Look up vertex coordinates location
            program.vertPosLocation = gl.getAttribLocation(program, 'a_vertCoord');
            gl.enableVertexAttribArray(program.vertPosLocation);

            // Create buffers
            if (!cubeVertBuf)
                cubeVertBuf = gl.createBuffer();
            if (!cubeVertTexCoordBuf)
                cubeVertTexCoordBuf = gl.createBuffer();
            if (!cubeVertIndBuf)
                cubeVertIndBuf = gl.createBuffer();

            // Bind texture coordinate buffer and pass coordinates to WebGL
            gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertTexCoordBuf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0,0,1,0,1,1,0,1]), gl.STATIC_DRAW);

            // Bind square index buffer and pass indicies to WebGL
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertIndBuf);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2,0,2,3]), gl.STATIC_DRAW);

            // Find uniforms
            program.perspUniform = gl.getUniformLocation(program, 'u_perspMatrix');
            program.cubeUniform = gl.getUniformLocation(program, 'u_cubeMatrix');
            //program.colorUniform = gl.getUniformLocation(program, 'u_color');

            program.level = -1;

            program.currentNodes = [];
            program.nodeCache = [];
            program.nodeCacheTimestamp = 0;
        }

        // Check if there was an error
        var err = gl.getError();
        if (err !== 0) {
            console.log('Error: Something went wrong with WebGL!', err);
            throw {type: 'webgl error'};
        }

        callback();
     };

    /**
     * Destroy renderer.
     * @memberof Renderer
     * @instance
     */
    this.destroy = function() {
        if (container !== undefined) {
            if (canvas !== undefined && container.contains(canvas)) {
                container.removeChild(canvas);
            }
            if (world !== undefined && container.contains(world)) {
                container.removeChild(world);
            }
        }
        if (gl) {
            // The spec says this is only supposed to simulate losing the WebGL
            // context, but in practice it tends to actually free the memory.
            var extension = gl.getExtension('WEBGL_lose_context');
            if (extension)
                extension.loseContext();
        }
    };

    /**
     * Resize renderer (call after resizing container).
     * @memberof Renderer
     * @instance
     */
    this.resize = function() {
        var pixelRatio = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * pixelRatio;
        canvas.height = canvas.clientHeight * pixelRatio;
        if (gl) {
            if (gl.getError() == 1286)
                handleWebGLError1286();
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            if (imageType != 'multires') {
                gl.uniform1f(program.aspectRatio, canvas.clientWidth / canvas.clientHeight);
            }
        }
    };
    // Initialize canvas size
    this.resize();

    /**
     * Set renderer horizon pitch and roll.
     * @memberof Renderer
     * @instance
     */
    this.setPose = function(horizonPitch, horizonRoll) {
        pose = [horizonPitch, horizonRoll];
    };

    /**
     * Render new view of panorama.
     * @memberof Renderer
     * @instance
     * @param {number} pitch - Pitch to render at (in radians).
     * @param {number} yaw - Yaw to render at (in radians).
     * @param {number} hfov - Horizontal field of view to render with (in radians).
     * @param {Object} [params] - Extra configuration parameters. 
     * @param {number} [params.roll] - Camera roll (in radians).
     * @param {boolean} [params.returnImage] - Return rendered image?
     */
    this.render = function(pitch, yaw, hfov, params) {
        var focal, i, s, roll = 0;
        if (params === undefined)
            params = {};
        if (params.roll)
            roll = params.roll;

        // Apply pitch and roll transformation if applicable
        if (pose !== undefined) {
            var horizonPitch = pose[0],
                horizonRoll = pose[1];

            // Calculate new pitch and yaw
            var orig_pitch = pitch,
                orig_yaw = yaw,
                x = Math.cos(horizonRoll) * Math.sin(pitch) * Math.sin(horizonPitch) +
                    Math.cos(pitch) * (Math.cos(horizonPitch) * Math.cos(yaw) +
                    Math.sin(horizonRoll) * Math.sin(horizonPitch) * Math.sin(yaw)),
                y = -Math.sin(pitch) * Math.sin(horizonRoll) +
                    Math.cos(pitch) * Math.cos(horizonRoll) * Math.sin(yaw),
                z = Math.cos(horizonRoll) * Math.cos(horizonPitch) * Math.sin(pitch) +
                    Math.cos(pitch) * (-Math.cos(yaw) * Math.sin(horizonPitch) +
                    Math.cos(horizonPitch) * Math.sin(horizonRoll) * Math.sin(yaw));
            pitch = Math.asin(Math.max(Math.min(z, 1), -1));
            yaw = Math.atan2(y, x);

            // Calculate roll
            var v = [Math.cos(orig_pitch) * (Math.sin(horizonRoll) * Math.sin(horizonPitch) * Math.cos(orig_yaw) -
                    Math.cos(horizonPitch) * Math.sin(orig_yaw)),
                    Math.cos(orig_pitch) * Math.cos(horizonRoll) * Math.cos(orig_yaw),
                    Math.cos(orig_pitch) * (Math.cos(horizonPitch) * Math.sin(horizonRoll) * Math.cos(orig_yaw) +
                    Math.sin(orig_yaw) * Math.sin(horizonPitch))],
                w = [-Math.cos(pitch) * Math.sin(yaw), Math.cos(pitch) * Math.cos(yaw)];
            var roll_adj = Math.acos(Math.max(Math.min((v[0]*w[0] + v[1]*w[1]) /
                (Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]) *
                Math.sqrt(w[0]*w[0]+w[1]*w[1])), 1), -1));
            if (v[2] < 0)
                roll_adj = 2 * Math.PI - roll_adj;
            roll += roll_adj;
        }

        // If no WebGL
        if (!gl && (imageType == 'multires' || imageType == 'cubemap')) {
            // Determine face transforms
            s = fallbackImgSize / 2;
            
            var transforms = {
                f: 'translate3d(-' + (s + 2) + 'px, -' + (s + 2) + 'px, -' + s + 'px)',
                b: 'translate3d(' + (s + 2) + 'px, -' + (s + 2) + 'px, ' + s + 'px) rotateX(180deg) rotateZ(180deg)',
                u: 'translate3d(-' + (s + 2) + 'px, -' + s + 'px, ' + (s + 2) + 'px) rotateX(270deg)',
                d: 'translate3d(-' + (s + 2) + 'px, ' + s + 'px, -' + (s + 2) + 'px) rotateX(90deg)',
                l: 'translate3d(-' + s + 'px, -' + (s + 2) + 'px, ' + (s + 2) + 'px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)',
                r: 'translate3d(' + s + 'px, -' + (s + 2) + 'px, -' + (s + 2) + 'px) rotateY(270deg)'
            };
            focal = 1 / Math.tan(hfov / 2);
            var zoom = focal * canvas.clientWidth / 2 + 'px';
            var transform = 'perspective(' + zoom + ') translateZ(' + zoom + ') rotateX(' + pitch + 'rad) rotateY(' + yaw + 'rad) ';
            
            // Apply face transforms
            var faces = Object.keys(transforms);
            for (i = 0; i < 6; i++) {
                var face = world.querySelector('.pnlm-' + faces[i] + 'face').style;
                face.webkitTransform = transform + transforms[faces[i]];
                face.transform = transform + transforms[faces[i]];
            }
            return;
        }
        
        if (imageType != 'multires') {
            // Calculate focal length from vertical field of view
            var vfov = 2 * Math.atan(Math.tan(hfov * 0.5) / (canvas.clientWidth / canvas.clientHeight));
            focal = 1 / Math.tan(vfov * 0.5);

            // Pass psi, theta, roll, and focal length
            gl.uniform1f(program.psi, yaw);
            gl.uniform1f(program.theta, pitch);
            gl.uniform1f(program.rot, roll);
            gl.uniform1f(program.f, focal);
            
            if (dynamic === true) {
                // Update texture if dynamic
                if (imageType == 'equirectangular') {
                    gl.bindTexture(gl.TEXTURE_2D, program.texture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
                }
            }
            
            // Draw using current buffer
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        
        } else {
            // Create perspective matrix
            var perspMatrix = makePersp(hfov, canvas.clientWidth / canvas.clientHeight, 0.1, 100.0);
            
            // Find correct zoom level
            checkZoom(hfov);
            
            // Create rotation matrix
            var matrix = identityMatrix3();
            matrix = rotateMatrix(matrix, -roll, 'z');
            matrix = rotateMatrix(matrix, -pitch, 'x');
            matrix = rotateMatrix(matrix, yaw, 'y');
            matrix = makeMatrix4(matrix);
            
            // Set matrix uniforms
            gl.uniformMatrix4fv(program.perspUniform, false, new Float32Array(transposeMatrix4(perspMatrix)));
            gl.uniformMatrix4fv(program.cubeUniform, false, new Float32Array(transposeMatrix4(matrix)));
            
            // Find current nodes
            var rotPersp = rotatePersp(perspMatrix, matrix);
            program.nodeCache.sort(multiresNodeSort);
            if (program.nodeCache.length > 200 &&
                program.nodeCache.length > program.currentNodes.length + 50) {
                // Remove older nodes from cache
                var removed = program.nodeCache.splice(200, program.nodeCache.length - 200);
                for (var i = 0; i < removed.length; i++) {
                    // Explicitly delete textures
                    gl.deleteTexture(removed[i].texture);
                }
            }
            program.currentNodes = [];
            
            var sides = ['f', 'b', 'u', 'd', 'l', 'r'];
            for (s = 0; s < 6; s++) {
                var ntmp = new MultiresNode(vtmps[s], sides[s], 1, 0, 0, image.fullpath);
                testMultiresNode(rotPersp, ntmp, pitch, yaw, hfov);
            }
            program.currentNodes.sort(multiresNodeRenderSort);
            // Only process one tile per frame to improve responsiveness
            for (i = 0; i < program.currentNodes.length; i++) {
                if (!program.currentNodes[i].texture) {
                    setTimeout(processNextTile, 0, program.currentNodes[i]);
                    break;
                }
            }
            
            // Draw tiles
            multiresDraw();
        }
        
        if (params.returnImage !== undefined) {
            return canvas.toDataURL('image/png');
        }
    };
    
    /**
     * Check if images are loading.
     * @memberof Renderer
     * @instance
     * @returns {boolean} Whether or not images are loading.
     */
    this.isLoading = function() {
        if (gl && imageType == 'multires') {
            for ( var i = 0; i < program.currentNodes.length; i++ ) {
                if (!program.currentNodes[i].textureLoaded) {
                    return true;
                }
            }
        }
        return false;
    };
    
    /**
     * Retrieve renderer's canvas.
     * @memberof Renderer
     * @instance
     * @returns {HTMLElement} Renderer's canvas.
     */
    this.getCanvas = function() {
        return canvas;
    };
    
    /**
     * Sorting method for multires nodes.
     * @private
     * @param {MultiresNode} a - First node.
     * @param {MultiresNode} b - Second node.
     * @returns {number} Base tiles first, then higher timestamp first.
     */
    function multiresNodeSort(a, b) {
        // Base tiles are always first
        if (a.level == 1 && b.level != 1) {
            return -1;
        }
        if (b. level == 1 && a.level != 1) {
            return 1;
        }
        
        // Higher timestamp first
        return b.timestamp - a.timestamp;
    }
    
    /**
     * Sorting method for multires node rendering.
     * @private
     * @param {MultiresNode} a - First node.
     * @param {MultiresNode} b - Second node.
     * @returns {number} Lower zoom levels first, then closest to center first.
     */
    function multiresNodeRenderSort(a, b) {
        // Lower zoom levels first
        if (a.level != b.level) {
            return a.level - b.level;
        }
        
        // Lower distance from center first
        return a.diff - b.diff;
    }
    
    /**
     * Draws multires nodes.
     * @private
     */
    function multiresDraw() {
        if (!program.drawInProgress) {
            program.drawInProgress = true;
            for ( var i = 0; i < program.currentNodes.length; i++ ) {
                if (program.currentNodes[i].textureLoaded) {
                    //var color = program.currentNodes[i].color;
                    //gl.uniform4f(program.colorUniform, color[0], color[1], color[2], 1.0);
                    
                    // Bind vertex buffer and pass vertices to WebGL
                    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertBuf);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(program.currentNodes[i].vertices), gl.STATIC_DRAW);
                    gl.vertexAttribPointer(program.vertPosLocation, 3, gl.FLOAT, false, 0, 0);
                    
                    // Prep for texture
                    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertTexCoordBuf);
                    gl.vertexAttribPointer(program.texCoordLocation, 2, gl.FLOAT, false, 0, 0);
                    
                    // Bind texture and draw tile
                    gl.bindTexture(gl.TEXTURE_2D, program.currentNodes[i].texture); // Bind program.currentNodes[i].texture to TEXTURE0
                    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
                }
            }
            program.drawInProgress = false;
        }
    }

    /**
     * Creates new multires node.
     * @constructor
     * @private
     * @param {number[]} vertices - Node's verticies.
     * @param {string} side - Node's cube face.
     * @param {number} level - Node's zoom level.
     * @param {number} x - Node's x position.
     * @param {number} y - Node's y position.
     * @param {string} path - Node's path.
     */
    function MultiresNode(vertices, side, level, x, y, path) {
        this.vertices = vertices;
        this.side = side;
        this.level = level;
        this.x = x;
        this.y = y;
        this.path = path.replace('%s',side).replace('%l',level).replace('%x',x).replace('%y',y);
    }

    /**
     * Test if multires node is visible. If it is, add it to current nodes,
     * load its texture, and load appropriate child nodes.
     * @private
     * @param {number[]} rotPersp - Rotated perspective matrix.
     * @param {MultiresNode} node - Multires node to check.
     * @param {number} pitch - Pitch to check at.
     * @param {number} yaw - Yaw to check at.
     * @param {number} hfov - Horizontal field of view to check at.
     */
    function testMultiresNode(rotPersp, node, pitch, yaw, hfov) {
        if (checkSquareInView(rotPersp, node.vertices)) {
            // Calculate central angle between center of view and center of tile
            var v = node.vertices;
            var x = v[0] + v[3] + v[6] + v[ 9];
            var y = v[1] + v[4] + v[7] + v[10];
            var z = v[2] + v[5] + v[8] + v[11];
            var r = Math.sqrt(x*x + y*y + z*z);
            var theta = Math.asin(z / r);
            var phi = Math.atan2(y, x);
            var ydiff = phi - yaw;
            ydiff += (ydiff > Math.PI) ? -2 * Math.PI : (ydiff < -Math.PI) ? 2 * Math.PI : 0;
            ydiff = Math.abs(ydiff);
            node.diff = Math.acos(Math.sin(pitch) * Math.sin(theta) + Math.cos(pitch) * Math.cos(theta) * Math.cos(ydiff));
            
            // Add node to current nodes and load texture if needed
            var inCurrent = false;
            for (var k = 0; k < program.nodeCache.length; k++) {
                if (program.nodeCache[k].path == node.path) {
                    inCurrent = true;
                    program.nodeCache[k].timestamp = program.nodeCacheTimestamp++;
                    program.nodeCache[k].diff = node.diff;
                    program.currentNodes.push(program.nodeCache[k]);
                    break;
                }
            }
            if (!inCurrent) {
                //node.color = [Math.random(), Math.random(), Math.random()];
                node.timestamp = program.nodeCacheTimestamp++;
                program.currentNodes.push(node);
                program.nodeCache.push(node);
            }
            
            // TODO: Test error
            // Create child nodes
            if (node.level < program.level) {
                var cubeSize = image.cubeResolution * Math.pow(2, node.level - image.maxLevel);
                var numTiles = Math.ceil(cubeSize * image.invTileResolution) - 1;
                var doubleTileSize = cubeSize % image.tileResolution * 2;
                var lastTileSize = (cubeSize * 2) % image.tileResolution;
                if (lastTileSize === 0) {
                    lastTileSize = image.tileResolution;
                }
                if (doubleTileSize === 0) {
                    doubleTileSize = image.tileResolution * 2;
                }
                var f = 0.5;
                if (node.x == numTiles || node.y == numTiles) {
                    f = 1.0 - image.tileResolution / (image.tileResolution + lastTileSize);
                }
                var i = 1.0 - f;
                var children = [];
                var vtmp, ntmp;
                var f1 = f, f2 = f, f3 = f, i1 = i, i2 = i, i3 = i;
                // Handle non-symmetric tiles
                if (lastTileSize < image.tileResolution) {
                    if (node.x == numTiles && node.y != numTiles) {
                        f2 = 0.5;
                        i2 = 0.5;
                        if (node.side == 'd' || node.side == 'u') {
                            f3 = 0.5;
                            i3 = 0.5;
                        }
                    } else if (node.x != numTiles && node.y == numTiles) {
                        f1 = 0.5;
                        i1 = 0.5;
                        if (node.side == 'l' || node.side == 'r') {
                            f3 = 0.5;
                            i3 = 0.5;
                        }
                    }
                }
                // Handle small tiles that have fewer than four children
                if (doubleTileSize <= image.tileResolution) {
                    if (node.x == numTiles) {
                        f1 = 0;
                        i1 = 1;
                        if (node.side == 'l' || node.side == 'r') {
                            f3 = 0;
                            i3 = 1;
                        }
                    }
                    if (node.y == numTiles) {
                        f2 = 0;
                        i2 = 1;
                        if (node.side == 'd' || node.side == 'u') {
                            f3 = 0;
                            i3 = 1;
                        }
                    }
                }
                
                vtmp = [           v[0],             v[1],             v[2],
                        v[0]*f1+v[3]*i1,    v[1]*f+v[4]*i,  v[2]*f3+v[5]*i3,
                        v[0]*f1+v[6]*i1,  v[1]*f2+v[7]*i2,  v[2]*f3+v[8]*i3,
                          v[0]*f+v[9]*i, v[1]*f2+v[10]*i2, v[2]*f3+v[11]*i3
                ];
                ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x*2, node.y*2, image.fullpath);
                children.push(ntmp);
                if (!(node.x == numTiles && doubleTileSize <= image.tileResolution)) {
                    vtmp = [v[0]*f1+v[3]*i1,    v[1]*f+v[4]*i,  v[2]*f3+v[5]*i3,
                                       v[3],             v[4],             v[5],
                              v[3]*f+v[6]*i,  v[4]*f2+v[7]*i2,  v[5]*f3+v[8]*i3,
                            v[0]*f1+v[6]*i1,  v[1]*f2+v[7]*i2,  v[2]*f3+v[8]*i3
                    ];
                    ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x*2+1, node.y*2, image.fullpath);
                    children.push(ntmp);
                }
                if (!(node.x == numTiles && doubleTileSize <= image.tileResolution) &&
                    !(node.y == numTiles && doubleTileSize <= image.tileResolution)) {
                    vtmp = [v[0]*f1+v[6]*i1,  v[1]*f2+v[7]*i2,  v[2]*f3+v[8]*i3,
                              v[3]*f+v[6]*i,  v[4]*f2+v[7]*i2,  v[5]*f3+v[8]*i3,
                                       v[6],             v[7],             v[8],
                            v[9]*f1+v[6]*i1,   v[10]*f+v[7]*i, v[11]*f3+v[8]*i3
                    ];
                    ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x*2+1, node.y*2+1, image.fullpath);
                    children.push(ntmp);
                }
                if (!(node.y == numTiles && doubleTileSize <= image.tileResolution)) {
                    vtmp = [  v[0]*f+v[9]*i, v[1]*f2+v[10]*i2, v[2]*f3+v[11]*i3,
                            v[0]*f1+v[6]*i1,  v[1]*f2+v[7]*i2,  v[2]*f3+v[8]*i3,
                            v[9]*f1+v[6]*i1,   v[10]*f+v[7]*i, v[11]*f3+v[8]*i3,
                                       v[9],            v[10],            v[11]
                    ];
                    ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x*2, node.y*2+1, image.fullpath);
                    children.push(ntmp);
                }
                for (var j = 0; j < children.length; j++) {
                    testMultiresNode(rotPersp, children[j], pitch, yaw, hfov);
                }
            }
        }
    }
    
    /**
     * Creates cube vertex array.
     * @private
     * @returns {number[]} Cube vertex array.
     */
    function createCube() {
        return [-1,  1, -1,  1,  1, -1,  1, -1, -1, -1, -1, -1, // Front face
                 1,  1,  1, -1,  1,  1, -1, -1,  1,  1, -1,  1, // Back face
                -1,  1,  1,  1,  1,  1,  1,  1, -1, -1,  1, -1, // Up face
                -1, -1, -1,  1, -1, -1,  1, -1,  1, -1, -1,  1, // Down face
                -1,  1,  1, -1,  1, -1, -1, -1, -1, -1, -1,  1, // Left face
                 1,  1, -1,  1,  1,  1,  1, -1,  1,  1, -1, -1  // Right face
        ];
    }
    
    /**
     * Creates 3x3 identity matrix.
     * @private
     * @returns {number[]} Identity matrix.
     */
    function identityMatrix3() {
        return [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
    }
    
    /**
     * Rotates a 3x3 matrix.
     * @private
     * @param {number[]} m - Matrix to rotate.
     * @param {number[]} angle - Angle to rotate by in radians.
     * @param {string} axis - Axis to rotate about (`x`, `y`, or `z`).
     * @returns {number[]} Rotated matrix.
     */
    function rotateMatrix(m, angle, axis) {
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        if (axis == 'x') {
            return [
                m[0], c*m[1] + s*m[2], c*m[2] - s*m[1],
                m[3], c*m[4] + s*m[5], c*m[5] - s*m[4],
                m[6], c*m[7] + s*m[8], c*m[8] - s*m[7]
            ];
        }
        if (axis == 'y') {
            return [
                c*m[0] - s*m[2], m[1], c*m[2] + s*m[0],
                c*m[3] - s*m[5], m[4], c*m[5] + s*m[3],
                c*m[6] - s*m[8], m[7], c*m[8] + s*m[6]
            ];
        }
        if (axis == 'z') {
            return [
                c*m[0] + s*m[1], c*m[1] - s*m[0], m[2],
                c*m[3] + s*m[4], c*m[4] - s*m[3], m[5],
                c*m[6] + s*m[7], c*m[7] - s*m[6], m[8]
            ];
        }
    }
    
    /**
     * Turns a 3x3 matrix into a 4x4 matrix.
     * @private
     * @param {number[]} m - Input matrix.
     * @returns {number[]} Expanded matrix.
     */
    function makeMatrix4(m) {
        return [
            m[0], m[1], m[2],    0,
            m[3], m[4], m[5],    0,
            m[6], m[7], m[8],    0,
               0,    0,    0,    1
        ];
    }
    
    /**
     * Transposes a 4x4 matrix.
     * @private
     * @param {number[]} m - Input matrix.
     * @returns {number[]} Transposed matrix.
     */
    function transposeMatrix4(m) {
        return [
            m[ 0], m[ 4], m[ 8], m[12],
            m[ 1], m[ 5], m[ 9], m[13],
            m[ 2], m[ 6], m[10], m[14],
            m[ 3], m[ 7], m[11], m[15]
        ];
    }
    
    /**
     * Creates a perspective matrix.
     * @private
     * @param {number} hfov - Desired horizontal field of view.
     * @param {number} aspect - Desired aspect ratio.
     * @param {number} znear - Near distance.
     * @param {number} zfar - Far distance.
     * @returns {number[]} Generated perspective matrix.
     */
    function makePersp(hfov, aspect, znear, zfar) {
        var fovy = 2 * Math.atan(Math.tan(hfov/2) * canvas.clientHeight / canvas.clientWidth);
        var f = 1 / Math.tan(fovy/2);
        return [
            f/aspect,   0,  0,  0,
                   0,   f,  0,  0,
                   0,   0,  (zfar+znear)/(znear-zfar), (2*zfar*znear)/(znear-zfar),
                   0,   0, -1,  0
        ];
    }
    
    /**
     * Processes a loaded texture image into a WebGL texture.
     * @private
     * @param {Image} img - Input image.
     * @param {WebGLTexture} tex - Texture to bind image to.
     */
    function processLoadedTexture(img, tex) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }

    // Based on http://blog.tojicode.com/2012/03/javascript-memory-optimization-and.html
    var loadTexture = (function() {
        var cacheTop = 4;   // Maximum number of concurrents loads
        var textureImageCache = {};
        var pendingTextureRequests = [];

        function TextureImageLoader() {
            var self = this;
            this.texture = this.callback = null;
            this.image = new Image();
            this.image.crossOrigin = 'anonymous';
            this.image.addEventListener('load', function() {
                processLoadedTexture(self.image, self.texture);
                self.callback(self.texture);
                releaseTextureImageLoader(self);
            });
        };

        TextureImageLoader.prototype.loadTexture = function(src, texture, callback) {
            this.texture = texture;
            this.callback = callback;
            this.image.src = src;
        };

        function PendingTextureRequest(src, texture, callback) {
            this.src = src;
            this.texture = texture;
            this.callback = callback;
        };

        function releaseTextureImageLoader(til) {
            if (pendingTextureRequests.length) {
                var req = pendingTextureRequests.shift();
                til.loadTexture(req.src, req.texture, req.callback);
            } else
                textureImageCache[cacheTop++] = til;
        }

        for (var i = 0; i < cacheTop; i++)
            textureImageCache[i] = new TextureImageLoader();

        return function(src, callback) {
            var texture = gl.createTexture();
            if (cacheTop)
                textureImageCache[--cacheTop].loadTexture(src, texture, callback);
            else
                pendingTextureRequests.push(new PendingTextureRequest(src, texture, callback));
            return texture;
        };
    })();

    /**
     * Loads image and creates texture for a multires node / tile.
     * @private
     * @param {MultiresNode} node - Input node.
     */
    function processNextTile(node) {
        if (!node.textureLoad) {
            node.textureLoad = true;
            loadTexture(encodeURI(node.path + '.' + image.extension), function(texture) {
                node.texture = texture;
                node.textureLoaded = true;
            });
        }
    }
    
    /**
     * Finds and applies optimal multires zoom level.
     * @private
     * @param {number} hfov - Horizontal field of view to check at.
     */
    function checkZoom(hfov) {
        // Find optimal level
        var newLevel = 1;
        while ( newLevel < image.maxLevel &&
            canvas.width > image.tileResolution *
            Math.pow(2, newLevel - 1) * Math.tan(hfov / 2) * 0.707 ) {
            newLevel++;
        }
        
        // Apply change
        program.level = newLevel;
    }
    
    /**
     * Rotates perspective matrix.
     * @private
     * @param {number[]} p - Perspective matrix.
     * @param {number[]} r - Rotation matrix.
     * @returns {number[]} Rotated matrix.
     */
    function rotatePersp(p, r) {
        return [
            p[ 0]*r[0], p[ 0]*r[1], p[ 0]*r[ 2],     0,
            p[ 5]*r[4], p[ 5]*r[5], p[ 5]*r[ 6],     0,
            p[10]*r[8], p[10]*r[9], p[10]*r[10], p[11],
                 -r[8],      -r[9],      -r[10],     0
        ];
    }
    
    /**
     * Applies rotated perspective matrix to a 3-vector
     * (last element is inverted).
     * @private
     * @param {number[]} m - Rotated perspective matrix.
     * @param {number[]} v - Input 3-vector.
     * @returns {number[]} Resulting 4-vector.
     */
    function applyRotPerspToVec(m, v) {
        return [
                    m[ 0]*v[0] + m[ 1]*v[1] + m[ 2]*v[2],
                    m[ 4]*v[0] + m[ 5]*v[1] + m[ 6]*v[2],
            m[11] + m[ 8]*v[0] + m[ 9]*v[1] + m[10]*v[2],
                 1/(m[12]*v[0] + m[13]*v[1] + m[14]*v[2])
        ];
    }
    
    /**
     * Checks if a vertex is visible.
     * @private
     * @param {number[]} m - Rotated perspective matrix.
     * @param {number[]} v - Input vertex.
     * @returns {number} 1 or -1 if the vertex is or is not visible,
     *      respectively.
     */
    function checkInView(m, v) {
        var vpp = applyRotPerspToVec(m, v);
        var winX = vpp[0]*vpp[3];
        var winY = vpp[1]*vpp[3];
        var winZ = vpp[2]*vpp[3];
        var ret = [0, 0, 0];
        
        if ( winX < -1 )
            ret[0] = -1;
        if ( winX > 1 )
            ret[0] = 1;
        if ( winY < -1 )
            ret[1] = -1;
        if ( winY > 1 )
            ret[1] = 1;
        if ( winZ < -1 || winZ > 1 )
            ret[2] = 1;
        return ret;
    }
    
    /**
     * Checks if a square (tile) is visible.
     * @private
     * @param {number[]} m - Rotated perspective matrix.
     * @param {number[]} v - Square's vertex array.
     * @returns {boolean} Whether or not the square is visible.
     */
    function checkSquareInView(m, v) {
        var check1 = checkInView(m, v.slice(0, 3));
        var check2 = checkInView(m, v.slice(3, 6));
        var check3 = checkInView(m, v.slice(6, 9));
        var check4 = checkInView(m, v.slice(9, 12));
        var testX = check1[0] + check2[0] + check3[0] + check4[0];
        if ( testX == -4 || testX == 4 )
            return false;
        var testY = check1[1] + check2[1] + check3[1] + check4[1];
        if ( testY == -4 || testY == 4 )
            return false;
        var testZ = check1[2] + check2[2] + check3[2] + check4[2];
        return testZ != 4;
        

    }

    /**
     * On iOS (iPhone 5c, iOS 10.3), this WebGL error occurs when the canvas is
     * too big. Unfortuately, there's no way to test for this beforehand, so we
     * reduce the canvas size if this error is thrown.
     * @private
     */
    function handleWebGLError1286() {
        console.log('Reducing canvas size due to error 1286!');
        canvas.width = Math.round(canvas.width / 2);
        canvas.height = Math.round(canvas.height / 2);
    }
}

// Vertex shader for equirectangular and cube
var v = [
'attribute vec2 a_texCoord;',
'varying vec2 v_texCoord;',

'void main() {',
    // Set position
    'gl_Position = vec4(a_texCoord, 0.0, 1.0);',
    
    // Pass the coordinates to the fragment shader
    'v_texCoord = a_texCoord;',
'}'
].join('');

// Vertex shader for multires
var vMulti = [
'attribute vec3 a_vertCoord;',
'attribute vec2 a_texCoord;',

'uniform mat4 u_cubeMatrix;',
'uniform mat4 u_perspMatrix;',

'varying mediump vec2 v_texCoord;',

'void main(void) {',
    // Set position
    'gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);',
    
    // Pass the coordinates to the fragment shader
    'v_texCoord = a_texCoord;',
'}'
].join('');

// Fragment shader
var fragEquiCubeBase = [
'precision mediump float;',

'uniform float u_aspectRatio;',
'uniform float u_psi;',
'uniform float u_theta;',
'uniform float u_f;',
'uniform float u_h;',
'uniform float u_v;',
'uniform float u_vo;',
'uniform float u_rot;',

'const float PI = 3.14159265358979323846264;',

// Texture
'uniform sampler2D u_image;',
'uniform samplerCube u_imageCube;',

// Coordinates passed in from vertex shader
'varying vec2 v_texCoord;',

// Background color (display for partial panoramas)
'uniform vec4 u_backgroundColor;',

'void main() {',
    // Map canvas/camera to sphere
    'float x = v_texCoord.x * u_aspectRatio;',
    'float y = v_texCoord.y;',
    'float sinrot = sin(u_rot);',
    'float cosrot = cos(u_rot);',
    'float rot_x = x * cosrot - y * sinrot;',
    'float rot_y = x * sinrot + y * cosrot;',
    'float sintheta = sin(u_theta);',
    'float costheta = cos(u_theta);',
    'float a = u_f * costheta - rot_y * sintheta;',
    'float root = sqrt(rot_x * rot_x + a * a);',
    'float lambda = atan(rot_x / root, a / root) + u_psi;',
    'float phi = atan((rot_y * costheta + u_f * sintheta) / root);',
].join('\n');

// Fragment shader
var fragCube = fragEquiCubeBase + [
    // Look up color from texture
    'float cosphi = cos(phi);',
    'gl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));',
'}'
].join('\n');

// Fragment shader
var fragEquirectangular = fragEquiCubeBase + [
    // Wrap image
    'lambda = mod(lambda + PI, PI * 2.0) - PI;',

    // Map texture to sphere
    'vec2 coord = vec2(lambda / PI, phi / (PI / 2.0));',

    // Look up color from texture
    // Map from [-1,1] to [0,1] and flip y-axis
    'if(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)',
        'gl_FragColor = u_backgroundColor;',
    'else',
        'gl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));',
'}'
].join('\n');

// Fragment shader
var fragMulti = [
'varying mediump vec2 v_texCoord;',
'uniform sampler2D u_sampler;',
//'uniform mediump vec4 u_color;',

'void main(void) {',
    // Look up color from texture
    'gl_FragColor = texture2D(u_sampler, v_texCoord);',
//    'gl_FragColor = u_color;',
'}'
].join('');

return {
    renderer: function(container, image, imagetype, dynamic) {
        return new Renderer(container, image, imagetype, dynamic);
    }
};

})(window, document);
/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

if ( !window.requestAnimationFrame ) {

    window.requestAnimationFrame = ( function() {

        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

            window.setTimeout( callback, 1000 / 60 );

        };

    } )();

}
/*
 * Pannellum - An HTML5 based Panorama Viewer
 * Copyright (c) 2011-2017 Matthew Petroff
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

window.pannellum = (function(window, document, undefined) {

'use strict';

/**
 * Creates a new panorama viewer.
 * @constructor
 * @param {HTMLElement|string} container - The container (div) element for the
 *      viewer, or its ID.
 * @param {Object} initialConfig - Inital configuration for viewer.
 */
function Viewer(container, initialConfig) {

var _this = this;

// Declare variables
var config,
    renderer,
    preview,
    isUserInteracting = false,
    latestInteraction = Date.now(),
    onPointerDownPointerX = 0,
    onPointerDownPointerY = 0,
    onPointerDownPointerDist = -1,
    onPointerDownYaw = 0,
    onPointerDownPitch = 0,
    keysDown = new Array(10),
    fullscreenActive = false,
    loaded = false,
    error = false,
    isTimedOut = false,
    listenersAdded = false,
    panoImage,
    prevTime,
    speed = {'yaw': 0, 'pitch': 0, 'hfov': 0},
    animating = false,
    orientation = false,
    orientationYawOffset = 0,
    autoRotateStart,
    autoRotateSpeed = 0,
    origHfov,
    origPitch,
    animatedMove = {},
    externalEventListeners = {},
    specifiedPhotoSphereExcludes = [],
    update = false, // Should we update when still to render dynamic content
    hotspotsCreated = false;

var defaultConfig = {
    hfov: 100,
    minHfov: 50,
    maxHfov: 120,
    pitch: 0,
    minPitch: undefined,
    maxPitch: undefined,
    yaw: 0,
    minYaw: -180,
    maxYaw: 180,
    roll: 0,
    haov: 360,
    vaov: 180,
    vOffset: 0,
    autoRotate: false,
    autoRotateInactivityDelay: -1,
    autoRotateStopDelay: undefined,
    type: 'equirectangular',
    northOffset: 0,
    showFullscreenCtrl: true,
    dynamic: false,
    doubleClickZoom: true,
    keyboardZoom: true,
    mouseZoom: true,
    showZoomCtrl: true,
    autoLoad: false,
    showControls: true,
    orientationOnByDefault: false,
    hotSpotDebug: false,
    backgroundColor: [0, 0, 0],
    animationTimingFunction: timingFunction,
    draggable: true,
};

// Translatable / configurable strings
// Some strings contain '%s', which is a placeholder for inserted values
// When setting strings in external configuration, `\n` should be used instead of `<br>` to insert line breaks
defaultConfig.strings = {
    // Labels
    loadButtonLabel: 'Click to<br>Load<br>Panorama',
    loadingLabel: 'Loading...',
    bylineLabel: 'by %s',    // One substitution: author

    // Errors
    noPanoramaError: 'No panorama image was specified.',
    fileAccessError: 'The file %s could not be accessed.',  // One substitution: file URL
    malformedURLError: 'There is something wrong with the panorama URL.',
    iOS8WebGLError: "Due to iOS 8's broken WebGL implementation, only " +
                    "progressive encoded JPEGs work for your device (this " +
                    "panorama uses standard encoding).",
    genericWebGLError: 'Your browser does not have the necessary WebGL support to display this panorama.',
    textureSizeError: 'This panorama is too big for your device! It\'s ' +
                '%spx wide, but your device only supports images up to ' +
                '%spx wide. Try another device.' +
                ' (If you\'re the author, try scaling down the image.)',    // Two substitutions: image width, max image width
    unknownError: 'Unknown error. Check developer console.',
}

var usedKeyNumbers = [16, 17, 27, 37, 38, 39, 40, 61, 65, 68, 83, 87, 107, 109, 173, 187, 189];

// Initialize container
container = typeof container === 'string' ? document.getElementById(container) : container;
container.classList.add('pnlm-container');
container.tabIndex = 0;

// Create container for ui
var uiContainer = document.createElement('div');
uiContainer.className = 'pnlm-ui';
container.appendChild(uiContainer);

// Create container for renderer
var renderContainer = document.createElement('div');
renderContainer.className = 'pnlm-render-container';
container.appendChild(renderContainer);
var dragFix = document.createElement('div');
dragFix.className = 'pnlm-dragfix';
uiContainer.appendChild(dragFix);

// Display about information on right click
var aboutMsg = document.createElement('span');
aboutMsg.className = 'pnlm-about-msg';
aboutMsg.innerHTML = '<a href="https://pannellum.org/" target="_blank">Pannellum</a> 7617f97';
uiContainer.appendChild(aboutMsg);
dragFix.addEventListener('contextmenu', aboutMessage);

// Create info display
var infoDisplay = {};

// Hot spot debug indicator
var hotSpotDebugIndicator = document.createElement('div');
hotSpotDebugIndicator.className = 'pnlm-sprite pnlm-hot-spot-debug-indicator';
uiContainer.appendChild(hotSpotDebugIndicator);

// Panorama info
infoDisplay.container = document.createElement('div');
infoDisplay.container.className = 'pnlm-panorama-info';
infoDisplay.title = document.createElement('div');
infoDisplay.title.className = 'pnlm-title-box';
infoDisplay.container.appendChild(infoDisplay.title);
infoDisplay.author = document.createElement('div');
infoDisplay.author.className = 'pnlm-author-box';
infoDisplay.container.appendChild(infoDisplay.author);
uiContainer.appendChild(infoDisplay.container);

// Load box
infoDisplay.load = {};
infoDisplay.load.box = document.createElement('div');
infoDisplay.load.box.className = 'pnlm-load-box';
infoDisplay.load.box.innerHTML = '<p class="pnlm-loading-title"></p>';
infoDisplay.load.lbox = document.createElement('div');
infoDisplay.load.lbox.className = 'pnlm-lbox';
infoDisplay.load.lbox.innerHTML = '<div class="pnlm-loading"></div>';
infoDisplay.load.box.appendChild(infoDisplay.load.lbox);
infoDisplay.load.lbar = document.createElement('div');
infoDisplay.load.lbar.className = 'pnlm-lbar';
infoDisplay.load.lbarFill = document.createElement('div');
infoDisplay.load.lbarFill.className = 'pnlm-lbar-fill';
infoDisplay.load.lbar.appendChild(infoDisplay.load.lbarFill);
infoDisplay.load.box.appendChild(infoDisplay.load.lbar);
infoDisplay.load.msg = document.createElement('p');
infoDisplay.load.msg.className = 'pnlm-lmsg';
infoDisplay.load.box.appendChild(infoDisplay.load.msg);
uiContainer.appendChild(infoDisplay.load.box);

// Error message
infoDisplay.errorMsg = document.createElement('div');
infoDisplay.errorMsg.className = 'pnlm-error-msg pnlm-info-box';
uiContainer.appendChild(infoDisplay.errorMsg);

// Create controls
var controls = {};
controls.container = document.createElement('div');
controls.container.className = 'pnlm-controls-container';
uiContainer.appendChild(controls.container);

// Load button
controls.load = document.createElement('div');
controls.load.className = 'pnlm-load-button';
controls.load.addEventListener('click', function() {
    processOptions();
    load();
});
uiContainer.appendChild(controls.load);

// Zoom controls
controls.zoom = document.createElement('div');
controls.zoom.className = 'pnlm-zoom-controls pnlm-controls';
controls.zoomIn = document.createElement('div');
controls.zoomIn.className = 'pnlm-zoom-in pnlm-sprite pnlm-control';
controls.zoomIn.addEventListener('click', zoomIn);
controls.zoom.appendChild(controls.zoomIn);
controls.zoomOut = document.createElement('div');
controls.zoomOut.className = 'pnlm-zoom-out pnlm-sprite pnlm-control';
controls.zoomOut.addEventListener('click', zoomOut);
controls.zoom.appendChild(controls.zoomOut);
controls.container.appendChild(controls.zoom);

// Fullscreen toggle
controls.fullscreen = document.createElement('div');
controls.fullscreen.addEventListener('click', toggleFullscreen);
controls.fullscreen.className = 'pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control';
if (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled)
    controls.container.appendChild(controls.fullscreen);

// Device orientation toggle
controls.orientation = document.createElement('div');
controls.orientation.addEventListener('click', function(e) {
    if (orientation)
        stopOrientation();
    else
        startOrientation();
});
controls.orientation.addEventListener('mousedown', function(e) {e.stopPropagation();});
controls.orientation.addEventListener('touchstart', function(e) {e.stopPropagation();});
controls.orientation.addEventListener('pointerdown', function(e) {e.stopPropagation();});
controls.orientation.className = 'pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control';
var orientationSupport, startOrientationIfSupported = false;
function deviceOrientationTest(e) {
    window.removeEventListener('deviceorientation', deviceOrientationTest);
    if (e && e.alpha !== null && e.beta !== null && e.gamma !== null) {
        controls.container.appendChild(controls.orientation);
        orientationSupport = true;
        if (startOrientationIfSupported)
            startOrientation();
    } else {
        orientationSupport = false;
    }
}
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationTest);
} else {
    orientationSupport = false;
}

// Compass
var compass = document.createElement('div');
compass.className = 'pnlm-compass pnlm-controls pnlm-control';
uiContainer.appendChild(compass);

// Load and process configuration
if (initialConfig.firstScene) {
    // Activate first scene if specified in URL
    mergeConfig(initialConfig.firstScene);
} else if (initialConfig.default && initialConfig.default.firstScene) {
    // Activate first scene if specified in file
    mergeConfig(initialConfig.default.firstScene);
} else {
    mergeConfig(null);
}
processOptions(true);

/**
 * Initializes viewer.
 * @private
 */
function init() {
    // Display an error for IE 9 as it doesn't work but also doesn't otherwise
    // show an error (older versions don't work at all)
    // Based on: http://stackoverflow.com/a/10965203
    var div = document.createElement("div");
    div.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->";
    if (div.getElementsByTagName("i").length == 1) {
        anError();
        return;
    }

    origHfov = config.hfov;
    origPitch = config.pitch;

    var i, p;

    if (config.type == 'cubemap') {
        panoImage = [];
        for (i = 0; i < 6; i++) {
            panoImage.push(new Image());
            panoImage[i].crossOrigin = 'anonymous';
        }
        infoDisplay.load.lbox.style.display = 'block';
        infoDisplay.load.lbar.style.display = 'none';
    } else if (config.type == 'multires') {
        var c = JSON.parse(JSON.stringify(config.multiRes));    // Deep copy
        // Avoid "undefined" in path, check (optional) multiRes.basePath, too
        // Use only multiRes.basePath if it's an absolute URL
        if (config.basePath && config.multiRes.basePath &&
            !(/^(?:[a-z]+:)?\/\//i.test(config.multiRes.basePath))) {
            c.basePath = config.basePath + config.multiRes.basePath;
        } else if (config.multiRes.basePath) {
            c.basePath = config.multiRes.basePath;
        } else if(config.basePath) {
            c.basePath = config.basePath;
        }
        panoImage = c;
    } else {
        if (config.dynamic === true) {
            panoImage = config.panorama;
        } else {
            if (config.panorama === undefined) {
                anError(config.strings.noPanoramaError);
                return;
            }
            panoImage = new Image();
        }
    }

    // Configure image loading
    if (config.type == 'cubemap') {
        // Quick loading counter for synchronous loading
        var itemsToLoad = 6;

        var onLoad = function() {
            itemsToLoad--;
            if (itemsToLoad === 0) {
                onImageLoad();
            }
        };

        var onError = function(e) {
            var a = document.createElement('a');
            a.href = e.target.src;
            a.innerHTML = a.href;
            anError(config.strings.fileAccessError.replace('%s', a.outerHTML));
        };

        for (i = 0; i < panoImage.length; i++) {
            panoImage[i].onload = onLoad;
            panoImage[i].onerror = onError;
            p = config.cubeMap[i];
            if (config.basePath && !absoluteURL(p)) {
                p = config.basePath + p;
            }
            panoImage[i].src = encodeURI(p);
        }
    } else if (config.type == 'multires') {
        onImageLoad();
    } else {
        p = '';
        if (config.basePath) {
            p = config.basePath;
        }

        if (config.dynamic !== true) {
            // Still image
            p = absoluteURL(config.panorama) ? config.panorama : p + config.panorama;

            panoImage.onload = function() {
                window.URL.revokeObjectURL(this.src);  // Clean up
                onImageLoad();
            };

            var xhr = new XMLHttpRequest();
            xhr.onloadend = function() {
                if (xhr.status != 200) {
                    // Display error if image can't be loaded
                    var a = document.createElement('a');
                    a.href = encodeURI(p);
                    a.innerHTML = a.href;
                    anError(config.strings.fileAccessError.replace('%s', a.outerHTML));
                }
                var img = this.response;
                parseGPanoXMP(img);
                infoDisplay.load.msg.innerHTML = '';
            };
            xhr.onprogress = function(e) {
                if (e.lengthComputable) {
                    // Display progress
                    var percent = e.loaded / e.total * 100;
                    infoDisplay.load.lbarFill.style.width = percent + '%';
                    var unit, numerator, denominator;
                    if (e.total > 1e6) {
                        unit = 'MB';
                        numerator = (e.loaded / 1e6).toFixed(2);
                        denominator = (e.total / 1e6).toFixed(2);
                    } else if (e.total > 1e3) {
                        unit = 'kB';
                        numerator = (e.loaded / 1e3).toFixed(1);
                        denominator = (e.total / 1e3).toFixed(1);
                    } else {
                        unit = 'B';
                        numerator = e.loaded;
                        denominator = e.total;
                    }
                    infoDisplay.load.msg.innerHTML = numerator + ' / ' + denominator + ' ' + unit;
                } else {
                    // Display loading spinner
                    infoDisplay.load.lbox.style.display = 'block';
                    infoDisplay.load.lbar.style.display = 'none';
                }
            };
            try {
                xhr.open('GET', p, true);
            } catch (e) {
                // Malformed URL
                anError(config.strings.malformedURLError);
            }
            xhr.responseType = 'blob';
            xhr.setRequestHeader('Accept', 'image/*,*/*;q=0.9');
            xhr.send();
        }
    }

    uiContainer.classList.add('pnlm-grab');
    uiContainer.classList.remove('pnlm-grabbing');
}

/**
 * Test if URL is absolute or relative.
 * @private
 * @param {string} url - URL to test
 * @returns {boolean} True if absolute, else false
 */
function absoluteURL(url) {
    // From http://stackoverflow.com/a/19709846
    return new RegExp('^(?:[a-z]+:)?//', 'i').test(url) || url[0] == '/' || url.slice(0, 5) == 'blob:';
};

/**
 * Create renderer and initialize event listeners once image is loaded.
 * @private
 */
function onImageLoad() {
    if (!renderer)
        renderer = new libpannellum.renderer(renderContainer);

    // Only add event listeners once
    if (!listenersAdded) {
        listenersAdded = true;
        dragFix.addEventListener('mousedown', onDocumentMouseDown, false);
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('mouseup', onDocumentMouseUp, false);
        if (config.mouseZoom) {
            uiContainer.addEventListener('mousewheel', onDocumentMouseWheel, false);
            uiContainer.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
        }
        if (config.doubleClickZoom) {
            dragFix.addEventListener('dblclick', onDocumentDoubleClick, false);
        }
        uiContainer.addEventListener('mozfullscreenchange', onFullScreenChange, false);
        uiContainer.addEventListener('webkitfullscreenchange', onFullScreenChange, false);
        uiContainer.addEventListener('msfullscreenchange', onFullScreenChange, false);
        uiContainer.addEventListener('fullscreenchange', onFullScreenChange, false);
        window.addEventListener('resize', onDocumentResize, false);
        window.addEventListener('orientationchange', onDocumentResize, false);
        uiContainer.addEventListener('keydown', onDocumentKeyPress, false);
        uiContainer.addEventListener('keyup', onDocumentKeyUp, false);
        uiContainer.addEventListener('blur', clearKeys, false);
        document.addEventListener('mouseleave', onDocumentMouseUp, false);
        dragFix.addEventListener('touchstart', onDocumentTouchStart, false);
        dragFix.addEventListener('touchmove', onDocumentTouchMove, false);
        dragFix.addEventListener('touchend', onDocumentTouchEnd, false);
        dragFix.addEventListener('pointerdown', onDocumentPointerDown, false);
        dragFix.addEventListener('pointermove', onDocumentPointerMove, false);
        dragFix.addEventListener('pointerup', onDocumentPointerUp, false);
        dragFix.addEventListener('pointerleave', onDocumentPointerUp, false);

        // Deal with MS pointer events
        if (window.navigator.pointerEnabled)
            container.style.touchAction = 'none';
    }

    renderInit();
    setTimeout(function(){isTimedOut = true;}, 500);
}

/**
 * Parses Google Photo Sphere XMP Metadata.
 * https://developers.google.com/photo-sphere/metadata/
 * @private
 * @param {Image} image - Image to read XMP metadata from.
 */
function parseGPanoXMP(image) {
    var reader = new FileReader();
    reader.addEventListener('loadend', function() {
        var img = reader.result;

        // This awful browser specific test exists because iOS 8 does not work
        // with non-progressive encoded JPEGs.
        if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)) {
            var flagIndex = img.indexOf('\xff\xc2');
            if (flagIndex < 0 || flagIndex > 65536)
                anError(config.strings.iOS8WebGLError);
        }

        var start = img.indexOf('<x:xmpmeta');
        if (start > -1 && config.ignoreGPanoXMP !== true) {
            var xmpData = img.substring(start, img.indexOf('</x:xmpmeta>') + 12);

            // Extract the requested tag from the XMP data
            var getTag = function(tag) {
                var result;
                if (xmpData.indexOf(tag + '="') >= 0) {
                    result = xmpData.substring(xmpData.indexOf(tag + '="') + tag.length + 2);
                    result = result.substring(0, result.indexOf('"'));
                } else if (xmpData.indexOf(tag + '>') >= 0) {
                    result = xmpData.substring(xmpData.indexOf(tag + '>') + tag.length + 1);
                    result = result.substring(0, result.indexOf('<'));
                }
                if (result !== undefined) {
                    return Number(result);
                }
                return null;
            };

            // Relevant XMP data
            var xmp = {
                fullWidth: getTag('GPano:FullPanoWidthPixels'),
                croppedWidth: getTag('GPano:CroppedAreaImageWidthPixels'),
                fullHeight: getTag('GPano:FullPanoHeightPixels'),
                croppedHeight: getTag('GPano:CroppedAreaImageHeightPixels'),
                topPixels: getTag('GPano:CroppedAreaTopPixels'),
                heading: getTag('GPano:PoseHeadingDegrees'),
                horizonPitch: getTag('GPano:PosePitchDegrees'),
                horizonRoll: getTag('GPano:PoseRollDegrees')
            };

            if (xmp.fullWidth !== null && xmp.croppedWidth !== null &&
                xmp.fullHeight !== null && xmp.croppedHeight !== null &&
                xmp.topPixels !== null) {

                // Set up viewer using GPano XMP data
                if (specifiedPhotoSphereExcludes.indexOf('haov') < 0)
                    config.haov = xmp.croppedWidth / xmp.fullWidth * 360;
                if (specifiedPhotoSphereExcludes.indexOf('vaov') < 0)
                    config.vaov = xmp.croppedHeight / xmp.fullHeight * 180;
                if (specifiedPhotoSphereExcludes.indexOf('vOffset') < 0)
                    config.vOffset = ((xmp.topPixels + xmp.croppedHeight / 2) / xmp.fullHeight - 0.5) * -180;
                if (xmp.heading !== null && specifiedPhotoSphereExcludes.indexOf('northOffset') < 0) {
                    // TODO: make sure this works correctly for partial panoramas
                    config.northOffset = xmp.heading;
                    if (config.compass !== false) {
                        config.compass = true;
                    }
                }
                if (xmp.horizonPitch !== null && xmp.horizonRoll !== null) {
                    if (specifiedPhotoSphereExcludes.indexOf('horizonPitch') < 0)
                        config.horizonPitch = xmp.horizonPitch;
                    if (specifiedPhotoSphereExcludes.indexOf('horizonRoll') < 0)
                        config.horizonRoll = xmp.horizonRoll;
                }

                // TODO: add support for initial view settings
            }
        }

        // Load panorama
        panoImage.src = window.URL.createObjectURL(image);
    });
    if (reader.readAsBinaryString !== undefined)
        reader.readAsBinaryString(image);
    else
        reader.readAsText(image);
}

/**
 * Displays an error message.
 * @private
 * @param {string} errorMsg - Error message to display. If not specified, a
 *      generic WebGL error is displayed.
 */
function anError(errorMsg) {
    if (errorMsg === undefined)
        errorMsg = config.strings.genericWebGLError;
    infoDisplay.errorMsg.innerHTML = '<p>' + errorMsg + '</p>';
    controls.load.style.display = 'none';
    infoDisplay.load.box.style.display = 'none';
    infoDisplay.errorMsg.style.display = 'table';
    error = true;
    renderContainer.style.display = 'none';
    fireEvent('error', errorMsg);
}

/**
 * Hides error message display.
 * @private
 */
function clearError() {
    if (error) {
        infoDisplay.load.box.style.display = 'none';
        infoDisplay.errorMsg.style.display = 'none';
        error = false;
        fireEvent('errorcleared');
    }
}

/**
 * Displays about message.
 * @private
 * @param {MouseEvent} event - Right click location
 */
function aboutMessage(event) {
    var pos = mousePosition(event);
    aboutMsg.style.left = pos.x + 'px';
    aboutMsg.style.top = pos.y + 'px';
    clearTimeout(aboutMessage.t1);
    clearTimeout(aboutMessage.t2);
    aboutMsg.style.display = 'block';
    aboutMsg.style.opacity = 1;
    aboutMessage.t1 = setTimeout(function() {aboutMsg.style.opacity = 0;}, 2000);
    aboutMessage.t2 = setTimeout(function() {aboutMsg.style.display = 'none';}, 2500);
    event.preventDefault();
}

/**
 * Calculate mouse position relative to top left of viewer container.
 * @private
 * @param {MouseEvent} event - Mouse event to use in calculation
 * @returns {Object} Calculated X and Y coordinates
 */
function mousePosition(event) {
    var bounds = container.getBoundingClientRect();
    var pos = {};
    pos.x = event.clientX - bounds.left;
    pos.y = event.clientY - bounds.top;
    return pos;
}

/**
 * Event handler for mouse clicks. Initializes panning. Prints center and click
 * location coordinates when hot spot debugging is enabled.
 * @private
 * @param {MouseEvent} event - Document mouse down event.
 */
function onDocumentMouseDown(event) {
    // Override default action
    event.preventDefault();
    // But not all of it
    container.focus();

    // Only do something if the panorama is loaded
    if (!loaded || !config.draggable) {
        return;
    }

    // Calculate mouse position relative to top left of viewer container
    var pos = mousePosition(event);

    // Log pitch / yaw of mouse click when debugging / placing hot spots
    if (config.hotSpotDebug) {
        var coords = mouseEventToCoords(event);
        console.log('Pitch: ' + coords[0] + ', Yaw: ' + coords[1] + ', Center Pitch: ' +
            config.pitch + ', Center Yaw: ' + config.yaw + ', HFOV: ' + config.hfov);
    }

    // Turn off auto-rotation if enabled
    stopAnimation();

    stopOrientation();
    config.roll = 0;

    speed.hfov = 0;

    isUserInteracting = true;
    latestInteraction = Date.now();

    onPointerDownPointerX = pos.x;
    onPointerDownPointerY = pos.y;

    onPointerDownYaw = config.yaw;
    onPointerDownPitch = config.pitch;

    uiContainer.classList.add('pnlm-grabbing');
    uiContainer.classList.remove('pnlm-grab');

    fireEvent('mousedown', event);
    animateInit();
}

/**
 * Event handler for double clicks. Zooms in at clicked location
 * @private
 * @param {MouseEvent} event - Document mouse down event.
 */
function onDocumentDoubleClick(event) {
    if (config.minHfov === config.hfov) {
        _this.setHfov(origHfov, 1000);
    } else {
        var coords = mouseEventToCoords(event);
        _this.lookAt(coords[0], coords[1], config.minHfov, 1000);
    }
}

/**
 * Calculate panorama pitch and yaw from location of mouse event.
 * @private
 * @param {MouseEvent} event - Document mouse down event.
 * @returns {number[]} [pitch, yaw]
 */
function mouseEventToCoords(event) {
    var pos = mousePosition(event);
    var canvas = renderer.getCanvas();
    var canvasWidth = canvas.clientWidth,
        canvasHeight = canvas.clientHeight;
    var x = pos.x / canvasWidth * 2 - 1;
    var y = (1 - pos.y / canvasHeight * 2) * canvasHeight / canvasWidth;
    var focal = 1 / Math.tan(config.hfov * Math.PI / 360);
    var s = Math.sin(config.pitch * Math.PI / 180);
    var c = Math.cos(config.pitch * Math.PI / 180);
    var a = focal * c - y * s;
    var root = Math.sqrt(x*x + a*a);
    var pitch = Math.atan((y * c + focal * s) / root) * 180 / Math.PI;
    var yaw = Math.atan2(x / root, a / root) * 180 / Math.PI + config.yaw;
    if (yaw < -180)
        yaw += 360;
    if (yaw > 180)
        yaw -= 360;
    return [pitch, yaw];
}

/**
 * Event handler for mouse moves. Pans center of view.
 * @private
 * @param {MouseEvent} event - Document mouse move event.
 */
function onDocumentMouseMove(event) {
    if (isUserInteracting && loaded) {
        latestInteraction = Date.now();
        var canvas = renderer.getCanvas();
        var canvasWidth = canvas.clientWidth,
            canvasHeight = canvas.clientHeight;
        var pos = mousePosition(event);
        //TODO: This still isn't quite right
        var yaw = ((Math.atan(onPointerDownPointerX / canvasWidth * 2 - 1) - Math.atan(pos.x / canvasWidth * 2 - 1)) * 180 / Math.PI * config.hfov / 90) + onPointerDownYaw;
        speed.yaw = (yaw - config.yaw) % 360 * 0.2;
        config.yaw = yaw;

        var vfov = 2 * Math.atan(Math.tan(config.hfov/360*Math.PI) * canvasHeight / canvasWidth) * 180 / Math.PI;

        var pitch = ((Math.atan(pos.y / canvasHeight * 2 - 1) - Math.atan(onPointerDownPointerY / canvasHeight * 2 - 1)) * 180 / Math.PI * vfov / 90) + onPointerDownPitch;
        speed.pitch = (pitch - config.pitch) * 0.2;
        config.pitch = pitch;
    }
}

/**
 * Event handler for mouse up events. Stops panning.
 * @private
 */
function onDocumentMouseUp(event) {
    if (!isUserInteracting) {
        return;
    }
    isUserInteracting = false;
    if (Date.now() - latestInteraction > 15) {
        // Prevents jump when user rapidly moves mouse, stops, and then
        // releases the mouse button
        speed.pitch = speed.yaw = 0;
    }
    uiContainer.classList.add('pnlm-grab');
    uiContainer.classList.remove('pnlm-grabbing');
    latestInteraction = Date.now();

    fireEvent('mouseup', event);
}

/**
 * Event handler for touches. Initializes panning if one touch or zooming if
 * two touches.
 * @private
 * @param {TouchEvent} event - Document touch start event.
 */
function onDocumentTouchStart(event) {
    // Only do something if the panorama is loaded
    if (!loaded || !config.draggable) {
        return;
    }

    // Turn off auto-rotation if enabled
    stopAnimation();

    stopOrientation();
    config.roll = 0;

    speed.hfov = 0;

    // Calculate touch position relative to top left of viewer container
    var pos0 = mousePosition(event.targetTouches[0]);

    onPointerDownPointerX = pos0.x;
    onPointerDownPointerY = pos0.y;

    if (event.targetTouches.length == 2) {
        // Down pointer is the center of the two fingers
        var pos1 = mousePosition(event.targetTouches[1]);
        onPointerDownPointerX += (pos1.x - pos0.x) * 0.5;
        onPointerDownPointerY += (pos1.y - pos0.y) * 0.5;
        onPointerDownPointerDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) +
                                             (pos0.y - pos1.y) * (pos0.y - pos1.y));
    }
    isUserInteracting = true;
    latestInteraction = Date.now();

    onPointerDownYaw = config.yaw;
    onPointerDownPitch = config.pitch;

    fireEvent('touchstart', event);
    animateInit();
}

/**
 * Event handler for touch movements. Pans center of view if one touch or
 * adjusts zoom if two touches.
 * @private
 * @param {TouchEvent} event - Document touch move event.
 */
function onDocumentTouchMove(event) {
    if (!config.draggable) {
        return;
    }

    // Override default action
    event.preventDefault();
    if (loaded) {
        latestInteraction = Date.now();
    }
    if (isUserInteracting && loaded) {
        var pos0 = mousePosition(event.targetTouches[0]);
        var clientX = pos0.x;
        var clientY = pos0.y;

        if (event.targetTouches.length == 2 && onPointerDownPointerDist != -1) {
            var pos1 = mousePosition(event.targetTouches[1]);
            clientX += (pos1.x - pos0.x) * 0.5;
            clientY += (pos1.y - pos0.y) * 0.5;
            var clientDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) +
                                       (pos0.y - pos1.y) * (pos0.y - pos1.y));
            setHfov(config.hfov + (onPointerDownPointerDist - clientDist) * 0.1);
            onPointerDownPointerDist = clientDist;
        }

        // The smaller the config.hfov value (the more zoomed-in the user is), the faster
        // yaw/pitch are perceived to change on one-finger touchmove (panning) events and vice versa.
        // To improve usability at both small and large zoom levels (config.hfov values)
        // we introduce a dynamic pan speed coefficient.
        //
        // Currently this seems to *roughly* keep initial drag/pan start position close to
        // the user's finger while panning regardless of zoom level / config.hfov value.
        var touchmovePanSpeedCoeff = config.hfov / 360;

        var yaw = (onPointerDownPointerX - clientX) * touchmovePanSpeedCoeff + onPointerDownYaw;
        speed.yaw = (yaw - config.yaw) % 360 * 0.2;
        config.yaw = yaw;

        var pitch = (clientY - onPointerDownPointerY) * touchmovePanSpeedCoeff + onPointerDownPitch;
        speed.pitch = (pitch - config.pitch) * 0.2;
        config.pitch = pitch;
    }
}

/**
 * Event handler for end of touches. Stops panning and/or zooming.
 * @private
 */
function onDocumentTouchEnd() {
    isUserInteracting = false;
    if (Date.now() - latestInteraction > 150) {
        speed.pitch = speed.yaw = 0;
    }
    onPointerDownPointerDist = -1;
    latestInteraction = Date.now();

    fireEvent('touchend', event);
}

var pointerIDs = [],
    pointerCoordinates = [];
/**
 * Event handler for touch starts in IE / Edge.
 * @private
 * @param {PointerEvent} event - Document pointer down event.
 */
function onDocumentPointerDown(event) {
    if (event.pointerType == 'touch') {
        pointerIDs.push(event.pointerId);
        pointerCoordinates.push({clientX: event.clientX, clientY: event.clientY});
        event.targetTouches = pointerCoordinates;
        onDocumentTouchStart(event);
        event.preventDefault();
    }
}

/**
 * Event handler for touch moves in IE / Edge.
 * @private
 * @param {PointerEvent} event - Document pointer move event.
 */
function onDocumentPointerMove(event) {
    if (event.pointerType == 'touch') {
        for (var i = 0; i < pointerIDs.length; i++) {
            if (event.pointerId == pointerIDs[i]) {
                pointerCoordinates[i].clientX = event.clientX;
                pointerCoordinates[i].clientY = event.clientY;
                event.targetTouches = pointerCoordinates;
                onDocumentTouchMove(event);
                //event.preventDefault();
                return;
            }
        }
    }
}

/**
 * Event handler for touch ends in IE / Edge.
 * @private
 * @param {PointerEvent} event - Document pointer up event.
 */
function onDocumentPointerUp(event) {
    if (event.pointerType == 'touch') {
        var defined = false;
        for (var i = 0; i < pointerIDs.length; i++) {
            if (event.pointerId == pointerIDs[i])
                pointerIDs[i] = undefined;
            if (pointerIDs[i])
                defined = true;
        }
        if (!defined) {
            pointerIDs = [];
            pointerCoordinates = [];
            onDocumentTouchEnd();
        }
        event.preventDefault();
    }
}

/**
 * Event handler for mouse wheel. Changes zoom.
 * @private
 * @param {WheelEvent} event - Document mouse wheel event.
 */
function onDocumentMouseWheel(event) {
    // Only do something if the panorama is loaded and mouse wheel zoom is enabled
    if (!loaded || (config.mouseZoom == 'fullscreenonly' && !fullscreenActive)) {
        return;
    }

    event.preventDefault();

    // Turn off auto-rotation if enabled
    stopAnimation();
    latestInteraction = Date.now();

    if (event.wheelDeltaY) {
        // WebKit
        setHfov(config.hfov - event.wheelDeltaY * 0.05);
        speed.hfov = event.wheelDelta < 0 ? 1 : -1;
    } else if (event.wheelDelta) {
        // Opera / Explorer 9
        setHfov(config.hfov - event.wheelDelta * 0.05);
        speed.hfov = event.wheelDelta < 0 ? 1 : -1;
    } else if (event.detail) {
        // Firefox
        setHfov(config.hfov + event.detail * 1.5);
        speed.hfov = event.detail > 0 ? 1 : -1;
    }

    animateInit();
}

/**
 * Event handler for key presses. Updates list of currently pressed keys.
 * @private
 * @param {KeyboardEvent} event - Document key press event.
 */
function onDocumentKeyPress(event) {
    // Turn off auto-rotation if enabled
    stopAnimation();
    latestInteraction = Date.now();

    stopOrientation();
    config.roll = 0;

    // Record key pressed
    var keynumber = event.which || event.keycode;

    // Override default action for keys that are used
    if (usedKeyNumbers.indexOf(keynumber) < 0)
        return
    event.preventDefault();

    // If escape key is pressed
    if (keynumber == 27) {
        // If in fullscreen mode
        if (fullscreenActive) {
            toggleFullscreen();
        }
    } else {
        // Change key
        changeKey(keynumber, true);
    }
}

/**
 * Clears list of currently pressed keys.
 * @private
 */
function clearKeys() {
    for (var i = 0; i < 10; i++) {
        keysDown[i] = false;
    }
}

/**
 * Event handler for key releases. Updates list of currently pressed keys.
 * @private
 * @param {KeyboardEvent} event - Document key up event.
 */
function onDocumentKeyUp(event) {
    // Record key pressed
    var keynumber = event.which || event.keycode;

    // Override default action for keys that are used
    if (usedKeyNumbers.indexOf(keynumber) < 0)
        return
    event.preventDefault();

    // Change key
    changeKey(keynumber, false);
}

/**
 * Updates list of currently pressed keys.
 * @private
 * @param {number} keynumber - Key number.
 * @param {boolean} value - Whether or not key is pressed.
 */
function changeKey(keynumber, value) {
    var keyChanged = false;
    switch(keynumber) {
        // If minus key is released
        case 109: case 189: case 17: case 173:
            if (keysDown[0] != value) { keyChanged = true; }
            keysDown[0] = value; break;

        // If plus key is released
        case 107: case 187: case 16: case 61:
            if (keysDown[1] != value) { keyChanged = true; }
            keysDown[1] = value; break;

        // If up arrow is released
        case 38:
            if (keysDown[2] != value) { keyChanged = true; }
            keysDown[2] = value; break;

        // If "w" is released
        case 87:
            if (keysDown[6] != value) { keyChanged = true; }
            keysDown[6] = value; break;

        // If down arrow is released
        case 40:
            if (keysDown[3] != value) { keyChanged = true; }
            keysDown[3] = value; break;

        // If "s" is released
        case 83:
            if (keysDown[7] != value) { keyChanged = true; }
            keysDown[7] = value; break;

        // If left arrow is released
        case 37:
            if (keysDown[4] != value) { keyChanged = true; }
            keysDown[4] = value; break;

        // If "a" is released
        case 65:
            if (keysDown[8] != value) { keyChanged = true; }
            keysDown[8] = value; break;

        // If right arrow is released
        case 39:
            if (keysDown[5] != value) { keyChanged = true; }
            keysDown[5] = value; break;

        // If "d" is released
        case 68:
            if (keysDown[9] != value) { keyChanged = true; }
            keysDown[9] = value;
    }

    if (keyChanged && value) {
        if (typeof performance !== 'undefined' && performance.now()) {
            prevTime = performance.now();
        } else {
            prevTime = Date.now();
        }
        animateInit();
    }
}

/**
 * Pans and/or zooms panorama based on currently pressed keys. Also handles
 * panorama "inertia" and auto rotation.
 * @private
 */
function keyRepeat() {
    // Only do something if the panorama is loaded
    if (!loaded) {
        return;
    }

    var isKeyDown = false;

    var prevPitch = config.pitch;
    var prevYaw = config.yaw;
    var prevZoom = config.hfov;

    var newTime;
    if (typeof performance !== 'undefined' && performance.now()) {
        newTime = performance.now();
    } else {
        newTime = Date.now();
    }
    if (prevTime === undefined) {
        prevTime = newTime;
    }
    var diff = (newTime - prevTime) * config.hfov / 1700;
    diff = Math.min(diff, 1.0);

    // If minus key is down
    if (keysDown[0] && config.keyboardZoom === true) {
        setHfov(config.hfov + (speed.hfov * 0.8 + 0.5) * diff);
        isKeyDown = true;
    }

    // If plus key is down
    if (keysDown[1] && config.keyboardZoom === true) {
        setHfov(config.hfov + (speed.hfov * 0.8 - 0.2) * diff);
        isKeyDown = true;
    }

    // If up arrow or "w" is down
    if (keysDown[2] || keysDown[6]) {
        // Pan up
        config.pitch += (speed.pitch * 0.8 + 0.2) * diff;
        isKeyDown = true;
    }

    // If down arrow or "s" is down
    if (keysDown[3] || keysDown[7]) {
        // Pan down
        config.pitch += (speed.pitch * 0.8 - 0.2) * diff;
        isKeyDown = true;
    }

    // If left arrow or "a" is down
    if (keysDown[4] || keysDown[8]) {
        // Pan left
        config.yaw += (speed.yaw * 0.8 - 0.2) * diff;
        isKeyDown = true;
    }

    // If right arrow or "d" is down
    if (keysDown[5] || keysDown[9]) {
        // Pan right
        config.yaw += (speed.yaw * 0.8 + 0.2) * diff;
        isKeyDown = true;
    }

    if (isKeyDown)
        latestInteraction = Date.now();

    // If auto-rotate
    var inactivityInterval = Date.now() - latestInteraction;
    if (config.autoRotate) {
        // Pan
        if (newTime - prevTime > 0.001) {
            var timeDiff = (newTime - prevTime) / 1000;
            var yawDiff = (speed.yaw / timeDiff * diff - config.autoRotate * 0.2) * timeDiff
            yawDiff = (-config.autoRotate > 0 ? 1 : -1) * Math.min(Math.abs(config.autoRotate * timeDiff), Math.abs(yawDiff));
            config.yaw += yawDiff;
        }

        // Deal with stopping auto rotation after a set delay
        if (config.autoRotateStopDelay) {
            config.autoRotateStopDelay -= newTime - prevTime;
            if (config.autoRotateStopDelay <= 0) {
                config.autoRotateStopDelay = false;
                autoRotateSpeed = config.autoRotate;
                config.autoRotate = 0;
            }
        }
    }

    // Animated moves
    if (animatedMove.pitch) {
        animateMove('pitch');
        prevPitch = config.pitch;
    }
    if (animatedMove.yaw) {
        animateMove('yaw');
        prevYaw = config.yaw;
    }
    if (animatedMove.hfov) {
        animateMove('hfov');
        prevZoom = config.hfov;
    }

    // "Inertia"
    if (diff > 0 && !config.autoRotate) {
        // "Friction"
        var friction = 0.85;

        // Yaw
        if (!keysDown[4] && !keysDown[5] && !keysDown[8] && !keysDown[9] && !animatedMove.yaw) {
            config.yaw += speed.yaw * diff * friction;
        }
        // Pitch
        if (!keysDown[2] && !keysDown[3] && !keysDown[6] && !keysDown[7] && !animatedMove.pitch) {
            config.pitch += speed.pitch * diff * friction;
        }
        // Zoom
        if (!keysDown[0] && !keysDown[1] && !animatedMove.hfov) {
            setHfov(config.hfov + speed.hfov * diff * friction);
        }
    }

    prevTime = newTime;
    if (diff > 0) {
        speed.yaw = speed.yaw * 0.8 + (config.yaw - prevYaw) / diff * 0.2;
        speed.pitch = speed.pitch * 0.8 + (config.pitch - prevPitch) / diff * 0.2;
        speed.hfov = speed.hfov * 0.8 + (config.hfov - prevZoom) / diff * 0.2;

        // Limit speed
        var maxSpeed = config.autoRotate ? Math.abs(config.autoRotate) : 5;
        speed.yaw = Math.min(maxSpeed, Math.max(speed.yaw, -maxSpeed));
        speed.pitch = Math.min(maxSpeed, Math.max(speed.pitch, -maxSpeed));
        speed.hfov = Math.min(maxSpeed, Math.max(speed.hfov, -maxSpeed));
    }

    // Stop movement if opposite controls are pressed
    if (keysDown[0] && keysDown[0]) {
        speed.hfov = 0;
    }
    if ((keysDown[2] || keysDown[6]) && (keysDown[3] || keysDown[7])) {
        speed.pitch = 0;
    }
    if ((keysDown[4] || keysDown[8]) && (keysDown[5] || keysDown[9])) {
        speed.yaw = 0;
    }
}

/**
 * Animates moves.
 * @param {string} axis - Axis to animate
 * @private
 */
function animateMove(axis) {
    var t = animatedMove[axis];
    var normTime = Math.min(1, Math.max((Date.now() - t.startTime) / 1000 / (t.duration / 1000), 0));
    var result = t.startPosition + config.animationTimingFunction(normTime) * (t.endPosition - t.startPosition);
    if ((t.endPosition > t.startPosition && result >= t.endPosition) ||
        (t.endPosition < t.startPosition && result <= t.endPosition) ||
        t.endPosition === t.startPosition) {
        result = t.endPosition;
        speed[axis] = 0;
        var callback = animatedMove[axis].callback,
            callbackArgs = animatedMove[axis].callbackArgs;
        delete animatedMove[axis];
        if (typeof callback == 'function')
            callback(callbackArgs);
    }
    config[axis] = result;
}

/**
 * @param {number} t - Normalized time in animation
 * @return {number} Position in animation
 * @private
 */
function timingFunction(t) {
    // easeInOutQuad from https://gist.github.com/gre/1650294
    return t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
}

/**
 * Event handler for document resizes. Updates viewer size and rerenders view.
 * @private
 */
function onDocumentResize() {
    // Resize panorama renderer (moved to onFullScreenChange)
    //renderer.resize();
    //animateInit();

    // Kludge to deal with WebKit regression: https://bugs.webkit.org/show_bug.cgi?id=93525
    onFullScreenChange();
}

/**
 * Initializes animation.
 * @private
 */
function animateInit() {
    if (animating) {
        return;
    }
    animating = true;
    animate();
}

/**
 * Animates view, using requestAnimationFrame to trigger rendering.
 * @private
 */
function animate() {
    render();
    if (autoRotateStart)
        clearTimeout(autoRotateStart);
    if (isUserInteracting || orientation === true) {
        requestAnimationFrame(animate);
    } else if (keysDown[0] || keysDown[1] || keysDown[2] || keysDown[3] ||
        keysDown[4] || keysDown[5] || keysDown[6] || keysDown[7] ||
        keysDown[8] || keysDown[9] || config.autoRotate ||
        animatedMove.pitch || animatedMove.yaw || animatedMove.hfov ||
        Math.abs(speed.yaw) > 0.01 || Math.abs(speed.pitch) > 0.01 ||
        Math.abs(speed.hfov) > 0.01) {

        keyRepeat();
        if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed &&
            Date.now() - latestInteraction > config.autoRotateInactivityDelay &&
            !config.autoRotate) {
            config.autoRotate = autoRotateSpeed;
            _this.lookAt(origPitch, undefined, origHfov, 3000);
        }
        requestAnimationFrame(animate);
    } else if (renderer && (renderer.isLoading() || (config.dynamic === true && update))) {
        requestAnimationFrame(animate);
    } else {
        animating = false;
        prevTime = undefined;
        var autoRotateStartTime = config.autoRotateInactivityDelay -
            (Date.now() - latestInteraction);
        if (autoRotateStartTime > 0) {
            autoRotateStart = setTimeout(function() {
                config.autoRotate = autoRotateSpeed;
                _this.lookAt(origPitch, undefined, origHfov, 3000);
                animateInit();
            }, autoRotateStartTime);
        } else if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed) {
            config.autoRotate = autoRotateSpeed;
            _this.lookAt(origPitch, undefined, origHfov, 3000);
            animateInit();
        }
    }
}

/**
 * Renders panorama view.
 * @private
 */
function render() {
    var tmpyaw;

    if (loaded) {
        if (config.yaw > 180) {
            config.yaw -= 360;
        } else if (config.yaw < -180) {
            config.yaw += 360;
        }

        // Keep a tmp value of yaw for autoRotate comparison later
        tmpyaw = config.yaw;

        // Ensure the yaw is within min and max allowed
        var yawRange = config.maxYaw - config.minYaw,
            minYaw = -180,
            maxYaw = 180;
        if (yawRange < 360) {
            minYaw = config.minYaw + config.hfov / 2;
            maxYaw = config.maxYaw - config.hfov / 2;
            if (yawRange < config.hfov) {
                // Lock yaw to average of min and max yaw when both can be seen at once
                minYaw = maxYaw = (minYaw + maxYaw) / 2;
            }
        }
        config.yaw = Math.max(minYaw, Math.min(maxYaw, config.yaw));

        // Check if we autoRotate in a limited by min and max yaw
        // If so reverse direction
        if (config.autoRotate !== false && tmpyaw != config.yaw) {
            config.autoRotate *= -1;
        }

        // Ensure the calculated pitch is within min and max allowed
        var canvas = renderer.getCanvas();
        var vfov = 2 * Math.atan(Math.tan(config.hfov / 180 * Math.PI * 0.5) /
            (canvas.width / canvas.height)) / Math.PI * 180;
        var minPitch = config.minPitch + vfov / 2,
            maxPitch = config.maxPitch - vfov / 2;
        var pitchRange = config.maxPitch - config.minPitch;
        if (pitchRange < vfov) {
            // Lock pitch to average of min and max pitch when both can be seen at once
            minPitch = maxPitch = (minPitch + maxPitch) / 2;
        }
        if (isNaN(minPitch))
            minPitch = -90;
        if (isNaN(maxPitch))
            maxPitch = 90;
        config.pitch = Math.max(minPitch, Math.min(maxPitch, config.pitch));

        renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, {roll: config.roll * Math.PI / 180});

        renderHotSpots();

        // Update compass
        if (config.compass) {
            compass.style.transform = 'rotate(' + (-config.yaw - config.northOffset) + 'deg)';
            compass.style.webkitTransform = 'rotate(' + (-config.yaw - config.northOffset) + 'deg)';
        }
    }
}

/**
 * Creates a new quaternion.
 * @private
 * @constructor
 * @param {Number} w - W value
 * @param {Number} x - X value
 * @param {Number} y - Y value
 * @param {Number} z - Z value
 */
function Quaternion(w, x, y, z) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
}

/**
 * Multiplies quaternions.
 * @private
 * @param {Quaternion} q - Quaternion to multiply
 * @returns {Quaternion} Result of multiplication
 */
Quaternion.prototype.multiply = function(q) {
    return new Quaternion(this.w*q.w - this.x*q.x - this.y*q.y - this.z*q.z,
                          this.x*q.w + this.w*q.x + this.y*q.z - this.z*q.y,
                          this.y*q.w + this.w*q.y + this.z*q.x - this.x*q.z,
                          this.z*q.w + this.w*q.z + this.x*q.y - this.y*q.x);
}

/**
 * Converts quaternion to Euler angles.
 * @private
 * @returns {Number[]} [phi angle, theta angle, psi angle]
 */
Quaternion.prototype.toEulerAngles = function() {
    var phi = Math.atan2(2 * (this.w * this.x + this.y * this.z),
                         1 - 2 * (this.x * this.x + this.y * this.y)),
        theta = Math.asin(2 * (this.w * this.y - this.z * this.x)),
        psi = Math.atan2(2 * (this.w * this.z + this.x * this.y),
                         1 - 2 * (this.y * this.y + this.z * this.z));
    return [phi, theta, psi];
}

/**
 * Converts device orientation API Tait-Bryan angles to a quaternion.
 * @private
 * @param {Number} alpha - Alpha angle (in degrees)
 * @param {Number} beta - Beta angle (in degrees)
 * @param {Number} gamma - Gamma angle (in degrees)
 * @returns {Quaternion} Orientation quaternion
 */
function taitBryanToQuaternion(alpha, beta, gamma) {
    var r = [beta ? beta * Math.PI / 180 / 2 : 0,
             gamma ? gamma * Math.PI / 180 / 2 : 0,
             alpha ? alpha * Math.PI / 180 / 2 : 0];
    var c = [Math.cos(r[0]), Math.cos(r[1]), Math.cos(r[2])],
        s = [Math.sin(r[0]), Math.sin(r[1]), Math.sin(r[2])];

    return new Quaternion(c[0]*c[1]*c[2] - s[0]*s[1]*s[2],
                          s[0]*c[1]*c[2] - c[0]*s[1]*s[2],
                          c[0]*s[1]*c[2] + s[0]*c[1]*s[2],
                          c[0]*c[1]*s[2] + s[0]*s[1]*c[2]);
}

/**
 * Computes current device orientation quaternion from device orientation API
 * Tait-Bryan angles.
 * @private
 * @param {Number} alpha - Alpha angle (in degrees)
 * @param {Number} beta - Beta angle (in degrees)
 * @param {Number} gamma - Gamma angle (in degrees)
 * @returns {Quaternion} Orientation quaternion
 */
function computeQuaternion(alpha, beta, gamma) {
    // Convert Tait-Bryan angles to quaternion
    var quaternion = taitBryanToQuaternion(alpha, beta, gamma);
    // Apply world transform
    quaternion = quaternion.multiply(new Quaternion(Math.sqrt(0.5), -Math.sqrt(0.5), 0, 0));
    // Apply screen transform
    var angle = window.orientation ? -window.orientation * Math.PI / 180 / 2 : 0;
    return quaternion.multiply(new Quaternion(Math.cos(angle), 0, -Math.sin(angle), 0));
}

/**
 * Event handler for device orientation API. Controls pointing.
 * @private
 * @param {DeviceOrientationEvent} event - Device orientation event.
 */
function orientationListener(e) {
    var q = computeQuaternion(e.alpha, e.beta, e.gamma).toEulerAngles();
    if (typeof(orientation) == 'number' && orientation < 10) {
        // This kludge is necessary because iOS sometimes provides a few stale
        // device orientation events when the listener is removed and then
        // readded. Thus, we skip the first 10 events to prevent this from
        // causing problems.
        orientation += 1;
    } else if (orientation === 10) {
        // Record starting yaw to prevent jumping
        orientationYawOffset = q[2] / Math.PI * 180 + config.yaw;
        orientation = true;
        requestAnimationFrame(animate);
    } else {
        config.pitch = q[0] / Math.PI * 180;
        config.roll = -q[1] / Math.PI * 180;
        config.yaw = -q[2] / Math.PI * 180 + orientationYawOffset;
    }
}

/**
 * Initializes renderer.
 * @private
 */
function renderInit() {
    try {
        var params = {};
        if (config.horizonPitch !== undefined)
            params.horizonPitch = config.horizonPitch * Math.PI / 180;
        if (config.horizonRoll !== undefined)
            params.horizonRoll = config.horizonRoll * Math.PI / 180;
        if (config.backgroundColor !== undefined)
            params.backgroundColor = config.backgroundColor;
        renderer.init(panoImage, config.type, config.dynamic, config.haov * Math.PI / 180, config.vaov * Math.PI / 180, config.vOffset * Math.PI / 180, renderInitCallback, params);
        if (config.dynamic !== true) {
            // Allow image to be garbage collected
            panoImage = undefined;
        }
    } catch(event) {
        // Panorama not loaded

        // Display error if there is a bad texture
        if (event.type == 'webgl error' || event.type == 'no webgl') {
            anError();
        } else if (event.type == 'webgl size error') {
            anError(config.strings.textureSizeError.replace('%s', event.width).replace('%s', event.maxWidth));
        } else {
            anError(config.strings.unknownError);
            throw event;
        }
    }
}

/**
 * Triggered when render initialization finishes. Handles fading between
 * scenes as well as showing the compass and hotspots and hiding the loading
 * display.
 * @private
 */
function renderInitCallback() {
    // Fade if specified
    if (config.sceneFadeDuration && renderer.fadeImg !== undefined) {
        renderer.fadeImg.style.opacity = 0;
        // Remove image
        var fadeImg = renderer.fadeImg;
        delete renderer.fadeImg;
        setTimeout(function() {
            renderContainer.removeChild(fadeImg);
            fireEvent('scenechangefadedone');
        }, config.sceneFadeDuration);
    }

    // Show compass if applicable
    if (config.compass) {
        compass.style.display = 'inline';
    } else {
        compass.style.display = 'none';
    }

    // Show hotspots
    createHotSpots();

    // Hide loading display
    infoDisplay.load.box.style.display = 'none';
    if (preview !== undefined) {
        renderContainer.removeChild(preview);
        preview = undefined;
    }
    loaded = true;

    fireEvent('load');

    animateInit();
}

/**
 * Creates hot spot element for the current scene.
 * @private
 * @param {Object} hs - The configuration for the hotspot
 */
function createHotSpot(hs) {
    // Make sure hot spot pitch and yaw are numbers
    hs.pitch = Number(hs.pitch) || 0;
    hs.yaw = Number(hs.yaw) || 0;

    var div = document.createElement('div');
    div.className = 'pnlm-hotspot-base'
    if (hs.cssClass)
        div.className += ' ' + hs.cssClass;
    else
        div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);

    var span = document.createElement('span');
    if (hs.text)
        span.innerHTML = escapeHTML(hs.text);

    var a;
    if (hs.video) {
        var video = document.createElement('video'),
            p = hs.video;
        if (config.basePath && !absoluteURL(p))
            p = config.basePath + p;
        video.src = encodeURI(p);
        video.controls = true;
        video.style.width = hs.width + 'px';
        renderContainer.appendChild(div);
        span.appendChild(video);
    } else if (hs.image) {
        var p = hs.image;
        if (config.basePath && !absoluteURL(p))
            p = config.basePath + p;
        a = document.createElement('a');
        a.href = encodeURI(hs.URL ? hs.URL : p);
        a.target = '_blank';
        span.appendChild(a);
        var image = document.createElement('img');
        image.src = encodeURI(p);
        image.style.width = hs.width + 'px';
        image.style.paddingTop = '5px';
        renderContainer.appendChild(div);
        a.appendChild(image);
        span.style.maxWidth = 'initial';
    } else if (hs.URL) {
        a = document.createElement('a');
        a.href = encodeURI(hs.URL);
        a.target = '_blank';
        renderContainer.appendChild(a);
        div.style.cursor = 'pointer';
        span.style.cursor = 'pointer';
        a.appendChild(div);
    } else {
        if (hs.sceneId) {
            div.onclick = div.ontouchend = function() {
                if (!div.clicked) {
                    div.clicked = true;
                    loadScene(hs.sceneId, hs.targetPitch, hs.targetYaw, hs.targetHfov);
                }
                return false;
            };
            div.style.cursor = 'pointer';
            span.style.cursor = 'pointer';
        }
        renderContainer.appendChild(div);
    }

    if (hs.createTooltipFunc) {
        hs.createTooltipFunc(div, hs.createTooltipArgs);
    } else if (hs.text || hs.video || hs.image) {
        div.classList.add('pnlm-tooltip');
        div.appendChild(span);
        span.style.width = span.scrollWidth - 20 + 'px';
        span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
        span.style.marginTop = -span.scrollHeight - 12 + 'px';
    }
    if (hs.clickHandlerFunc) {
        div.addEventListener('click', function(e) {
            hs.clickHandlerFunc(e, hs.clickHandlerArgs);
        }, 'false');
        div.style.cursor = 'pointer';
        span.style.cursor = 'pointer';
    }
    hs.div = div;
};

/**
 * Creates hot spot elements for the current scene.
 * @private
 */
function createHotSpots() {
    if (hotspotsCreated) return;

    if (!config.hotSpots) {
        config.hotSpots = [];
    } else {
        // Sort by pitch so tooltip is never obscured by another hot spot
        config.hotSpots = config.hotSpots.sort(function(a, b) {
            return a.pitch < b.pitch;
        });
        config.hotSpots.forEach(createHotSpot);
    }
    hotspotsCreated = true;
    renderHotSpots();
}

/**
 * Destroys currently create hot spot elements.
 * @private
 */
function destroyHotSpots() {
    var hs = config.hotSpots;
    hotspotsCreated = false;
    delete config.hotSpots;
    if (hs) {
        for (var i = 0; i < hs.length; i++) {
            var current = hs[i].div;
            while(current.parentNode != renderContainer) {
                current = current.parentNode;
            }
            renderContainer.removeChild(current);
        }
        hs.length = 0;
    }
}

/**
 * Renders hot spot, updating its position and visibility.
 * @private
 */
function renderHotSpot(hs) {
    var hsPitchSin = Math.sin(hs.pitch * Math.PI / 180),
        hsPitchCos = Math.cos(hs.pitch * Math.PI / 180),
        configPitchSin = Math.sin(config.pitch * Math.PI / 180),
        configPitchCos = Math.cos(config.pitch * Math.PI / 180),
        yawCos = Math.cos((-hs.yaw + config.yaw) * Math.PI / 180);
    var z = hsPitchSin * configPitchSin + hsPitchCos * yawCos * configPitchCos;
    if ((hs.yaw <= 90 && hs.yaw > -90 && z <= 0) ||
      ((hs.yaw > 90 || hs.yaw <= -90) && z <= 0)) {
        hs.div.style.visibility = 'hidden';
    } else {
        var yawSin = Math.sin((-hs.yaw + config.yaw) * Math.PI / 180),
            hfovTan = Math.tan(config.hfov * Math.PI / 360);
        hs.div.style.visibility = 'visible';
        // Subpixel rendering doesn't work in Firefox
        // https://bugzilla.mozilla.org/show_bug.cgi?id=739176
        var canvas = renderer.getCanvas(),
            canvasWidth = canvas.clientWidth,
            canvasHeight = canvas.clientHeight;
        var coord = [-canvasWidth / hfovTan * yawSin * hsPitchCos / z / 2,
            -canvasWidth / hfovTan * (hsPitchSin * configPitchCos -
            hsPitchCos * yawCos * configPitchSin) / z / 2];
        // Apply roll
        var rollSin = Math.sin(config.roll * Math.PI / 180),
            rollCos = Math.cos(config.roll * Math.PI / 180);
        coord = [coord[0] * rollCos - coord[1] * rollSin,
                 coord[0] * rollSin + coord[1] * rollCos];
        // Apply transform
        coord[0] += (canvasWidth - hs.div.offsetWidth) / 2;
        coord[1] += (canvasHeight - hs.div.offsetHeight) / 2;
        var transform = 'translate(' + coord[0] + 'px, ' + coord[1] +
            'px) translateZ(9999px) rotate(' + config.roll + 'deg)';
        hs.div.style.webkitTransform = transform;
        hs.div.style.MozTransform = transform;
        hs.div.style.transform = transform;
    }
}

/**
 * Renders hot spots, updating their positions and visibility.
 * @private
 */
function renderHotSpots() {
    config.hotSpots.forEach(renderHotSpot);
}

/**
 * Merges a scene configuration into the current configuration.
 * @private
 * @param {string} sceneId - Identifier of scene configuration to merge in.
 */
function mergeConfig(sceneId) {
    config = {};
    var k, s;
    var photoSphereExcludes = ['haov', 'vaov', 'vOffset', 'northOffset', 'horizonPitch', 'horizonRoll'];
    specifiedPhotoSphereExcludes = [];

    // Merge default config
    for (k in defaultConfig) {
        if (defaultConfig.hasOwnProperty(k)) {
            config[k] = defaultConfig[k];
        }
    }

    // Merge default scene config
    for (k in initialConfig.default) {
        if (initialConfig.default.hasOwnProperty(k)) {
            if (k == 'strings') {
                for (s in initialConfig.default.strings) {
                    if (initialConfig.default.strings.hasOwnProperty(s)) {
                        config.strings[s] = escapeHTML(initialConfig.default.strings[s]);
                    }
                }
            } else {
                config[k] = initialConfig.default[k];
                if (photoSphereExcludes.indexOf(k) >= 0) {
                    specifiedPhotoSphereExcludes.push(k);
                }
            }
        }
    }

    // Merge current scene config
    if ((sceneId !== null) && (sceneId !== '') && (initialConfig.scenes) && (initialConfig.scenes[sceneId])) {
        var scene = initialConfig.scenes[sceneId];
        for (k in scene) {
            if (scene.hasOwnProperty(k)) {
                if (k == 'strings') {
                    for (s in scene.strings) {
                        if (scene.strings.hasOwnProperty(s)) {
                            config.strings[s] = escapeHTML(scene.strings[s]);
                        }
                    }
                } else {
                    config[k] = scene[k];
                    if (photoSphereExcludes.indexOf(k) >= 0) {
                        specifiedPhotoSphereExcludes.push(k);
                    }
                }
            }
        }
        config.scene = sceneId;
    }

    // Merge initial config
    for (k in initialConfig) {
        if (initialConfig.hasOwnProperty(k)) {
            if (k == 'strings') {
                for (s in initialConfig.strings) {
                    if (initialConfig.strings.hasOwnProperty(s)) {
                        config.strings[s] = escapeHTML(initialConfig.strings[s]);
                    }
                }
            } else {
                config[k] = initialConfig[k];
                if (photoSphereExcludes.indexOf(k) >= 0) {
                    specifiedPhotoSphereExcludes.push(k);
                }
            }
        }
    }
}

/**
 * Processes configuration options.
 * @param {boolean} [isPreview] - Whether or not the preview is being displayed
 * @private
 */
function processOptions(isPreview) {
    isPreview = isPreview ? isPreview : false;

    // Process preview first so it always loads before the browser hits its
    // maximum number of connections to a server as can happen with cubic
    // panoramas
    if (isPreview && 'preview' in config) {
        var p = config.preview;
        if (config.basePath && !absoluteURL(p))
            p = config.basePath + p;
        preview = document.createElement('div');
        preview.className = 'pnlm-preview-img';
        preview.style.backgroundImage = "url('" + encodeURI(p) + "')";
        renderContainer.appendChild(preview);
    }

    // Handle different preview values
    var title = config.title,
        author = config.author;
    if (isPreview) {
        if ('previewTitle' in config)
            config.title = config.previewTitle;
        if ('previewAuthor' in config)
            config.author = config.previewAuthor;
    }

    // Reset title / author display
    if (!config.hasOwnProperty('title'))
        infoDisplay.title.innerHTML = '';
    if (!config.hasOwnProperty('author'))
        infoDisplay.author.innerHTML = '';
    if (!config.hasOwnProperty('title') && !config.hasOwnProperty('author'))
        infoDisplay.container.style.display = 'none';

    // Fill in load button label and loading box text
    controls.load.innerHTML = '<p>' + config.strings.loadButtonLabel + '</p>';
    infoDisplay.load.box.querySelector('.pnlm-loading-title').innerHTML = config.strings.loadingLabel;

    // Process other options
    for (var key in config) {
      if (config.hasOwnProperty(key)) {
        switch(key) {
            case 'title':
                infoDisplay.title.innerHTML = escapeHTML(config[key]);
                infoDisplay.container.style.display = 'inline';
                break;

            case 'author':
                infoDisplay.author.innerHTML = config.strings.bylineLabel.replace('%s', escapeHTML(config[key]));
                infoDisplay.container.style.display = 'inline';
                break;

            case 'fallback':
                infoDisplay.errorMsg.innerHTML = '<p>Your browser does not support WebGL.<br><a href="' + encodeURI(config[key]) + '" target="_blank">Click here to view this panorama in an alternative viewer.</a></p>';
                break;

            case 'hfov':
                setHfov(Number(config[key]));
                break;

            case 'autoLoad':
                if (config[key] === true && renderer === undefined) {
                    // Show loading box
                    infoDisplay.load.box.style.display = 'inline';
                    // Hide load button
                    controls.load.style.display = 'none';
                    // Initialize
                    init();
                }
                break;

            case 'showZoomCtrl':
                if (config[key] && config.showControls != false) {
                    // Show zoom controls
                    controls.zoom.style.display = 'block';
                } else {
                    // Hide zoom controls
                    controls.zoom.style.display = 'none';
                }
                break;

            case 'showFullscreenCtrl':
                if (config[key] && config.showControls != false && ('fullscreen' in document || 'mozFullScreen' in document ||
                    'webkitIsFullScreen' in document || 'msFullscreenElement' in document)) {

                    // Show fullscreen control
                    controls.fullscreen.style.display = 'block';
                } else {
                    // Hide fullscreen control
                    controls.fullscreen.style.display = 'none';
                }
                break;

            case 'hotSpotDebug':
                if (config[key])
                    hotSpotDebugIndicator.style.display = 'block';
                else
                    hotSpotDebugIndicator.style.display = 'none';
                break;

            case 'showControls':
                if (!config[key]) {
                    controls.orientation.style.display = 'none';
                    controls.zoom.style.display = 'none';
                    controls.fullscreen.style.display = 'none';
                }
                break;

            case 'orientationOnByDefault':
                if (config[key]) {
                    if (orientationSupport === undefined)
                        startOrientationIfSupported = true;
                    else if (orientationSupport === true)
                        startOrientation();
                }
                break;
        }
      }
    }

    if (isPreview) {
        // Restore original values if changed for preview
        if (title)
            config.title = title;
        else
            delete config.title;
        if (author)
            config.author = author;
        else
            delete config.author;
    }
}

/**
 * Toggles fullscreen mode.
 * @private
 */
function toggleFullscreen() {
    if (loaded && !error) {
        if (!fullscreenActive) {
            try {
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.mozRequestFullScreen) {
                    container.mozRequestFullScreen();
                } else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                } else {
                    container.webkitRequestFullScreen();
                }
            } catch(event) {
                // Fullscreen doesn't work
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
}

/**
 * Event handler for fullscreen changes.
 * @private
 */
function onFullScreenChange() {
    if (document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement) {
        controls.fullscreen.classList.add('pnlm-fullscreen-toggle-button-active');
        fullscreenActive = true;
    } else {
        controls.fullscreen.classList.remove('pnlm-fullscreen-toggle-button-active');
        fullscreenActive = false;
    }

    // Resize renderer (deal with browser quirks and fixes #155)
    renderer.resize();
    setHfov(config.hfov);
    animateInit();
}

/**
 * Increases panorama zoom. For use with zoom button.
 * @private
 */
function zoomIn() {
    if (loaded) {
        setHfov(config.hfov - 5);
        animateInit();
    }
}

/**
 * Decreases panorama zoom. For use with zoom button.
 * @private
 */
function zoomOut() {
    if (loaded) {
        setHfov(config.hfov + 5);
        animateInit();
    }
}

/**
 * Clamps horzontal field of view to viewer's limits.
 * @private
 * @param {number} hfov - Input horizontal field of view (in degrees)
 * @return {number} - Clamped horizontal field of view (in degrees)
 */
function constrainHfov(hfov) {
    // Keep field of view within bounds
    var minHfov = config.minHfov;
    if (config.type == 'multires' && renderer) {
        minHfov = Math.min(minHfov, renderer.getCanvas().width / (config.multiRes.cubeResolution / 90 * 0.9));
    }
    if (minHfov > config.maxHfov) {
        // Don't change view if bounds don't make sense
        console.log('HFOV bounds do not make sense (minHfov > maxHfov).')
        return config.hfov;
    } if (hfov < minHfov) {
        return minHfov;
    } else if (hfov > config.maxHfov) {
        return config.maxHfov;
    } else {
        return hfov;
    }
}

/**
 * Sets viewer's horizontal field of view.
 * @private
 * @param {number} hfov - Desired horizontal field of view in degrees.
 */
function setHfov(hfov) {
    config.hfov = constrainHfov(hfov);
}

/**
 * Stops auto rotation and animated moves.
 * @private
 */
function stopAnimation() {
    animatedMove = {};
    autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
    config.autoRotate = false;
}

/**
 * Loads panorama.
 * @private
 */
function load() {
    // Since WebGL error handling is very general, first we clear any error box
    // since it is a new scene and the error from previous maybe because of lacking
    // memory etc and not because of a lack of WebGL support etc
    clearError();

    controls.load.style.display = 'none';
    infoDisplay.load.box.style.display = 'inline';
    init();
}

/**
 * Loads scene.
 * @private
 * @param {string} sceneId - Identifier of scene configuration to merge in.
 * @param {number} targetPitch - Pitch viewer should be centered on once scene loads.
 * @param {number} targetYaw - Yaw viewer should be centered on once scene loads.
 * @param {number} targetHfov - HFOV viewer should use once scene loads.
 * @param {boolean} [fadeDone] - If `true`, fade setup is skipped.
 */
function loadScene(sceneId, targetPitch, targetYaw, targetHfov, fadeDone) {
    loaded = false;
    animatedMove = {};

    // Set up fade if specified
    var fadeImg, workingPitch, workingYaw, workingHfov;
    if (config.sceneFadeDuration && !fadeDone) {
        var data = renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, {returnImage: true});
        if (data !== undefined) {
            fadeImg = new Image();
            fadeImg.className = 'pnlm-fade-img';
            fadeImg.style.transition = 'opacity ' + (config.sceneFadeDuration / 1000) + 's';
            fadeImg.style.width = '100%';
            fadeImg.style.height = '100%';
            fadeImg.onload = function() {
                loadScene(sceneId, targetPitch, targetYaw, targetHfov, true);
            };
            fadeImg.src = data;
            renderContainer.appendChild(fadeImg);
            renderer.fadeImg = fadeImg;
            return;
        }
    }

    // Set new pointing
    if (targetPitch === 'same') {
        workingPitch = config.pitch;
    } else {
        workingPitch = targetPitch;
    }
    if (targetYaw === 'same') {
        workingYaw = config.yaw;
    } else if (targetYaw === 'sameAzimuth') {
        workingYaw = config.yaw + (config.northOffset || 0) - (initialConfig.scenes[sceneId].northOffset || 0);
    } else {
        workingYaw = targetYaw;
    }
    if (targetHfov === 'same') {
        workingHfov = config.hfov;
    } else {
        workingHfov = targetHfov;
    }

    // Destroy hot spots from previous scene
    destroyHotSpots();

    // Create the new config for the scene
    mergeConfig(sceneId);

    // Stop motion
    speed.yaw = speed.pitch = speed.hfov = 0;

    // Reload scene
    processOptions();
    if (workingPitch !== undefined) {
        config.pitch = workingPitch;
    }
    if (workingYaw !== undefined) {
        config.yaw = workingYaw;
    }
    if (workingHfov !== undefined) {
        config.hfov = workingHfov;
    }
    fireEvent('scenechange', sceneId);
    load();
}

/**
 * Stop using device orientation.
 * @private
 */
function stopOrientation() {
    window.removeEventListener('deviceorientation', orientationListener);
    controls.orientation.classList.remove('pnlm-orientation-button-active');
    orientation = false;
}

/**
 * Start using device orientation.
 * @private
 */
function startOrientation() {
    orientation = 1;
    window.addEventListener('deviceorientation', orientationListener);
    controls.orientation.classList.add('pnlm-orientation-button-active');
}

/**
 * Escapes HTML string (to mitigate possible DOM XSS attacks).
 * @private
 * @param {string} s - String to escape
 * @returns {string} Escaped string
 */
function escapeHTML(s) {
    if (!initialConfig.escapeHTML)
        return String(s).split('\n').join('<br>');
    return String(s).split(/&/g).join('&amp;')
        .split('"').join('&quot;')
        .split("'").join('&#39;')
        .split('<').join('&lt;')
        .split('>').join('&gt;')
        .split('/').join('&#x2f;')
        .split('\n').join('<br>');  // Allow line breaks
}

/**
 * Checks whether or not a panorama is loaded.
 * @memberof Viewer
 * @instance
 * @returns {boolean} `true` if a panorama is loaded, else `false`
 */
this.isLoaded = function() {
    return loaded;
};

/**
 * Returns the pitch of the center of the view.
 * @memberof Viewer
 * @instance
 * @returns {number} Pitch in degrees
 */
this.getPitch = function() {
    return config.pitch;
};

/**
 * Sets the pitch of the center of the view.
 * @memberof Viewer
 * @instance
 * @param {number} pitch - Pitch in degrees
 * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
 * @param {function} [callback] - Function to call when animation finishes
 * @param {object} [callbackArgs] - Arguments to pass to callback function
 * @returns {Viewer} `this`
 */
this.setPitch = function(pitch, animated, callback, callbackArgs) {
    animated = animated == undefined ? 1000: Number(animated);
    if (animated) {
        animatedMove.pitch = {
            'startTime': Date.now(),
            'startPosition': config.pitch,
            'endPosition': pitch,
            'duration': animated,
            'callback': callback,
            'callbackArgs': callbackArgs
        }
    } else {
        config.pitch = pitch;
    }
    animateInit();
    return this;
};

/**
 * Returns the minimum and maximum allowed pitches (in degrees).
 * @memberof Viewer
 * @instance
 * @returns {number[]} [minimum pitch, maximum pitch]
 */
this.getPitchBounds = function() {
    return [config.minPitch, config.maxPitch];
};

/**
 * Set the minimum and maximum allowed pitches (in degrees).
 * @memberof Viewer
 * @instance
 * @param {number[]} bounds - [minimum pitch, maximum pitch]
 * @returns {Viewer} `this`
 */
this.setPitchBounds = function(bounds) {
    config.minPitch = Math.max(-90, Math.min(bounds[0], 90));
    config.maxPitch = Math.max(-90, Math.min(bounds[1], 90));
    return this;
};

/**
 * Returns the yaw of the center of the view.
 * @memberof Viewer
 * @instance
 * @returns {number} Yaw in degrees
 */
this.getYaw = function() {
    return config.yaw;
};

/**
 * Sets the yaw of the center of the view.
 * @memberof Viewer
 * @instance
 * @param {number} yaw - Yaw in degrees [-180, 180]
 * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
 * @param {function} [callback] - Function to call when animation finishes
 * @param {object} [callbackArgs] - Arguments to pass to callback function
 * @returns {Viewer} `this`
 */
this.setYaw = function(yaw, animated, callback, callbackArgs) {
    animated = animated == undefined ? 1000: Number(animated);
    yaw = ((yaw + 180) % 360) - 180 // Keep in bounds
    if (animated) {
        // Animate in shortest direction
        if (config.yaw - yaw > 180)
            yaw += 360
        else if (yaw - config.yaw > 180)
            yaw -= 360

        animatedMove.yaw = {
            'startTime': Date.now(),
            'startPosition': config.yaw,
            'endPosition': yaw,
            'duration': animated,
            'callback': callback,
            'callbackArgs': callbackArgs
        }
    } else {
        config.yaw = yaw;
    }
    animateInit();
    return this;
};

/**
 * Returns the minimum and maximum allowed pitches (in degrees).
 * @memberof Viewer
 * @instance
 * @returns {number[]} [yaw pitch, maximum yaw]
 */
this.getYawBounds = function() {
    return [config.minYaw, config.maxYaw];
};

/**
 * Set the minimum and maximum allowed yaws (in degrees [-180, 180]).
 * @memberof Viewer
 * @instance
 * @param {number[]} bounds - [minimum yaw, maximum yaw]
 * @returns {Viewer} `this`
 */
this.setYawBounds = function(bounds) {
    config.minYaw = Math.max(-180, Math.min(bounds[0], 180));
    config.maxYaw = Math.max(-180, Math.min(bounds[1], 180));
    return this;
};

/**
 * Returns the horizontal field of view.
 * @memberof Viewer
 * @instance
 * @returns {number} Horizontal field of view in degrees
 */
this.getHfov = function() {
    return config.hfov;
};

/**
 * Sets the horizontal field of view.
 * @memberof Viewer
 * @instance
 * @param {number} hfov - Horizontal field of view in degrees
 * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
 * @param {function} [callback] - Function to call when animation finishes
 * @param {object} [callbackArgs] - Arguments to pass to callback function
 * @returns {Viewer} `this`
 */
this.setHfov = function(hfov, animated, callback, callbackArgs) {
    animated = animated == undefined ? 1000: Number(animated);
    if (animated) {
        animatedMove.hfov = {
            'startTime': Date.now(),
            'startPosition': config.hfov,
            'endPosition': constrainHfov(hfov),
            'duration': animated,
            'callback': callback,
            'callbackArgs': callbackArgs
        }
    } else {
        setHfov(hfov);
    }
    animateInit();
    return this;
};

/**
 * Returns the minimum and maximum allowed horizontal fields of view
 * (in degrees).
 * @memberof Viewer
 * @instance
 * @returns {number[]} [minimum hfov, maximum hfov]
 */
this.getHfovBounds = function() {
    return [config.minHfov, config.maxHfov];
};

/**
 * Set the minimum and maximum allowed horizontal fields of view (in degrees).
 * @memberof Viewer
 * @instance
 * @param {number[]} bounds - [minimum hfov, maximum hfov]
 * @returns {Viewer} `this`
 */
this.setHfovBounds = function(bounds) {
    config.minHfov = Math.max(0, bounds[0]);
    config.maxHfov = Math.max(0, bounds[1]);
    return this;
};

/**
 * Set a new view. Any parameters not specified remain the same.
 * @memberof Viewer
 * @instance
 * @param {number} [pitch] - Target pitch
 * @param {number} [yaw] - Target yaw
 * @param {number} [hfov] - Target hfov
 * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
 * @param {function} [callback] - Function to call when animation finishes
 * @param {object} [callbackArgs] - Arguments to pass to callback function
 * @returns {Viewer} `this`
 */
this.lookAt = function(pitch, yaw, hfov, animated, callback, callbackArgs) {
    animated = animated == undefined ? 1000: Number(animated);
    if (pitch !== undefined) {
        this.setPitch(pitch, animated, callback, callbackArgs);
        callback = undefined;
    }
    if (yaw !== undefined) {
        this.setYaw(yaw, animated, callback, callbackArgs);
        callback = undefined;
    }
    if (hfov !== undefined)
        this.setHfov(hfov, animated, callback, callbackArgs);
    return this;
}

/**
 * Returns the panorama's north offset.
 * @memberof Viewer
 * @instance
 * @returns {number} North offset in degrees
 */
this.getNorthOffset = function() {
    return config.northOffset;
};

/**
 * Sets the panorama's north offset.
 * @memberof Viewer
 * @instance
 * @param {number} heading - North offset in degrees
 * @returns {Viewer} `this`
 */
this.setNorthOffset = function(heading) {
    config.northOffset = Math.min(360, Math.max(0, heading));
    animateInit();
    return this;
};

/**
 * Returns the panorama's horizon roll.
 * @memberof Viewer
 * @instance
 * @returns {number} Horizon roll in degrees
 */
this.getHorizonRoll = function() {
    return config.horizonRoll;
};

/**
 * Sets the panorama's horizon roll.
 * @memberof Viewer
 * @instance
 * @param {number} roll - Horizon roll in degrees [-90, 90]
 * @returns {Viewer} `this`
 */
this.setHorizonRoll = function(roll) {
    config.horizonRoll = Math.min(90, Math.max(-90, roll));
    renderer.setPose(config.horizonPitch * Math.PI / 180, config.horizonRoll * Math.PI / 180);
    animateInit();
    return this;
};

/**
 * Returns the panorama's horizon pitch.
 * @memberof Viewer
 * @instance
 * @returns {number} Horizon pitch in degrees
 */
this.getHorizonPitch = function() {
    return config.horizonPitch;
};

/**
 * Sets the panorama's horizon pitch.
 * @memberof Viewer
 * @instance
 * @param {number} pitch - Horizon pitch in degrees [-90, 90]
 * @returns {Viewer} `this`
 */
this.setHorizonPitch = function(pitch) {
    config.horizonPitch = Math.min(90, Math.max(-90, pitch));
    renderer.setPose(config.horizonPitch * Math.PI / 180, config.horizonRoll * Math.PI / 180);
    animateInit();
    return this;
};

/**
 * Start auto rotation.
 * @memberof Viewer
 * @instance
 * @param {number} [speed] - Auto rotation speed / direction. If not specified, previous value is used.
 * @returns {Viewer} `this`
 */
this.startAutoRotate = function(speed) {
    speed = speed || autoRotateSpeed || 1;
    config.autoRotate = speed;
    _this.lookAt(origPitch, undefined, origHfov, 3000);
    animateInit();
    return this;
};

/**
 * Stop auto rotation.
 * @memberof Viewer
 * @instance
 * @returns {Viewer} `this`
 */
this.stopAutoRotate = function() {
    autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
    config.autoRotate = false;
    config.autoRotateInactivityDelay = -1;
    return this;
};

/**
 * Returns the panorama renderer.
 * @memberof Viewer
 * @instance
 * @returns {Renderer}
 */
this.getRenderer = function() {
    return renderer;
};

/**
 * Sets update flag for dynamic content.
 * @memberof Viewer
 * @instance
 * @param {boolean} bool - Whether or not viewer should update even when still
 * @returns {Viewer} `this`
 */
this.setUpdate = function(bool) {
    update = bool === true;
    if (renderer === undefined)
        onImageLoad();
    else
        animateInit();
    return this;
}

/**
 * Calculate panorama pitch and yaw from location of mouse event.
 * @memberof Viewer
 * @instance
 * @param {MouseEvent} event - Document mouse down event.
 * @returns {number[]} [pitch, yaw]
 */
this.mouseEventToCoords = function(event) {
    return mouseEventToCoords(event);
}

/**
 * Change scene being viewed.
 * @memberof Viewer
 * @instance
 * @param {string} sceneId - Identifier of scene to switch to.
 * @param {number} [pitch] - Pitch to use with new scene
 * @param {number} [yaw] - Yaw to use with new scene
 * @param {number} [hfov] - HFOV to use with new scene
 * @returns {Viewer} `this`
 */
this.loadScene = function(sceneId, pitch, yaw, hfov) {
    if (loaded)
        loadScene(sceneId, pitch, yaw, hfov);
    return this;
}

/**
 * Get ID of current scene.
 * @memberof Viewer
 * @instance
 * @returns {string} ID of current scene
 */
this.getScene = function() {
    return config.scene;
}

/**
 * Add a new scene.
 * @memberof Viewer
 * @instance
 * @param {string} sceneId - The ID of the new scene
 * @param {string} config - The configuration of the new scene
 * @returns {Viewer} `this`
 */
this.addScene = function(sceneId, config) {
    initialConfig.scenes[sceneId] = config;
    return this;
};

/**
 * Remove a scene.
 * @memberof Viewer
 * @instance
 * @param {string} sceneId - The ID of the scene
 * @returns {boolean} False if the scene is the current scene or if the scene doesn't exists, else true
 */
this.removeScene = function(sceneId) {
    if (config.scene === sceneId || !initialConfig.scenes.hasOwnProperty(sceneId))
        return false;
    delete initialConfig.scenes[sceneId];
    return true;
};

/**
 * Toggle fullscreen.
 * @memberof Viewer
 * @instance
 * @returns {Viewer} `this`
 */
this.toggleFullscreen = function() {
    toggleFullscreen();
    return this;
}

/**
 * Get configuration of current scene.
 * @memberof Viewer
 * @instance
 * @returns {Object} Configuration of current scene
 */
this.getConfig = function() {
    return config;
}

/**
 * Add a new hot spot.
 * @memberof Viewer
 * @instance
 * @param {Object} hs - The configuration for the hot spot
 * @param {string} [sceneId] - Adds hot spot to specified scene if provided, else to current scene
 * @returns {Viewer} `this`
 * @throws Throws an error if the scene ID is provided but invalid
 */
this.addHotSpot = function(hs, sceneId) {
    if (sceneId === undefined && config.scene === undefined) {
        // Not a tour
        config.hotSpots.push(hs);
    } else {
        // Tour
        var id = sceneId !== undefined ? sceneId : config.scene;
        if (initialConfig.scenes.hasOwnProperty(id)) {
            if (!initialConfig.scenes[id].hasOwnProperty('hotSpots')) {
                initialConfig.scenes[id].hotSpots = []; // Create hot spots array if needed
                if (id == config.scene)
                    config.hotSpots = initialConfig.scenes[id].hotSpots;    // Link to current config
            }
            initialConfig.scenes[id].hotSpots.push(hs); // Add hot spot to config
        } else {
            throw 'Invalid scene ID!'
        }
    }
    if (sceneId === undefined || config.scene == sceneId) {
        // Add to current scene
        createHotSpot(hs);
        if (loaded)
            renderHotSpot(hs);
    }
    return this;
}

/**
 * Remove a hot spot.
 * @memberof Viewer
 * @instance
 * @param {string} hotSpotId - The ID of the hot spot
 * @returns {boolean} True if deletion is successful, else false
 */
this.removeHotSpot = function(hotSpotId) {
    if (!config.hotSpots)
        return false;
    for (var i = 0; i < config.hotSpots.length; i++) {
        if (config.hotSpots[i].hasOwnProperty('id') &&
            config.hotSpots[i].id === hotSpotId) {
            // Delete hot spot DOM elements
            var current = config.hotSpots[i].div;
            while (current.parentNode != renderContainer)
                current = current.parentNode;
            renderContainer.removeChild(current);
            delete config.hotSpots[i].div;
            // Remove hot spot from configuration
            config.hotSpots.splice(i, 1);
            return true;
        }
    }
    return false;
}

/**
 * This method should be called if the viewer's container is resized.
 * @memberof Viewer
 * @instance
 */
this.resize = function() {
    onDocumentResize();
}

/**
 * Check if a panorama is loaded.
 * @memberof Viewer
 * @instance
 * @returns {boolean} True if a panorama is loaded, else false
 */
this.isLoaded = function() {
    return loaded;
}

/**
 * Check if device orientation control is supported.
 * @memberof Viewer
 * @instance
 * @returns {boolean} True if supported, else false
 */
this.isOrientationSupported = function() {
    return orientationSupport || false;
}

/**
 * Stop using device orientation.
 * @memberof Viewer
 * @instance
 */
this.stopOrientation = function() {
    stopOrientation();
}

/**
 * Start using device orientation (does nothing if not supported).
 * @memberof Viewer
 * @instance
 */
this.startOrientation = function() {
    if (orientationSupport)
        startOrientation();
}

/**
 * Subscribe listener to specified event.
 * @memberof Viewer
 * @instance
 * @param {string} type - Type of event to subscribe to.
 * @param {Function} listener - Listener function to subscribe to event.
 * @returns {Viewer} `this`
 */
this.on = function(type, listener) {
    externalEventListeners[type] = externalEventListeners[type] || [];
    externalEventListeners[type].push(listener);
    return this;
}

/**
 * Remove an event listener (or listeners).
 * @memberof Viewer
 * @param {string} [type] - Type of event to remove listeners from. If not specified, all listeners are removed.
 * @param {Function} [listener] - Listener function to remove. If not specified, all listeners of specified type are removed.
 * @returns {Viewer} `this`
 */
this.off = function(type, listener) {
    if (!type) {
        // Remove all listeners if type isn't specified
        externalEventListeners = {};
        return this;
    }
    if (listener) {
        var i = externalEventListeners[type].indexOf(listener);
        if (i >= 0) {
            // Remove listener if found
            externalEventListeners[type].splice(i, 1);
        }
        if (externalEventListeners[type].length == 0) {
            // Remove category if empty
            delete externalEventListeners[type];
        }
    } else {
        // Remove category of listeners if listener isn't specified
        delete externalEventListeners[type];
    }
    return this;
}

/**
 * Fire listeners attached to specified event.
 * @private
 * @param {string} [type] - Type of event to fire listeners for.
 */
function fireEvent(type) {
    if (type in externalEventListeners) {
        // Reverse iteration is useful, if event listener is removed inside its definition
        for (var i = externalEventListeners[type].length; i > 0; i--) {
            externalEventListeners[type][externalEventListeners[type].length - i].apply(null, [].slice.call(arguments, 1));
        }
    }
}

/**
 * Destructor.
 * @instance
 * @memberof Viewer
 */
this.destroy = function() {
    if (renderer)
        renderer.destroy()
    if (listenersAdded) {
        dragFix.removeEventListener('mousedown', onDocumentMouseDown, false);
        dragFix.removeEventListener('dblclick', onDocumentDoubleClick, false);
        document.removeEventListener('mousemove', onDocumentMouseMove, false);
        document.removeEventListener('mouseup', onDocumentMouseUp, false);
        container.removeEventListener('mousewheel', onDocumentMouseWheel, false);
        container.removeEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
        container.removeEventListener('mozfullscreenchange', onFullScreenChange, false);
        container.removeEventListener('webkitfullscreenchange', onFullScreenChange, false);
        container.removeEventListener('msfullscreenchange', onFullScreenChange, false);
        container.removeEventListener('fullscreenchange', onFullScreenChange, false);
        window.removeEventListener('resize', onDocumentResize, false);
        window.removeEventListener('orientationchange', onDocumentResize, false);
        container.removeEventListener('keydown', onDocumentKeyPress, false);
        container.removeEventListener('keyup', onDocumentKeyUp, false);
        container.removeEventListener('blur', clearKeys, false);
        document.removeEventListener('mouseleave', onDocumentMouseUp, false);
        dragFix.removeEventListener('touchstart', onDocumentTouchStart, false);
        dragFix.removeEventListener('touchmove', onDocumentTouchMove, false);
        dragFix.removeEventListener('touchend', onDocumentTouchEnd, false);
        dragFix.removeEventListener('pointerdown', onDocumentPointerDown, false);
        dragFix.removeEventListener('pointermove', onDocumentPointerMove, false);
        dragFix.removeEventListener('pointerup', onDocumentPointerUp, false);
        dragFix.removeEventListener('pointerleave', onDocumentPointerUp, false);
    }
    container.innerHTML = '';
    container.classList.remove('pnlm-container');
    uiContainer.classList.remove('pnlm-grab');
    uiContainer.classList.remove('pnlm-grabbing');
}

}

return {
    viewer: function(container, config) {
        return new Viewer(container, config);
    }
};

})(window, document);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = () => {
    return (new Date()).valueOf().toString();
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Defer {
    constructor() {
        const promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        this.promise = promise;
    }
}
exports.default = Defer;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const linkstate_1 = __webpack_require__(14);
const anchorme_1 = __webpack_require__(15);
const createDOMPurify = __webpack_require__(19);
const preact_1 = __webpack_require__(2);
const DOMPurify = createDOMPurify();
class InfoElement extends preact_1.Component {
    constructor(props) {
        super();
        props.classPrefix = props.classPrefix ? `${props.classPrefix}-info-element` : 'info-element';
        this.state = {
            isOpen: false,
            title: props.title,
            description: props.description,
            _title: props.title,
            _description: props.description
        };
    }
    render(props, state) {
        const description = props.isEdit && state.isOpen ? state._description : this.addAnyLink(state._description);
        let headerClass = `${props.classPrefix}-header ` + (state.isOpen ? '' : `${props.classPrefix}-clickable`);
        headerClass += state.isOpen && props.isEdit ? `${props.classPrefix}-editable` : '';
        const closeClass = `${props.classPrefix}-close ${props.classPrefix}-clickable`;
        let bodyClass = `${props.classPrefix}-body `;
        bodyClass += state.isOpen && props.isEdit ? `${props.classPrefix}-editable` : '';
        return (preact_1.h("div", { ref: (dom) => { this.dom = dom; }, class: `${props.classPrefix}`, id: props.id },
            state.isOpen && preact_1.h("button", { class: closeClass, onClick: this._onClose.bind(this) }, "x"),
            preact_1.h("h4", { contentEditable: props.isEdit, class: headerClass, onInput: linkstate_1.default(this, '_title', 'target.textContent'), onClick: (e) => { !state.isOpen && this._toggleView(); } }, state._title),
            state.isOpen &&
                preact_1.h("p", { contentEditable: props.isEdit, class: bodyClass, onInput: linkstate_1.default(this, '_description', 'target.textContent'), dangerouslySetInnerHTML: !props.isEdit && { __html: this.sanitize(description) } }, props.isEdit && description),
            state.isOpen && props.isEdit &&
                preact_1.h("div", { class: `${props.classPrefix}-footer ` },
                    preact_1.h("button", { onClick: this._updateContent.bind(this) },
                        preact_1.h("i", { class: 'fa fa-disk' }),
                        "Save"),
                    "\u00A0",
                    preact_1.h("button", { onClick: this._onDelete.bind(this) },
                        preact_1.h("i", { class: 'fa fa-trash' }),
                        "Delete"))));
    }
    sanitize(text) {
        return DOMPurify.sanitize(text, {
            ALLOWED_ATTR: ['href'],
            ALLOWED_TAGS: ['a']
        });
    }
    addAnyLink(text) {
        return anchorme_1.default(text);
    }
    _updateContent(e) {
        this.setState({
            title: this.state._title,
            description: this.state._description
        });
        this._toggleView(false);
        this._dispatchEvent(InfoElement.EVENTS.UPDATE_INFO_ELEMENT);
    }
    _toggleView(show) {
        let isOpen;
        if (typeof show !== 'boolean') {
            isOpen = !this.state.isOpen;
        }
        else {
            isOpen = show;
        }
        this.setState({
            isOpen
        });
        this._dispatchEvent(InfoElement.EVENTS.TOGGLE_INFO_ELEMENT);
    }
    _onClose(ev) {
        this.setState({
            _description: this.state.description,
            _title: this.state.title
        });
        this._toggleView(false);
    }
    _onDelete(evt) {
        this._dispatchEvent(InfoElement.EVENTS.DELETE_INFO_ELEMENT);
    }
    _dispatchEvent(eventName, info = this._getSimpleState()) {
        const event = new CustomEvent(eventName, { bubbles: true, detail: info });
        this.dom.dispatchEvent(event);
    }
    _getSimpleState() {
        return {
            title: this.state.title,
            description: this.state.description,
            id: this.props.id
        };
    }
}
InfoElement.EVENTS = {
    UPDATE_INFO_ELEMENT: 'UPDATE_INFO_ELEMENT',
    TOGGLE_INFO_ELEMENT: 'TOGGLE_INFO_ELEMENT',
    DELETE_INFO_ELEMENT: 'DELETE_INFO_ELEMENT'
};
exports.default = InfoElement;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function dlv(obj, key, def, p) {
	p = 0;
	key = key.split ? key.split('.') : key;
	while (obj && p<key.length) { obj = obj[key[p++]]; }
	return obj===undefined ? def : obj;
}

/** Create an Event handler function that sets a given state property.
 *	@param {Component} component	The component whose state should be updated
 *	@param {string} key				A dot-notated key path to update in the component's state
 *	@param {string} eventPath		A dot-notated key path to the value that should be retrieved from the Event or component
 *	@returns {function} linkedStateHandler
 */
function linkState(component, key, eventPath) {
	var path = key.split('.'),
		cache = component.__lsc || (component.__lsc = {});

	return cache[key+eventPath] || (cache[key+eventPath] = function(e) {
		var t = e && e.target || this,
			state = {},
			obj = state,
			v = typeof eventPath==='string' ? dlv(e, eventPath) : t.nodeName ? (t.type.match(/^che|rad/) ? t.checked : t.value) : e,
			i = 0;
		for ( ; i<path.length-1; i++) {
			obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
		}
		obj[path[i]] = v;
		component.setState(state);
	});
}

/* harmony default export */ __webpack_exports__["default"] = (linkState);
//# sourceMappingURL=linkstate.es.js.map


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var email_1 = __webpack_require__(3);
var ip_1 = __webpack_require__(4);
var url_1 = __webpack_require__(5);
var transform_1 = __webpack_require__(16);
var hasprotocol_1 = __webpack_require__(7);
var anchorme = function (str, options) {
    options = util_1.defaultOptions(options);
    var result = transform_1.default(str, options);
    return result;
};
// exposing few functions for extra uses
anchorme.validate = {
    ip: ip_1.default,
    url: function (input) {
        // simple wrapper that does what "identify.ts" does initially
        // remove the protocal
        var protocol = hasprotocol_1.default(input) || "";
        input = input.substr(protocol.length);
        input = encodeURI(input);
        return url_1.default(input);
    },
    email: email_1.default
};
exports.default = anchorme;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var separate_1 = __webpack_require__(6);
var identify_1 = __webpack_require__(18);
var separate_2 = __webpack_require__(6);
function default_1(str, options) {
    var arr = separate_2.separate(str);
    var identified = identify_1.default(arr, options);
    // custom filtering-out function
    if (options.exclude) {
        for (var index = 0; index < identified.length; index++) {
            var element = identified[index];
            if (typeof element === "object" && options.exclude(element))
                identified[index] = element.raw;
        }
    }
    // return the current list (with words being filtered out)
    if (options.list) {
        var listed = [];
        for (var i = 0; i < identified.length; i++) {
            var fragment = identified[i];
            if (typeof fragment !== "string")
                listed.push(fragment);
        }
        return listed;
    }
    // transform objects to HTML tags
    identified = identified.map(function (fragment) {
        if (typeof fragment === "string")
            return fragment;
        return url2tag(fragment, options);
    });
    // join and return
    return separate_1.deSeparate(identified);
}
exports.default = default_1;
function url2tag(fragment, options) {
    var href = fragment.protocol + fragment.encoded;
    var original = fragment.raw;
    if (typeof options.truncate === "number") {
        if (original.length > options.truncate)
            original = original.substring(0, options.truncate) + "...";
    }
    if (typeof options.truncate === "object") {
        if (original.length > (options.truncate[0] + options.truncate[1]))
            original = original.substr(0, options.truncate[0]) + "..." + original.substr(original.length - options.truncate[1]);
    }
    if (options.attributes === undefined)
        options.attributes = [];
    return "<a href=\"" + href + "\" " + options.attributes.map(function (attribute) {
        if (typeof attribute === 'function') {
            var name = (attribute(fragment) || {}).name;
            var value = (attribute(fragment) || {}).value;
            if (name && !value)
                return " name ";
            if (name && value)
                return " " + name + "=\"" + value + "\" ";
        }
        else
            return " " + attribute.name + "=\"" + attribute.value + "\" ";
    }).join("") + ">" + original + "</a>";
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *
 * @hack
 *
 * This is a dirty hack to fix URLs that have parenthesis and quotation marks in them
 * For example take this paragraph:
 *
 * """"
 * I visited this url: "http://www.wikipedia.com/some_article(with_paranthesis)"
 * and this URL: (http://www.wikipedia.com/some_article(with_paranthesis))
 * """"
 *
 * The quotation marks `'` `"` and parenthesis `(` `)` `[` `]`
 * can be considered to be part of the URL, and as a
 * punctuation marks surrounding the URL.
 * While this hack works for the most part, it's quite dirty and
 * I may replace it with something better in the future.
 *
 *
 * Another fix is removing punctuation marks that may appear at the end of URL
 * Example:
 *
 * """"
 * I've visited google.com, facebook.com, and yahoo.com.
 * """"
 *
 * @todo: replace the following function with something cleaner.
 *
 *
**/

Object.defineProperty(exports, "__esModule", { value: true });
function fixSeparators(arr, sep1, sep2) {
    arr.forEach(function (bit, i) {
        if ((bit.indexOf(".") > -1) &&
            (!(arr[i - 1] === sep1 && arr[i + 1] === sep2)) &&
            (arr[i + 1] === sep1 || arr[i + 1] === sep2) // the one after it, is either sep1 or sep2
        ) {
            arr[i] = arr[i] + arr[i + 1];
            if (typeof arr[i + 2] === "string")
                arr[i] = arr[i] + arr[i + 2];
            if (typeof arr[i + 3] === "string")
                arr[i] = arr[i] + arr[i + 3];
            if (typeof arr[i + 4] === "string")
                arr[i] = arr[i] + arr[i + 4];
            arr.splice(i + 1, 4);
            fixSeparators(arr, sep1, sep2);
        }
    });
    return arr;
}
exports.fixSeparators = fixSeparators;
function default_1(arr) {
    arr = fixSeparators(arr, "(", ")");
    arr = fixSeparators(arr, "[", "]");
    arr = fixSeparators(arr, "\"", "\"");
    arr = fixSeparators(arr, "'", "'");
    return arr;
}
exports.default = default_1;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = __webpack_require__(3);
var hasprotocol_1 = __webpack_require__(7);
var lists_1 = __webpack_require__(1);
var ip_1 = __webpack_require__(4);
var url_1 = __webpack_require__(5);
function default_1(inputArr, options) {
    return inputArr.map(function (fragment, index) {
        var encoded = encodeURI(fragment);
        // quick validations
        // 1
        if (encoded.indexOf(".") < 1 && (!hasprotocol_1.default(encoded)))
            return fragment;
        var urlObj = null;
        var protocol = hasprotocol_1.default(encoded) || "";
        // remove the protocol before proceeding to any other test
        if (protocol)
            encoded = encoded.substr(protocol.length);
        // test 1: it's a file
        if (options.files && protocol === "file:///" && encoded.split(/\/|\\/).length - 1) {
            urlObj = {
                reason: "file",
                protocol: protocol,
                raw: fragment,
                encoded: encoded,
            };
        }
        // test 2: it's a URL
        if ((!urlObj) && options.urls && url_1.default(encoded)) {
            urlObj = {
                reason: "url",
                protocol: protocol ? protocol : typeof options.defaultProtocol === "function" ? options.defaultProtocol(fragment) : options.defaultProtocol,
                raw: fragment,
                encoded: encoded,
            };
        }
        // test 3: it's an email
        if ((!urlObj) && options.emails && email_1.default(encoded)) {
            urlObj = {
                reason: "email",
                protocol: "mailto:",
                raw: fragment,
                encoded: encoded,
            };
        }
        // test 4: it's an IP
        if ((!urlObj) && options.ips && ip_1.default(encoded)) {
            urlObj = {
                reason: "ip",
                protocol: protocol ? protocol : typeof options.defaultProtocol === "function" ? options.defaultProtocol(fragment) : options.defaultProtocol,
                raw: fragment,
                encoded: encoded,
            };
        }
        if (!urlObj)
            return fragment;
        else {
            if ((inputArr[index - 1] === "'" || inputArr[index - 1] === '"') && ~lists_1.htmlAttrs.indexOf(inputArr[index - 2]))
                return fragment;
            return urlObj;
        }
    });
}
exports.default = default_1;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DOMPurify = factory());
}(this, (function () { 'use strict';

var html = ['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

// SVG
var svg = ['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern'];

var svgFilters = ['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence'];

var mathMl = ['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmuliscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mpspace', 'msqrt', 'mystyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover'];

var text = ['#text'];

var html$1 = ['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns'];

var svg$1 = ['accent-height', 'accumulate', 'additivive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan'];

var mathMl$1 = ['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns'];

var xml = ['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink'];

/* Add properties to a lookup table */
function addToSet(set, array) {
  var l = array.length;
  while (l--) {
    if (typeof array[l] === 'string') {
      array[l] = array[l].toLowerCase();
    }
    set[array[l]] = true;
  }
  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = {};
  var property = void 0;
  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      newObject[property] = object[property];
    }
  }
  return newObject;
}

var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm; // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;
var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/; // eslint-disable-line no-useless-escape
var ARIA_ATTR = /^aria-[\-\w]+$/; // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i; // eslint-disable-line no-useless-escape
var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g; // This needs to be extensive thanks to Webkit/Blink's behavior

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */
  DOMPurify.version = '1.0.3';

  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;
  var useDOMParser = false; // See comment below
  var useXHR = false;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      _window$XMLHttpReques = window.XMLHttpRequest,
      XMLHttpRequest = _window$XMLHttpReques === undefined ? window.XMLHttpRequest : _window$XMLHttpReques,
      _window$encodeURI = window.encodeURI,
      encodeURI = _window$encodeURI === undefined ? window.encodeURI : _window$encodeURI;

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      getElementsByTagName = _document.getElementsByTagName,
      createDocumentFragment = _document.createDocumentFragment;

  var importNode = originalDocument.importNode;

  var hooks = {};

  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

  var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
      ERB_EXPR$$1 = ERB_EXPR,
      DATA_ATTR$$1 = DATA_ATTR,
      ARIA_ATTR$$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;


  var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */
  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for jQuery's $() factory? */
  var SAFE_FOR_JQUERY = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify. */
  var RETURN_DOM_IMPORT = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
   * _parseConfig
   *
   * @param  optional config literal
   */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    /* Shield configuration object from tampering */
    if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }
    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (Object && 'freeze' in Object) {
      Object.freeze(cfg);
    }

    CONFIG = cfg;
  };

  /**
   * _forceRemove
   *
   * @param  a DOM node
   */
  var _forceRemove = function _forceRemove(node) {
    DOMPurify.removed.push({ element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (err) {
      node.outerHTML = '';
    }
  };

  /**
   * _removeAttribute
   *
   * @param  an Attribute name
   * @param  a DOM node
   */
  var _removeAttribute = function _removeAttribute(name, node) {
    DOMPurify.removed.push({
      attribute: node.getAttributeNode(name),
      from: node
    });
    node.removeAttribute(name);
  };

  /**
   * _initDocument
   *
   * @param  a string of dirty markup
   * @return a DOM, filled with the dirty markup
   */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var body = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    }

    /* Use XHR if necessary because Safari 10.1 and newer are buggy */
    if (useXHR) {
      try {
        dirty = encodeURI(dirty);
      } catch (err) {}
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'document';
      xhr.open('GET', 'data:text/html;charset=utf-8,' + dirty, false);
      xhr.send(null);
      doc = xhr.response;
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (err) {}
    }

    /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
    Safari (see comment below) */
    if (!doc || !doc.documentElement) {
      doc = implementation.createHTMLDocument('');
      body = doc.body;
      body.parentNode.removeChild(body.parentNode.firstElementChild);
      body.outerHTML = dirty;
    }

    /* Work on whole document or just its body */
    return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
  };

  // Safari 10.1+ (unfixed as of time of writing) has a catastrophic bug in
  // its implementation of DOMParser such that the following executes the
  // JavaScript:
  //
  // new DOMParser()
  //   .parseFromString('<svg onload=alert(document.domain)>', 'text/html');
  //
  // Later, it was also noticed that even more assumed benign and inert ways
  // of creating a document are now insecure thanks to Safari. So we work
  // around that with a feature test and use XHR to create the document in
  // case we really have to. That one seems safe for now.
  //
  // However, Firefox uses a different parser for innerHTML rather than
  // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
  // which means that you *must* use DOMParser, otherwise the output may
  // not be safe if used in a document.write context later.
  //
  // So we feature detect the Firefox bug and use the DOMParser if necessary.
  if (DOMPurify.isSupported) {
    (function () {
      var doc = _initDocument('<svg><g onload="this.parentNode.remove()"></g></svg>');
      if (!doc.querySelector('svg')) {
        useXHR = true;
      }
      try {
        doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (err) {}
    })();
  }

  /**
   * _createIterator
   *
   * @param  document/fragment to create iterator for
   * @return iterator instance
   */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
      return NodeFilter.FILTER_ACCEPT;
    }, false);
  };

  /**
   * _isClobbered
   *
   * @param  element to check for clobbering attacks
   * @return true if clobbered, false if safe
   */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }
    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
      return true;
    }
    return false;
  };

  /**
   * _isNode
   *
   * @param object to check whether it's a DOM node
   * @return true is object is a DOM node
   */
  var _isNode = function _isNode(obj) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
  };

  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode
   */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    hooks[entryPoint].forEach(function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   node to check for permission to exist
   * @return  true if node was killed, false if left alive
   */
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = currentNode.nodeName.toLowerCase();

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for black-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
        try {
          currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
        } catch (err) {}
      }
      _forceRemove(currentNode);
      return true;
    }

    /* Convert markup to cover jQuery behavior */
    if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
      DOMPurify.removed.push({ element: currentNode.cloneNode() });
      currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = content.replace(MUSTACHE_EXPR$$1, ' ');
      content = content.replace(ERB_EXPR$$1, ' ');
      if (currentNode.textContent !== content) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param   node to sanitize
   * @return  void
   */
  // eslint-disable-next-line complexity
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var name = void 0;
    var value = void 0;
    var lcName = void 0;
    var idAttr = void 0;
    var attributes = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */
    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      name = attr.name;
      value = attr.value.trim();
      lcName = name.toLowerCase();

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;

      /* Remove attribute */
      // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
      // remove a "name" attribute from an <img> tag that has an "id"
      // attribute at the time.
      if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
        idAttr = attributes.id;
        attributes = Array.prototype.slice.apply(attributes);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
        continue;
      } else {
        // This avoids a crash in Safari v9.0 with double-ids.
        // The trick is to first set the id to be empty and then to
        // remove the attribute
        if (name === 'id') {
          currentNode.setAttribute(name, '');
        }
        _removeAttribute(name, currentNode);
      }

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = value.replace(MUSTACHE_EXPR$$1, ' ');
        value = value.replace(ERB_EXPR$$1, ' ');
      }

      /* Allow valid data-* attributes: At least one character after "-"
         (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
         XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
         We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
        // This attribute is safe
      } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
        // This attribute is safe
        /* Otherwise, check the name is permitted */
      } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        continue;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) {
        // This attribute is safe
        /* Check no script, data or unknown possibly unsafe URI
         unless we know URI values are safe for that attribute */
      } else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
        // This attribute is safe
        /* Keep image data URIs alive if src/xlink:href is allowed */
      } else if ((lcName === 'src' || lcName === 'xlink:href') && value.indexOf('data:') === 0 && DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
        // This attribute is safe
        /* Allow unknown protocols: This provides support for links that
         are handled by protocol handlers which may be unknown ahead of
         time, e.g. fb:, spotify: */
      } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
        // This attribute is safe
        /* Check for binary attributes */
        // eslint-disable-next-line no-negated-condition
      } else if (!value) {
        // Binary attributes are safe at this point
        /* Anything else, presume unsafe, do not add it back */
      } else {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        currentNode.setAttribute(name, value);
        DOMPurify.removed.pop();
      } catch (err) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
   * _sanitizeShadowDOM
   *
   * @param  fragment to iterate over recursively
   * @return void
   */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    if (!dirty) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw new TypeError('toString is not a function');
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw new TypeError('dirty is not a string, aborting');
        }
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        } else if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }
      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!-->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
        return dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : '';
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /* AdoptNode() is not used because internal state is not reset
               (e.g. the past names map of a HTMLFormElement), this is safe
               in theory but we would rather not risk another attack vector.
               The state that is cloned by importNode() is explicitly defined
               by the specs. */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
  };

  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} configuration object
   * @return void
   */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
   * Public method to remove the configuration
   * clearConfig
   *
   * @return void
   */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint
   * @param {Function} hookFunction
   */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    hooks[entryPoint].push(hookFunction);
  };

  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint
   * @return void
   */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint].pop();
    }
  };

  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint
   * @return void
   */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   * @return void
   */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

return purify;

})));
//# sourceMappingURL=purify.js.map


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor(array = [], prop = 'id') {
        this._prop = prop;
        this._array = array;
        this.table = this._arrayToDict(this._array);
    }
    add(item) {
        this._array.push(item);
        this.table[item[this._prop]] = item;
        return this;
    }
    delete(item) {
        if (typeof item === 'string' || typeof item === 'number') {
            item = this.get(item);
        }
        if (item) {
            this._array.forEach((arrayItem, i) => {
                if (arrayItem[this._prop] === item[this._prop]) {
                    this._array.splice(i, 1);
                }
            });
            return delete this.table[item[this._prop]];
        }
        return false;
    }
    get(index = 0) {
        return index ? this.table[index] : this._array[index];
    }
    get length() {
        return this._array.length;
    }
    get array() {
        return this._array;
    }
    _arrayToDict(array) {
        return array.reduce((obj, item) => {
            obj[item[this._prop]] = item;
            return obj;
        }, {});
    }
}
exports.default = HashTable;


/***/ })
/******/ ]);
//# sourceMappingURL=TourRenderer.js.map