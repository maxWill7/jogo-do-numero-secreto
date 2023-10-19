let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'jodo do número secreto';

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'escolha um número emtre 1  e 10';

function exibirTestoNaTela (tag , texto) {
    let campo = document.querySelector ( tag );
    campo.innerHTML = texto;
    responsivevoice.speach(texto , ' Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial () {
    exibirTestoNaTela ('h1' , 'jogo do número secreto');
    exibirTestoNaTela ('p' , 'escolha um número entre 1 e 100');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto) {
        exibirTestoNaTela ( 'h1' , 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!` ; 
        exibirTestoNaTela ( 'p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if ( chute > numeroSecreto ) {
            exibirTestoNaTela ( 'p' , 'ERROU! o número secreto é menor');
        } else {
            exibirTestoNaTela ('p' , 'ERROU! o número secreto é maior');
        }
        //tentativas = tentativas + 1;
         tentativas++;
         limparCampo();
    }

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt ( Math.random () * 100 + 1 );
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio ();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
   }
    
  }


function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio () ;
    limparCampo();
    tentativas = 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

