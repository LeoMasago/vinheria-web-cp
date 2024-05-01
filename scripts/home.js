const VINE1_PRICE = 50
const VINE2_PRICE = 35
const VINE3_PRICE = 40

let totalAmount = 0;

function addToCart(price) {
  while (true) {
    const inputedQuantity = prompt('Quantidade (entre 0 a 20): ');

    // quando o valor é null significa que ele apertou o 'botão cancelar'
    if (inputedQuantity === null) {
      /*
        invés de break usei a keyword 'return' por um motivo:
        break ia parar a *execução do while* e continuar a debaixo do while
        enquanto 'return' para a execução da function e não executa nada além 
      */
      return;
    }

    const inputedQuantityNumber = parseInt(inputedQuantity);

    // equivalente ao isNumeric no python
    // NaN representa 'Not A Number' que significa 'Não é um Numero'
    const isNotQuantityNaN = Number.isNaN(inputedQuantityNumber) === false;
    const isRangeValid = inputedQuantityNumber > 0 && inputedQuantityNumber <= 20;

    /*
      ! na frente é como o 'not' em python
      && e como o 'and'
      na maioria das linguagens são desse jeito, isso vem do C
      por isso essas linguagens syntax vinda do C são chamadas de C-like
    */
    if (isNotQuantityNaN && isRangeValid) {
      totalAmount += price * inputedQuantityNumber;

      alert('Adicionado');

      break;
    }

    alert('Quantidade inválida');
  }

  const payBtn = document.getElementById('pay-btn');
  
  // removeu a class hide
  payBtn.className = 'btn';
  /*
    um jeito mais elegante seria
    
    payBtn.className = payBtn.className.replace('hide', '');
    
    caso houvesse mais class nesse botão ele manteria e
    tiraria apenas o hide
  */
}

function pay() {
  const discountCoupon = prompt('Cupom de desconto (dica CUP10)');
  
  if (discountCoupon === 'CUP10') {
    alert('Cupom aplicado');
    
  } else {
    alert('Perdeu a chance de ter cupom de desconto :C');
  }
  
  alert(`Vamos para o pagamento, ficou apenas R$ ${totalAmount} :D`);

  window.location.href = 'login.html';
}