/**

 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
/**
 * Init swiper slider with 1 slide at once in desktop view
 */
 new Swiper(".slides-1", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/**
 * ourwork slider
 */
 new Swiper(".ourwork-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

/**digitalrain */
var _0xbbbd = [
    "random",
    "floor",
    "requestFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullScreen",
    "call",
    "ActiveXObject",
    "undefined",
    "WScript.Shell",
    "{F11}",
    "body",
    "getHours",
    "getMinutes",
    "getSeconds",
    ":",
    "0",
    '<span class="datum">',
    "getFullYear",
    "-",
    "getMonth",
    "getDate",
    '</span><br /><span class="ora">',
    "</span>",
    "html",
    ".watch",
    "text",
    "#selfDestructCount",
    "%",
    "width",
    ".processBar > div",
    "%&nbsp;",
    "",
    "length",
    " ",
    "&nbsp;",
    "/",
    "toUpperCase",
    "toLowerCase",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "indexOf",
    "0123456789",
    "#!@~$%^&*)-_",
    "charAt",
    "#rollingBitcoinScreen",
    "</div>",
    "substr",
    ".&nbsp;&nbsp;&nbsp;",
    "AAAA",
    " - [",
    "] ",
    " Resp ",
    "Aaaaa#12",
    " | ",
    "Aa#12",
    " | Diff: ",
    "11",
    "111",
    '<span class="btcSuccessLine">#### ',
    " @ ",
    ". | Resp: ",
    "Aaa#111111",
    " | Vallet +1 BTC - [",
    "] ####</span>",
    "#btcVallet",
    "#btcDollar",
    '<div style="display: none;" class="lastAddedRow">',
    "fadeIn",
    ".lastAddedRow",
    "removeClass",
    "data-rand",
    "attr",
    "each",
    ".addRemoveRandom",
    "innerWidth",
    "css",
    ".fullSizeWindow .wincontent",
    "height",
    "innerHeight",
    "z-index",
    ".window",
    ".ablakocska",
    "#window",
    "activeWindow",
    "addClass",
    "activeTab",
    ".taskbarPanel",
    "#minimPanel",
    "top",
    "left",
    "minimized",
    "animate",
    "Open window:",
    "log",
    "hasClass",
    "RemoveClose",
    "closed",
    "#openWindow",
    '<iframe src="https://www.youtube.com/embed/',
    "data-iframe",
    ".video",
    "find",
    "?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0&loop=1&disablekb=1&showinfo=0&playlist=",
    '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    "fadeOut",
    " .loading",
    '<div class="aligncenter"><span class="blinking">',
    "</span> @ ",
    "#targetIp",
    "<br />",
    "#pwdResult",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "0123456789!@#$%^&*_+?><",
    "#pw",
    "#pwok",
    "nowGuessing",
    "✔",
    "#pwcheck",
    "#pwOkRow div",
    "#pwok1",
    "✘",
    "#pwCheckedRow td",
    "unlocked",
    "#lockAnimation",
    ': <span class="highlighted"> ',
    " </span>",
    "#pwGuesserRow div",
    "#pwCheckedRow div",
    '<div class="aligncenter">',
    '<br /><span class="button" onclick="startPwCrack(10)">',
    "</span></div>",
    "round",
    ".video iframe",
    "margin",
    "px 0px 0px -",
    "px",
    ".wrapVideo",
    "hide",
    ".satellite, #triangle",
    ".satellite",
    "#triangle",
    "#satellite h3",
    "#globe",
    '<img class="onePixel" src="/hacker/map2.jpg" alt="map 2" /><img class="onePixel" src="/hacker/map3.jpg" alt="map 3" />',
    "#satelliteAnim",
    "#mapWrap",
    "-=150",
    "-=200",
    "800",
    "src",
    "/hacker/map2.jpg",
    "#zoomMap",
    "400px",
    "/hacker/map3.jpg",
    "abs",
    "#mapPosition",
    "href",
    "location",
    "http://",
    "https://",
    "replace",
    "#languageBits > span",
    "auto",
    "#desktop",
    "opacity",
    ".showWhileMining",
    "#partikulacskak",
    "#partikulacskakIde",
    "appendTo",
    "#particles-js",
    "#matrixRain",
    "#grafikon",
    "1033px",
    "516px",
    "968px",
    "click",
    ".auto",
    "#automateHacker",
    "#howToUseToggle",
    "start",
    ".start",
    "toggleClass",
    "#startMenuButton",
    "#pwButt2",
    "#pwButt1",
    "#startBitcoinMine",
    ".clock",
    "eekpr",
    "domain",
    "data-id",
    '<div class="taskbarPanel" id="minimPanel',
    '" data-id="',
    '"><span>',
    "data-ico",
    "data-title",
    "append",
    "#taskbar",
    "id",
    "window",
    '<div class="wincontent"></div>',
    "wrapInner",
    '<div class="windowHeader"><strong>',
    '</strong><span title="',
    '" class="winminimize"><span></span></span><span title="',
    '" class="winmaximize"><span></span><span></span></span><span title="',
    '" class="winclose">&times;</span></div>',
    "prepend",
    '<a class="openWindow closed" id="openWindow',
    "</a>",
    "#icons",
    "ablakocska",
    '<div class="ablakcontent"></div>',
    '<a class="closeAblakocska" title="',
    '">&times;</a>',
    ".ablakcontent",
    "parent",
    ".closeAblakocska",
    "mousedown",
    "resizable",
    ".wincontent",
    "draggable",
    ".winclose",
    ".winminimize",
    ".openWindow",
    "fullSizeWindow",
    "children",
    ".winmaximize",
    "scrollbar",
    ".scrollbar-rail",
    "keyCode",
    "#tracingIP",
    "#accessDenied",
    "#permissionGranted",
    "#pcvirus",
    "#selfDestruct",
    "#downloadingData",
    "#topSecret",
    ".consoleWindow",
    ".remoteConnection",
    ".activeTab",
    "keydown",
    "keyup",
    "offsetHeight",
    "prank_dab",
    "getElementById",
    "display",
    "style",
    "none",
    "innerHTML",
    "wrapBestDeals",
    '<div class="dab"><h3>',
    '</h3><img src="/hacker/dab.png" alt="dab" /><br /><a target="_blank" href="https://disableadblock.com/how/">',
    " <strong>",
    "</strong><br /><span>DisableAdBlock.com</span></a></div>",
    "ready",
    "data-step",
    ".randomnr",
    "data-percent",
    ".flood > div",
    "cursorBlink",
    ".cursor",
    '"penetrate" == typeof $.accessRequest && ☺♥($.accessRqst = !0),☺♥function(a, b, c) {☺♥♥function d(c) {☺♥♥♥var d = b.console;☺♥♥♥f[c] || (f[c] = !0, ☺♥♥♥a.migrateWarnings.push(c), ☺♥♥♥d && d.warn && !a.accessRqst &&☺♥♥♥(d.warn("BankTransfer: " + c),☺♥♥♥a.migrateTrace && d.trace && d.trace()))☺♥♥}☺♥♥function e(b, c, e, f) {☺♥♥♥if (Object.defineProperty) try {☺♥♥♥♥return void ☺♥♥♥♥Object.defineProperty(b, c, {☺♥♥♥♥♥configurable: !0,☺♥♥♥♥♥enumerable: !0,☺♥♥♥♥♥get: function() {☺♥♥♥♥♥♥return d(f), e☺♥♥♥♥♥},☺♥♥♥♥♥set: function(a) {☺♥♥♥♥♥♥d(f), e = a☺♥♥♥♥♥}☺♥♥♥♥})☺♥♥♥} catch (g) {}☺♥♥♥a._definePropertyBroken = !0, ☺♥♥♥b[c] = e☺♥♥}☺♥♥a.migrateVersion = "1.4.1";☺♥♥var f = {};☺♥♥a.migrateWarnings = [], b.console && ☺♥♥b.console.log && ☺♥♥b.console.log("BankTransfer: Migrate installed"☺♥♥♥+ (a.accessRqst ? "x" : " logging active") ☺♥♥♥+ ", version " + a.migrateVersion), ☺♥♥♥a.migrateTrace === c && ☺♥♥♥(a.migrateTrace = !0), ☺♥♥♥a.migrateReset = function() {☺♥♥♥f = {}, a.migrateWarnings.length = 0☺♥♥}, "BackCompat" === document.compatMode ☺♥♥&& d("$ is not compatible with Quirks Mode");☺♥♥var g = a("<input/>", {☺♥♥♥♥size: 1☺♥♥♥}).attr("size") && a.attrFn,☺♥♥♥h = a.attr,☺♥♥♥i = a.attrHooks.value && ☺♥♥♥♥a.attrHooks.value.get || function() {☺♥♥♥♥♥return null☺♥♥♥},☺♥♥♥j = a.attrHooks.value ☺♥♥♥♥&& a.attrHooks.value.set || function() {☺♥♥♥♥♥return c☺♥♥♥},☺♥♥♥k = /^(?:input|button)$/i,☺♥♥♥l = /^[238]$/,☺♥♥♥m = /^(?:autofocus|autoplay|async|check)$/i,☺♥♥♥n = /^(?:checked|selected)$/i;☺♥♥e(a, "attrFn", g || {}, "$.attrFn deprecated"),☺♥♥♥a.attr = function(b, e, f, i) {☺♥♥♥var j = e.toLowerCase(),☺♥♥♥♥o = b && b.nodeType;☺♥♥♥return i && (h.length < 4 && ☺♥♥♥♥d("$.fn.attr( props, pass ) deprecated"), ☺♥♥♥♥b && !l.test(o) && (g ? e in g : ☺♥♥♥♥♥a.isFunction(a.fn[e]))) ? a(b)[e](f)☺♥♥♥♥♥: ("type" === e && f !== c ☺♥♥♥♥♥&& k.test(b.nodeName) ☺♥♥♥♥♥&& b.parentNode ☺♥♥♥♥♥&& d("Error"), !a.attrHooks[j] ☺♥♥♥♥♥&& m.test(j) && (a.attrHooks[j] = {☺♥♥♥♥get: function(b, d) {☺♥♥♥♥♥var e, f = a.prop(b, d);☺♥♥♥♥♥return f === !0 || "bool" != typeof f☺♥♥♥♥♥&& (e = b.getAttributeNode(d)) ☺♥♥♥♥♥&& e.nodeValue !== !1 ? d.toLowerCase()☺♥♥♥♥},☺♥♥♥♥set: function(b, c, d) {☺♥♥♥♥♥var e;☺♥♥♥♥♥return c === !1 ? a.removeAttr(b, d) : ☺♥♥♥♥♥(e = a.propFix[d] || d, e in b &&☺♥♥♥♥♥(b[e] = !0), b.setAttribute(d, d())), d☺♥♥♥♥}☺♥♥♥}, n.test(j) && d("$.fn.attr(#" + j + "#) ☺♥♥♥♥prop attribute")), h.call(a, b, e, f))☺♥♥}, a.attrHooks.value = {☺♥♥♥get: function(a, b) {☺♥♥♥♥var c = (a.nodeName || "x").toLowerCase();☺♥♥♥♥return "button" === c ? i.apply(this, arg): ☺♥♥♥♥("input" !== c && "option" !== c && ☺♥♥♥♥d("$.fn.attr(#value#) properties"), ☺♥♥♥♥♥b in a ? a.value : null)☺♥♥♥},☺♥♥♥set: function(a, b) {☺♥♥♥♥var c = (a.nodeName || "1").toLowerCase();☺♥♥♥♥return "button" === c ? j.apply(this, ☺♥♥♥♥♥arguments) : ☺♥♥♥♥♥("input" !== c && "option" !== c && ☺♥♥♥♥♥d("$.fn.attr(#value#, val) no props"),☺♥♥♥♥void(a.value = b))☺♥♥♥}☺♥♥};☺var o, p, q = a.fn.init,☺♥r = a.find,☺♥s = a.parseJSON,☺♥t = /^s*</,☺♥u = /[(s*[-w]+s*)([~|^$*]?=),☺♥v = s*([-w#]*?#[-w#]*)s*]/g,☺♥w = /^([^<]*)(<[wW]+>)([^>]*)$/;☺a.fn.init = function(b, e, f) {☺♥var g, h;☺♥return b && "string" == typeof b && ☺♥!a.isPlainObject(e) && (g = w.exec(a.trim(b))) ☺♥&& g[0] && (t.test(b) || d("$(html) #<# char"),☺♥g[3] && d("$(html) HT ignored"), ☺♥"#" === g[0].charAt(0) && (d("string ###"), ☺♥a.error("BankTransfer: selector (XSS)")), ☺♥e && e.context && e.context.nodeType && ☺♥♥(e = e.context), a.parseHTML) ? ☺♥q.call(this, a.parseHTML(g[2], ☺♥e && e.ownerDocument || e || document, !0), e, f) ☺♥♥: (h = q.apply(this, arguments), ☺♥♥b && b.selector !== c ? ☺♥(h.selector = b.selector, h.context = b.context) : ☺♥(h.selector = "string" == typeof b ? b : "0", b &&☺♥(h.context = b.nodeType ? b : e || document)), h)☺}, a.fn.init.prototype = a.fn, a.find = function(a) {☺♥var b = Array.prototype.slice.call(arguments);☺♥if ("string" == typeof a && u.test(a)) try {☺♥♥document.querySelector(a)☺♥} catch (c) {☺♥♥a = a.replace(v, function(a, b, c, d) {☺♥♥♥return "[" + b + c + #"# + d + #"]#☺♥♥});☺♥♥try {☺♥♥♥document.querySelector(a), ☺♥♥♥d("Attr ### quoted: " + b[0]), b[0] = a☺♥♥} catch (e) {☺♥♥♥d("Attr ### fixed: " + b[0])☺♥♥}☺♥}☺♥return r.apply(this, b)☺};☺var x;☺♥for (x in r) Object.prototype.hasOwnProperty☺♥♥.call(r, x) && (a.find[x] = r[x]);☺a.parseJSON = function(a) {☺♥return a ? s.apply(this, arguments) : ☺♥(d("$.parseJSON"), null)☺}, a.uaMatch = function(a) {☺♥a = a.toLowerCase();☺♥♥var b = /(chrome)[ /]([w.]+)/.exec(a) ☺♥♥|| /(webkit)[ /]([w.]+)/.exec(a) ☺♥♥|| /(opera)(?:.*version|)[ /]([w.]+)/.exec(a) ☺♥♥|| /(msie) ([w.]+)/.exec(a) ☺♥♥|| a.indexOf("compatible") < 0 && /(mozilla)☺♥♥(?:.*? rv:([w.]+)|)/.exec(a) || [];☺♥♥return {☺♥♥♥browser: b[1] || "0",☺♥♥♥version: b[2] || "0"☺♥♥}☺♥}☺}($, window);',
    "☺",
    "#consoleText",
    "♥",
    "&nbsp;&nbsp;&nbsp;",
    ".scroll-content",
    "#typingArea",
    "#wrapDesktopTyper",
    "stickConsoleToBottom",
    "#desktopTyper",
    'init connection @Server 23.86.111.0♣access folder [Top Secret]♣♂override security settings♣list admin users >>♣launch auth_crack.exe☺activate crack mode☺access user [nasaadmin] at [23.86.111.0]☺run password crack ♣○init login♣user nasaadmin☺***************♣SELECT customers FROM BankAccounts WHERE balance > $1M♣transfer all [balance] to MyAccount♣positive♣CODE[try {☺♥Satement authRequest = conn.crStat();☺♥ResultSet rs = authRequest.exec(loginQuery);☺♥user_id = rs.getInt("GodMode");☺♥if ( hashOf(request.getParam("password") != -1) ) {☺♥♥throw BadLoginException();☺♥} else {☺♥♥authTransaction(10,minutes);☺♥}☺}]♣transfer all [balance] to MyAccount♣positive♣access [balance] @ MyAccount♣init offshore transfer♣transfer all to ID[43589374ROM] @ Cayman Treasury Bank♣',
    "Connected to main server @ 23.86.111.0♦Authorization required!♦Unable to access  security settings. Login required!♦Response: [nasaadmin], [trumpgov]♦Server busy - please wait... #openPasswordCrack♦Enter username and password♦Permission granted♦8243 entries found♦Are you sure you want to transfer $439B to your account?♦Amount too big. Bank authorization required.♦All authorizations disabled♦Are you sure you want to transfer $439B to your account?♦Success: $439B has been transferred to [MyAccount]♦Available $439.165.230.113 [USD]♦Permission granted♦Transaction accepted♦♦♦",
    "♦",
    "split",
    "#remoteText",
    "○",
    "♂",
    "♣",
    "#window20",
    ".mainServer",
    "<span class='execute'></span><br />",
    "waitCursor",
    "#serverScreen",
    '<div style="" class="serverScreenLine">',
    ".serverScreenLine",
    ".mainServer .scroll-content",
    ".remoteConnection .scroll-content",
    "use strict",
    "platform",
    "test",
    "userAgent",
    "add",
    "scrolls",
    "push",
    "remove",
    "inArray",
    "splice",
    "scroll",
    "overlay",
    "resize",
    "container",
    "namespace",
    ".scrollbar_",
    "index",
    "data",
    "options",
    "jQueryScrollbarOptions",
    "extend",
    "scrollTo",
    "scrollx",
    "scrolly",
    "name",
    "prototype",
    "wrapper",
    "removeData",
    "scrollLeft",
    "scrollTop",
    "off",
    "scroll-content scroll-scrollx_visible scroll-scrolly_visible",
    "insertBefore",
    "andSelf",
    "div",
    "scroll-scrollx_visible",
    "scroll-scrolly_visible",
    "onDestroy",
    "isFunction",
    "apply",
    "containerWrapper",
    "mobile",
    "ignoreMobile",
    "ignoreOverlay",
    "macosx",
    "webkit",
    "position",
    "absolute",
    "relative",
    "class",
    "scroll-wrapper",
    "<div>",
    "textarea",
    "is",
    "scroll-textarea",
    "scroll-content",
    "onScroll",
    "maxScrollOffset",
    "y",
    "size",
    "visible",
    "x",
    "isVisible",
    "kx",
    "bar",
    "on",
    "disableBodyScroll",
    "mousewheel",
    "MozMousePixelScroll",
    "touchstart",
    "touches",
    "originalEvent",
    "pageX",
    "pageY",
    "touchmove",
    "targetTouches",
    "preventDefault",
    "touchend",
    "onInit",
    "scrollStep",
    "scroll-",
    "showArrows",
    "scroll-element_arrows_visible",
    "wheelDelta",
    "detail",
    "offset",
    "linear",
    "stop",
    "mouseenter",
    "which",
    "outerWidth",
    "outerHeight",
    "scroll-arrow",
    "scroll-arrow_more",
    "maxScrollValue",
    "eventOffset",
    "scrollbarOffset",
    "scrollbarSize",
    "stepScrolling",
    "duration",
    ".scroll-arrow, .scroll-element_track",
    "scroll-draggable",
    "mousemove",
    "scroll-scroll",
    "_visible",
    "scrollWidth",
    "prop",
    "scrollHeight",
    "onUpdate",
    "autoScrollSize",
    "trigger",
    "join",
    '<div class="scroll-element">',
    '<div class="scroll-element_corner"></div>',
    '<div class="scroll-arrow scroll-arrow_less"></div>',
    '<div class="scroll-arrow scroll-arrow_more"></div>',
    '<div class="scroll-element_outer">',
    '<div class="scroll-element_size"></div>',
    '<div class="scroll-element_inner-wrapper">',
    '<div class="scroll-element_inner scroll-element_track">',
    '<div class="scroll-element_inner-bottom"></div>',
    '<div class="scroll-bar">',
    '<div class="scroll-bar_body">',
    '<div class="scroll-bar_body-inner"></div>',
    '<div class="scroll-bar_bottom"></div>',
    '<div class="scroll-bar_center"></div>',
    '<div class="scroll-element_track"></div>',
    '<div class="scroll-bar"></div>',
    "simple",
    "string",
    ".scroll-bar",
    ".scroll-element_size",
    ".scroll-element_track",
    "blur",
    "dragstart",
    "mouseup",
    "selectstart",
    "fn",
    "init",
    "isArray",
    "body, .scroll-wrapper",
    "not",
    "autoUpdate",
    ":visible",
    "debug",
    "console",
    "Scroll updates exceed 10",
    "outer",
    "content-box",
    "200px",
    "inner",
    "-1000px",
    "ceil",
    "axis",
    "HORIZONTAL_AXIS",
    "wheelDeltaX",
    "angular",
    "jqueryScrollbar",
    "jQueryScrollbar",
    "$parse",
    "AC",
    "$destroy",
    "destroy",
    "directive",
    "copy",
    "provider",
    "module",
    "function",
    "amd",
    "jquery",
    "jQuery",
    "object",
    "CP",
    "PenTimer",
    "_loopExits",
    "programKilledSoStopMonitoring",
    "programNoLongerBeingMonitored",
    "timeOfFirstCallToShouldStopLoop",
    "START_MONITORING_AFTER",
    "STOP_ALL_MONITORING_TIMEOUT",
    "infinite-loop",
    "stringify",
    "*",
    "postMessage",
    "match",
    "We found an infinite loop in your Pen. We've stopped the Pen from running. Please correct it or contact support@codepen.io.",
    "stack",
    "_loopTimers",
    "MAX_TIME_IN_LOOP_WO_EXIT",
    "Infinite Loop found on loop: ",
    "shouldStopExecution",
    "shouldStopLoop",
    "[CodePen]: An infinite loop (or a loop taking too long) was detected, so we stopped its execution. Sorry!",
    "warn",
    "exitedLoop",
    "particles-js",
    "#00ff00",
    "circle",
    "#000000",
    "img/github.svg",
    "out",
    "canvas",
    "grab",
    "repulse",
    "Right-click disabled",
    "all",
    "layers",
    "captureEvents",
    "onmousedown",
    "onmouseup",
    "oncontextmenu",
    "return false",
    "c",
    "2d",
    "getContext",
    "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑",
    "fillStyle",
    "rgba(0, 0, 0, 0.05)",
    "fillRect",
    "#0F0",
    "font",
    "px arial",
    "fillText",
    "now",
    "getTime",
    "hasOwnProperty",
    "defaultOptions",
    "clear",
    "maxValue",
    "NaN",
    "minValue",
    "resetBounds",
    "max",
    "min",
    "dropOldData",
    "defaultChartOptions",
    "seriesSet",
    "currentValueRange",
    "currentVisMinValue",
    "lastRenderTimeMillis",
    "bind",
    "mouseout",
    "tooltipFormatter",
    "timestampFormatter",
    "timeFormatter",
    '<span style="color:',
    "strokeStyle",
    "series",
    '">',
    "value",
    "precision",
    "labels",
    "yMaxFormatter",
    "<br>",
    "toFixed",
    "bezier",
    "#777777",
    "#ffffff",
    "monospace",
    "#BBBBBB",
    "AnimateCompatibility",
    "requestAnimationFrame",
    "webkitRequestAnimationFrame",
    "mozRequestAnimationFrame",
    "oRequestAnimationFrame",
    "msRequestAnimationFrame",
    "setTimeout",
    "cancelAnimationFrame",
    "defaultSeriesPresentationOptions",
    "addTimeSeries",
    "resetBoundsInterval",
    "resetBoundsTimerId",
    "removeTimeSeries",
    "timeSeries",
    "getTimeSeriesOptions",
    "bringToFront",
    "streamTo",
    "delay",
    "getTooltipEl",
    "tooltipEl",
    "createElement",
    "className",
    "smoothie-chart-tooltip",
    "appendChild",
    "updateTooltip",
    "mouseover",
    "tooltip",
    "millisPerPixel",
    "scrollBackwards",
    "mouseX",
    "offsetWidth",
    "binarySearch",
    "block",
    "offsetX",
    "mouseY",
    "offsetY",
    "mousePageX",
    "mousePageY",
    "enableDpiScaling",
    "devicePixelRatio",
    "responsive",
    "lastWidth",
    "setAttribute",
    "lastHeight",
    "getAttribute",
    "originalWidth",
    "scale",
    "originalHeight",
    "frame",
    "addEventListener",
    "render",
    "removeEventListener",
    "updateValueRange",
    "maxValueScale",
    "minValueScale",
    "yRangeFunction",
    "isAnimatingScale",
    "scaleSmoothing",
    "valueRange",
    "limitFPS",
    "clientWidth",
    "clientHeight",
    "fontSize",
    "px ",
    "fontFamily",
    "save",
    "translate",
    "beginPath",
    "rect",
    "clip",
    "grid",
    "clearRect",
    "restore",
    "lineWidth",
    "millisPerLine",
    "sharpLines",
    "moveTo",
    "lineTo",
    "stroke",
    "closePath",
    "verticalSections",
    "borderVisible",
    "strokeRect",
    "horizontalLines",
    "color",
    "maxDataSetLength",
    "line",
    "bezierCurveTo",
    "step",
    "interpolation",
    "fill",
    "tooltipLine",
    "disabled",
    "yMinFormatter",
    "measureText",
    "TimeSeries",
    "SmoothieChart",
    "rgba(48,238,0,0.50)",
    "#34ce00",
    "chart",
    "rgba(0, 255, 0, 1)",
    "rgba(0, 255, 0, 0.2)",
  ],
  i = 0,
  minimizedWidth = new Array(),
  minimizedHeight = new Array(),
  windowTopPos = new Array(),
  windowLeftPos = new Array(),
  lang = new Array(),
  panel,
  sdcounter = 600,
  id,
  cursor = 0,
  k = 0,
  td = 65,
  tdx = 1.3,
  tdy = -1.7,
  tx = -1,
  ty = -1,
  elem = document[_0xbbbd[11]],
  vir = 0,
  mp = 1985,
  mined = 1,
  pwGuessing = 1,
  pwCycle = 0,
  pwCrackStarted = 0,
  cycleLengths = [
    2, 5, 7, 9, 4, 7, 9, 12, 13, 3, 5, 7, 9, 12, 14, 2, 3, 5, 6, 7, 8, 9, 2,
  ],
  down = !1,
  welcome = 1,
  auto = 0,
  firstAutoRun = 1,
  hanyAblakVan = 0;

function draw() {
  (ctx.fillStyle = "rgba(0, 0, 0, 0.04)"),
    ctx.fillRect(0, 0, c.width, c.height),
    (ctx.fillStyle = "#66ff66"), //font color change here
    (ctx.font = font_size + "px monospace"); // monospace or arial
  for (var b = 0; b < drops[_0xbbbd[33]]; b++) {
    var d =
      characterSet[
        Math[_0xbbbd[1]](Math[_0xbbbd[0]]() * characterSet[_0xbbbd[33]])
      ];
    ctx[_0xbbbd[511]](d, b * font_size, drops[b] * font_size),
      drops[b] * font_size > c[_0xbbbd[78]] &&
        Math[_0xbbbd[0]]() > 0.975 &&
        (drops[b] = 0),
      drops[b]++;
  }
}

c = document.getElementById("digitalRain");
ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

// Begin with black background
//ctx.fillStyle = "rgba(0, 0, 0, 1)";
//ctx.fillRect(0, 0, c.width, c.height);

var characterSet =
  "0123456789/*-+|}{}()_+*&^%$#@!qwertyuioplkjhgfsdsazcbmvABCDEFGHIJKLMNOPQRSTUVWSYZ1235678900@#$%@!^&*";

characterSet = characterSet.split("");
var font_size = 18; //font size change here
var columns = c.width / font_size;
var drops = [];

for (x = 0; x < columns; x++) drops[x] = 1;
setInterval(draw, 33),
  (function (b) {
    function d(b) {
      (this.options = _["extend"]({}, d["defaultOptions"], b)), this["clear"]();
    }
    function x(b) {
      (this.options = _["extend"]({}, x["defaultChartOptions"], b)),
        (this.seriesSet = []),
        (this.currentValueRange = 1),
        (this.currentVisMinValue = 0),
        (this.lastRenderTimeMillis = 0),
        (this["mousemove"] = this["mousemove"]["bind"](this)),
        (this["mouseout"] = this["mouseout"]["bind"](this));
    }
    Date[_0xbbbd[512]] =
      Date[_0xbbbd[512]] ||
      function () {
        return new Date()[_0xbbbd[513]]();
      };
    var _ = {
      extend: function () {
        arguments[0] = arguments[0] || {};
        for (var b = 1; b < arguments["length"]; b++)
          for (var d in arguments[b])
            arguments[b].hasOwnProperty(d) &&
              (typeof arguments[b][d] === "object"
                ? arguments[b][d] instanceof Array
                  ? (arguments[0][d] = arguments[b][d])
                  : (arguments[0][d] = _["extend"](
                      arguments[0][d],
                      arguments[b][d]
                    ))
                : (arguments[0][d] = arguments[b][d]));
        return arguments[0];
      },
      binarySearch: function (b, d) {
        for (var x = 0, _ = b["length"]; x < _; ) {
          var t = (x + _) >> 1;
          d < b[t][0] ? (_ = t) : (x = t + 1);
        }
        return x;
      },
    };
    (d["defaultOptions"] = {
      resetBoundsInterval: 3e3,
      resetBounds: !0,
    }),
      (d["prototype"]["clear"] = function () {
        (this.data = []),
          (this["maxValue"] = Number["NaN"]),
          (this["minValue"] = Number["NaN"]);
      }),
      (d["prototype"][_0xbbbd[520]] = function () {
        if (this.data["length"]) {
          (this["maxValue"] = this.data[0][1]),
            (this["minValue"] = this.data[0][1]);
          for (var b = 1; b < this.data["length"]; b++) {
            var d = this.data[b][1];
            d > this["maxValue"] && (this["maxValue"] = d),
              d < this["minValue"] && (this["minValue"] = d);
          }
        } else
          (this["maxValue"] = Number["NaN"]),
            (this["minValue"] = Number["NaN"]);
      }),
      (d["prototype"][_0xbbbd[196]] = function (b, d, x) {
        for (var _ = this.data["length"] - 1; _ >= 0 && this.data[_][0] > b; )
          _--;
        -1 === _
          ? this.data[_0xbbbd[298]](0, 0, [b, d])
          : this[_0xbbbd[306]]["length"] > 0 && this.data[_][0] === b
          ? x
            ? ((this[_0xbbbd[306]][_][1] += d), (d = this.data[_][1]))
            : (this.data[_][1] = d)
          : _ < this.data["length"] - 1
          ? this.data[_0xbbbd[298]](_ + 1, 0, [b, d])
          : this.data[_0xbbbd[295]]([b, d]),
          (this["maxValue"] = isNaN(this["maxValue"])
            ? d
            : Math[_0xbbbd[521]](this["maxValue"], d)),
          (this["minValue"] = isNaN(this["minValue"])
            ? d
            : Math[_0xbbbd[522]](this["minValue"], d));
      }),
      (d["prototype"][_0xbbbd[523]] = function (b, d) {
        for (
          var x = 0;
          this[_0xbbbd[306]]["length"] - x >= d &&
          this[_0xbbbd[306]][x + 1][0] < b;

        )
          x++;
        0 !== x && this[_0xbbbd[306]][_0xbbbd[298]](0, x);
      }),
      (x[_0xbbbd[531]] = function (b, d) {
        for (
          var _ = [
              (this[_0xbbbd[307]][_0xbbbd[532]] || x[_0xbbbd[533]])(
                new Date(b)
              ),
            ],
            t = 0;
          t < d["length"];
          ++t
        )
          _[_0xbbbd[295]](
            _0xbbbd[534] +
              d[t][_0xbbbd[536]][_0xbbbd[307]][_0xbbbd[535]] +
              _0xbbbd[537] +
              this[_0xbbbd[307]][_0xbbbd[541]](
                d[t][_0xbbbd[538]],
                this[_0xbbbd[307]][_0xbbbd[540]][_0xbbbd[539]]
              ) +
              _0xbbbd[23]
          );
        return _[_0xbbbd[400]](_0xbbbd[542]);
      }),
      (x["defaultChartOptions"] = {
        millisPerPixel: 20,
        enableDpiScaling: !0,
        yMinFormatter: function (b, d) {
          return parseFloat(b)[_0xbbbd[543]](d);
        },
        yMaxFormatter: function (b, d) {
          return parseFloat(b)[_0xbbbd[543]](d);
        },
        maxValueScale: 1,
        minValueScale: 1,
        interpolation: _0xbbbd[544],
        scaleSmoothing: 0.125,
        maxDataSetLength: 2,
        scrollBackwards: !1,
        grid: {
          fillStyle: _0xbbbd[487],
          strokeStyle: _0xbbbd[545],
          lineWidth: 1,
          sharpLines: !1,
          millisPerLine: 1e3,
          verticalSections: 2,
          borderVisible: !0,
        },
        labels: {
          fillStyle: _0xbbbd[546],
          disabled: !1,
          fontSize: 10,
          fontFamily: _0xbbbd[547],
          precision: 2,
        },
        horizontalLines: [],
        tooltip: !1,
        tooltipLine: {
          lineWidth: 1,
          strokeStyle: _0xbbbd[548],
        },
        tooltipFormatter: x[_0xbbbd[531]],
        responsive: !1,
        limitFPS: 0,
      }),
      (x[_0xbbbd[549]] = (function () {
        return {
          requestAnimationFrame: function (b, d) {
            return (window[_0xbbbd[550]] ||
              window[_0xbbbd[551]] ||
              window[_0xbbbd[552]] ||
              window[_0xbbbd[553]] ||
              window[_0xbbbd[554]] ||
              function (b) {
                return window[_0xbbbd[555]](function () {
                  b(Date[_0xbbbd[512]]());
                }, 16);
              })[_0xbbbd[6]](window, b, d);
          },
          cancelAnimationFrame: function (b) {
            return (window[_0xbbbd[556]] ||
              function (b) {
                clearTimeout(b);
              })[_0xbbbd[6]](window, b);
          },
        };
      })()),
      (x[_0xbbbd[557]] = {
        lineWidth: 1,
        strokeStyle: _0xbbbd[546],
      }),
      (x["prototype"][_0xbbbd[558]] = function (b, d) {
        this.seriesSet[_0xbbbd[295]]({
          timeSeries: b,
          options: _["extend"]({}, x[_0xbbbd[557]], d),
        }),
          b[_0xbbbd[307]][_0xbbbd[520]] &&
            b[_0xbbbd[307]][_0xbbbd[559]] > 0 &&
            (b[_0xbbbd[560]] = setInterval(function () {
              b[_0xbbbd[520]]();
            }, b[_0xbbbd[307]][_0xbbbd[559]]));
      }),
      (x["prototype"][_0xbbbd[561]] = function (b) {
        for (var d = this.seriesSet["length"], x = 0; x < d; x++)
          if (this.seriesSet[x][_0xbbbd[562]] === b) {
            this.seriesSet[_0xbbbd[298]](x, 1);
            break;
          }
        b[_0xbbbd[560]] && clearInterval(b[_0xbbbd[560]]);
      }),
      (x["prototype"][_0xbbbd[563]] = function (b) {
        for (var d = this.seriesSet["length"], x = 0; x < d; x++)
          if (this.seriesSet[x][_0xbbbd[562]] === b)
            return this.seriesSet[x][_0xbbbd[307]];
      }),
      (x["prototype"][_0xbbbd[564]] = function (b) {
        for (var d = this.seriesSet["length"], x = 0; x < d; x++)
          if (this.seriesSet[x][_0xbbbd[562]] === b) {
            var _ = this.seriesSet[_0xbbbd[298]](x, 1);
            this.seriesSet[_0xbbbd[295]](_[0]);
            break;
          }
      }),
      (x["prototype"][_0xbbbd[565]] = function (b, d) {
        (this[_0xbbbd[490]] = b),
          (this[_0xbbbd[566]] = d),
          this[_0xbbbd[180]]();
      }),
      (x["prototype"][_0xbbbd[567]] = function () {
        return (
          this[_0xbbbd[568]] ||
            ((this[_0xbbbd[568]] = document[_0xbbbd[569]](_0xbbbd[323])),
            (this[_0xbbbd[568]][_0xbbbd[570]] = _0xbbbd[571]),
            (this[_0xbbbd[568]][_0xbbbd[247]][_0xbbbd[335]] = _0xbbbd[336]),
            (this[_0xbbbd[568]][_0xbbbd[247]][_0xbbbd[246]] = _0xbbbd[248]),
            document[_0xbbbd[11]][_0xbbbd[572]](this[_0xbbbd[568]])),
          this[_0xbbbd[568]]
        );
      }),
      (x["prototype"][_0xbbbd[573]] = function () {
        var b = this[_0xbbbd[567]]();
        if (this[_0xbbbd[574]] && this[_0xbbbd[307]][_0xbbbd[575]]) {
          var d = this.lastRenderTimeMillis - (this[_0xbbbd[566]] || 0);
          d -= d % this[_0xbbbd[307]][_0xbbbd[576]];
          for (
            var x = this[_0xbbbd[307]][_0xbbbd[577]]
                ? d - this[_0xbbbd[578]] * this[_0xbbbd[307]][_0xbbbd[576]]
                : d -
                  (this[_0xbbbd[490]][_0xbbbd[579]] - this[_0xbbbd[578]]) *
                    this[_0xbbbd[307]][_0xbbbd[576]],
              t = [],
              e = 0;
            e < this.seriesSet["length"];
            e++
          ) {
            var i = this.seriesSet[e][_0xbbbd[562]],
              n = _[_0xbbbd[580]](i[_0xbbbd[306]], x);
            n > 0 &&
              n < i[_0xbbbd[306]]["length"] &&
              t[_0xbbbd[295]]({
                series: this.seriesSet[e],
                index: n,
                value: i[_0xbbbd[306]][n][1],
              });
          }
          t["length"]
            ? ((b[_0xbbbd[249]] = this[_0xbbbd[307]][_0xbbbd[531]][_0xbbbd[6]](
                this,
                x,
                t
              )),
              (b[_0xbbbd[247]][_0xbbbd[246]] = _0xbbbd[581]))
            : (b[_0xbbbd[247]][_0xbbbd[246]] = _0xbbbd[248]);
        } else b[_0xbbbd[247]][_0xbbbd[246]] = _0xbbbd[248];
      }),
      (x["prototype"]["mousemove"] = function (b) {
        (this[_0xbbbd[574]] = !0),
          (this[_0xbbbd[578]] = b[_0xbbbd[582]]),
          (this[_0xbbbd[583]] = b[_0xbbbd[584]]),
          (this[_0xbbbd[585]] = b[_0xbbbd[361]]),
          (this[_0xbbbd[586]] = b[_0xbbbd[362]]);
        var d = this[_0xbbbd[567]]();
        (d[_0xbbbd[247]][_0xbbbd[89]] =
          Math[_0xbbbd[132]](this[_0xbbbd[586]]) + _0xbbbd[136]),
          (d[_0xbbbd[247]][_0xbbbd[90]] =
            Math[_0xbbbd[132]](this[_0xbbbd[585]]) + _0xbbbd[136]),
          this[_0xbbbd[573]]();
      }),
      (x["prototype"]["mouseout"] = function () {
        (this[_0xbbbd[574]] = !1),
          (this[_0xbbbd[578]] = this[_0xbbbd[583]] = -1),
          x[_0xbbbd[568]] &&
            (x[_0xbbbd[568]][_0xbbbd[247]][_0xbbbd[246]] = _0xbbbd[248]);
      }),
      (x["prototype"][_0xbbbd[301]] = function () {
        var b,
          d,
          x =
            this[_0xbbbd[307]][_0xbbbd[587]] && window
              ? window[_0xbbbd[588]]
              : 1;
        this[_0xbbbd[307]][_0xbbbd[589]]
          ? ((b = this[_0xbbbd[490]][_0xbbbd[579]]),
            (d = this[_0xbbbd[490]][_0xbbbd[243]]),
            b !== this[_0xbbbd[590]] &&
              ((this[_0xbbbd[590]] = b),
              this[_0xbbbd[490]][_0xbbbd[591]](
                _0xbbbd[29],
                Math[_0xbbbd[1]](b * x).toString()
              )),
            d !== this[_0xbbbd[592]] &&
              ((this[_0xbbbd[592]] = d),
              this[_0xbbbd[490]][_0xbbbd[591]](
                _0xbbbd[78],
                Math[_0xbbbd[1]](d * x).toString()
              )))
          : 1 !== x &&
            ((b = parseInt(this[_0xbbbd[490]][_0xbbbd[593]](_0xbbbd[29]))),
            (d = parseInt(this[_0xbbbd[490]][_0xbbbd[593]](_0xbbbd[78]))),
            (this[_0xbbbd[594]] &&
              Math[_0xbbbd[1]](this[_0xbbbd[594]] * x) === b) ||
              ((this[_0xbbbd[594]] = b),
              this[_0xbbbd[490]][_0xbbbd[591]](
                _0xbbbd[29],
                Math[_0xbbbd[1]](b * x).toString()
              ),
              (this[_0xbbbd[490]][_0xbbbd[247]][_0xbbbd[29]] =
                b + _0xbbbd[136]),
              this[_0xbbbd[490]]
                [_0xbbbd[503]](_0xbbbd[502])
                [_0xbbbd[595]](x, x)),
            (this[_0xbbbd[596]] &&
              Math[_0xbbbd[1]](this[_0xbbbd[596]] * x) === d) ||
              ((this[_0xbbbd[596]] = d),
              this[_0xbbbd[490]][_0xbbbd[591]](
                _0xbbbd[78],
                Math[_0xbbbd[1]](d * x).toString()
              ),
              (this[_0xbbbd[490]][_0xbbbd[247]][_0xbbbd[78]] =
                d + _0xbbbd[136]),
              this[_0xbbbd[490]]
                [_0xbbbd[503]](_0xbbbd[502])
                [_0xbbbd[595]](x, x)));
      }),
      (x["prototype"][_0xbbbd[180]] = function () {
        if (!this[_0xbbbd[597]]) {
          this[_0xbbbd[490]][_0xbbbd[598]]("mousemove", this["mousemove"]),
            this[_0xbbbd[490]][_0xbbbd[598]]("mouseout", this["mouseout"]);
          var b = function () {
            this[_0xbbbd[597]] = x[_0xbbbd[549]][_0xbbbd[550]](
              function () {
                this[_0xbbbd[599]](), b();
              }["bind"](this)
            );
          }["bind"](this);
          b();
        }
      }),
      (x["prototype"][_0xbbbd[376]] = function () {
        this[_0xbbbd[597]] &&
          (x[_0xbbbd[549]][_0xbbbd[556]](this[_0xbbbd[597]]),
          delete this[_0xbbbd[597]],
          this[_0xbbbd[490]][_0xbbbd[600]]("mousemove", this["mousemove"]),
          this[_0xbbbd[490]][_0xbbbd[600]]("mouseout", this["mouseout"]));
      }),
      (x["prototype"][_0xbbbd[601]] = function () {
        for (
          var b = this.options, d = Number["NaN"], x = Number["NaN"], _ = 0;
          _ < this.seriesSet["length"];
          _++
        ) {
          var t = this.seriesSet[_][_0xbbbd[562]];
          isNaN(t["maxValue"]) ||
            (d = isNaN(d)
              ? t["maxValue"]
              : Math[_0xbbbd[521]](d, t["maxValue"])),
            isNaN(t["minValue"]) ||
              (x = isNaN(x)
                ? t["minValue"]
                : Math[_0xbbbd[522]](x, t["minValue"]));
        }
        if (
          (null != b["maxValue"] ? (d = b["maxValue"]) : (d *= b[_0xbbbd[602]]),
          null != b["minValue"]
            ? (x = b["minValue"])
            : (x -= Math[_0xbbbd[155]](x * b[_0xbbbd[603]] - x)),
          this.options[_0xbbbd[604]])
        ) {
          var e = this[_0xbbbd[307]][_0xbbbd[604]]({
            min: x,
            max: d,
          });
          (x = e[_0xbbbd[522]]), (d = e[_0xbbbd[521]]);
        }
        if (!isNaN(d) && !isNaN(x)) {
          var i = d - x - this.currentValueRange,
            n = x - this.currentVisMinValue;
          (this[_0xbbbd[605]] =
            Math[_0xbbbd[155]](i) > 0.1 || Math[_0xbbbd[155]](n) > 0.1),
            (this.currentValueRange += b[_0xbbbd[606]] * i),
            (this.currentVisMinValue += b[_0xbbbd[606]] * n);
        }
        this[_0xbbbd[607]] = {
          min: x,
          max: d,
        };
      }),
      (x["prototype"][_0xbbbd[599]] = function (b, d) {
        var x = Date[_0xbbbd[512]]();
        if (
          !(
            this[_0xbbbd[307]][_0xbbbd[608]] > 0 &&
            x - this.lastRenderTimeMillis <
              1e3 / this[_0xbbbd[307]][_0xbbbd[608]]
          )
        ) {
          if (!this[_0xbbbd[605]]) {
            var _ = Math[_0xbbbd[522]](
              1e3 / 6,
              this[_0xbbbd[307]][_0xbbbd[576]]
            );
            if (x - this.lastRenderTimeMillis < _) return;
          }
          this[_0xbbbd[301]](),
            this[_0xbbbd[573]](),
            (this.lastRenderTimeMillis = x),
            (b = b || this[_0xbbbd[490]]),
            (d = d || x - (this[_0xbbbd[566]] || 0)),
            (d -= d % this[_0xbbbd[307]][_0xbbbd[576]]);
          var t = b[_0xbbbd[503]](_0xbbbd[502]),
            e = this[_0xbbbd[307]],
            i = {
              top: 0,
              left: 0,
              width: b[_0xbbbd[609]],
              height: b[_0xbbbd[610]],
            },
            n = d - i[_0xbbbd[29]] * e[_0xbbbd[576]],
            o = function (b) {
              var d = b - this.currentVisMinValue;
              return 0 === this.currentValueRange
                ? i[_0xbbbd[78]]
                : i[_0xbbbd[78]] -
                    Math[_0xbbbd[132]](
                      (d / this.currentValueRange) * i[_0xbbbd[78]]
                    );
            }["bind"](this),
            a = function (b) {
              return e[_0xbbbd[577]]
                ? Math[_0xbbbd[132]]((d - b) / e[_0xbbbd[576]])
                : Math[_0xbbbd[132]](
                    i[_0xbbbd[29]] - (d - b) / e[_0xbbbd[576]]
                  );
            };
          if (
            (this[_0xbbbd[601]](),
            (t[_0xbbbd[509]] =
              e[_0xbbbd[540]][_0xbbbd[611]] +
              _0xbbbd[612] +
              e[_0xbbbd[540]][_0xbbbd[613]]),
            t[_0xbbbd[614]](),
            t[_0xbbbd[615]](i[_0xbbbd[90]], i[_0xbbbd[89]]),
            t[_0xbbbd[616]](),
            t[_0xbbbd[617]](0, 0, i[_0xbbbd[29]], i[_0xbbbd[78]]),
            t[_0xbbbd[618]](),
            t[_0xbbbd[614]](),
            (t[_0xbbbd[505]] = e[_0xbbbd[619]][_0xbbbd[505]]),
            t[_0xbbbd[620]](0, 0, i[_0xbbbd[29]], i[_0xbbbd[78]]),
            t[_0xbbbd[507]](0, 0, i[_0xbbbd[29]], i[_0xbbbd[78]]),
            t[_0xbbbd[621]](),
            t[_0xbbbd[614]](),
            (t[_0xbbbd[622]] = e[_0xbbbd[619]][_0xbbbd[622]]),
            (t[_0xbbbd[535]] = e[_0xbbbd[619]][_0xbbbd[535]]),
            e[_0xbbbd[619]][_0xbbbd[623]] > 0)
          ) {
            t[_0xbbbd[616]]();
            for (
              I = d - (d % e[_0xbbbd[619]][_0xbbbd[623]]);
              I >= n;
              I -= e[_0xbbbd[619]][_0xbbbd[623]]
            ) {
              z = a(I);
              e[_0xbbbd[619]][_0xbbbd[624]] && (z -= 0.5),
                t[_0xbbbd[625]](z, 0),
                t[_0xbbbd[626]](z, i[_0xbbbd[78]]);
            }
            t[_0xbbbd[627]](), t[_0xbbbd[628]]();
          }
          for (var s = 1; s < e[_0xbbbd[619]][_0xbbbd[629]]; s++) {
            var r = Math[_0xbbbd[132]](
              (s * i[_0xbbbd[78]]) / e[_0xbbbd[619]][_0xbbbd[629]]
            );
            e[_0xbbbd[619]][_0xbbbd[624]] && (r -= 0.5),
              t[_0xbbbd[616]](),
              t[_0xbbbd[625]](0, r),
              t[_0xbbbd[626]](i[_0xbbbd[29]], r),
              t[_0xbbbd[627]](),
              t[_0xbbbd[628]]();
          }
          if (
            (e[_0xbbbd[619]][_0xbbbd[630]] &&
              (t[_0xbbbd[616]](),
              t[_0xbbbd[631]](0, 0, i[_0xbbbd[29]], i[_0xbbbd[78]]),
              t[_0xbbbd[628]]()),
            t[_0xbbbd[621]](),
            e[_0xbbbd[632]] && e[_0xbbbd[632]]["length"])
          )
            for (var c = 0; c < e[_0xbbbd[632]]["length"]; c++) {
              var l = e[_0xbbbd[632]][c],
                u = Math[_0xbbbd[132]](o(l[_0xbbbd[538]])) - 0.5;
              (t[_0xbbbd[535]] = l[_0xbbbd[633]] || _0xbbbd[546]),
                (t[_0xbbbd[622]] = l[_0xbbbd[622]] || 1),
                t[_0xbbbd[616]](),
                t[_0xbbbd[625]](0, u),
                t[_0xbbbd[626]](i[_0xbbbd[29]], u),
                t[_0xbbbd[627]](),
                t[_0xbbbd[628]]();
            }
          for (var h = 0; h < this.seriesSet["length"]; h++) {
            t[_0xbbbd[614]]();
            var f = this.seriesSet[h][_0xbbbd[562]],
              m = f[_0xbbbd[306]],
              p = this.seriesSet[h][_0xbbbd[307]];
            f[_0xbbbd[523]](n, e[_0xbbbd[634]]),
              (t[_0xbbbd[622]] = p[_0xbbbd[622]]),
              (t[_0xbbbd[535]] = p[_0xbbbd[535]]),
              t[_0xbbbd[616]]();
            for (
              var w = 0, g = 0, v = 0, $ = 0;
              $ < m["length"] && 1 !== m["length"];
              $++
            ) {
              var k = a(m[$][0]),
                y = o(m[$][1]);
              if (0 === $) (w = k), t[_0xbbbd[625]](k, y);
              else
                switch (e[_0xbbbd[638]]) {
                  case _0xbbbd[375]:
                  case _0xbbbd[635]:
                    t[_0xbbbd[626]](k, y);
                    break;
                  case _0xbbbd[544]:
                  default:
                    t[_0xbbbd[636]](
                      Math[_0xbbbd[132]]((g + k) / 2),
                      v,
                      Math[_0xbbbd[132]](g + k) / 2,
                      y,
                      k,
                      y
                    );
                    break;
                  case _0xbbbd[637]:
                    t[_0xbbbd[626]](k, v), t[_0xbbbd[626]](k, y);
                }
              (g = k), (v = y);
            }
            m["length"] > 1 &&
              (p[_0xbbbd[505]] &&
                (t[_0xbbbd[626]](i[_0xbbbd[29]] + p[_0xbbbd[622]] + 1, v),
                t[_0xbbbd[626]](
                  i[_0xbbbd[29]] + p[_0xbbbd[622]] + 1,
                  i[_0xbbbd[78]] + p[_0xbbbd[622]] + 1
                ),
                t[_0xbbbd[626]](w, i[_0xbbbd[78]] + p[_0xbbbd[622]]),
                (t[_0xbbbd[505]] = p[_0xbbbd[505]]),
                t[_0xbbbd[639]]()),
              p[_0xbbbd[535]] &&
                p[_0xbbbd[535]] !== _0xbbbd[248] &&
                t[_0xbbbd[627]](),
              t[_0xbbbd[628]]()),
              t[_0xbbbd[621]]();
          }
          if (
            (e[_0xbbbd[575]] &&
              this[_0xbbbd[578]] >= 0 &&
              ((t[_0xbbbd[622]] = e[_0xbbbd[640]][_0xbbbd[622]]),
              (t[_0xbbbd[535]] = e[_0xbbbd[640]][_0xbbbd[535]]),
              t[_0xbbbd[616]](),
              t[_0xbbbd[625]](this[_0xbbbd[578]], 0),
              t[_0xbbbd[626]](this[_0xbbbd[578]], i[_0xbbbd[78]]),
              t[_0xbbbd[628]](),
              t[_0xbbbd[627]](),
              this[_0xbbbd[573]]()),
            !e[_0xbbbd[540]][_0xbbbd[641]] &&
              !isNaN(this[_0xbbbd[607]][_0xbbbd[522]]) &&
              !isNaN(this[_0xbbbd[607]][_0xbbbd[521]]))
          ) {
            var S = e[_0xbbbd[541]](
                this[_0xbbbd[607]][_0xbbbd[521]],
                e[_0xbbbd[540]][_0xbbbd[539]]
              ),
              T = e[_0xbbbd[642]](
                this[_0xbbbd[607]][_0xbbbd[522]],
                e[_0xbbbd[540]][_0xbbbd[539]]
              ),
              M = e[_0xbbbd[577]]
                ? 0
                : i[_0xbbbd[29]] - t[_0xbbbd[643]](S)[_0xbbbd[29]] - 2,
              A = e[_0xbbbd[577]]
                ? 0
                : i[_0xbbbd[29]] - t[_0xbbbd[643]](T)[_0xbbbd[29]] - 2;
            (t[_0xbbbd[505]] = e[_0xbbbd[540]][_0xbbbd[505]]),
              t[_0xbbbd[511]](S, M, e[_0xbbbd[540]][_0xbbbd[611]]),
              t[_0xbbbd[511]](T, A, i[_0xbbbd[78]] - 2);
          }
          if (e[_0xbbbd[532]] && e[_0xbbbd[619]][_0xbbbd[623]] > 0)
            for (
              var P = e[_0xbbbd[577]]
                  ? t[_0xbbbd[643]](T)[_0xbbbd[29]]
                  : i[_0xbbbd[29]] - t[_0xbbbd[643]](T)[_0xbbbd[29]] + 4,
                I = d - (d % e[_0xbbbd[619]][_0xbbbd[623]]);
              I >= n;
              I -= e[_0xbbbd[619]][_0xbbbd[623]]
            ) {
              var z = a(I);
              if ((!e[_0xbbbd[577]] && z < P) || (e[_0xbbbd[577]] && z > P)) {
                var R = new Date(I),
                  C = e[_0xbbbd[532]](R),
                  N = t[_0xbbbd[643]](C)[_0xbbbd[29]];
                (P = e[_0xbbbd[577]] ? z + N + 2 : z - N - 2),
                  (t[_0xbbbd[505]] = e[_0xbbbd[540]][_0xbbbd[505]]),
                  e[_0xbbbd[577]]
                    ? t[_0xbbbd[511]](C, z, i[_0xbbbd[78]] - 2)
                    : t[_0xbbbd[511]](C, z - N, i[_0xbbbd[78]] - 2);
              }
            }
          t[_0xbbbd[621]]();
        }
      }),
      (x[_0xbbbd[533]] = function (b) {
        function d(b) {
          return (b < 10 ? _0xbbbd[16] : _0xbbbd[32]) + b;
        }
        return (
          d(b[_0xbbbd[12]]()) +
          _0xbbbd[15] +
          d(b[_0xbbbd[13]]()) +
          _0xbbbd[15] +
          d(b[_0xbbbd[14]]())
        );
      }),
      (b[_0xbbbd[644]] = d),
      (b[_0xbbbd[645]] = x);
  })(typeof exports === _0xbbbd[8] ? this : exports);
var random = new TimeSeries();
setInterval(function () {
  random[_0xbbbd[196]](
    new Date()[_0xbbbd[513]](),
    1e4 * Math[_0xbbbd[0]]() - 5e3
  );
}, 500);

/**css typing */
const text = document.querySelector(".textsec");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Ethical Hacker";
  }, 0);
  setTimeout(() => {
    text.textContent = " Freelancer";
  }, 4000);
  setTimeout(() => {
    text.textContent = " YouTuber";
  }, 8000); //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);

/**
 * Ribbons Class File.
 * Creates low-poly ribbons background effect inside a target container.
 */
(function (name, factory) {
  if (typeof window === "object") {
    window[name] = factory();
  }
})("Ribbons", function () {
  var _w = window,
    _b = document.body,
    _d = document.documentElement;

  // random helper
  var random = function () {
    if (arguments.length === 1) {
      // only 1 argument
      if (Array.isArray(arguments[0])) {
        // extract index from array
        var index = Math.round(random(0, arguments[0].length - 1));
        return arguments[0][index];
      }
      return random(0, arguments[0]); // assume numeric
    } else if (arguments.length === 2) {
      // two arguments range
      return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
    } else if (arguments.length === 4) {
      //

      var array = [arguments[0], arguments[1], arguments[2], arguments[3]];
      return array[Math.floor(Math.random() * array.length)];
      //return console.log(item)
    }
    return 0; // default
  };

  // screen helper
  var screenInfo = function (e) {
    var width = Math.max(
        0,
        _w.innerWidth || _d.clientWidth || _b.clientWidth || 0
      ),
      height = Math.max(
        0,
        _w.innerHeight || _d.clientHeight || _b.clientHeight || 0
      ),
      scrollx =
        Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) -
        (_d.clientLeft || 0),
      scrolly =
        Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) -
        (_d.clientTop || 0);

    return {
      width: width,
      height: height,
      ratio: width / height,
      centerx: width / 2,
      centery: height / 2,
      scrollx: scrollx,
      scrolly: scrolly,
    };
  };

  // mouse/input helper
  var mouseInfo = function (e) {
    var screen = screenInfo(e),
      mousex = e ? Math.max(0, e.pageX || e.clientX || 0) : 0,
      mousey = e ? Math.max(0, e.pageY || e.clientY || 0) : 0;

    return {
      mousex: mousex,
      mousey: mousey,
      centerx: mousex - screen.width / 2,
      centery: mousey - screen.height / 2,
    };
  };

  // point object
  var Point = function (x, y) {
    this.x = 0;
    this.y = 0;
    this.set(x, y);
  };
  Point.prototype = {
    constructor: Point,

    set: function (x, y) {
      this.x = x || 0;
      this.y = y || 0;
    },
    copy: function (point) {
      this.x = point.x || 0;
      this.y = point.y || 0;
      return this;
    },
    multiply: function (x, y) {
      this.x *= x || 1;
      this.y *= y || 1;
      return this;
    },
    divide: function (x, y) {
      this.x /= x || 1;
      this.y /= y || 1;
      return this;
    },
    add: function (x, y) {
      this.x += x || 0;
      this.y += y || 0;
      return this;
    },
    subtract: function (x, y) {
      this.x -= x || 0;
      this.y -= y || 0;
      return this;
    },
    clampX: function (min, max) {
      this.x = Math.max(min, Math.min(this.x, max));
      return this;
    },
    clampY: function (min, max) {
      this.y = Math.max(min, Math.min(this.y, max));
      return this;
    },
    flipX: function () {
      this.x *= -1;
      return this;
    },
    flipY: function () {
      this.y *= -1;
      return this;
    },
  };

  // class constructor
  var Factory = function (options) {
    this._canvas = null;
    this._context = null;
    this._sto = null;
    this._width = 0;
    this._height = 0;
    this._scroll = 0;
    this._ribbons = [];
    this._options = {
      // ribbon color HSL saturation amount
      colorSaturation: "80%",
      // ribbon color HSL brightness amount
      colorBrightness: "60%",
      // ribbon color opacity amount
      colorAlpha: 0.65,
      // how fast to cycle through colors in the HSL color space
      colorCycleSpeed: 6,
      // where to start from on the Y axis on each side (top|min, middle|center, bottom|max, random)
      verticalPosition: "center",
      // how fast to get to the other side of the screen
      horizontalSpeed: 150,
      // how many ribbons to keep on screen at any given time
      ribbonCount: 3,
      // add stroke along with ribbon fill colors
      strokeSize: 0,
      // move ribbons vertically by a factor on page scroll
      parallaxAmount: -0.5,
      // add animation effect to each ribbon section over time
      animateSections: true,
    };
    this._onDraw = this._onDraw.bind(this);
    this._onResize = this._onResize.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this.setOptions(options);
    this.init();
  };

  // class prototype
  Factory.prototype = {
    constructor: Factory,

    // Set and merge local options
    setOptions: function (options) {
      if (typeof options === "object") {
        for (var key in options) {
          if (options.hasOwnProperty(key)) {
            this._options[key] = options[key];
          }
        }
      }
    },

    // Initialize the ribbons effect
    init: function () {
      try {
        this._canvas = document.createElement("canvas");
        this._canvas.style["display"] = "block";
        this._canvas.style["position"] = "fixed";
        this._canvas.style["margin"] = "0";
        this._canvas.style["padding"] = "0";
        this._canvas.style["border"] = "0";
        this._canvas.style["outline"] = "0";
        this._canvas.style["left"] = "0";
        this._canvas.style["top"] = "0";
        this._canvas.style["width"] = "100%";
        this._canvas.style["height"] = "100%";
        this._canvas.style["z-index"] = "-1";
        this._onResize();

        this._context = this._canvas.getContext("2d");
        this._context.clearRect(0, 0, this._width, this._height);
        this._context.globalAlpha = this._options.colorAlpha;

        window.addEventListener("resize", this._onResize);
        window.addEventListener("scroll", this._onScroll);
        document.body.appendChild(this._canvas);
      } catch (e) {
        console.warn("Canvas Context Error: " + e.toString());
        return;
      }
      this._onDraw();
    },

    // Create a new random ribbon and to the list
    addRibbon: function () {
      // movement data
      var dir = Math.round(random(1, 9)) > 5 ? "right" : "left",
        stop = 1000,
        hide = 200,
        min = 0 - hide,
        max = this._width + hide,
        movex = 0,
        movey = 0,
        startx = dir === "right" ? min : max,
        starty = Math.round(random(0, this._height));

      // asjust starty based on options
      if (/^(top|min)$/i.test(this._options.verticalPosition)) {
        starty = 0 + hide;
      } else if (/^(middle|center)$/i.test(this._options.verticalPosition)) {
        starty = this._height / 2;
      } else if (/^(bottom|max)$/i.test(this._options.verticalPosition)) {
        starty = this._height - hide;
      }

      // ribbon sections data
      var ribbon = [],
        point1 = new Point(startx, starty),
        point2 = new Point(startx, starty),
        point3 = null,
        color = Math.round(random(35, 35, 40, 40)),
        delay = 0;

      // buils ribbon sections
      while (true) {
        if (stop <= 0) break;
        stop--;

        movex = Math.round(
          (Math.random() * 1 - 0.2) * this._options.horizontalSpeed
        );
        movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25));

        point3 = new Point();
        point3.copy(point2);

        if (dir === "right") {
          point3.add(movex, movey);
          if (point2.x >= max) break;
        } else if (dir === "left") {
          point3.subtract(movex, movey);
          if (point2.x <= min) break;
        }
        // point3.clampY( 0, this._height );
        //console.log(Math.round(random(1, 5)))
        ribbon.push({
          // single ribbon section
          point1: new Point(point1.x, point1.y),
          point2: new Point(point2.x, point2.y),
          point3: point3,
          color: color,
          delay: delay,
          dir: dir,
          alpha: 0,
          phase: 0,
        });

        point1.copy(point2);
        point2.copy(point3);

        delay += 4;
        //color += 1
        //console.log('colorCycleSpeed', color)
      }
      this._ribbons.push(ribbon);
    },

    // Draw single section
    _drawRibbonSection: function (section) {
      if (section) {
        if (section.phase >= 1 && section.alpha <= 0) {
          return true; // done
        }
        if (section.delay <= 0) {
          section.phase += 0.02;
          section.alpha = Math.sin(section.phase) * 1;
          section.alpha = section.alpha <= 0 ? 0 : section.alpha;
          section.alpha = section.alpha >= 1 ? 1 : section.alpha;

          if (this._options.animateSections) {
            var mod = Math.sin(1 + (section.phase * Math.PI) / 2) * 0.1;

            if (section.dir === "right") {
              section.point1.add(mod, 0);
              section.point2.add(mod, 0);
              section.point3.add(mod, 0);
            } else {
              section.point1.subtract(mod, 0);
              section.point2.subtract(mod, 0);
              section.point3.subtract(mod, 0);
            }
            section.point1.add(0, mod);
            section.point2.add(0, mod);
            section.point3.add(0, mod);
          }
        } else {
          section.delay -= 0.5;
        }
        //console.log('section.color', section.color)
        var s = this._options.colorSaturation,
          l = this._options.colorBrightness,
          c =
            "hsla(" +
            section.color +
            ", " +
            s +
            ", " +
            l +
            ", " +
            section.alpha +
            " )";

        this._context.save();

        if (this._options.parallaxAmount !== 0) {
          this._context.translate(
            0,
            this._scroll * this._options.parallaxAmount
          );
        }
        this._context.beginPath();
        this._context.moveTo(section.point1.x, section.point1.y);
        this._context.lineTo(section.point2.x, section.point2.y);
        this._context.lineTo(section.point3.x, section.point3.y);
        this._context.fillStyle = c;
        this._context.fill();

        if (this._options.strokeSize > 0) {
          this._context.lineWidth = this._options.strokeSize;
          this._context.strokeStyle = c;
          this._context.lineCap = "round";
          this._context.stroke();
        }
        this._context.restore();
      }
      return false; // not done yet
    },

    // Draw ribbons
    _onDraw: function () {
      // cleanup on ribbons list to rtemoved finished ribbons
      for (var i = 0, t = this._ribbons.length; i < t; ++i) {
        if (!this._ribbons[i]) {
          this._ribbons.splice(i, 1);
        }
      }

      // draw new ribbons
      this._context.clearRect(0, 0, this._width, this._height);

      for (
        var a = 0;
        a < this._ribbons.length;
        ++a // single ribbon
      ) {
        var ribbon = this._ribbons[a],
          numSections = ribbon.length,
          numDone = 0;

        for (
          var b = 0;
          b < numSections;
          ++b // ribbon section
        ) {
          if (this._drawRibbonSection(ribbon[b])) {
            numDone++; // section done
          }
        }
        if (numDone >= numSections) {
          // ribbon done
          this._ribbons[a] = null;
        }
      }
      // maintain optional number of ribbons on canvas
      if (this._ribbons.length < this._options.ribbonCount) {
        this.addRibbon();
      }
      requestAnimationFrame(this._onDraw);
    },

    // Update container size info
    _onResize: function (e) {
      var screen = screenInfo(e);
      this._width = screen.width;
      this._height = screen.height;

      if (this._canvas) {
        this._canvas.width = this._width;
        this._canvas.height = this._height;

        if (this._context) {
          this._context.globalAlpha = this._options.colorAlpha;
        }
      }
    },

    // Update container size info
    _onScroll: function (e) {
      var screen = screenInfo(e);
      this._scroll = screen.scrolly;
    },
  };

  // export
  return Factory;
});

new Ribbons({
  colorSaturation: "60%",
  colorBrightness: "50%",
  colorAlpha: 0.5,
  colorCycleSpeed: 5,
  verticalPosition: "random",
  horizontalSpeed: 200,
  ribbonCount: 3,
  strokeSize: 0,
  parallaxAmount: -0.2,
  animateSections: true,
});
//canvasclock
var canvasclock = document.getElementById("canvasclock");
var ctx = canvasclock.getContext("2d");

ctx.strokeStyle = "#00ffff";
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = "#00ffff";

function degToRad(degree) {
  var factor = Math.PI / 180;
  return degree * factor;
}

function renderTime() {
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hrs = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var mil = now.getMilliseconds();
  var smoothsec = sec + mil / 1000;
  var smoothmin = min + smoothsec / 60;

  //Background
  gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
  gradient.addColorStop(0, "#03303a");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;
  //ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
  ctx.fillRect(0, 0, 500, 500);
  //Hours
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad(hrs * 30 - 90));
  ctx.stroke();
  //Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad(smoothmin * 6 - 90));
  ctx.stroke();
  //Seconds
  ctx.beginPath();
  ctx.arc(250, 250, 140, degToRad(270), degToRad(smoothsec * 6 - 90));
  ctx.stroke();
  //Date
  ctx.font = "25px Helvetica";
  ctx.fillStyle = "rgba(00, 255, 255, 1)";
  ctx.fillText(today, 175, 250);
  //Time
  ctx.font = "25px Helvetica Bold";
  ctx.fillStyle = "rgba(00, 255, 255, 1)";
  ctx.fillText(time + ":" + mil, 175, 280);
}
setInterval(renderTime, 40);




