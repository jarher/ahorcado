
const words = ["adelante", "cuarenta", "mientras", "nosotros", "primeros"];
const outputs = document.querySelectorAll(".container__output");
const imgUrl = [
  "./assets/img/imagen_1.png",
  "./assets/img/imagen_2.png",
  "./assets/img/imagen_3.png",
  "./assets/img/imagen_4.png",
  "./assets/img/imagen_5.png",
  "./assets/img/imagen_6.png",
  "./assets/img/imagen_7.png",
  "./assets/img/imagen_8.png",
];
const imagen = document.querySelector("img");
const boton_reiniciar = document.querySelectorAll("[data-reset]");
const message = document.querySelector("[data-message]");
let randomWord = words[getRandomInt()];
let aciertos = "";
let deshaciertos = "";

document.addEventListener("keyup", (e) => startGame(e.key));

function startGame(input) {
  
 
  if (randomWord.includes(input)) {
    

    randomWord.split("").forEach((letra, i) => {
      if (letra === input) {
        aciertos += input;
        outputs[i].textContent = input;
      }
    });
    
    if (aciertos.length == randomWord.length) {
      document.querySelector(".modal").classList.remove("modal--hidden");
      message.textContent = "acertó";
      message.classList.add("modal__message--success");
    }
  } else {
    deshaciertos += input;
    for (let output of outputs) {
      if (output.textContent === "") {
        output.textContent = "X";
        
        break;
      }
    }
    imagen.setAttribute('src', imgUrl[deshaciertos.length - 1]); 
    if (deshaciertos.length == randomWord.length) {
      document.querySelector(".modal").classList.remove("modal--hidden");
      message.textContent = "perdió";
      message.classList.add("modal__message--success");
    }
  }
}

function getRandomInt() {
  const min = 0;
  const max = 4;
  return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("click", (e) => {
  const datatype = Object.keys(e.target.dataset)[0];
  if (datatype === "reset") {
    window.location.reload();
  }
  document.querySelector(".modal").classList.add("modal--hidden");
});
