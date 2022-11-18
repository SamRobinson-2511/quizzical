const game = document.querySelector("#game")
const score = document.querySelector("#score")

let question;
function addQuestion(){
    const row = document.createElement('div')
    row.classList.add('categories')
    game.append(row)


    question.forEach(question => {
        fetch('https://the-trivia-api.com/api/questions')
            .then(r=>r.json())
            .then(question => console.log(question))
    })
}


addQuestion()


