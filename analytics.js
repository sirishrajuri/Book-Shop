
function fetchData() {
    return {
        genres: {
            labels: ['Fantasy', 'Sci-Fi', 'Mystery', 'Romance', 'Horror'],
            data: [300, 150, 200, 220, 130]
        },
        sales: {
            labels: ['2020', '2021', '2022', '2023'],
            data: [1500, 1800, 1700, 2000]
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const data = fetchData();

    const ctxPie = document.getElementById('genrePieChart').getContext('2d');
    const genrePieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: data.genres.labels,
            datasets: [{
                label: 'Genre Distribution',
                data: data.genres.data,
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#7bed9f']
            }]
        }
    });
    const ctxLine = document.getElementById('monthlySalesLineChart').getContext('2d');
    const monthlySalesLineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [120, 150, 180, 200, 230],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    });

    const ctxDoughnut = document.getElementById('customerDemographicsChart').getContext('2d');
    const customerDemographicsChart = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
            datasets: [{
                label: 'Age Group',
                data: [300, 400, 500, 200, 100],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#7bed9f']
            }]
        }
    });


    const ctxBar = document.getElementById('salesBarChart').getContext('2d');
    const salesBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: data.sales.labels,
            datasets: [{
                label: 'Yearly Sales',
                data: data.sales.data,
                backgroundColor: ['#747d8c', '#2f3542', '#57606f', '#ced6e0']
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
