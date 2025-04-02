let contrast = 100;

document.addEventListener('DOMContentLoaded', function() {
    // Alternar dark/light mode e contraste
    const toggleSwitch = document.getElementById('toggle-switch');
    
    toggleSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked);
        
        if (this.checked) {
            aumentarContraste();
        } else {
            resetarContraste();
        }
    });

    // Verificar preferência salva de dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Botão de voltar
    document.querySelector('.seta').addEventListener('click', function() {
        window.location.href = 'tela_inicial.html';
    });

    // Menu do usuário
    document.getElementById('user-box').addEventListener('click', function() {
        console.log('Menu do usuário clicado');
    });
});

// Função para aumentar o contraste
function aumentarContraste() {
    const elementos = document.querySelectorAll('body *');
    if (contrast < 300) {
        contrast += 20;
    }
    elementos.forEach((elemento) => {
        elemento.style.filter = `contrast(${contrast}%)`;
    });
}

// Função para resetar o contraste
function resetarContraste() {
    const elementos = document.querySelectorAll('body *');
    contrast = 100;
    elementos.forEach((elemento) => {
        elemento.style.filter = `contrast(${contrast}%)`;
    });
}
