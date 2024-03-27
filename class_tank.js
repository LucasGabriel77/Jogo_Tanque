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

    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
        (this.x + this.w > objeto.x)&&
        (this.y < objeto.y + objeto.h)&&
        (this.y + this.h > objeto.y)){
            return true
        }else{
            false
        }
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
    } 

    pontos(objeto){
    }
    
    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
        (this.x + this.w > objeto.x)&&
        (this.y < objeto.y + objeto.h)&&
        (this.y + this.h > objeto.y)){
            return true
        }else{
            false
        }
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
