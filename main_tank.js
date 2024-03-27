let des = document.getElementById('desenha').getContext('2d')
let tanque = new Tanque (100,200,70,70,"../Assets/tanque_01.png")
let bg = new Objeto (0,0,1200,450,"../Assets/normal.png")
let fase2 = new Objeto(0,0,1200,450, "../Assets/fase2.png")
let text1 = new Text()
let text2 = new Text()
let text3 = new Text()
let text4 = new Text()
let text5 = new Text()
let grupoTiros = [] 
let game2 = document.getElementById('game2')

function gameOver(){
    if(tanque.vida <= 0){
        jogar = false
        game2.style.display = "block"
    }
}

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

function colisao(){

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