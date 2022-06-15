var botonencriptar = document.querySelector(".encriptar");
var botondesencriptar=document.querySelector(".desencriptar");
var botoncopiar = document.querySelector(".copio");

var dibujo = document.querySelector(".imagen1");
var h2 =document.querySelector(".contenedor_dos_h2");
var parrafo = document.querySelector(".contenedor_dos_parrafo");
var resultado=document.querySelector(".resultado_final");

botonencriptar.onclick = encriptar;
botondesencriptar.onclick= desencriptar;
botoncopiar.onclick=copiar;

function tomarValor(){
    var texto_dos = document.querySelector("#texto-a-encriptar");
    return texto_dos.value;
}

function encriptarTexto(mensaje){

    var texto   = mensaje;
    var textoEnc = "";

    for(i=0;i< texto.length; i++){
        if(texto[i] =="a"){

            textoEnc = textoEnc + "ai"
            
        } else if(texto[i] =="e"){

            textoEnc = textoEnc + "enter"
            
        }else  if(texto[i] =="i"){

            textoEnc = textoEnc + "imes"
            
        } else  if(texto[i] =="o"){

            textoEnc = textoEnc + "ober"
            
        } else  if(texto[i] =="u"){

            textoEnc = textoEnc + "ufat"
            
        } 
        else{
            textoEnc = textoEnc + texto[i];
        }
    }
    return textoEnc;
}


function desencriptarTexto(mensaje){
    var texto   = mensaje;
    var textoEnc ="";

    for(i=0;i< texto.length; i++){
        if(texto[i] =="a"){

            textoEnc = textoEnc + "a"
            i=i+1;
            
        } else if(texto[i] =="e"){

            textoEnc = textoEnc + "e"
            i=i+4;
            
        }else  if(texto[i] =="i"){

            textoEnc = textoEnc + "i"
            i=i+3;
            
        } else  if(texto[i] =="o"){

            textoEnc = textoEnc + "o"
            i=i+3;
            
        } else  if(texto[i] =="u"){

            textoEnc = textoEnc + "u"
            i=i+3;
            
        } 
        else{
            textoEnc = textoEnc + texto[i];
        }
    }
    return textoEnc;
}


function ocultar(){
    dibujo.classList.add("ocultar");
    h2.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}



function encriptar(){
    ocultar();
    var textoAEncriptar= tomarValor();
    resultado.textContent = encriptarTexto(textoAEncriptar);

}

function desencriptar(){
    ocultar();
    var textoAEncriptar= tomarValor();
    resultado.textContent = desencriptarTexto(textoAEncriptar);

}


function copiar(){
    var contenido = document.getElementById('resultado').innerHTML;

    navigator.clipboard.writeText(contenido);
        
 
}



