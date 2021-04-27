(async function() {
    // 1. データを取得
    const data = await getData();
    // 2. データを整形する
    const dataset = filterData(data.data);

    const ctx = document.getElementById('graph02').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataset.map(row => row.year),
            datasets: [{
                label: '# 大正9年から平成27年の函館市の人口推移図',
                data: dataset.map(row => row.amount),
                backgroundColor: [
                    'red'
                ],
                borderColor: [
                    'red'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})()