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
