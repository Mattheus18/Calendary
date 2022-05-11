const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full'}) + '<br />';
h1.innerHTML += data.toLocaleString('pt-BR', {timeStyle: 'short'});

