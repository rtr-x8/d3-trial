(async function() {

    const contents = d3.select('#graph01');
    const svg = contents.append("svg");

    // 1. データを取得
    const data = await getData();
    // 2. データを整形する
    const dataset = filterData(data.data);
    // 3. グラフの枠を準備する
    const scale = setupGraph(contents, svg, dataset);

    // 4. 折れ線グラフを描画
    const color = d3.rgb("#a785cc");
    drawLine(svg, dataset, scale, color);

})();

function setupGraph(contents, svg, dataset) {
    const xPadding = 70;
    const yPadding = 20;
    // グラフの幅（X軸）
    const width = contents.node().clientWidth - xPadding;

    // グラフの高さ（Y軸）
    const height = contents.node().clientHeight - yPadding;

    // gはグループです。SVGで他の要素をグループ化する際に利用するタグです
    // グループをXとY、両方に追加します。
    x = svg
        .append("g")
        .attr("class", "axis axis-x")
    y = svg
        .append("g")
        .attr("class", "axis axis-y")

    // X軸に関する設定です
    const xScale = d3
        // 時間ベースの軸であることを定義します
        .scaleTime()
        // 最低値、最大値の設定です
        .domain([
            new Date(dataset[0].year),
            new Date(dataset[dataset.length-1].year)
        ])
        // 大きさを指定します
        .range([xPadding, width]);

    // Y軸に関する設定です
    const yScale = d3
        // 数値ベースの軸であることを定義します
        .scaleLinear()
        // 最低値、最大値の設定です
        .domain([
            0,
            d3.max(dataset.map(d => d.amount)) // 値の配列を渡せば、d3.maxで最大値を出してくれます
        ])
        // 大きさを指定します
        .range([height, yPadding]);

        
    const format = d3.timeFormat("%Y");
    // X軸の値の個数です
    const xTicks = dataset.length;
    // X軸の記述設定です
    const axisx = d3
        .axisBottom(xScale)
        .ticks(xTicks)
        .tickFormat(format);
    // Y軸の記述設定です
    const axisy = d3.axisLeft(yScale);

    // SVGに描画します
    x
        .attr("transform", "translate(" + 0 + "," + (height) + ")")
        .call(axisx);
    y
        .attr("transform", "translate(" + xPadding + "," + 0 + ")")
        .call(axisy);

    // xScale/yScaleはこの後も使うので返却します
    return { x: xScale, y: yScale };
}

function drawLine(svg, dataset, scale, color) {
    // pathはSVGで図形を描画する汎用的な要素です
    const path = svg.append("path");
    // 折れ線を生成します
    const line = d3
        .line()
        .x(d => scale.x(d.year))
        .y(d => scale.y(d.amount));
    // SVG上に描画します。colorは引数で受け取っている、色の指定です
    path
        .datum(dataset)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("d", line);
}
