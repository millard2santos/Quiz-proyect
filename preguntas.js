// LLAMA LO QUE CONTIENE LA BASE DE DATOS (userQuiz)
let userQuiz = JSON.parse(localStorage.getItem("userQuiz"))    //en la variable se llama y transforma el string en un objeto y se llama al Key que esta en el localStorage
let user = JSON.parse(localStorage.getItem("player"))  //en la variable se llama y transforma el string en un objeto y se llama al Key que esta en el localStorage
let questionBank = JSON.parse(localStorage.getItem("questionBank"))


const questions = document.querySelector("h2")
const answers = document.querySelectorAll("article")
const btnNext = document.querySelector("button")

let resRight = 0;
let blockAnswer = false


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



    //   for each en article y cada vez que se seleccion 
    answers.forEach((alternativa) => {
        alternativa.addEventListener("click", event => {
            console.log(alternativa.innerText, res[0].correctAnswer, resRight, blockAnswer);
            if (alternativa.innerText === res[0].correctAnswer && blockAnswer === false) {
                console.log('yes');
                resRight++
                console.log(resRight);
            }
            blockAnswer = true
            localStorage.setItem("resRight", resRight)
            answers.forEach(e => {

                if (e.innerText === res[0].correctAnswer) {
                    e.style = "background-color: blue"

                } else {
                    e.style = "background-color: red"
                }



            })

            btnNext.style.display = "block"
        })
    });

}








// funcion que muestra la pregunta 
const recogerPregunta = () => {
    answers.forEach(e => {                     // reinicia las alternativas en la siguiente pregunta
        e.style = "background-color: white"
    })

    btnNext.style.display = "none"             // el boton no esta aparece cuando se muestra las alternativas
    return fetch(`https://the-trivia-api.com/api/questions?categories=${user.categoria}&limit=1`)
        .then(response => response.json())



}

recogerPregunta()
    .then(data => {
        imprimirPregunta(data)

    })

btnNext.addEventListener("click", () => {
        blockAnswer = false
        recogerPregunta()
        .then(data => {
            imprimirPregunta(data)

        })
})










