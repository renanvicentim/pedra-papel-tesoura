let jogadorNome
let jogadorPontos = 0
let jogadorEscolha = 0

let computadorPontos = 0
let computadorEscolha = 0

function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto
}

function definirNomeJogador (nome) {
    document.getElementById('jogador-nome').innerHTML = nome
}

function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function calcularEscolha(jogador, computador) {
    if (jogador == 1 && computador == 1) {
        return 0
    } else if (jogador == 1 && computador == 2){
        return 2
    } else if (jogador == 1 && computador == 3){
        return 1
    } 
    
    else if (jogador == 2 && computador == 1) {
        return 1
    } else if (jogador == 2 && computador == 2){
        return 0
    } else if (jogador == 2 && computador == 3){
        return 2
    }

    else if (jogador == 3 && computador == 1) {
        return 2
    } else if (jogador == 3 && computador == 2){
        return 1
    } else if (jogador == 3 && computador == 3){
        return 0
    }
}

function somarPontoJogador () {
    jogadorPontos++
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos
}

function somarPontoComputador () {
    computadorPontos++
    document.getElementById('computador-pontos').innerHTML = computadorPontos
}

function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado')
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado')
}

function jogar(escolha) {
    jogadorEscolha = escolha
    selecionar('jogador', jogadorEscolha)

    computadorEscolha = sortear(1,3)
    selecionar('computador', computadorEscolha)

    let ganhador = calcularEscolha(jogadorEscolha, computadorEscolha)

    if (ganhador == 0) {
        mensagem('Empate')
    } else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome)
        somarPontoJogador()
    } else if (ganhador == 2) {
        mensagem('Ponto para Computer')
        somarPontoComputador()
    }

    setTimeout(function() { 
        deselecionar('jogador', jogadorEscolha)
        deselecionar('computador', computadorEscolha)
        mensagem(jogadorNome + ' escolha uma opção acima...')
    }, 1000)
  
}

document.getElementById("jogador-escolha-1").onclick = function() {(jogar(1))}
document.getElementById("jogador-escolha-2").onclick = function() {(jogar(2))}
document.getElementById("jogador-escolha-3").onclick = function() {(jogar(3))}

jogadorNome = prompt('Qual é o seu nome?')

mensagem('Bem-vindo ' +  jogadorNome + ' está preparado? Escolha uma opção acima...')

definirNomeJogador(jogadorNome)