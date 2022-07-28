'use strict'

const button = document.querySelector(".button")
const message = document.querySelector(".message")
const quizForm = document.querySelector(".quiz-form")


const correctAnswers = [
  "30°",
  "One",
  "180°",
  "Equilateral Triangles",
  "20°"
]

const calculateScore = function(){
  const formResults = new FormData(quizForm)
  console.log(formResults)
  let score = 0, index = 0

  for(let value of formResults.values()){
    if(value === correctAnswers[index]){
      score++
    }
    index ++
  }
  message.textContent = `The final score is ${score}`
}

button.addEventListener('click',calculateScore)