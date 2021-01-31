require('dotenv').config();

//API_KEY to get stock json data
const client = new ApiClient(process.env.API_KEY);

window.onload = function () {
    var dataPoints1 = [], dataPoints2 = [], dataPoints3 = [];
    var stockChart = new CanvasJS.StockChart("chartContainer",{
      exportEnabled: true,
      theme: "dark2",
      title:{
        text:"StockChart Test"
      },
      data: [{
        showInLegend: true,
        name: "Price (in USD)",
        yValueFormatString: "$#,###.##",
        type: "candlestick",
        dataPoints : dataPoints1
      }]
     
    });
    $.getJSON("https://canvasjs.com/data/docs/ltceur2018.json", function(data) {
      for(var i = 0; i < data.length; i++){
        dataPoints1.push({
            x: new Date(data[i].date), 
            y: [Number(data[i].open), Number(data[i].high), Number(data[i].low), Number(data[i].close)], 
            color: data[i].open < data[i].close ? "green" : "red"}
        );;
      }
      stockChart.render();
    });
  }