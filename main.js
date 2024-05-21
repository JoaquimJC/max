Array=["chute.png", "cine max.png", "cor.png","deta 1.png", "flamengo vs botafogo.png", "max contra artur.png", "maxer.png", "pião.png", "PLANTAS.png","poder max.png", "PRAIA.png", "super max.png", "tirinha.png", "trolagem.png"]

i=0 

function mudar(){
    if (i>13){
        i=0
    }
    document.getElementById("tira").src=Array[i];
    i++
}
function voltar(){
    if(i<0) {
        i=13
    }
    document.getElementById("tira").src=Array[i];
    i--
}