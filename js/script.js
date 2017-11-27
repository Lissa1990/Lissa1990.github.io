var link = document.querySelector(".headline .btn");
var modal = document.querySelector(".form-search");
var form = document.querySelector(".form-search form");
var dateon = document.querySelector("[name=date-on]");
var dateoff = document.querySelector("[name=date-off]");
var grownups = document.querySelector("[name=grownups]");
var children = document.querySelector("[name=children]");

link.addEventListener("click", function (evt) {evt.preventDefault(); modal.classList.toggle("form-close"); 
	if (!modal.classList.contains("form-close")) {modal.classList.add("form-open")}});
form.addEventListener("submit", function (evt) {evt.preventDefault(); 
	if (!dateon.value  || !dateoff.value || !grownups.value || !children.value) {evt.preventDefault(); modal.classList.add("form-error")} 
	else {modal.classList.remove("form-error")}});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {if (!modal.classList.contains("form-close")) {modal.classList.add("form-close")}}});