var customerData = [
    {
      "New": 70,
      "Repeat": 30,
      "Timeline": "June"
    },
    {
      "New": 65,
      "Repeat": 35,
      "Timeline": "May"
    },
    {
      "New": 80,
      "Repeat": 20,
      "Timeline": "April"
    },
    {
      "New": 70,
      "Repeat": 30,
      "Timeline": "March"
    }
  ]

// donutChart
var newRepeatChartCanvas = $('#NewRepeatChart').get(0).getContext('2d')
var newRepeatData = {
    labels: [
        'New',
        'Repeat',
    ],
    datasets: [{
        data: [70,30],
        backgroundColor: ['#60abca', 'rgb(214, 110, 69)']
    }]
}
var newRepeatOptions = {
    legend: {
        display: true,
        position: 'bottom'
    },
    maintainAspectRatio: false,
    responsive: true,
}
var newRepeatChart  = new Chart(newRepeatChartCanvas, {
    type: 'doughnut',
    data: newRepeatData,
    options: newRepeatOptions
})
//Multi line chart
var multiLineCanvas = document.getElementById("LineChart");
var dataFirst = {
    label: "Dwell Time",
    data: [15, 10, 9, 7, 5],
    lineTension: 0,
    fill: false,
    borderColor: '#60abca'
};

var dataSecond = {
    label: "Conversion Rate",
    data: [34, 58, 76, 65, 55],
    lineTension: 0,
    fill: false,
    borderColor: '#e67b1e'
};

var speedData = {
    labels: ["Aisle 1", "Aisle 2", "Aisle 3", "Aisle 4", "Aisle 5"],
    datasets: [dataFirst, dataSecond]
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
                fontColor: "#9baba9",
            },
            stacked: true
        }]
    },
    legend: {
        display: true,
        position: 'top',   
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
// average chart //
var saleLabelData = [
    "Monday",
    "Tuesday",
    "Wednesday",
   "Thursday",
   "Friday"
    ]
var saleData = [112,113,120,89,143]
var saleChartData = {
    labels: saleLabelData,
    datasets: [{
        label: '€',
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

var saleChartCanvas = $('#AverageBasketChart').get(0).getContext('2d')
var saleChartOptions = {

    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            gridLines: {
                display: true,
                color: "#474340"
            },
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

/// outside inside chart
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
            barPercentage: 0.3,
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
        display: true,
        position:'bottom',
        labels: {
            fontColor: 'white'
        }
    }
};

var inventoryChartCanvas = document.getElementById("OutsideInsideChart");
var myChart = new Chart(inventoryChartCanvas, {
    type: 'bar',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],

        datasets: [{
            label: "Inside",
            data: [112, 76, 156, 76],
            backgroundColor: "#e67b1e",
            hoverBackgroundColor: "#e67b1e"
        }, {
            label: "Outside",
            data: [35, 45, 24, 35],
            backgroundColor: "#60abca",
            hoverBackgroundColor: "#60abca"
        }]
    },

    options: inventoryOptions_stacked,
});

function getCustomerIntelligence(){
    window.location.href = 'storeoperation-one.html';
}

function getCustomerData(val){
    var newArr = [];
    for(i=0;i<customerData.length;i++){
        if(customerData[i].Timeline == val){
            newArr.push(customerData[i].New);
            newArr.push(customerData[i].Repeat);
        }
    }
    var newData = {
        labels: [
            'New',
            'Repeat',
        ],
        datasets: [{
            data: newArr,
            backgroundColor: ['#60abca', 'rgb(214, 110, 69)']
        }]
    }
    newRepeatChart.data.labels = newData.labels;
    newRepeatChart.data.datasets = newData.datasets;
    newRepeatChart.update();
}
function submitForm(){
    alert("The form has been submitted successfully");
}