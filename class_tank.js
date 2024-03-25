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

    atualiza_tanque(){
    } 

    pontos(objeto){
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
