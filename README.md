# d3-trial

d3-trial という名前にしたが、色々なグラフライブラリで実装している。

実際に動いている画面は[こちら](https://rtr-x8.github.io/d3-trial/)

# 仕様

1. 函館市公式サイトより取得したデータを改変し、グラフの描画に利用している。
2. データの形式はCSV。
3. CSVの読み込みには[PapaParse](https://www.papaparse.com/)というライブラリを利用。
4. データの読み込み、読み込んだ後のデータ整形の処理を[/js/util.js](https://github.com/rtr-x8/d3-trial/blob/main/js/util.js)に設置している。

# 利用しているライブラリ

## 01

[d3.js](https://d3js.org/)を利用。  
実行ファイルは[js/graph01.js](https://github.com/rtr-x8/d3-trial/blob/main/js/graph01.js)

### 使用感

- かなり細かく制御できる。
- SVGに関する知識が必要で、これがネック。
- x軸, y軸それぞれの設定が必要。
- 難易度は高め。

### ライセンス

[ライセンス情報](https://github.com/d3/d3/blob/master/LICENSE)

修正BSDライセンス

改変しなければ自由に利用可能。

## 02

[chart.js](https://www.chartjs.org/)  
実行ファイルは[js/graph02.js](https://github.com/rtr-x8/d3-trial/blob/main/js/graph02.js)

### 使用感

- 簡単。おすすめ

### ライセンス

[ライセンス情報](https://github.com/chartjs/Chart.js/blob/master/LICENSE.md)

MITライセンス。自由に利用してOK

著作表示を記載済みのソースファイルを編集しなければ自由に利用可能。

## 03

[taucharts.js](https://taucharts.com/)  
実行ファイルは[js/graph03.js](https://github.com/rtr-x8/d3-trial/blob/main/js/graph03.js)

### 使用感

- 簡単だけど、少し癖のある使い方。
- 指標がたくさんあるデータは扱いやすいかも。

### ライセンス

[ライセンス情報](https://github.com/TargetProcess/tauCharts/blob/master/LICENSE)

Apache License

利用している旨を明記する必要あり。