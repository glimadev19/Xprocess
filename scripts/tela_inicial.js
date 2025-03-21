// Variáveis para verificar se os modais estão abertos
let isModalOpen = false;  // Para o primeiro modal (Finalizar venda)
let isVendedoresModalOpen = false;  // Para o segundo modal (Lista de Vendedores)
let isCaixaModalOpen = false;  // Para o modal de abertura e fechamento do caixa
let isCaixaModalFechadaOpen = false; // Para o modal CaixaModalfechada
let isInformarClienteModalOpen = false; // Para o novo modal de Informar Cliente
let isInformarMaisDadosModalOpen = false; // Para o modal Informar Mais Dados
let isPesquisarProdutoModalOpen = false; // Para o modal de Pesquisar Produto
let iscargaCompletaModal = false;
let isvalidacaoUsuario = false;
let isVisualizacaoItens = false;
let isnovoModal = false;

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

    if (isInformarClienteModalOpen) {
        document.getElementById('informarClienteModal').style.display = "none";
        isInformarClienteModalOpen = false;
    }

    if (isInformarMaisDadosModalOpen) {
        document.getElementById('informarMaisDadosModal').style.display = "none";
        isInformarMaisDadosModalOpen = false;
    }

    if (isPesquisarProdutoModalOpen) {
        document.getElementById('pesquisarProdutoModal').style.display = "none";
        isPesquisarProdutoModalOpen = false;
    }
    if (iscargaCompletaModal) {
        document.getElementById('cargaCompletaModal').style.display = "none";
        iscargaCompletaModal = false;
    }
    if (isvalidacaoUsuario) {
        document.getElementById('validacaoUsuario').style.display = "none";
        isvalidacaoUsuario= false;
    }
    if (isVisualizacaoItens) {
        document.getElementById('visualizacaoItens').style.display = "none";
        isVisualizacaoItens = false;
    }
    if (isnovoModal) {
        document.getElementById('novoModal').style.display = "none";
        isnovoModal = false;
    }
}

  
// Função para abrir o modal CaixaModalfechada
function abrirModalFecharCaixa() {
    document.getElementById("CaixaModalfechada").style.display = "block";
    isCaixaModalFechadaOpen = true;
}

// Função para preencher a lista de vendedores (dados simulados)
function showVendedoresModal() {
    const vendedores = [
        { codigo: "001", nome: "Vendedor 1" },
        { codigo: "002", nome: "Vendedor 2" },
        { codigo: "003", nome: "Vendedor 3" }
    ];

    const vendedoresList = document.getElementById('vendedores-list');
    vendedoresList.innerHTML = '';  // Limpa a lista antes de adicionar novos itens

    vendedores.forEach(vendedor => {
        const vendedorItem = document.createElement('div');
        vendedorItem.classList.add('vendedores-item');
        vendedorItem.textContent = `${vendedor.codigo} | ${vendedor.nome}`;
        vendedoresList.appendChild(vendedorItem);
    });
}

// Função para limpar os campos do modal
function limparCampos() {
    document.getElementById("cpfCnpj").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("municipio").value = "";
    document.getElementById("cep").value = "";
}

// Função para gravar os dados (simulação)
function gravarDados() {
    alert("Dados gravados com sucesso!");
    document.getElementById("informarMaisDadosModal").style.display = "none";
}

// Fechar modais ao pressionar ESC
function fecharModalPorEscape(event) {
    if (event.key === 'Escape') {
        fecharModaisAbertos();
    }
}

// Fechar os modais ao clicar fora do conteúdo do modal
function fecharModalPorClique(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";

        if (event.target.id === 'myModal') isModalOpen = false;
        if (event.target.id === 'vendedoresModal') isVendedoresModalOpen = false;
        if (event.target.id === 'CaixaModal') isCaixaModalOpen = false;
        if (event.target.id === 'CaixaModalfechada') isCaixaModalFechadaOpen = false;
        if (event.target.id === 'informarClienteModal') isInformarClienteModalOpen = false;
        if (event.target.id === 'informarMaisDadosModal') isInformarMaisDadosModalOpen = false;
        if (event.target.id === 'pesquisarProdutoModal') isPesquisarProdutoModalOpen = false;
        if (event.target.id === 'cargaCompletaModal') iscargaCompletaModal = false;
        if (event.target.id === 'validacaoUsuario') isvalidacaoUsuario = false;
        if (event.target.id === 'visualizacaoItens') isVisualizacaoItens = false;
        if (event.target.id === 'novoModal') isnovoModal = false;
    }
}

// Função para alternar o modal de caixa (F1)
function toggleCaixaModal() {
    if (isCaixaModalFechadaOpen) {
        document.getElementById('CaixaModalfechada').style.display = "none";
        isCaixaModalFechadaOpen = false;
    } else if (isCaixaModalOpen) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('CaixaModal').style.display = "block";
        isCaixaModalOpen = true;
    }
}

// Função para alternar o modal de caixa (F1)
function togglePesquisarProdutoModalOpen() {
    if (isPesquisarProdutoModalOpen) {
        document.getElementById('pesquisarProdutoModal').style.display = "none";
        isPesquisarProdutoModalOpen = false;
    } else if (isPesquisarProdutoModalOpen) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('pesquisarProdutoModal').style.display = "block";
        isPesquisarProdutoModalOpen = true;
    }
}

// Função para alternar o modal de Finalizar Venda (F2)
function toggleFinalizarVendaModal() {
    if (isModalOpen) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('myModal').style.display = "block";
        isModalOpen = true;
    }
}

// Adiciona evento de clique ao botão da lixeira para abrir o modal validacaoUsuario
document.querySelectorAll(".botao-li" ).forEach(botao => {
    botao.addEventListener("click", function () {
        toggleValidacaoUsuarioModal();
    });
});

// Adiciona evento de clique ao botão da lixeira para abrir o modal validacaoUsuario
document.querySelectorAll(".botao-pequeno" ).forEach(botao => {
    botao.addEventListener("click", function () {
        toggleValidacaoUsuarioModal();
    });
});

// Adiciona evento de clique ao botão da lixeira para abrir o modal validacaoUsuario
document.querySelectorAll(".finalizar-venda" ).forEach(botao => {
    botao.addEventListener("click", function () {
        toggleValidacaoUsuarioModal();
    });
});

document.querySelectorAll(".botao-pequeno1").forEach(botao => {
    botao.addEventListener("click", function () {
        toggleVisualizacaoItensModal();
    });
});

document.getElementById('seta-toggle').addEventListener('click', function() {
    var seta = document.getElementById('seta-toggle');
    var containerBotoes = document.querySelector('.container-botoes');

    containerBotoes.classList.toggle('hidden');

    if (seta.style.right === '-100px' || seta.style.right === '') {
        seta.style.right = '200px'; // Move para o lado
    } else {
        seta.style.right = '-100px'; // Retorna à posição original
    }
});

document.getElementById("imagem-doce").addEventListener("click", function () {
    document.getElementById("visualizacaoItens").style.display = "none";
    document.getElementById("novoModal").style.display = "block";
});

// Função para alternar o modal de Lista de Vendedores (F7)
function toggleVendedoresModal() {
    if (isVendedoresModalOpen) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('vendedoresModal').style.display = "block";
        isVendedoresModalOpen = true;
        showVendedoresModal();
    }
}

// Função para alternar o modal de caixa (F9)
function toggleInformarClienteModal() {
    if (isInformarClienteModalOpen) {
        document.getElementById('informarClienteModal').style.display = "none";
        isInformarClienteModalOpen = false;
    } else if (isInformarClienteModalOpen) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('informarClienteModal').style.display = "block";
        isInformarClienteModalOpen = true;
    }
}

// Função para alternar o modal de Carga Completa (F12)
function toggleCargaCompletaModal() {
    if (iscargaCompletaModal) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('cargaCompletaModal').style.display = "block";
        iscargaCompletaModal = true;
    }
}

function toggleValidacaoUsuarioModal() {
    if (isvalidacaoUsuario) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('validacaoUsuario').style.display = "block";
        isvalidacaoUsuario = true;
    }
}

function toggleVisualizacaoItensModal() {
    if (isVisualizacaoItens) {
        fecharModaisAbertos();
    } else {
        fecharModaisAbertos();
        document.getElementById('visualizacaoItens').style.display = "block";
        isVisualizacaoItens = true;
    }
}

// Selecione todas as imagens com a classe 'clicavel'
document.querySelectorAll('.clicavel').forEach(imagem => {
    imagem.addEventListener('click', function () {
        document.getElementById("visualizacaoItens").style.display = "none";
        document.getElementById("novoModal").style.display = "block";

        // Atualize o conteúdo do modal com a imagem clicada
        var imagemSrc = imagem.src;
        document.getElementById("imagemExpandida").src = imagemSrc;

        // Obtenha o nome da imagem usando o atributo 'data-nome'
        var nomeImagem = imagem.getAttribute('data-nome');  // Obtém o valor do 'data-nome'
        document.getElementById("nomeImagem").textContent = nomeImagem;  // Atualiza o nome no modal
    });
});


function fecharNovoModal() {
    document.getElementById("novoModal").style.display = "none";
}

// Evento de clique para cada botão correspondente à tecla de atalho
document.querySelector(".botao-F1")?.addEventListener("click", toggleCaixaModal);
document.querySelector(".botao-F2")?.addEventListener("click", toggleFinalizarVendaModal);
document.querySelector(".botao-F7")?.addEventListener("click", toggleVendedoresModal);
document.querySelector(".botao-F9")?.addEventListener("click", toggleInformarClienteModal);
document.querySelector(".botao-F10")?.addEventListener("click", togglePesquisarProdutoModalOpen);
document.querySelector(".botao-F12")?.addEventListener("click", toggleCargaCompletaModal);

// Evento de teclado para acionar os modais
document.addEventListener('keydown', function(event) {
    if (event.key === 'F1') {
        event.preventDefault(); // Previne a função padrão do F1
        toggleCaixaModal();
    }
    if (event.key === 'F2') {
        toggleFinalizarVendaModal();
    }
    if (event.key === 'F7') {
        toggleVendedoresModal();
    }
    if (event.key === 'F9') {
        toggleInformarClienteModal();
    }
    if (event.key === 'F10') {
        togglePesquisarProdutoModalOpen();
    }
    if (event.key === 'F12') {
        toggleCargaCompletaModal();
    }

    // Fechar o modal ao pressionar ESC
    fecharModalPorEscape(event);
});

// Adicionando a lógica para abrir o modal informarMaisDadosModal quando o botão for clicado
document.getElementById("informarMaisDadosBtn").addEventListener("click", function() {
    // Abre o modal de Informar Mais Dados
    document.getElementById("informarMaisDadosModal").style.display = "block";
    isInformarMaisDadosModalOpen = true;
});

const menuToggle = document.getElementById("menu-toggle");
const menuLateral = document.getElementById("menu-lateral");

menuToggle.addEventListener("click", function() {
    // Alterna entre abrir e fechar o menu lateral
    menuLateral.classList.toggle('aberto'); // Adiciona ou remove a classe "aberto"
});

// Fechar o modal de Informar Cliente ao clicar fora
window.onclick = fecharModalPorClique;

// Botão de Fechar Caixa
document.getElementById("fecharCaixaBtn").addEventListener("click", abrirModalFecharCaixa);

// Função para limpar campos no modal de Informar Cliente
document.getElementById("limparBtn").onclick = limparCampos;

// Função para gravar dados no modal de Informar Cliente
document.getElementById("gravarBtn").onclick = gravarDados;

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
// Garante que o modal comece fechado
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("modalNota").style.display = "none";
});

function gerarNotaFiscal() {
    const produtos = [
        { nome: "Produto A", quantidade: 2, preco: 100.00 },
        { nome: "Produto B", quantidade: 1, preco: 300.00 },
        { nome: "Produto C", quantidade: 3, preco: 50.00 }
    ];

    let total = 0;
    let listaHTML = "";

    produtos.forEach(produto => {
        const subtotal = produto.quantidade * produto.preco;
        total += subtotal;
        listaHTML += `<div><span>${produto.nome} (x${produto.quantidade})</span> <span>R$ ${subtotal.toFixed(2)}</span></div>`;
    });

    // Inserindo os valores na Nota Fiscal
    document.getElementById("dataNota").innerText = `Data: ${new Date().toLocaleString()}`;
    document.getElementById("listaProdutos").innerHTML = listaHTML;
    document.getElementById("totalNota").innerText = `R$ ${total.toFixed(2)}`;

    // Exibir o modal
    document.getElementById("modalNota").style.display = "flex";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("modalNota").style.display = "none";
}
