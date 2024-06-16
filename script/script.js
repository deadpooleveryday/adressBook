import {contacts} from "./data.js"
import { render, renderInfo } from "./render.js";

render(contacts);
renderInfo(contacts);

const input = document.querySelector("#search");

input.addEventListener("input", inputHandler);

function inputHandler(evt) {
  const arrFiltered = contacts.filter(
    (e) =>
      e.name.toLowerCase().includes(evt.target.value.trim().toLowerCase()) ||
      e.surname.toLowerCase().includes(evt.target.value.trim().toLowerCase()) ||
      e.about.toLowerCase().includes(evt.target.value.trim().toLowerCase()) ||
      e.mail.toLowerCase().includes(evt.target.value.trim().toLowerCase()) ||
      e.gender.toLowerCase().includes(evt.target.value.trim().toLowerCase()) ||
      e.phone.toLowerCase().includes(evt.target.value.trim().toLowerCase())
  );
  render(arrFiltered);
}


