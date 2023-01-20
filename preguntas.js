// LLAMA LO QUE CONTIENE LA BASE DE DATOS (userQuiz)
let userQuiz = JSON.parse(localStorage.getItem("userQuiz"))    //en la variable se llama y transforma el string en un objeto y se llama al Key que esta en el localStorage
let user = JSON.parse(localStorage.getItem("player"))  //en la variable se llama y transforma el string en un objeto y se llama al Key que esta en el localStorage
let questionBank = JSON.parse(localStorage.getItem("questionBank"))


const questions = document.querySelector("h2")
const answers = document.querySelectorAll("article")
const btnNext = document.querySelector("button")

//imprime las respuestas y lo ingresa en un array en forma ordenada alfabeticamente
const imprimirPregunta = (res) => {
    res[0].incorrectAnswers.push(res[0].correctAnswer)
    let arrayAll = res[0].incorrectAnswers.sort()

    questions.innerText = res[0].question
    answers.forEach((e, i) => {
        e.innerText = arrayAll[i]
    });
    console.log(res[0].correctAnswer);



    //   for each en article y cada vez que se seleccione esa alternativa
    answers.forEach((alternativa,i) => {
        alternativa.addEventListener("click", event => {
            console.log(i);
            answers.forEach(e => {

                if(e.innerText === res[0].correctAnswer){

                    e.style = "background-color: blue"
                }else{
                    e.style = "background-color: red"

                }
                
                
            })
            // if (event.target.innerText == res[0].correctAnswer) {
            //     event.target.style = "background-color: blue"
            //     console.log("bien");
            // }
            // else {
            //     event.target.style = "background-color: red"
            //     console.log("mal");
            // }
        })
    });

}

// funcion que muestra la pregunta
const recogerPregunta = () => {
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



//hacer un foreach para iterar el  array de preguntas y aplicarle una funcion a cada elelmento
// answers.forEach(alternativa => {
//     alternativa.addEventListener(("click"), event => {
//       if(event.target == res[0].correctAnswer)  {
//         console.log("bien");
//       }
//       else {
//         console.log("mal");
//       }

//     })

// });

// for (const item of answerDiv.children) {
//     if(item.innerText === correctAnswer) {
//         item.classList.add("correctAnswer");
//     }
// }







