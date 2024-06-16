export function render(arr) {
  const list = document.querySelector(".list__cards");
  list.innerHTML = ``;
  arr.forEach((e) => {
    const div = document.createElement("div");
    list.append(div);
    div.className = "list__card";
    div.innerHTML = `
          <img src="./src/img/man.jpg" class="list__img" alt="" />
          <div class="list__info">
            <p class="list__name">${e.name}</p>
            <p class="list__profile">${e.about}</p>
          </div>
          <p class="list__phone">${e.phone}</p>
          <p class="list__mail">${e.mail}</p>
        `;

  });
}
// переделать эту чепуху ниже, она не работает
export function renderInfo(e) {

  const profile = document.querySelector(".profile");
  
  profile.addEventListener("click", (e) => {
    let name = document.querySelector("#name")
    let role = document.querySelector("#role")
    let phone = document.querySelector("#phone");
    let email = document.querySelector("#email")
    let date = document.querySelector("#date");
    name.className = e.name;
    role.className = e.about;
    phone.className = e.phone;
    email.className = e.mail;
    date.className = e.creationDate;
  });
}