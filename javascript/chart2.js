const cty = document.getElementById('doughnut-chart');
new Chart(cty, {
    type: 'doughnut',
    data: {
        labels: [
            'Teachers',
            'IT',
            'Staff'
        ],
        datasets: [{
            label: ['My First Dataset'],
            data: [250, 50, 500],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],

        }]
    },
    options: {
        responsive: true
    }
});