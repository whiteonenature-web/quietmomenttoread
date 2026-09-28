(function () {
  var STORAGE_KEY = "site-lang";

  function naturalDisplay(el) {
    // Figure out what "visible" should mean for this element (inline,
    // inline-block, block, ...) by checking a class-based default first,
    // then falling back to the tag's browser default.
    if (el.classList.contains("btn") || el.classList.contains("nav-cta")) return "inline-block";
    var tag = el.tagName.toLowerCase();
    if (tag === "a" || tag === "span" || tag === "b" || tag === "strong") return "inline";
    if (tag === "li") return "list-item";
    if (tag === "table") return "table";
    if (tag === "ol" || tag === "ul") return "block";
    return "block";
  }

  function setLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    document.querySelectorAll("[data-lang]").forEach(function (el) {
      var elLang = el.getAttribute("data-lang");
      el.style.display = (elLang === lang) ? naturalDisplay(el) : "none";
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = "en";
    try { saved = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) {}
    setLang(saved);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });

    var menuBtn = document.querySelector(".menu-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { navLinks.classList.remove("open"); });
      });
    }
  });
})();
