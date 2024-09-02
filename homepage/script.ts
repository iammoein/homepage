const closeBtn = document.querySelector(".close-btn")! as HTMLButtonElement;
const openBtn = document.querySelector(".open-btn")! as HTMLButtonElement;
const sidebar = document.querySelector(".sidebar")! as HTMLDivElement;
const overlay = document.querySelector(".overlay")! as HTMLDivElement;

openBtn?.addEventListener("click", () => {
  sidebar?.classList.add("active");
  closeBtn.style.opacity = "1";
  closeBtn.style.visibility = "visible";
  closeBtn.style.display = "block";
});

closeBtn?.addEventListener("click", () => {
  sidebar?.classList.remove("active");
  closeBtn.style.opacity = "0";
  closeBtn.style.visibility = "hidden";
  closeBtn.style.display = "none";
});

overlay?.addEventListener("click", () => {
  sidebar?.classList.remove("active");
  closeBtn.style.opacity = "0";
  closeBtn.style.visibility = "hidden";
  closeBtn.style.display = "none";
});
