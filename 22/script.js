jogando = true
cartas = 0
valor_final = 21

cartar_oponente = Math.floor(Math.random() * 3) + 19;

alert(cartar_oponente)

while(jogando){
    opcaoUsuario = prompt("Suas cartas somam: " + cartas)

    if(opcaoUsuario == "c"){
        cartas = cartas + Math.floor(Math.random() * 13) + 1;
    }

    if(opcaoUsuario == "s") {
        if(cartas > cartar_oponente){
            alert('Você ganhou!')
            jogando = false
        } else {
            cartas = 22
        }
    }

    if(cartas > valor_final) {
        alert('Você perdeu!')
        jogando = false
    }
}