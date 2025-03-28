document.addEventListener('DOMContentLoaded', function() {
    // Alternar dark/light mode
    const toggleSwitch = document.getElementById('toggle-switch');
    
    toggleSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.checked);
    });

    // Verificar preferência salva
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
        // Adicione aqui a lógica do menu do usuário
        console.log('Menu do usuário clicado');
    });

    // Você pode adicionar mais funcionalidades conforme necessário
});