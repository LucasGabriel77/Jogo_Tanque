class Objeto{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenhaObjeto(){
    }

    desenha_img(){
    }

    colid(objeto) {
    }
}
class Tanque extends Objeto{
    dirX = 0
    dirY = 0
    pts = 0
    vida = 5
    frame = 1
    tempo = 0

    atualiza_tanque(){
        this.x += this.dirX
        this.y += this.dirY
        
        if(this.x <0){
            this.x = 0
        }
        else if(this.x > 260){
            this.x = 260
        }
        if(this.y <= 120){
            this.y = 120
        }
        else if(this.y >=300){
            this.y = 300
        }
    } 

    pontos(objeto){
        if(this.y > objeto.y){
            return true
        }
    }
    
    colid(objeto){
        
    }
}

class Inimigos extends Objeto{

}

class Cenario extends Objeto{

}

class Tiro extends Objeto{

}

class Texto {
}
