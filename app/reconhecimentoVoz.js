window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoChute = document.querySelector("#chute")

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = (e.results[0][0].transcript)
    exibirChute(chute)
    validarChute(chute)
}

function exibirChute(chute) {
    elementoChute.innerHTML = ` <div> Você disse:</div>
        <span id="numero-chute"class="box">${chute}</span>
        `;
}

recognition.addEventListener('end', () => recognition.start())