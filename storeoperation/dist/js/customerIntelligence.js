var tableData = [
    {
      "Counter": "Checkout Counter 1",
      "QueueLength": 11,
      "WaitTime": 10.5
    },
    {
      "Counter": "Checkout Counter 2",
      "QueueLength": 5,
      "WaitTime": 3
    },
    {
      "Counter": "Checkout Counter 3",
      "QueueLength": 5,
      "WaitTime": 3.5
    },
    {
      "Counter": "Checkout Counter 4",
      "QueueLength": 13,
      "WaitTime": 10.5
    },
    {
      "Counter": "Checkout Counter 5",
      "QueueLength": 12,
      "WaitTime": 10
    }
  ];

// Sales Per Square foot Chart //
var saleLabelData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var saleData = [1200, 3900, 5633, 2377, 1200, 1344, 1088, 3400, 1200, 1233, 1288, 6789]
var saleChartData = {
    labels: saleLabelData,
    datasets: [{
        label: 'Sales per square foot',
        backgroundColor: '#60abca',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: saleData
    }
    ]
}

var saleChartCanvas = $('#SalePerSquareFootChart').get(0).getContext('2d')
var saleChartOptions = {

    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: "#9baba9"
            }
        }],
        xAxes: [{
            gridLines: {
                display: false,
            }, barPercentage: 0.5,
            ticks: {
                fontColor: "#9baba9",
                fontSize: 12
            }
        }]
    }
};

var saleChart = new Chart(saleChartCanvas, {
    type: 'bar',
    data: saleChartData,
    options: saleChartOptions
});
// ------------End of the chart------------------//

// FootFall vs ActiveStaff chart //

var footfallActiveStaffChartData = {
    labels: ["8AM-9AM", "9:01AM-10AM", "10:01AM-11AM", "11:01AM-12NOON", "12NOON-1PM", "1:01PM-2PM", "2:01PM-3PM", "3:01PM-4PM", "4:01PM-5PM", "5:01PM-6PM", "6:01PM-7PM", "7:01PM-8PM"],
    datasets: [{
        type: 'line',
        label: "footfall",
        data: [107, 138, 114, 145, 129, 136, 105, 101, 127, 94, 104, 92],
        fill: false,
        backgroundColor: '#60abca',
        borderColor: '#60abca',
        hoverBackgroundColor: '#60abca',
        hoverBorderColor: '#60abca',
        yAxisID: 'staff',
    }, {
        label: "Active staff",
        type: 'bar',
        data: [10, 11, 11, 10, 11, 12, 11, 9, 9, 11, 11, 10],
        fill: false,
        borderColor: '#7d7a6e',
        backgroundColor: '#7d7a6e',
        pointBorderColor: '#7d7a6e',
        pointBackgroundColor: '#7d7a6e',
        pointHoverBackgroundColor: '#7d7a6e',
        pointHoverBorderColor: '#7d7a6e',


    }]
};


var footfallActiveStaffCanvas = $('#FootfallActiveStaffChart').get(0).getContext('2d')
var footfallActiveStaffChart = new Chart(footfallActiveStaffCanvas, {
    type: 'bar',
    data: footfallActiveStaffChartData,
    options: {
        responsive: true,
        tooltips: {
            mode: 'label'
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                display: true,
                stacked: true,
                ticks: {
                    beginAtZero: true,
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: "#474340"
                },

                stacked: true,
                ticks: {
                    display: false,
                    beginAtZero: true,
                }
            }, {
                id: 'staff',
                display: false,
                stacked: true,
            }]
        }
    }
});
// --------------End of the chart-----------//

// Inventory chart //
Chart.pluginService.register({
    afterDraw: function (chart) {
        if (typeof chart.config.options.lineAt != 'undefined') {
            var lineAt = chart.config.options.lineAt;
            var ctxPlugin = chart.chart.ctx;
            var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
            var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];

            if (yAxe.min != 0) return;

            ctxPlugin.strokeStyle = "#e67b1e";
            ctxPlugin.lineWidth = 3;
            ctxPlugin.beginPath();
            lineAt = (lineAt - yAxe.min) * (100 / yAxe.max);
            lineAt = (100 - lineAt) / 100 * (yAxe.height) + yAxe.top;
            ctxPlugin.moveTo(xAxe.left, lineAt);
            ctxPlugin.lineTo(xAxe.right, lineAt);
            ctxPlugin.stroke();
        }
    }
});
var inventoryOptions_stacked = {
    lineAt: 60,
    maintainAspectRatio: false,
    datasetFill: false,
    responsive: true,
    tooltips: {
        enabled: true
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: "#9baba9",
                fontSize: 12
            },
            scaleLabel: {
                display: true
            },
            barPercentage: 0.5,
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display: true,
                color: "#474340"
            },
            ticks: {
                fontSize: 12,
                fontColor: "#9baba9"
            },
            stacked: true
        }]
    },

    legend: {
        display: false
    }
};

var inventoryChartCanvas = document.getElementById("InventoryChart");
var myChart = new Chart(inventoryChartCanvas, {
    type: 'bar',
    data: {
        labels: ["Aisle 1", "Aisle 2", "Aisle 3", "Aisle 4", "Aisle 5"],

        datasets: [{
            label: "Inventory filled",
            data: [20, 22, 55, 77, 22],
            backgroundColor: "#e67b1e",
            hoverBackgroundColor: "#e67b1e"
        }, {
            label: "Inventory Sold out",
            data: [80, 78, 45, 23, 78],
            backgroundColor: "#60abca",
            hoverBackgroundColor: "#60abca"
        }]
    },

    options: inventoryOptions_stacked,
});

// --------------End of the chart-----------//


// Multi Line chart //

var multiLineCanvas = document.getElementById("MultiLineChart");


var dataFirst = {
    label: "HVAC",
    data: [300, 123, 122, 145, 123, 257, 465],
    lineTension: 0,
    fill: false,
    borderColor: '#60abca'
};

var dataSecond = {
    label: "Lighting Instore",
    data: [220, 17, 189, 286, 128, 234, 261],
    lineTension: 0,
    fill: false,
    borderColor: '#e67b1e'
};
var dataThird = {
    label: "Lighting Outside",
    data: [134, 145, 136, 126, 171, 128, 131],
    lineTension: 0,
    fill: false,
    borderColor: 'white'
};

var speedData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [dataFirst, dataSecond, dataThird]
};

var chartOptions = {
    maintainAspectRatio: false,
    datasetFill: false,
    responsive: true,
    tooltips: {
        enabled: true
    },
    scales: {
        xAxes: [{
            
            ticks: {
                fontColor: "#9baba9",
                fontSize: 12
            },
            scaleLabel: {
                display: true
            },
            stacked: true
        }],
        yAxes: [{
            
            gridLines: {
                display: true,
                color: "#474340"
            },
            ticks: {
                display: false,
                fontSize: 12,
                fontColor: "#9baba9",
            },
            stacked: true
        }]
    },
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            fontColor: 'white'
        }
    }
};

var multiLineChart = new Chart(multiLineCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
});

// --------------End of the chart-----------//
function buildTableData(data) {
    var table = document.getElementById("myBody");
    for (let i = 0; i < data.length; i++) {
        var row = `<tr>
                <td> ${data[i].Counter}</td>
                <td> ${data[i].QueueLength}</td>
                <td> ${data[i].WaitTime}</td>  
                <td>  <a href="javaScript:void()" onclick="deleteRow(this)"><i class="fa fa-times"
                aria-hidden="true"></i></a></td>  
            </tr>`
        table.innerHTML += row
    }
}
buildTableData(tableData);
function deleteRow(currElement){
    var parentRowIndex = currElement.parentNode.parentNode.rowIndex;
    console.log(parentRowIndex);
    document.getElementById("myTable").deleteRow(parentRowIndex); 
}

function addRow(id){
    
    var filas = document.getElementById("myTable").rows.length;
    let temp = {};
    temp.Counter = "New Counter";
       temp.QueueLength = 0;
       temp.WaitTime = 0;
       tableData.push(temp);

    var x = document.getElementById(id).insertRow(filas);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    var q = x.insertCell(2);
    var l = x.insertCell(3);
    y.innerHTML ='<td>New Counter</td>';
    z.innerHTML ='<td> 0</td>';
    q.innerHTML ='<td> 0 mins</td>';
    l.innerHTML ='<a href="javaScript:void()" onclick="deleteRow(this)"><i class="fa fa-times" aria-hidden="true"></i></a>'; 
  
}

function getFootfallActiveStaff(val){
    console.log(val);
    if(val == "lastWeek"){
        var newFootfallActiveStaffChartData = {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                type: 'line',
                label: "footfall",
                data: [110, 125, 140, 127, 180, 225, 205],
                fill: false,
                backgroundColor: '#60abca',
                borderColor: '#60abca',
                hoverBackgroundColor: '#60abca',
                hoverBorderColor: '#60abca',
                yAxisID: 'staff',
            }, {
                label: "Active staff",
                type: 'bar',
                data: [10, 11, 12, 12, 15, 15, 15],
                fill: false,
                borderColor: '#7d7a6e',
                backgroundColor: '#7d7a6e',
                pointBorderColor: '#7d7a6e',
                pointBackgroundColor: '#7d7a6e',
                pointHoverBackgroundColor: '#7d7a6e',
                pointHoverBorderColor: '#7d7a6e',
        
        
            }]
        };
        footfallActiveStaffChart.data.labels = newFootfallActiveStaffChartData.labels;
        footfallActiveStaffChart.data.datasets = newFootfallActiveStaffChartData.datasets;
        footfallActiveStaffChart.update();
    }
    else{
        newFootfallActiveStaffChartData  = {
            labels: ["8AM-9AM", "9:01AM-10AM", "10:01AM-11AM", "11:01AM-12NOON", "12NOON-1PM", "1:01PM-2PM", "2:01PM-3PM", "3:01PM-4PM", "4:01PM-5PM", "5:01PM-6PM", "6:01PM-7PM", "7:01PM-8PM"],
            datasets: [{
                type: 'line',
                label: "footfall",
                data: [107, 138, 114, 145, 129, 136, 105, 101, 127, 94, 104, 92],
                fill: false,
                backgroundColor: '#60abca',
                borderColor: '#60abca',
                hoverBackgroundColor: '#60abca',
                hoverBorderColor: '#60abca',
                yAxisID: 'staff',
            }, {
                label: "Active staff",
                type: 'bar',
                data: [10, 11, 11, 10, 11, 12, 11, 9, 9, 11, 11, 10],
                fill: false,
                borderColor: '#7d7a6e',
                backgroundColor: '#7d7a6e',
                pointBorderColor: '#7d7a6e',
                pointBackgroundColor: '#7d7a6e',
                pointHoverBackgroundColor: '#7d7a6e',
                pointHoverBorderColor: '#7d7a6e',
        
        
            }]
        };
        footfallActiveStaffChart.data.labels = newFootfallActiveStaffChartData.labels;
        footfallActiveStaffChart.data.datasets = newFootfallActiveStaffChartData.datasets;
        footfallActiveStaffChart.update();
    }
};
/*setInterval(function(){ 
    lineValue = 70
    var newInventoryOptions_stacked = {
        lineAt: lineValue,
        maintainAspectRatio: false,
        datasetFill: false,
        responsive: true,
        tooltips: {
            enabled: true
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#9baba9",
                    fontSize: 12
                },
                scaleLabel: {
                    display: true
                },
                barPercentage: 0.5,
                stacked: true
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: "#474340"
                },
                ticks: {
                    fontSize: 12,
                    fontColor: "#9baba9"
                },
                stacked: true
            }]
        },
    
        legend: {
            display: false
        }
    };
    myChart.options = newInventoryOptions_stacked.options;
    myChart.update();
}, 1000);*/
function getInstoreAnalytics(){
    window.location.href = 'storeoperation-two.html';
}