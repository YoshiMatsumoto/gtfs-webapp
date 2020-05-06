var data = [
    ['', false, 'S0001', 'りんご', 100, '青森産'],
    ['', false, 'S0002', 'みかん', 80, '静岡産'],
    ['*', false, 'S0003', 'メロン', 1000, '袋井クラウンメロン']
];

var grid = document.getElementById('grid');

var hot = new Handsontable(grid, {
    data: data,
    colHeaders: ['編集', '選択', '商品CD', '商品名', '単価', '備考'],
    columns: [
        { readOnly: true, type: 'text' },
        { type: 'checkbox' },
        { type: 'text' , width: 80 },
        { type: 'text' , width: 200, className: "htLeft htMiddle" },
        { type: 'numeric', numericFormat: { pattern: '0,00', culture: 'ja-JP' }},
        { type: 'text' , width: 300, className: "htLeft htMiddle" }
    ],
    enterMoves: { row: 0, col: 1 },
    outsideClickDeselects: true,
    manualColumnResize: true,
    fillHandle: false
});