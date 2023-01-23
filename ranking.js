let user = JSON.parse(localStorage.getItem("player")) 
let userQuiz = JSON.parse(localStorage.getItem("userQuiz"))
let  puntos = JSON.parse(localStorage.getItem("puntos"))


let jugador = document.querySelector(".jugador");
let puntaje = document.querySelector(".puntaje");



jugador.innerText = user.name
puntaje.innerText = puntos


