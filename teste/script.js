const botao_mostra = document.querySelector("[data-mostra-cores]")
botao_mostra.addEventListener('click', ()=>{
    const lista = document.querySelector('[data-lista-cores]');
    lista.style.display = 'block';
});

const botao_esconde = document.querySelector("[data-esconde-cores]");
botao_esconde.addEventListener('click', () => {
    const lista = document.querySelector('[data-lista-cores]');
    lista.style.display = 'none';
})