let des = document.getElementById('desenha').getContext('2d')

function gameOver(){}

function colisao(){
    grupoInimigos.forEach((inimigo)=>{
        if(tanque.colid(inimigo)){
            grupoInimigos.splice(grupoInimigos.indexOf(inimigo), 1)
            tanque.vida -= 1
        }
    })
}

function desenha(){    
}

function atualiza(){

}

function main(){
    des.clearRect(0,0,1200,450)
    desenha()
    atualiza()
}

function resetar(){
    console.log(tanque.vida)
    jogar = true
    game2.style.display = "block"
    pts = 0
    vida = 5
    tempo = 0
    tiro = 0
    Inimigos = 0
    grupoInimigos = 0
    grupoTiros = 0
    window.location.reload(); 
}

setInterval(main,10)