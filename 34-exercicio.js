function jogos() {
    // o + usado converte a spring em number
    let tLocal = +(pontuacaoLocal.value)
    let tVisitante = +(pontuacaoVisitante.value)
    

    if (tVisitante > tLocal) {
        resposta.innerText = `Time Visitantes ganhou de ${tVisitante}x${tLocal}!`
    }
    else if (tLocal > tVisitante) {
        resposta.innerText = `Time local ganhou de ${tLocal}x${tVisitante}!`
    }
    else{
        resposta.innerText = `Empate!`
    }
}
