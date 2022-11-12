const quizData = [
    {
        question: "Choose the option with the modifier in the correct place.",
        a: "After reading the original study, the article remains unconvincing.",
        b: "After reading the original study, the remaining article is unconvincing.",
        c: "After reading the original study, the unconvincing article remains.", 
        d: "After reading the original study, I find the article unconvincing.",
        correct: "d",
    },
    {
        question: "Choose the option with the modifier in the correct place.",
        a: "I thought I dropped my keys when I went to pick up the groceries, but I left them in my car.",
        b: "When I went to pick up the groceries, I thought I dropped my keys, but I left them in the car.",
        c: "When I went to pick up the groceries, I left them in the car, but I thought I dropped my keys.",
        d: "When I went to pick up my keys, I thought I dropped my groceries, but I left them in the car.",
        correct: "b",
    },
    {
        question: "Choose the option with the modifier in the correct place.",
        a: "I tried to catch the bus earliest, but I slept through my alarm.",
        b: "I tried earliest to catch the bus, but I slept through my alarm.",
        c: "I tried to catch the earliest bus, but I slept through my alarm.",
        d: "I tried to catch the bus, but I slept through my earliest alarm.",
        correct: "c",
    },
    {
        question: "Choose the option with the modifier in the correct place.",
        a: "My parents bought a puppy they called Patches for my sister.",
        b: "My parents bought a puppy for my sister they called Patches.",
        c: "My parents bought my sister Patches the puppy.",
        d: "My parents bought my sister for a puppy they called Patches",
        correct: "a",
    },
    {
        question: "Choose the option with the modifier in the correct place.",
        a: "Cassie told Keisha that she loved her new dress.",
        b: 'Cassie told Keisha, "I love my new dress."',
        c: 'Cassie told Keisha, "I love your new dress."',
        d: "Both b and c could be correct.",
        correct: "d",
    },
];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
function loadQuiz() {
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
 
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})