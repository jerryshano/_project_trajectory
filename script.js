const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

btn.addEventListener("click", () => {
  search.classList.add("active");
  input.focus();
});
