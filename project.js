var dateByYear = [{"year":1921,"valence":0.4315},{"year":1922,"valence":0.549},{"year":1923,"valence":0.614},{"year":1924,"valence":0.695}, {"year":1925,"valence":0.657},{"year":1926,"valence":0.556},
{"year":1927,"valence":0.706},{"year":1928,"valence":0.543},{"year":1929,"valence":0.691},{"year":1930,"valence":0.6615},{"year":1931,"valence":0.596},{"year":1932,"valence":0.608},{"year":1933,"valence":0.657},{"year":1934,"valence":0.5835},{"year":1935,"valence":0.506},{"year":1936,"valence":0.603},{"year":1937,"valence":0.6275},{"year":1938,"valence":0.522},{"year":1939,"valence":0.586},{"year":1940,"valence":0.661},{"year":1941,"valence":0.49},{"year":1942,"valence":0.4575},{"year":1943,"valence":0.549},{"year":1944,"valence":0.564},{"year":1945,"valence":0.4665},{"year":1946,"valence":0.317},{"year":1947,"valence":0.522},{"year":1948,"valence":0.425},{"year":1949,"valence":0.388},{"year":1950,"valence":0.59},{"year":1951,"valence":0.3885},{"year":1952,"valence":0.4175},{"year":1953,"valence":0.387},{"year":1954,"valence":0.421},{"year":1955,"valence":0.4615},{"year":1956,"valence":0.502},{"year":1957,"valence":0.5145},{"year":1958,"valence":0.4985},{"year":1959,"valence":0.4815},{"year":1960,"valence":0.5335},{"year":1961,"valence":0.5155},{"year":1962,"valence":0.582},{"year":1963,"valence":0.557},{"year":1964,"valence":0.569},{"year":1965,"valence":0.602},{"year":1966,"valence":0.626},{"year":1967,"valence":0.5765},{"year":1968,"valence":0.5815},{"year":1969,"valence":0.565},{"year":1970,"valence":0.579},{"year":1971,"valence":0.588},{"year":1972,"valence":0.621},{"year":1973,"valence":0.6055},{"year":1974,"valence":0.61},{"year":1975,"valence":0.5905},{"year":1976,"valence":0.607},{"year":1977,"valence":0.616},{"year":1978,"valence":0.612},{"year":1979,"valence":0.6415},{"year":1980,"valence":0.64},{"year":1981,"valence":0.607},{"year":1982,"valence":0.6255},{"year":1983,"valence":0.612},{"year":1984,"valence":0.594},{"year":1985,"valence":0.582},{"year":1986,"valence":0.5665},{"year":1987,"valence":0.546},{"year":1988,"valence":0.5715},{"year":1989,"valence":0.55},{"year":1990,"valence":0.5405},{"year":1991,"valence":0.567},{"year":1992,"valence":0.5715},{"year":1993,"valence":0.5745},{"year":1994,"valence":0.541},{"year":1995,"valence":0.547},{"year":1996,"valence":0.5725},{"year":1997,"valence":0.557},{"year":1998,"valence":0.557},{"year":1999,"valence":0.566},{"year":2000,"valence":0.5685},{"year":2001,"valence":0.5635},{"year":2002,"valence":0.544},{"year":2003,"valence":0.538},{"year":2004,"valence":0.532},{"year":2005,"valence":0.5355},{"year":2006,"valence":0.514},{"year":2007,"valence":0.5095},{"year":2008,"valence":0.5185},{"year":2009,"valence":0.5035},{"year":2010,"valence":0.515},{"year":2011,"valence":0.4665},{"year":2012,"valence":0.445},{"year":2013,"valence":0.449},{"year":2014,"valence":0.45},{"year":2015,"valence":0.414},{"year":2016,"valence":0.403},{"year":2017,"valence":0.397},{"year":2018,"valence":0.4305},{"year":2019,"valence":0.453},{"year":2020,"valence":0.489}]

var spiderGraph = [{"Year":2019,"danceability":0.878,"energy":0.619,"valence":0.639,"speechiness":0.102,"liveness":0.113},{"Year":2000,"danceability":0.529,"energy":0.496,"valence":0.278,"speechiness":0.029,"liveness":0.251},{"Year":1998,"danceability":0.554,"energy":0.833,"valence":0.773,"speechiness":0.0347,"liveness":0.0737},
{"Year":1960,"danceability":0.772,"energy":0.297,"valence":0.822,"speechiness":0.053,"liveness":0.125}]

var tempoPie = [{"Slow":0.4251497006,"Moderate":0.1170991351,"Fast":0.4577511643,"Year":1946},{"Slow":0.112,"Moderate":0.0935,"Fast":0.7945,"Year":1979},
{"Slow":0.2064584436,"Moderate":0.1349920593,"Fast":0.6580201165,"Year":2019}]

var barChart = [{"genre":"tropical","medianValence":0.7350988499,"count":274},{"genre":"funk","medianValence":0.6528399035,"count":347},{"genre":"latin","medianValence":0.648964167,"count":379},{"genre":"soul","medianValence":0.6321220543,"count":291},{"genre":"rap","medianValence":0.5454163553,"count":518},{"genre":"r&b","medianValence":0.5312308256,"count":292},{"genre":"rock","medianValence":0.5183212258,"count":592},
{"genre":"pop","medianValence":0.4922343391,"count":627}]

var year = []
var valence = []
for (i=0; i<dateByYear.length; i++) {
    year.push(dateByYear[i]['year'])
    valence.push(dateByYear[i]['valence'])
}

function lineHighChart() {
    Highcharts.chart('lineHigh', {

		title: {
			text: 'Yearly Valence Levels Listened'
		},
		subtitle: {
			text: 'Source: Kaggle.com'
		},

		yAxis: {
			title: {
				text: 'Valence'
			}
		},
		colors: ['#50B432'],
		xAxis: {
			title:{
				text: 'Year'
			},
			categories: year
		},
		exporting: {
			enabled: false
		},

		legend: {
			layout: 'vertical',
			align: 'center',
			verticalAlign: 'top'
		},
		// annotations: [{
		// 	labelOptions: {
		// 		backgroundColor: 'rgba(255,255,255,0.5)',
		// 		verticalAlign: 'top',
		// 		y: 15
		// 	},
		// 	labels: [{
		// 		point: {
		// 			// xAxis: 0,
		// 			// yAxis: 0,
		// 			x: 0,
		// 			y: 0
		// 		},
		// 		text: 'This is a description'
		// 	}]
		// }, {
		// 	labels: [{
		// 		point: {
		// 			// xAxis: 0,
		// 			// yAxis: 0,
		// 			x: 101.44,
		// 			y: 1026
		// 		},
		// 		x: -30,
		// 		text: 'Col de la Joux'
		// 	}, {
		// 		point: {
		// 			// xAxis: 0,
		// 			// yAxis: 0,
		// 			x: 138.5,
		// 			y: 748
		// 		},
		// 		text: 'Côte de Viry'
		// 	}, {
		// 		point: {
		// 			// xAxis: 0,
		// 			// yAxis: 0,
		// 			x: 176.4,
		// 			y: 1202
		// 		},
		// 		text: 'Montée de la Combe<br>de Laisia Les Molunes'
		// 	}]
		// },

		// annotations: [{
		// 	// labelOptions: {
		// 	// 	backgroundColor: 'rgba(255,255,255,0.5)',
		// 	// 	// verticalAlign: 'top',
		// 	// 	y: 15
		// 	// },
		// 	labels: [{
		// 		point: {
		// 			x: 158,
		// 			y: 250
		// 			// xAxis: 0,
		// 			// yAxis: 0
		// 		},
		// 		text: 'Hello'
		// 	}]
		// }],
		annotations: [{
			labels: [{
				point: { x: 20, y: 25 },
				text: 'Jazz Period'
			}]
		}],
		annotations: [{
			labelOptions: {
				backgroundColor: 'rgba(255,255,255,0.5)',
				verticalAlign: 'top',
				y: 15
			},
			labels: [{
				point: {
					x: 158,
					y: 220
				},
				text: 'World War II'
			}],
			}],


		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
			}
		},
		credits: {
			enabled: false
		},

		series: [{
			name: 'Valence',
			data: valence
		}
		],

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}
})};

function pieHighChart1946() {

    Highcharts.chart('pieHigh1946', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			type: 'pie'
		},
		colors: ['black', 'gray', '#50B432'],
		exporting: {
			enabled: false
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				curso: 'rpointer',
				dataLabels: {
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					enabled: true
				},
				showInLegend: true
			}
		},
		tooltip: {
			enabled: false
		},
		legend: {
			verticalAlign: 'top'
		},
		credits: {
			enabled: false
		},
        title: {
            text: '1946 Tempo Level Breakdown'
		},
		subtitle: {
			text: 'Source: <a href="https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks" target="_blank">Kaggle.com</a>'
		},
		// input data information
        series: [{
            name: 'Percent',
            colorByPoint: true,
            data: [{
                name: 'Slow',
				y: (0.4251497006 / (0.4251497006 + 0.1170991351 + 0.4577511643)),
				slice: true,
				selected: true
            }, {
                name: 'Moderate',
				y: (0.1170991351 / (0.4251497006 + 0.1170991351 + 0.4577511643)),
				slice: true,
				selected: true
            },  {
				name: 'Fast',
				y: (0.4577511643 / (0.4251497006 + 0.1170991351 + 0.4577511643)),
				slice: true,
				selected: true
			}
            ]
        }]
    });
}

function pieHighChart1979() {

    Highcharts.chart('pieHigh1979', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			type: 'pie'
		},
		colors: ['black', 'gray', '#50B432'],
		exporting: {
			enabled: false
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				curso: 'rpointer',
				dataLabels: {
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					enabled: true
				},
				showInLegend: true
			}
		},
		tooltip: {
			enabled: false
		},
		legend: {
			verticalAlign: 'top'
		},
		credits: {
			enabled: false
		},
        title: {
            text: '1979 Tempo Level Breakdown'
		},
		subtitle: {
			text: 'Source: <a href="https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks" target="_blank">Kaggle.com</a>'
		},
		// input data information
        series: [{
            name: 'Percent',
            colorByPoint: true,
            data: [{
                name: 'Slow',
				y: (0.112 / (0.112 + 0.0935 + 0.7945)),
				slice: true,
				selected: true
            }, {
                name: 'Moderate',
				y: (0.0935 / (0.112 + 0.0935 + 0.7945)),
				slice: true,
				selected: true
            },  {
				name: 'Fast',
				y: (0.7945 / (0.112 + 0.0935 + 0.7945)),
				slice: true,
				selected: true
			}
            ]
        }]
    });
}

function pieHighChart2019() {
	Highcharts.chart('pieHigh2019', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			type: 'pie'
		},

		colors: ['black', 'gray', '#50B432'],
		exporting: {
			enabled: false
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				curso: 'rpointer',
				dataLabels: {
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					enabled: true
				},
				showInLegend: true
			}
		},
		tooltip: {
			enabled: false
		},
		legend: {
			verticalAlign: 'top'
		},
		credits: {
			enabled: false
		},
        title: {
            text: '2019 Tempo Level Breakdown'
		},
		subtitle: {
			text: 'Source: <a href="https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks" target="_blank">Kaggle.com</a>'
		},
		// input data information
        series: [{
            name: 'Percent',
            colorByPoint: true,
            data: [{
                name: 'Slow',
				y: (0.2064584436 / (0.2064584436 + 0.1349920593 + 0.6580201165)),
				slice: true,
				selected: true
            }, {
                name: 'Moderate',
				y: (0.1349920593 / (0.2064584436 + 0.1349920593 + 0.6580201165)),
				slice: true,
				selected: true
            },  {
				name: 'Fast',
				y: (0.6580201165 / (0.2064584436 + 0.1349920593 + 0.6580201165)),
				slice: true,
				selected: true
			}
            ]
        }]
    });
}


function spider() {
	FusionCharts.ready(function(){
		var chartObj = new FusionCharts({
	type: 'radar',
	renderAt: 'chart-container',
	width: '800',
	height: '550',
	dataFormat: 'json',
	dataSource: {
	"chart": {
		"caption": "Top Billboard Song Attributes",
		"subCaption": 'Source: BillBoard.com',
		"numberPreffix": "$",
		"theme": "fusion",
		"radarfillcolor": "#ffffff",
		"legendPosition": "top-middle"
	},

	"categories": [{
		"category": [{
			"label": "Dancability"
		}, {
			"label": "Energy"
		}, {
			"label": "Valence"
		}, {
			"label": "Tempo"
		}, {
			"label": "Loudness"
		}]
	}],


	"dataset": [{
		"seriesname": "1980",
		"data": [{
			"value": "0.554"
		}, {
			"value": "0.833"
		}, {
			"value": "0.773"
		}, {
			"value": "0.8"
		}, {
			"value": "0.56"
		}]
	}, {
		"seriesname": "2000",
		"data": [{
			"value": "0.529"
		}, {
			"value": "0.496"
		}, {
			"value": "0.278"
		}, {
			"value": "0.6"
		}, {
			"value": "0.08"
		}]
	}, {
		"seriesname": "2019",
		"data": [{
			"value":"0.878"
		}, {
			"value": "0.619"
		}, {
			"value":"0.639"
		}, {
			"value":"0.56"
		}, {
			"value":"0.87"
		}]
	}, ]
	}
	}
	);
		chartObj.render();
})};
FusionCharts.options.creditLabel = false;


// BARCHART
Highcharts.chart('container', {
	chart: {
		type: 'column'
	},
	title: {
		text: 'Most Common Genres with Respective Median Valence'
	},
	subtitle: {
		text: 'Source: <a href="https://www.kaggle.com/yamaerenay/spotify-dataset-19212020-160k-tracks" target="_blank">Kaggle.com</a>'
	},
	accessibility: {
		announceNewData: {
		enabled: true
		}
	},
	colors: ['#50B432'],
	exporting: {
		enabled: false
	},
	credits: {
		enabled: false
	},
	xAxis: {
		title: {
			text:'Genres'
		},
		type: 'category'
	},
	yAxis: {
		title: {
		text: 'Valence'
		}

	},
	legend: {
		enabled: false
	},
	plotOptions: {
		series: {
		borderWidth: 0,
		dataLabels: {
			enabled: true,
			format: '{point.y:.2f}'
		}
		}
	},

	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}'
	},

	series: [
		{
		name: "Genres",
		colorByPoint: true,
		data: [
			{
			name: "Tropical",
			y: 0.7350988499,
			// drilldown: "Tropical"
			},
			{
			name: "Funk",
			y: 0.6528399035,
			// drilldown: "Funk"
			},
			{
			name: "Latin",
			y: 0.648964167,
			// drilldown: "Latin"
			},
			{
			name: "Soul",
			y: 0.6321220543,
			// drilldown: "Soul"
			},
			{
			name: "Rap",
			y: 0.5454163553,
			// drilldown: "Rap"
			},
			{
			name: "R&B",
			y: 0.5312308256,
			// drilldown: "R&B"
			},
			{
			name: "Rock",
			y: 0.5183212258,
			// drilldown: "Rock"
			},
			{
			name: "Pop",
			y: 0.4922343391,
			// drilldown: "Pop"
			}
		]
		}
	]
	});




lineHighChart();
pieHighChart1946();
pieHighChart1979();
pieHighChart2019();
spider();
