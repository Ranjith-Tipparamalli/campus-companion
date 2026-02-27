function updateChart(tasks) {
    const completed = tasks.filter(task => task.done).length;
    const pending = tasks.length - completed;

    const ctx = document.getElementById('progressChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [completed, pending]
            }]
        }
    });
}