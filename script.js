let btn = document.querySelector("button");
let div = document.querySelector("div");

let hidden = true;

div.style.display = "none"; //cacher le message

//detecter le clic du user

btn.addEventListener("click", () => {
  if (hidden) {
    btn.textContent = "CACHER";
    div.style.display = "block";
    hidden = false;
  } else {
    btn.textContent = "AFFICHER";
    div.style.display = "none";
    hidden = true;
  }
});
