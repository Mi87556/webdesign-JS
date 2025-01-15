function imc() {
    let ValorP = Number(peso.value)
    let ValorA = Number(altura.value)
    let calculo = ValorP/(ValorA*ValorA)

    if (calculo <= 18,5) {
        resposta.innerText = `Baixo do peso`
    } 
    else if (calculo < 24,99) {
        resposta.innerText = `Normal`
    } 
    else if (calculo < 29,99) {
        resposta.innerText = `Sobrepeso`
    } 
    else if(calculo >= 30) {
        resposta.innerText = `Obesidade`
    }
    else {
        resposta.innerText = `Não foi possível continuar!`
    }

}


