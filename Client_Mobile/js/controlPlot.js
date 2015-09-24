var dataX = [], dataY = [], dataZ = [];
var option = {
    series: {
		shadowSize: 0
	},
	yaxis: {
        show: true,
        min: 0,
		max: 10
	},
	xaxis: {
		show: false,
        min: 0,
        max: 100
	}
};
var plotX = $.plot("#placeX", [], option);
var plotY = $.plot("#placeY", [], option);
var plotZ = $.plot("#placeZ", [], option);

function updatePlot(acc, data, plot) {
    if (data.length > 100){
        plot.getOptions().xaxes[0].min++;
        plot.getOptions().xaxes[0].max++;
    }
    data.push([data.length, acc]);
	plot.setData([data]);
    plot.setupGrid();
	plot.draw();
};