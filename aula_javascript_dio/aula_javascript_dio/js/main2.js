//funçoes
/*
function soma(n1, n2) { 
    return n1 + n2; //soma
} */

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}  */

//var validar; //variavel global
/*
function validaidade(idade) {
    var validar; //validar local
    if (idade >= 18) { 
        validar = true
    } else {
        validar = false
    }
    return validar;
} 

//alert validar
var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade)); //local
//validaidade(idade) 
//console.log(validar); //global

//alert setReplace
alert(soma(5, 10)); //alert soma
//alert(setReplace("Vai nba", "NBA", "WNBA")); */



function clicou() {
    // alert("Obrigada por clicar");
    //estou injetando um html quando clicado
    //document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clica</b>r"; //por tag html esse fica em negrito
    console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    //window.open("https://www.saraiva.com.br/"); //abre outra janela quando clicado 
    window.location.href = "https://www.saraiva.com.br/"; // abre na mesma pagina 

}

/* //funcao 1 simples
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obridada por passar o mouse";
    //alert("Trocado");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
} */

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obridada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("Trocado");
}

function voltar(elemento) {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load() {
    alert("pagina carregada");
}

function FuncaoChange(elemento) {
    console.log(elemento.value);
}