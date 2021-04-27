async function getData() {
    return new Promise((res, rej) => {
        Papa.parse('./csv/27kc1.csv', {
            download: true,
            header: true,
            delimiter: ',',
            complete: res,
            error: rej,
            dynamicTyping: true
        });
    })
}

function filterData(data) {
    return data.map(row => {
        return {
            year: row['年次'],
            amount: row['人口(総数)'],
        }
    }).filter(row => {
        return row.year !== null
    })
}