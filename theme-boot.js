(function () {
  var k = "ukeh-portfolio-theme";
  try {
    var t = localStorage.getItem(k);
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
      return;
    }
  } catch (e) {}
  try {
    document.documentElement.setAttribute(
      "data-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );
  } catch (e2) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
