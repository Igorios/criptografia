
var btnCripto = document.querySelector("#btnCripto");
var btnCopiar = document.querySelector("#btnCopiar");
var btnDescripto = document.querySelector("#btnDescripto");

btnCripto.addEventListener("click", (event) => {
    event.preventDefault();

    let textoInput = document.querySelector("#texto").value;
    let campoMensagem = document.querySelector("#mensagem");

    let textoCriptografado = codifica(textoInput);
    campoMensagem.value = textoCriptografado;
    console.log(textoCriptografado);
});

btnDescripto.addEventListener("click", (event) => {
    event.preventDefault();

    let textoInput = document.querySelector("#texto").value;
    let campoMensagem = document.querySelector("#mensagem");

    let textoDescriptografado = decodificar(textoInput);
    campoMensagem.value = textoDescriptografado;
    console.log(textoDescriptografado);
});

btnCopiar.addEventListener("click", (event) => {
    event.preventDefault();

    copia();
});


function codifica(textoCodificado) {
    let texto =  textoCodificado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    return texto;
}

function decodificar(textoDecodificado) {
    let texto = textoDecodificado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return texto;
}

function copia() {
    let campoMensagem = document.querySelector("#mensagem"); 

    campoMensagem.select();
    campoMensagem.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(campoMensagem);
}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/