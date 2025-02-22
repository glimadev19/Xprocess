// Variáveis para verificar se os modais estão abertos
let isModalOpen = false;  // Para o primeiro modal (Finalizar venda)
let isVendedoresModalOpen = false;  // Para o segundo modal (Lista de Vendedores)

// Abertura/fechamento do modal de Finalizar Venda com F2
document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
        // Alterna entre abrir e fechar o modal de Finalizar Venda
        if (isModalOpen) {
            document.getElementById('myModal').style.display = "none";
            isModalOpen = false;
        } else {
            document.getElementById('myModal').style.display = "block";
            isModalOpen = true;
        }
    }
});

// Abertura/fechamento do modal de Lista de Vendedores com F7
document.addEventListener('keydown', function(event) {
    if (event.key === 'F7') {
        // Alterna entre abrir e fechar o modal de Lista de Vendedores
        if (isVendedoresModalOpen) {
            document.getElementById('vendedoresModal').style.display = "none";
            isVendedoresModalOpen = false;
        } else {
            document.getElementById('vendedoresModal').style.display = "block";
            isVendedoresModalOpen = true;
            showVendedoresModal();  // Função para preencher a lista de vendedores
        }
    }
});

// Fechar o modal de Finalizar Venda ao clicar no "X"
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
    isModalOpen = false;
});

// Fechar o modal de Lista de Vendedores ao clicar no "X"
document.querySelector('#closeVendedoresModal').addEventListener('click', function() {
    document.getElementById('vendedoresModal').style.display = "none";
    isVendedoresModalOpen = false;
});

// Fechar os modais ao pressionar ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Fecha o modal de Finalizar Venda
        if (isModalOpen) {
            document.getElementById('myModal').style.display = "none";
            isModalOpen = false;
        }

        // Fecha o modal de Lista de Vendedores
        if (isVendedoresModalOpen) {
            document.getElementById('vendedoresModal').style.display = "none";
            isVendedoresModalOpen = false;
        }
    }
});

// Fechar os modais ao clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
        isModalOpen = false;
    }
    if (event.target === document.getElementById('vendedoresModal')) {
        document.getElementById('vendedoresModal').style.display = "none";
        isVendedoresModalOpen = false;
    }
};

// Função para preencher a lista de vendedores (dados simulados)
function showVendedoresModal() {
    const vendedores = [
        { codigo: Código, nome: "Vendedor " },
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

function alterarQuantidade(valor) {
    let quantidadeElemento = document.getElementById("quantidade");
    let quantidade = parseInt(quantidadeElemento.innerText);
    
    quantidade += valor;
    if (quantidade < 0) quantidade = 0;
    
    quantidadeElemento.innerText = quantidade;
}
