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

// Gráfico 1 - Vendas por Departamento (Barras)
const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Açougue', 'Padaria', 'Laticínios', 'Bebidas', 'Limpeza', 'Mercearia'],
        datasets: [{
            label: 'Vendas em R$',
            data: getRandomData(7, 5000, 30000),
            backgroundColor: [
                'rgba(46, 204, 113, 0.7)',
                'rgba(231, 76, 60, 0.7)',
                'rgba(241, 196, 15, 0.7)',
                'rgba(52, 152, 219, 0.7)',
                'rgba(155, 89, 182, 0.7)',
                'rgba(26, 188, 156, 0.7)',
                'rgba(52, 73, 94, 0.7)'
            ],
            borderColor: [
                'rgba(46, 204, 113, 1)',
                'rgba(231, 76, 60, 1)',
                'rgba(241, 196, 15, 1)',
                'rgba(52, 152, 219, 1)',
                'rgba(155, 89, 182, 1)',
                'rgba(26, 188, 156, 1)',
                'rgba(52, 73, 94, 1)'
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
new Chart(ctx2, {
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
new Chart(ctx3, {
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
new Chart(ctx4, {
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
new Chart(ctx5, {
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
new Chart(ctx6, {
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