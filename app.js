/* Misyaal — shared bilingual language toggle (AR default, RTL) */
(function () {
  "use strict";
  var KEY = "misyaal-lang";
  var html = document.documentElement;

  function current() {
    var saved;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    return saved === "en" ? "en" : "ar";
  }

  function apply(lang) {
    var isAr = lang === "ar";
    html.setAttribute("lang", isAr ? "ar" : "en");
    html.setAttribute("dir", isAr ? "rtl" : "ltr");
    // Swap all elements carrying both languages
    var nodes = document.querySelectorAll("[data-ar][data-en]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var val = isAr ? el.getAttribute("data-ar") : el.getAttribute("data-en");
      if (val !== null) el.textContent = val;
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    // Let a page (e.g. the menu) re-render language-dependent content
    if (typeof window.onLangChange === "function") window.onLangChange(lang);
  }

  window.MISYAAL = {
    get lang() { return current(); },
    toggle: function () { apply(current() === "ar" ? "en" : "ar"); },
    apply: apply
  };

  // Apply saved language as soon as possible
  apply(current());
  document.addEventListener("DOMContentLoaded", function () { apply(current()); });
})();
