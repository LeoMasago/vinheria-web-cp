function idade(){
    var idade = parseFloat(document.getElementById("idade").value);

    if(idade < 18){
        alert("Não pode!")
    }
    else{
        // direcionando para a página home
        window.location.href = "home.html"
    }
}

function compra(){
    alert("Adicionado ao carrinho")
}