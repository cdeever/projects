(function () {
  "use strict";

  var activeFilters = { tag: [], status: [] };

  function init() {
    var chips = document.querySelectorAll(".filter-chip");
    if (!chips.length) return;

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var type = chip.getAttribute("data-filter-type");
        var value = chip.getAttribute("data-filter-value");
        toggleFilter(type, value, chip);
        applyFilters();
      });
    });
  }

  function toggleFilter(type, value, chip) {
    var idx = activeFilters[type].indexOf(value);
    if (idx === -1) {
      activeFilters[type].push(value);
      chip.classList.add("bg-primary-200", "dark:bg-primary-800", "text-primary-800", "dark:text-primary-200", "border-primary-500");
      chip.classList.remove("text-neutral-600", "dark:text-neutral-400", "border-neutral-300", "dark:border-neutral-600");
    } else {
      activeFilters[type].splice(idx, 1);
      chip.classList.remove("bg-primary-200", "dark:bg-primary-800", "text-primary-800", "dark:text-primary-200", "border-primary-500");
      chip.classList.add("text-neutral-600", "dark:text-neutral-400", "border-neutral-300", "dark:border-neutral-600");
    }
  }

  function applyFilters() {
    var items = document.querySelectorAll(".filter-item");
    var hasActiveTagFilters = activeFilters.tag.length > 0;
    var hasActiveStatusFilters = activeFilters.status.length > 0;

    items.forEach(function (item) {
      var show = true;

      if (hasActiveTagFilters) {
        var itemTags = (item.getAttribute("data-tags") || "").split(",").filter(Boolean);
        var tagMatch = activeFilters.tag.some(function (t) {
          return itemTags.indexOf(t) !== -1;
        });
        if (!tagMatch) show = false;
      }

      if (hasActiveStatusFilters) {
        var itemStatus = item.getAttribute("data-status") || "";
        var statusMatch = activeFilters.status.indexOf(itemStatus) !== -1;
        if (!statusMatch) show = false;
      }

      item.style.display = show ? "" : "none";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
