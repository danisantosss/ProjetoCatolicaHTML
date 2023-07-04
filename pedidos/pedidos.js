var selectTamanhoSalgada = document.getElementById('tamanhosalgada');
  
selectTamanhoSalgada.addEventListener('change', function() {

   var valorSelecionado = selectTamanhoSalgada.value;
   
   var valorElemento = document.querySelector('.valorsalgada');
   valorElemento.textContent = 'R$ ' + obterPreco(valorSelecionado);
 });
 
 function obterPreco(tamanho) {
   switch (tamanho) {
     case 'pequena':
       return '24,00';
     case 'media':
       return '39,00';
     case 'grande':
       return '54,00';
     case 'familia':
       return '69,00';
     default:
       return '--,--';
   }
 }

 var selectTamanhoDoce = document.getElementById('tamanhodoce');
  
 selectTamanhoDoce.addEventListener('change', function() {

   var valorSelecionado = selectTamanhoDoce.value;
   
   var valorElemento = document.querySelector('.valordoce');
   valorElemento.textContent = 'R$ ' + obterPreco(valorSelecionado);
 });
 
 function obterPreco(tamanho) {
   switch (tamanho) {
     case 'pequena':
       return '24,00';
     case 'media':
       return '39,00';
     case 'grande':
       return '54,00';
     case 'familia':
       return '69,00';
     default:
       return '--,--';
   }
 }

 function calcularTotal() {
    var select1 = document.getElementById('tamanhosalgada');
    var select2 = document.getElementById('tamanhodoce');
    var valor1 = parseFloat(obterPreco(select1.value));
    var valor2 = parseFloat(obterPreco(select2.value));
    var valor3 = 12;

    valor1 = isNaN(valor1) ? 0 : valor1;
    valor2 = isNaN(valor2) ? 0 : valor2;

    var total = valor1 + valor2 + valor3;

    var totalElemento = document.getElementById('total');
    totalElemento.textContent = "Total: R$ " + total.toFixed(2);
  }

function hideMenuOnResize() {
    var menu = document.querySelector('.menu');
    var windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        menu.style.display = 'none';
    } else {
        menu.style.display = '';
    }
}

window.addEventListener('resize', hideMenuOnResize);

function toggleMenu() {
    var menu = document.querySelector('.menu');
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
