const options = document.querySelectorAll('.holdCards > article')
const button = document.querySelector('.button')
const question = document.querySelector('h2')
const form = document.querySelector('form')

const api = () => {
    return fetch('https://the-trivia-api.com/api/questions')
        .then(res => res.json())
        .then(data => data)
}
const isValid = localStorage.getItem('question')

const changeText = (localArray) => {
    const lastItem = localArray[localArray.length -1]
    question.innerText = lastItem.question
    const showAnswer = []
    showAnswer.push(lastItem.correctAnswer)
    lastItem.incorrectAnswers.forEach(e=> showAnswer.push(e))

    
    
    return showAnswer.sort()
}

api()
.then(res => {
    // changeText(res).forEach((elements,i) => {
    //     options[i].innerText = elements
    // })
    res.forEach(e => console.log(e))
    
} )

const findAnswer = (respuesta1) => {
   return localStorage.getItem('answers').find(e => e === respuesta1.innerText)
}





