

//API 
const fetchAPIurl = 'https://the-trivia-api.com/api/questions'

//questions
const questionContainer = document.querySelector("#questions-cont")
const questionBar = document.querySelector("#question")


// //score display 
const scoreDisplay = document.querySelector("#score")
scoreDisplay.classList.add('counter-display')



//controls div - 
const nextBtn = document.querySelector("#next")
const resetBtn = document.querySelector("#reset")


//counters 
const counter = document.createElement('h1')


// const counterButton = document.createElement('button')
// counterButton.classList.add('counter-plus')
// let counterPlusElement = document.querySelector('.counter-plus')


//not working yet 
function updateDisplay(){
    let count = 0
    count++
    scoreDisplay.textContent = count
}





//answer buttons
const buttonsDiv = document.querySelector("#answer-buttons")




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
    const random = totalArray.sort(() => (Math.random() > .5) ? 1 : -1);

    random.forEach(answer => {
        let answerButtons = document.createElement('button')
        answerButtons.type = 'button'
        answerButtons.textContent = answer
        answerButtons.classList.add('btn')
        buttonsDiv.append(answerButtons)
        answerButtons.addEventListener('click', ()=>{
            if(answerButtons.textContent == correct){
                updateDisplay()
            } else {
                alert('ya dummy')
            }
        })
    })
}
