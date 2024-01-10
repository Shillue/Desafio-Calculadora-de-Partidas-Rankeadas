//Variáveis
let victory = 100;
let defeat = 50;

//Função calculadora de partidas Rakeadas
function rankeCalculator(victory, defeat){
    //Determinar o saldo de vitórias
    let saldoVitorias = victory - defeat;
    let nivel;

    //Determina o nível
    switch(true){
        case saldoVitorias < 10:
            nivel = "Ferro";
            break;
        case saldoVitorias >= 11 && saldoVitorias <=20: 
            nivel = "Bronze";
            break;
        case saldoVitorias >= 21 && saldoVitorias <= 50:
            nivel = "Prata";
            break;
        case saldoVitorias >= 51 && saldoVitorias <= 80:
            nivel = "Ouro";
            break;
        case saldoVitorias >= 81 && saldoVitorias <= 90:
            nivel = "Diamante";
            break;
        case saldoVitorias >= 91 && saldoVitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
            break;
    }

    return {saldoVitorias, nivel};
}

let resultado = rankeCalculator(victory,defeat);

//Exibir mensagem
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`)
