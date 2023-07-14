const botao = document.querySelector('#modo-noturno');
const body = document.querySelector('body')
botao.addEventListener('click', ()=>{
    const modo = botao.checked ? 'dark' : 'light'
    body.setAttribute("data-bs-theme", modo)
})

