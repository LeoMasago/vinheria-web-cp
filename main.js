function idade(){
    var idade = parseFloat(document.getElementById("idade").value);

    if(idade < 18){
        alert("Acesso negado!");
    }
    else{
        // direcionando para a página home
        window.location.href = "home.html";
    }
}

function carrinho(){
    var vinho1 = parseFloat(document.getElementById("qtdVinho1").value);
    var vinho2 = parseFloat(document.getElementById("qtdVinho2").value);
    var vinho3 = parseFloat(document.getElementById("qtdVinho3").value);
    var vinhoTinto = 50;
    var vinhoBranco = 35;
    var vinhoRose = 40;
    var v1 = vinho1 * vinhoTinto;
    var v2 = vinho2 * vinhoBranco;
    var v3 = vinho3 * vinhoRose;
    if(vinho1 > 0 || vinho2 > 0 || vinho3 > 0){
        valor = v1 + v2 + v3;
        alert("Itens adicionados com sucesso!");
    } 
}

function desconto(){
    var desconto = document.getElementById("txtDesconto").value;
    if(desconto == "FIAP2024"){
        porcentagem = 10;
        valor = valor * 0.9;
        console.log(valor); 
        alert(`Você conseguiu um desconto de ${porcentagem}%`);   
    }else{
        alert("Cupom inválido");
    }
    
    
    
}

function finalizar(){
  alert(`O valor final da sua conta foi de R$ ${valor}`);
  window.location.replace(href="pagamento.html");
}

function finalizar2(){
    alert(`Seus dados foram salvos com sucesso! Obrigado pela preferência na compra.`)
    window.location.replace(href="home.html");
}