// Variáveis globais para os gráficos
let chart1, chart2, chart3, chart4, chart5, chart6;
let currentPeriod = 'day';

// Função para gerar dados aleatórios
function getRandomData(length, min, max) {
    return Array.from({length}, () => Math.floor(Math.random() * (max - min + 1) + min));
}

// Função para gerar cores aleatórias
function getRandomColors(length) {
    return Array.from({length}, () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, 0.7)`;
    });
}

// Função para atualizar métricas baseadas no período
function updateMetrics(period) {
    const metrics = {
        day: {
            profit: [1500, 2500],
            ticket: [85, 90],
            sales: [120, 150],
            customers: [90, 110]
        },
        week: {
            profit: [12000, 15000],
            ticket: [88, 92],
            sales: [650, 750],
            customers: [500, 550]
        },
        month: {
            profit: [50000, 60000],
            ticket: [90, 95],
            sales: [2500, 3000],
            customers: [1800, 2000]
        },
        year: {
            profit: [600000, 700000],
            ticket: [95, 100],
            sales: [30000, 35000],
            customers: [22000, 25000]
        }
    };
    
    const data = metrics[period];
    const profitChange = ((data.profit[1] - data.profit[0]) / data.profit[0] * 100).toFixed(0);
    const ticketChange = ((data.ticket[1] - data.ticket[0]) / data.ticket[0] * 100).toFixed(0);
    const salesChange = ((data.sales[1] - data.sales[0]) / data.sales[0] * 100).toFixed(0);
    const customersChange = ((data.customers[1] - data.customers[0]) / data.customers[0] * 100).toFixed(0);
    
    document.getElementById('total-profit').textContent = `R$ ${data.profit[1].toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('average-ticket').textContent = `R$ ${data.ticket[1].toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('total-sales').textContent = data.sales[1].toLocaleString('pt-BR');
    document.getElementById('total-customers').textContent = data.customers[1].toLocaleString('pt-BR');
    
    const profitChangeEl = document.getElementById('profit-change');
    profitChangeEl.textContent = `${profitChange >= 0 ? '↑' : '↓'} ${Math.abs(profitChange)}% em relação ao período anterior`;
    profitChangeEl.className = `metric-change ${profitChange >= 0 ? '' : 'negative'}`;
    
    const ticketChangeEl = document.getElementById('ticket-change');
    ticketChangeEl.textContent = `${ticketChange >= 0 ? '↑' : '↓'} ${Math.abs(ticketChange)}% em relação ao período anterior`;
    ticketChangeEl.className = `metric-change ${ticketChange >= 0 ? '' : 'negative'}`;
    
    const salesChangeEl = document.getElementById('sales-change');
    salesChangeEl.textContent = `${salesChange >= 0 ? '↑' : '↓'} ${Math.abs(salesChange)}% em relação ao período anterior`;
    salesChangeEl.className = `metric-change ${salesChange >= 0 ? '' : 'negative'}`;
    
    const customersChangeEl = document.getElementById('customers-change');
    customersChangeEl.textContent = `${customersChange >= 0 ? '↑' : '↓'} ${Math.abs(customersChange)}% em relação ao período anterior`;
    customersChangeEl.className = `metric-change ${customersChange >= 0 ? '' : 'negative'}`;
}

// Função para atualizar gráficos baseados no período
function updateCharts(period) {
    // Fatores de multiplicação baseados no período
    const factors = {
        day: 1,
        week: 7,
        month: 30,
        year: 365
    };
    
    const factor = factors[period];
    
    // Atualizar Gráfico 1 - Vendas por Departamento
    chart1.data.datasets[0].data = getRandomData(6, 5000 * factor, 30000 * factor);
    chart1.update();
    
    // Atualizar Gráfico 2 - Métodos de Pagamento (valores relativos, não muda muito)
    chart2.data.datasets[0].data = getRandomData(5, 10, 40);
    chart2.update();
    
    // Atualizar Gráfico 3 - Vendas por Hora
    chart3.data.datasets[0].data = [1500, 3200, 5800, 4200, 3800, 5200, 2800].map(v => v * factor);
    chart3.update();
    
    // Atualizar Gráfico 4 - Top 5 Produtos
    chart4.data.datasets[0].data = getRandomData(5, 150 * factor, 400 * factor);
    chart4.update();
    
    // Atualizar Gráfico 5 - Clientes por Faixa Etária (valores relativos, não muda)
    chart5.update();
    
    // Atualizar Gráfico 6 - Vendas Semanais
    chart6.data.datasets[0].data = [45000, 52000, 48000, 55000].map(v => v * factor);
    chart6.data.datasets[1].data = getRandomData(4, 40000 * factor, 60000 * factor);
    chart6.update();
}

// Inicializar gráficos
function initCharts() {
    // Gráfico 1 - Vendas por Departamento (Barras)
    const ctx1 = document.getElementById('chart1').getContext('2d');
    chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Açougue', 'Padaria', 'Laticínios', 'Bebidas', 'Limpeza', 'Mercearia'],
            datasets: [{
                label: 'Vendas em R$',
                data: getRandomData(6, 5000, 30000),
                backgroundColor: [
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(26, 188, 156, 0.7)'
                ],
                borderColor: [
                    'rgba(46, 204, 113, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(26, 188, 156, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valor em R$'
                    }
                }
            }
        }
    });

    // Gráfico 2 - Métodos de Pagamento (Pizza)
    const ctx2 = document.getElementById('chart2').getContext('2d');
    chart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Dinheiro', 'Débito', 'Crédito', 'PIX', 'Vale Alimentação'],
            datasets: [{
                data: getRandomData(5, 10, 40),
                backgroundColor: [
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(231, 76, 60, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${percentage}% (R$${value.toLocaleString()})`;
                        }
                    }
                }
            }
        }
    });

    // Gráfico 3 - Vendas por Hora (Linhas)
    const ctx3 = document.getElementById('chart3').getContext('2d');
    chart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'],
            datasets: [{
                label: 'Valor médio por hora',
                data: [1500, 3200, 5800, 4200, 3800, 5200, 2800],
                borderColor: 'rgba(231, 76, 60, 1)',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                borderWidth: 3,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Vendas em R$'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Horário do dia'
                    }
                }
            }
        }
    });

    // Gráfico 4 - Top 5 Produtos (Barras horizontais)
    const ctx4 = document.getElementById('chart4').getContext('2d');
    chart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['Arroz 5kg', 'Feijão 1kg', 'Óleo 900ml', 'Café 500g', 'Açúcar 1kg'],
            datasets: [{
                label: 'Quantidade vendida',
                data: getRandomData(5, 150, 400),
                backgroundColor: 'rgba(241, 196, 15, 0.7)',
                borderColor: 'rgba(241, 196, 15, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Unidades vendidas'
                    }
                }
            }
        }
    });

    // Gráfico 5 - Clientes por Faixa Etária (Rosca)
    const ctx5 = document.getElementById('chart5').getContext('2d');
    chart5 = new Chart(ctx5, {
        type: 'doughnut',
        data: {
            labels: ['18-25 anos', '26-35 anos', '36-45 anos', '46-55 anos', '56+ anos'],
            datasets: [{
                data: [15, 35, 25, 15, 10],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(231, 76, 60, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });

    // Gráfico 6 - Vendas Semanais (Área)
    const ctx6 = document.getElementById('chart6').getContext('2d');
    chart6 = new Chart(ctx6, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [
                {
                    label: '2023',
                    data: [45000, 52000, 48000, 55000],
                    borderColor: 'rgba(46, 204, 113, 1)',
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: true
                },
                {
                    label: '2024',
                    data: getRandomData(4, 40000, 60000),
                    borderColor: 'rgba(52, 152, 219, 1)',
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Vendas em R$'
                    }
                }
            }
        }
    });
}

let contrast = 100;

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar gráficos
    initCharts();
    
    // Atualizar métricas e gráficos com o período padrão (dia)
    updateMetrics(currentPeriod);
    
    // Configurar seletor de período
    document.getElementById("period-select").addEventListener("change", function() {
        // Remover classe active de todos os botões (se ainda existirem)
        document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
        
        // Atualizar período atual
        currentPeriod = this.value;
        
        // Atualizar métricas e gráficos
        updateMetrics(currentPeriod);
        updateCharts(currentPeriod);
    });
    
    // Configurar toggle de contraste
    document.getElementById("toggle-switch").addEventListener("change", function() {
        // Alterar o contraste ao ativar/desativar o switch
        if (this.checked) {
            aumentarContraste();  // Aumenta o contraste
        } else {
            resetarContraste();  // Reseta o contraste
        }
    });
});

// Função para aumentar o contraste
function aumentarContraste() {
    const elementos = document.querySelectorAll('body *');
    if (contrast < 300) { // Impede que o contraste ultrapasse 300%
        contrast += 20;
    }

    elementos.forEach((elemento) => {
        elemento.style.filter = `contrast(${contrast}%)`;
    });
}

// Função para resetar o contraste
function resetarContraste() {
    const elementos = document.querySelectorAll('body *');
    contrast = 100; // Restaura o contraste para o valor original (100%)
    
    elementos.forEach((elemento) => {
        elemento.style.filter = `contrast(${contrast}%)`;
    });
}
