const inputtextarea = document.querySelector(".Ingresa");
const inputmensaje = document.querySelector(".mensaje");
const BotonEncriptar = document.querySelector(".btn-encriptar");
const BotonDesencriptar = document.querySelector(".btn-desencriptar");
const BotonCopiar = document.querySelector(".copiar");

document.getElementById("botons").addEventListener("click", function() {
  if (document.getElementById("Ingresa").value.trim() === "") {
      alert("Por favor escriba algo antes de enviar");
  } else {
  }
});


function encriptar (){
	var mensaje = inputtextarea.value;
	var mensajeOculto = ""+"\n"+ mensaje
	.replaceAll("e", "enter")
	.replaceAll("i", "imes")
	.replaceAll("a", "ai")
	.replaceAll("o", "ober")
	.replaceAll("u", "ufat");

	inputmensaje.value = mensajeOculto;
}

function desencriptar (){
	var mensajeOculto = inputtextarea.value;
	var mensaje = mensajeOculto
	.replaceAll("enter", "e")
	.replaceAll("imes", "i")
	.replaceAll("ai", "a")
	.replaceAll("ober", "o")
	.replaceAll("ufat", "u");

	inputmensaje.value = mensaje;
}


function copiar (){
	var mensajeOculto = inputmensaje.value;
	navigator.clipboard.writeText(mensajeOculto);
  
  alert("Texto Copiado!!!");
}



BotonEncriptar.onclick = encriptar;
BotonDesencriptar.onclick = desencriptar;
BotonCopiar.onclick = copiar;


document.getElementById("btn-encriptar").addEventListener("click", function(){
  document.getElementById("resultado").style.display = "none";
  document.getElementById("copiar").style.display = "block";
  document.getElementById("mensajeEncriptado").style.display = "block";
  document.getElementById("mensajeDesencriptado").style.display = "none";
  
});

document.getElementById("btn-desencriptar").addEventListener("click", function(){
  document.getElementById("resultado").style.display = "none";
  document.getElementById("copiar").style.display = "block";
  document.getElementById("mensajeEncriptado").style.display = "none";
  document.getElementById("mensajeDesencriptado").style.display = "block";
  
});

const lettersRegex = /^[a-z\s-ñ]*$/;
const textarea = document.getElementById("Ingresa");
textarea.oninput = function() {
  if (!lettersRegex.test(textarea.value)) {
    textarea.value = textarea.value.replace(/[^a-z\s]/g, "");
    alert("solo letras minúsculas y sin acento");
  }
};

