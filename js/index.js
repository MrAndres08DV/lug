const BUTTON_SWITCH = document.querySelector(".switch");
const H1_ETIQUET = document.querySelector("#h1-element");

const CHECKBOX = document.querySelector("#hamburguer-show");
const SECTION_LINKERS = document.querySelector(".optios-container");

const MAIN_BODY = document.querySelector("#main");

CHECKBOX.addEventListener("click", () => {
  SECTION_LINKERS.classList.toggle("add");
  BUTTON_SWITCH.classList.toggle("add2");
});

BUTTON_SWITCH.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  H1_ETIQUET.classList.toggle("white");
  SECTION_LINKERS.classList.toggle("dark2");
  BUTTON_SWITCH.classList.toggle("active");
});
