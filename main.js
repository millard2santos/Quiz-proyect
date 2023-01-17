const options = document.querySelectorAll('.holdCards > article')
const button = document.querySelector('.button')
const question = document.querySelector('h2')

const api = () => {
    return fetch('https://the-trivia-api.com/api/questions')
        .then(res => res.json())
        .then(data => data)
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
    
    
} )

const findAnswer = (respuesta1) => {
   return localStorage.getItem('answers').find(e => e === respuesta1.innerText)
}





