let tentativas = 10


function validarChute(chute) {
    var numero = +chute

    if (Number.isNaN(numero)) {
        var divMensagem = document.createElement('div')
        divMensagem.innerHTML = "Valor inválido"
        elementoChute.appendChild(divMensagem)
        return

    }

    if (numero < menorValor || numero > maiorValor) {
         var divMensagem = document.createElement("div");
         divMensagem.innerHTML = `Diga um número entre ${menorValor} e ${maiorValor}`;
         elementoChute.appendChild(divMensagem);
         return
        }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você acertou!</h2>
            <h3>O Número secreto era ${numeroSecreto}</h3>
            <button id="novo-jogo"> Jogar Novamente </button>
        `
    }
    if (tentativas === 0) {
        document.body.style.backgroundColor = 'red'
        document.body.innerHTML = `<h1> GAME OVER </h1>
         <h3> Suas tentativas acabaram. O número secreto era ${numeroSecreto} </h3>
         <button id="novo-jogo"> Jogar Novamente </button>
        `;
    }
    else if (numero > numeroSecreto) {
    tentativas--
       elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div> 
                                        <div> Você tem mais ${tentativas} tentativas </div>`
    }
    else {
        tentativas--
        elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        <div> Você tem mais ${tentativas} tentativas </div> `;
    }

}

document.body.addEventListener('click', e => {
    if (e.target.id == 'novo-jogo') {
        window.location.reload();
    }
})

// const botao = document.querySelector("#novo-jogo")
// botao.addEventListener("click", () => { window.location.reload() });

