function calculateIMC(altura, peso) {
    const imc = peso / (altura * altura) ;
    return imc.toFixed(2);
}



const pesoInput = document.getElementById("peso")
const alturaInput = document.getElementById("altura")

const form = document.querySelector('form');

form.addEventListener("submit", event  => {
    
    event.preventDefault();


    const peso = Number(pesoInput.value) 
    const altura = Number(alturaInput.value) 
    

    const result = calculateIMC(altura, peso);

    let opniao ;

    if (result < 18.49){
        opniao = "Baixo Peso"
    } else if (result < 24.99){
        opniao = "Peso adequado"
    }else if(result <29.99){
        opniao = "SobrePeso"
    }else if (result <34.99){
        opniao = "Obesidade grau 1"
    }else if (result < 39.99){
        opniao = "Obesidade grau 2"
    }else {
        opniao = "Obesidade grau 3"
    }

    const message =  `Seu IMC é de ${result} você está com ${opniao}`;
    
    document.querySelector("#resultado").innerHTML = message


    }
)





