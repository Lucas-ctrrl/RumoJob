function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
}

// Função para alternar para o formulário de login
function showLoginForm() {
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('register-form').style.display = 'none';
}

// Função de login (simulação)
document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;
    if (name === "admin" && password === "admin"){
        sessionStorage.setItem("isAdmin", "true")
        alert('Login bem-sucedido!')
        window.location.href = "index.html"
    }else
        if (name === sessionStorage.getItem('name') && password === sessionStorage.getItem('password')) {
            sessionStorage.setItem("logged", "true")
            alert('Login bem-sucedido!');
            window.location.href = "index.html";
        } else {
            alert('Nome ou senha inválidos.');
        }
});

// Função de cadastro (simulação)
document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (name === "admin"){
        alert('Escolha outro nome.')
    } else{
        if (name && email && password) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('Cadastro realizado com sucesso! Agora, faça o login.');
            showLoginForm(); // Alterna para a tela de login
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }
    
});