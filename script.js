function verificarMulta(){
    const velocidade = document.querySelector('#velocidade').value
    const resultado  = document.getElementById('resultado')

    if(velocidade <= 60){
        resultado.innerHTML = "você não foi multado"

        resultado.className = 'verde'
    }else{
        resultado.innerHTML = "Você foi multado"
        resultado.className = "Vermelho"
    }
}