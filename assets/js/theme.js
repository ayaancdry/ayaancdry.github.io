(function () {
  var toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  function applyIcon(theme) {
    toggle.textContent = theme === "dark" ? "☀" : "☽";
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  var current = document.documentElement.getAttribute("data-theme") || "light";
  applyIcon(current);

  toggle.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    applyIcon(next);
  });
})();
