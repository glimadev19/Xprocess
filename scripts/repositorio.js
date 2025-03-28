document.addEventListener('DOMContentLoaded', function() {
    // Alternar dark/light mode
    const toggleSwitch = document.getElementById('toggle-switch');
    
    // Verificar preferência do usuário
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }
    
    toggleSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        
        // Salvar preferência (opcional)
        localStorage.setItem('darkMode', this.checked);
    });
    
    // Verificar localStorage (opcional)
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }
    
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', function() {
        // Implemente a lógica do menu lateral aqui
        console.log('Menu clicado - implementar lógica do menu lateral');
    });
    
    // User box
    const userBox = document.getElementById('user-box');
    userBox.addEventListener('click', function() {
        // Implemente o menu do usuário aqui
        console.log('Usuário clicado - implementar menu do usuário');
    });
    
    // Exemplo: Carregar vídeos dinamicamente (opcional)
    function loadVideos() {
        // Aqui você poderia fazer uma requisição para uma API
        // e popular os vídeos dinamicamente
        console.log('Carregar vídeos dinamicamente se necessário');
    }
    
    loadVideos();
});