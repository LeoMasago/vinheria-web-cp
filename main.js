function idade(){
    var idade = parseFloat(document.getElementById("idade").value);

    if(idade < 18){
        alert("Não pode!");
    }
    else{
        // direcionando para a página home
        window.location.href = "home.html";
    }
}

function compra(){
    var vinho1 = parseInt(document.getElementById("qtdVinho1").value);
    var vinho = 11;
    if(vinho1 > 0){
        valor = vinho1 * vinho;
        alert(valor);
    }
    
}