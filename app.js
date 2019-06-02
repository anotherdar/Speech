const btn = document.querySelector('.btn')
const txt = document.querySelector('.txt')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

const greeting = [
    'leave me alone',
    'i do not want to talk',
    'go way'
]

recognition.onresult = (e) => {
    const current = event.resultIndex

    const tranScript = event.results[current][0].transcript
    txt.textContent = tranScript

    readOutLoud(tranScript)
}

btn.addEventListener('click', ()=>{
    recognition.start()
})

const readOutLoud = (message) => {
    const speech = new  SpeechSynthesisUtterance()
    message.includes('hello') ? speech.text = greeting[Math.floor(Math.random() * greeting.length)] : speech.text = 'I do not Know what you said'
    
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}