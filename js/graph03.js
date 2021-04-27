(async function() {
    // 1. データを取得
    const data = await getData();
    // 2. データを整形する
    const dataset = filterData(data.data);

    var chart = new Taucharts.Chart({
        type: 'line',
        y: 'amount',
        x: 'year',
        size: null,
        color: null,
        label: 'amount',
        data: dataset.map(row => {
            return {
                year: new Date(`${row.year}-01-01`),
                amount: row.amount
            }
        })
    })

    chart.renderTo(document.getElementById('graph03'));

})()