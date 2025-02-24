// Variáveis para verificar se os modais estão abertos
let isModalOpen = false;  // Para o primeiro modal (Finalizar venda)
let isVendedoresModalOpen = false;  // Para o segundo modal (Lista de Vendedores)
let isCaixaModalOpen = false;  // Para o modal de abertura e fechamento do caixa
let isCaixaModalFechadaOpen = false; // Para o modal CaixaModalfechada

// Função para fechar todos os modais abertos
function fecharModaisAbertos() {
    if (isModalOpen) {
        document.getElementById('myModal').style.display = "none";
        isModalOpen = false;
    }

    if (isVendedoresModalOpen) {
        document.getElementById('vendedoresModal').style.display = "none";
        isVendedoresModalOpen = false;
    }

    if (isCaixaModalOpen) {
        document.getElementById('CaixaModal').style.display = "none";
        isCaixaModalOpen = false;
    }

    if (isCaixaModalFechadaOpen) {
        document.getElementById('CaixaModalfechada').style.display = "none";
        isCaixaModalFechadaOpen = false;
    }
}

// Abertura/fechamento do modal de Finalizar Venda com F2
document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
        if (isModalOpen) {
            fecharModaisAbertos();  // Fecha o modal se já estiver aberto
        } else {
            fecharModaisAbertos();  // Fecha os outros modais
            let modal = document.getElementById('myModal');
            isModalOpen = !isModalOpen;
            modal.style.display = isModalOpen ? "block" : "none";
        }
    }
});

// Abertura/fechamento do modal de Lista de Vendedores com F7
document.addEventListener('keydown', function(event) {
    if (event.key === 'F7') {
        if (isVendedoresModalOpen) {
            fecharModaisAbertos();  // Fecha o modal se já estiver aberto
        } else {
            fecharModaisAbertos();  // Fecha os outros modais
            let modal = document.getElementById('vendedoresModal');
            isVendedoresModalOpen = !isVendedoresModalOpen;
            modal.style.display = isVendedoresModalOpen ? "block" : "none";

            if (isVendedoresModalOpen) {
                showVendedoresModal();  // Função para preencher a lista de vendedores
            }
        }
    }
});

// Abertura/fechamento do modal de Caixa com F1
document.addEventListener('keydown', function(event) {
    if (event.key === 'F1') {
        event.preventDefault(); // Previne o comportamento padrão do F1 (abrir a ajuda)
        
        if (isCaixaModalFechadaOpen) {
            // Fechar o CaixaModalfechada se estiver aberto
            document.getElementById('CaixaModalfechada').style.display = "none";
            isCaixaModalFechadaOpen = false;
        } else if (isCaixaModalOpen) {
            fecharModaisAbertos();  // Fecha o modal de Caixa se já estiver aberto
        } else {
            fecharModaisAbertos();  // Fecha os outros modais
            let modal = document.getElementById('CaixaModal');
            isCaixaModalOpen = !isCaixaModalOpen;
            modal.style.display = isCaixaModalOpen ? "block" : "none";
        }
    }
});

// Fechar os modais ao clicar no "X"
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function() {
        let modal = this.closest('.modal');
        if (modal) {
            modal.style.display = "none";

            // Atualiza a variável correta do modal fechado
            if (modal.id === 'myModal') isModalOpen = false;
            if (modal.id === 'vendedoresModal') isVendedoresModalOpen = false;
            if (modal.id === 'CaixaModal') isCaixaModalOpen = false;
            if (modal.id === 'CaixaModalfechada') isCaixaModalFechadaOpen = false;
        }
    });
});

// Função para abrir o modal CaixaModalfechada
function abrirModalFecharCaixa() {
    // Obtém o modal CaixaModalfechada
    var modalFecharCaixa = document.getElementById("CaixaModalfechada");
    
    // Exibe o modal
    modalFecharCaixa.style.display = "block";
    isCaixaModalFechadaOpen = true;
}

// Obtém o botão de fechar caixa
var fecharCaixaBtn = document.getElementById("fecharCaixaBtn");

// Adiciona o evento de clique ao botão de fechar caixa
fecharCaixaBtn.addEventListener("click", abrirModalFecharCaixa);


// Fechar os modais ao pressionar ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModaisAbertos();  // Fecha os modais abertos ao pressionar ESC
    }
});

// Fechar os modais ao clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";

        if (event.target.id === 'myModal') isModalOpen = false;
        if (event.target.id === 'vendedoresModal') isVendedoresModalOpen = false;
        if (event.target.id === 'CaixaModal') isCaixaModalOpen = false;
        if (event.target.id === 'CaixaModalfechada') isCaixaModalFechadaOpen = false;
    }
};

// Função para preencher a lista de vendedores (dados simulados)
function showVendedoresModal() {
    const vendedores = [
        { codigo: "001", nome: "Vendedor 1" },
        { codigo: "002", nome: "Vendedor 2" },
        { codigo: "003", nome: "Vendedor 3" }
    ];

    const vendedoresList = document.getElementById('vendedores-list');
    vendedoresList.innerHTML = '';  // Limpa a lista antes de adicionar novos itens

    // Adicionar vendedores à lista
    vendedores.forEach(vendedor => {
        const vendedorItem = document.createElement('div');
        vendedorItem.classList.add('vendedores-item');
        vendedorItem.textContent = `${vendedor.codigo} | ${vendedor.nome}`;
        vendedoresList.appendChild(vendedorItem);
    });
}

// Função para alterar a quantidade
function alterarQuantidade(valor) {
    let quantidadeElemento = document.getElementById("quantidade");
    let quantidade = parseInt(quantidadeElemento.innerText) || 0;

    quantidade += valor;
    if (quantidade < 0) quantidade = 0;

    quantidadeElemento.innerText = quantidade;
}

// Adiciona um evento para capturar as teclas "-" e "+"
document.addEventListener("keydown", function (event) {
    if (event.key === "-") {
        alterarQuantidade(-1);
    } else if (event.key === "+" || event.key === "=") { // "=" porque no teclado numérico ABNT2 "+" está no shift do "="
        alterarQuantidade(1);
    }
});
