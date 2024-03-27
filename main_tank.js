let des = document.getElementById('desenha').getContext('2d')






document.addEventListener('keydown', (e)=>{
    // console.log(e.key)
    if(e.key === 'a' || e.key === 'ArrowLeft' || e.key === 'A'){
        tanque.dirX -= 2
    }
    else if(e.key === 'd' || e.key === 'ArrowRight' || e.key === 'D'){
        tanque.dirX += 2
    }
    else if(e.key === 'w' || e.key === 'ArrowUp' || e.key === 'W'){
        tanque.dirY -= 2
    }
    else if(e.key === 's' || e.key === 'ArrowDown' || e.key === 'S'){
        tanque.dirY += 2
    }
})

document.addEventListener('keyup', (e)=> {
    // console.log(e.key)
    if(e.key === 'a' || e.key === 'ArrowLeft' || e.key === 'A'){
        tanque.dirX = 0
    }
    else if(e.key === 'd' || e.key === 'ArrowRight' || e.key === 'D'){
        tanque.dirX = 0
    }
    else if(e.key === 'w' || e.key === 'ArrowUp' || e.key === 'W'){
        tanque.dirY = 0
    }
    else if(e.key === 's' || e.key === 'ArrowDown' || e.key === 'S'){
        tanque.dirY = 0
    }
})


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