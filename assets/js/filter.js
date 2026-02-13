(function () {
  "use strict";

  var activeFilters = { tag: [], status: [] };

  function init() {
    var dropdowns = document.querySelectorAll(".filter-dropdown");
    if (!dropdowns.length) return;

    // Toggle dropdown open/close
    dropdowns.forEach(function (dropdown) {
      var btn = dropdown.querySelector(".filter-dropdown-btn");
      var menu = dropdown.querySelector(".filter-dropdown-menu");

      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        // Close other open dropdowns
        dropdowns.forEach(function (other) {
          if (other !== dropdown) {
            other.querySelector(".filter-dropdown-menu").classList.add("hidden");
          }
        });
        menu.classList.toggle("hidden");
      });

      // Handle checkbox changes
      var checkboxes = menu.querySelectorAll("input[type=checkbox]");
      checkboxes.forEach(function (cb) {
        cb.addEventListener("change", function () {
          var type = cb.getAttribute("data-filter-type");
          var value = cb.getAttribute("data-filter-value");
          if (cb.checked) {
            if (activeFilters[type].indexOf(value) === -1) {
              activeFilters[type].push(value);
            }
          } else {
            var idx = activeFilters[type].indexOf(value);
            if (idx !== -1) activeFilters[type].splice(idx, 1);
          }
          updateButtonLabel(dropdown, type);
          applyFilters();
        });
      });
    });

    // Close dropdowns on outside click
    document.addEventListener("click", function () {
      dropdowns.forEach(function (dropdown) {
        dropdown.querySelector(".filter-dropdown-menu").classList.add("hidden");
      });
    });

    // Prevent menu clicks from closing dropdown
    document.querySelectorAll(".filter-dropdown-menu").forEach(function (menu) {
      menu.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });
  }

  function updateButtonLabel(dropdown, type) {
    var count = activeFilters[type].length;
    var label = dropdown.querySelector(".filter-dropdown-label");
    var base = label.getAttribute("data-base-label");
    if (count > 0) {
      label.textContent = base + " (" + count + ")";
      dropdown.querySelector(".filter-dropdown-btn").classList.add(
        "border-primary-500", "text-primary-700", "dark:text-primary-300"
      );
      dropdown.querySelector(".filter-dropdown-btn").classList.remove(
        "border-neutral-300", "dark:border-neutral-600"
      );
    } else {
      label.textContent = base;
      dropdown.querySelector(".filter-dropdown-btn").classList.remove(
        "border-primary-500", "text-primary-700", "dark:text-primary-300"
      );
      dropdown.querySelector(".filter-dropdown-btn").classList.add(
        "border-neutral-300", "dark:border-neutral-600"
      );
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
