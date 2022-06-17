/* 4° a - ai
   1° e - enter
   3° i - imes 
   2° o - ober
   5° u - ufat 
   */ 

function encriptar () {
    var texto = document.getElementById("input-text").value.toLowerCase(); // LowerCase para pasar todo en minúscula automáticamente
    /* i es para que afecte tanto mayúsculas cómo minúsulas
        g es para toda la línea u oración
        n es para que afecte a múltiples líneas o párrafos
    */
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("muneco").style.display= "none";
    document.getElementById("mensaje-inicio").style.display= "none";
    document.getElementById("resultado").textContent= txtCifrado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";
    }

    function desencriptar () {
        var texto = document.getElementById("input-text").value.toLowerCase(); 
        var txtCifrado = texto.replace(/enter/igm, "e");
        var txtCifrado = txtCifrado.replace(/ober/igm, "o");
        var txtCifrado = txtCifrado.replace(/imes/igm, "i");
        var txtCifrado = txtCifrado.replace(/ai/igm, "a");
        var txtCifrado = txtCifrado.replace(/ufat/igm, "u");
    
        document.getElementById("muneco").style.display= "none";
        document.getElementById("mensaje-inicio").style.display= "none";
        document.getElementById("resultado").textContent= txtCifrado;
        document.getElementById("copiar").style.display= "show";
        document.getElementById("copiar").style.display= "inherit";
        }  

    function copy (){
        var contenido = document.querySelector("#resultado")
        contenido.select();
        document.execCommand("copy");
    }