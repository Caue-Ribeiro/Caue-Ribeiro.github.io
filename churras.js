/* carne - 400 gr por pessoa  e mais de 6h é 650
cerveja 1200 ml  por pessoa e mais de 6h 2000ml
bebidas 1000 ml por pessoa e mais de 6h 1500ml 
crianca vale por 0,5*/

let inputAdulto = document.getElementById('adultos')
let inputCrianca = document.getElementById('criancas')
let inputHora = document.getElementById('duracao')
let result = document.getElementById('resultado')


function calcular() {
    let adulto = inputAdulto.value
    let crianca = inputCrianca.value
    let duracao = inputHora.value

    let qtdCarne = carne(duracao) * adulto + (carne(duracao) / 2 * crianca)
    let qtdCerveja = cerveja(duracao) * adulto
    let qtdBebidas = bebidas(duracao) * adulto + (bebidas(duracao) / 2 * crianca)

    result.innerHTML = `<p><img src="./imagens/meat.png" alt="carne" width="20px"> ${Math.ceil(qtdCarne/1000)} Kg de Carne</p>`
    result.innerHTML += `<p><img src="./imagens/beer.png" alt="cerveja" width="20px"> ${Math.ceil(qtdCerveja/355)} Latas de Cerveja</p>`
    result.innerHTML += `<p><img src="./imagens/softdrinks.png" alt="refrigerante" width="20px"> ${Math.ceil(qtdBebidas/2000)} Garrafas de Refrigerante</p>`
}

function carne(duracao) {
    if (duracao >= 6) {
        return 650
    } else{
        return 400
    }
}

function cerveja(duracao) {
    if (duracao >= 6) {
        return 2000
    } else{
        return 1200
    }
}

function bebidas(duracao) {
    if (duracao >= 6) {
        return 1500
    } else{
        return 1000
    }
}
