let numerosSorteados = [];
let botao = document.querySelectorAll("button");
let numeroSorteado = document.querySelector("#numero_sorteado");
let numeros = [];
let lastNumber = 1;
let quantidadeNumeros = document.querySelector(".quantidade_numeros");let container = document.querySelector('.container2');
sortear = () => {
        let primeiroNumero = document.querySelector(".numero_inicial").value;
        let segundoNumero = document.querySelector(".numero_final").value;
        if (primeiroNumero == '' && segundoNumero == '') {
            alert('Informe os numeros');
            zerar()
            return;
}
        for (let i = parseInt(primeiroNumero); i <= parseInt(segundoNumero); i++) {  
            numeros.push(i);
            console.log(numeros)
}
            gerarAleatorio()
            zerar()
            container = document.querySelector('.container2').textContent = '';
            createButton();
            
}
quantidadeNumeros.value = 1;
    gerarAleatorio = () => {
        for (let i = 0; i < quantidadeNumeros.value; i++) {
            let aleatorio = numeros[Math.floor(Math.random() * numeros.length)]
                numerosSorteados.push(aleatorio);
                if (numerosSorteados.includes(numerosSorteados)){
                    return gerarAleatorio();
                } else {
                    console.log(aleatorio);
                    escrever(aleatorio);
                }
                console.log(numerosSorteados)
        }
}

    zerar = () => {
            document.querySelector(".numero_inicial").value = '';
            document.querySelector(".numero_final").value = '';
            quantidadeNumeros.value = 1;
            
}
escrever = (texto) => {
    if (quantidadeNumeros.value == 1) {
    numeroSorteado.textContent = numeroSorteado.textContent + texto 
    } else {
        numeroSorteado.textContent = numeroSorteado.textContent + texto + ',  '
    }
    numeroSorteado.style.background = 'yellow';
}
createButton = () => {
     let divNova = document.createElement("div");
     divNova.setAttribute('class', 'botao_reinicio');
     document.querySelector('.container').appendChild(divNova);

     let botao = document.createElement("button");
    botao.setAttribute('id', 'reinicio');
    let texto = document.createTextNode("Reiniciar");        
    botao.appendChild(texto);

    botao.onclick = () => {
        location.reload()
}
document.querySelector('.botao_reinicio').appendChild(botao);
}
