const fetchAPIurl = 'https://the-trivia-api.com/api/questions'


const questionContainer = document.querySelector("#questions-cont")
const questionBar = document.querySelector("#question")
const scoreDisplay = document.querySelector("#score")

//controls div 
const startBtn = document.querySelector("#start")
const nextBtn = document.querySelector("#next")
const resetBtn = document.querySelector("#reset")

startBtn.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e.type)
})





const buttonsDiv = document.querySelector("#answer-buttons")
buttonsDiv.addEventListener('click', handleClick)
function handleClick(e){
    e.preventDefault()
    if(e.target.id == 'true'){
        console.log(e.target)
    }
}



function incrementCounter(){
    let i = 0
    document.getElementById('true').value = ++i
    console.log(i)
}


fetch(fetchAPIurl)
.then(r=>r.json())
.then(quiz => renderQuiz(quiz))




function renderQuiz(quiz){
    let i = 0
    
    const question = quiz[i].question
    questionBar.textContent = `${question}`
    console.log(question)
 
    const correct = quiz[i].correctAnswer

    const incorrect = quiz[i].incorrectAnswers
    
    const totalArray = incorrect.concat(correct)
    
    totalArray.forEach(answer => {
        let answerButtons = document.createElement('button')
        answerButtons.type = 'button'
        answerButtons.textContent = answer
        answerButtons.classList.add('btn')
        buttonsDiv.append(answerButtons)

    })           
}
    




    



    
   