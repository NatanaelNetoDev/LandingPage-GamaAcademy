const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let data = {
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let cadastrando = `<p>Cadastrando e-mail...</p>`;

    let concluido = `<p>Concluído, gentileza verificar sua caixa de e-mail!!!</p>`;

    content.innerHTML = cadastrando;

    setTimeout(() => {
        content.innerHTML = concluido
    }, 1000)

})