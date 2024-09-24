const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Aug', 'Set', 'Ott', 'Nov', 'Dic'],
        datasets: [{
            label: '€ / mese',
            data: [1000, 23, 500, 400, 500, 800, 1200, 300, 50, 800, 900, 1200, 8000],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true
    }
});