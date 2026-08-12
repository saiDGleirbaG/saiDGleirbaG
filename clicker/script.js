visor_pontos = document.getElementById("visor_pontos")
visor_incremetal = document.getElementById("visor_incremental")
upgrade = document.getElementById("upgrade")

pontos = 0
visor_pontos.textContent = pontos

incremento = 1
visor_incremetal.textContent = incremento

preco = 10
upgrade.textContent = preco

document.getElementById("imagem").addEventListener("click", function(){
    pontos = pontos + incremento
    visor_pontos.textContent = pontos.toFixed(2)
})

upgrade.addEventListener("click", function(){
    if(pontos >= preco) {
        pontos = pontos - preco
        visor_pontos.textContent = pontos.toFixed(2)

        incremento = incremento * 1.2
        visor_incremetal.textContent = incremento.toFixed(2)

        preco = preco * 1.25
        upgrade.textContent = preco.toFixed(2)
    }
})