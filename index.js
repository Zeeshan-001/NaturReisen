"use strict";

document.querySelectorAll(".navigation__link").forEach((link) => {
  link.addEventListener("click", function () {
    const isChecked = document.getElementById("navi-toggle").checked;

    document.getElementById("navi-toggle").checked = false;
  });
});
