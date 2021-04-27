(async function() {
    // 1. データを取得
    const data = await getData();
    // 2. データを整形する
    const dataset = filterData(data.data);

    const chart = Highcharts.chart('graph04', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: dataset.map(row => row.year)
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: dataset
    });

})()