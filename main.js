const options = document.querySelectorAll('.holdCards > article')
const button = document.querySelector('.button')
const question = document.querySelector('h2')

const api = () => {
    return fetch('https://the-trivia-api.com/api/questions')
        .then(res => res.json())
        .then(data => console.log(data))
}
const isValid = localStorage.getItem('question')

const questions = (localArray) => {
    question.innerText = localArray[localArray.length - 1].question
    // options.forEach(e => )
}

api()
    .then(res => {


        questions(res);
        // const allQuestions = []
        // const correct = []
        // const incorrect = []
        // res.forEach( e => {
        //     allQuestions.push(e.question)
        //     correct.push(e.correctAnswer)
        //     e.incorrectAnswers.forEach(e => incorrect.push(e))
        // })

        // localStorage.setItem('question', JSON.stringify(allQuestions))
        // localStorage.setItem('correctAnswer', JSON.stringify(correct))
        // localStorage.setItem('incorrectAnswer', JSON.stringify(incorrect))


    })

const findAnswer = (respuesta1) => {
    return localStorage.getItem('answers').find(e => e === respuesta1.innerText)
}



// PAGINA PRINCIPAL

// const namePlayer = document.querySelector (".namePlayer")
// const category = document.querySelector(".selectCategory")

let userQuiz = [];                                       //se crea un arrray vacio para guardar el objeto "user"
const form = document.querySelector("form")              // selecciono el form 
form.addEventListener("submit", (event) => {             // escucha cuando se envia el form
    event.preventDefault();    
     
                                            // detiene el envio automatico de submit antes que se ejecute codigo
    const user = {                                       //se creo el objeto con sus keys
        name: event.target.name.value,
        categoria: event.target.category.value,
        puntuacion: 0,
    }

    let indice = userQuiz.findIndex(element => element.name === user.name)

    if (indice == -1) {
        userQuiz.push(user)
        localStorage.setItem("userQuiz", JSON.stringify(userQuiz))
        localStorage.setItem("player", JSON.stringify(user))
    } else {

        if (userQuiz[indice].categoria === user.categoria) {

        } else {
            userQuiz[indice] = user
            localStorage.setItem("userQuiz", JSON.stringify(userQuiz))
            localStorage.setItem("player", JSON.stringify(user))
        }
    }

    // fetch(`https://the-trivia-api.com/api/questions?categories=${user.categoria}&limit=1`)
    //     .then(response => response.json())
    //     .then(data => localStorage.setItem("questionBank", JSON.stringify(data)))

})


