const btnClick = document.querySelector('#btn-click');
const paragrafo = document.querySelector('#meu-paragrafo');

btnClick.addEventListener('click', minhaFuncao);

function minhaFuncao() {
    paragrafo.innerText = "Parágrafo alterado com sucesso!";
}