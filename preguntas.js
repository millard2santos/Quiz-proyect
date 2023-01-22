// LLAMA LO QUE CONTIENE LA BASE DE DATOS (userQuiz)
let userQuiz = JSON.parse(localStorage.getItem("userQuiz"))    //en la variable se llama y transforma el string en un objeto y se llama al Key que esta en el localStorage
let user = JSON.parse(localStorage.getItem("player"))  //en la variable se llama y transforma el string en un objeto y se llama al Key que esta en el localStorage
let questionBank = JSON.parse(localStorage.getItem("questionBank"))


const questions = document.querySelector("h2")
const answers = document.querySelectorAll("article")
const btnNext = document.querySelector("button")

// ingresa la respuesta correcta en un array en forma ordenada alfabeticamente
const imprimirPregunta = (res) => {
    res[0].incorrectAnswers.push(res[0].correctAnswer)
    let arrayAll = res[0].incorrectAnswers.sort()

// muestra la pregunta en el H2
    questions.innerText = res[0].question
    answers.forEach((e, i) => {
        e.innerText = arrayAll[i]
        
    });
    console.log(res[0].correctAnswer);


  let puntos = 0;
  let maxPuntos = 10;

    //   for each en article y cada vez que se seleccion suma punto
    answers.forEach((alternativa, ) => {
        alternativa.addEventListener("click", event => {
           
            
            answers.forEach(e => {

                if (e.innerText === res[0].correctAnswer && puntos < maxPuntos) {
                    e.style = "background-color: blue"
                    puntos++
                } else {
                    e.style = "background-color: red"
                }
                localStorage.setItem("puntos", JSON.stringify(puntos))
            })

            const showbtn = () => {
                btnNext.style.display = "block";
                
            }
            showbtn()
        })
    });

  
}

// funcion que muestra la pregunta 
const recogerPregunta = () => {

    btnNext.style.display= "none"
    return fetch(`https://the-trivia-api.com/api/questions?categories=${user.categoria}&limit=1`)
        .then(response => response.json())

}

recogerPregunta()
    .then(data => {
        imprimirPregunta(data)

    })

btnNext.addEventListener("click", () => {
    recogerPregunta()
        .then(data => {
            imprimirPregunta(data)

        })
})










