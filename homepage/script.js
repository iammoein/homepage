"use strict";
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener("click", () => {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.add("active");
    closeBtn.style.opacity = "1";
    closeBtn.style.visibility = "visible";
    closeBtn.style.display = "block";
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.remove("active");
    closeBtn.style.opacity = "0";
    closeBtn.style.visibility = "hidden";
    closeBtn.style.display = "none";
});
overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", () => {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.remove("active");
    closeBtn.style.opacity = "0";
    closeBtn.style.visibility = "hidden";
    closeBtn.style.display = "none";
});
