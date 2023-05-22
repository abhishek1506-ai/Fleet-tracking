// Line chart
var labelData = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'];
var activeData = [325, 368, 342, 336, 325];
var idleData = [83, 67, 76, 78, 83];
var maintenanceData = [48, 21, 38, 42, 48];
var lineChartData = {
    labels: labelData,
    datasets: [{
        label: 'Active',
        lineTension: 0,
        borderColor: 'rgb(74, 71, 64)',
        pointColor: '#3b8bba',
        fill: false,
        pointStrokeColor: 'rgba(225,225,225,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(225,225,225,1)',
        data: activeData
    },
    {
        label: 'Idle',
        lineTension: 0,
        borderColor: 'rgb(214, 110, 69)',
        pointColor: '#3b8bba',
        fill: false,
        pointStrokeColor: 'rgba(225,225,225,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(225,225,225,1)',
        data: idleData
    },
    {
        label: 'Maintenance',
        lineTension: 0,
        borderColor: '#4e8fb8',
        pointColor: '#3b8bba',
        fill: false,
        pointStrokeColor: 'rgba(225,225,225,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(225,225,225,1)',
        data: maintenanceData
    }]
}
var lineChartOptions = {
    maintainAspectRatio: false,
    responsive: true,

    legend: {
        display: true
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
            },
            ticks: {
                fontSize: 14
            }
        }],
        yAxes: [{
            gridLines: {
                display: true,
            },
            ticks: {
                fontColor: "#445054",
                beginAtZero: true,

            }
        }]
    }
}

var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
var lineChartOptions = $.extend(true, {}, lineChartOptions)
var lineChartData = $.extend(true, {}, lineChartData)

var lineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: lineChartData,
    options: lineChartOptions
});

// Bar Chart
var barLabelData = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
var fuelData = [5000, 4500, 6000, 6500];
var serviceData = [3000, 2500, 2500, 3000];
var barChartData = {
    labels: barLabelData,
    datasets: [{
        label: 'Fuel',
        backgroundColor: 'rgb(214, 110, 69)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: fuelData
    },
    {
        label: 'Service',
        backgroundColor: 'rgb(33, 115, 39)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: serviceData
    },
    ]
}

var barChartCanvas = $('#barChart').get(0).getContext('2d')

var barChartOptions = {
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
                fontColor: "#445054"
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: "#445054",
                fontSize: 12
            }
        }]
    }
};

var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: barChartData,
    options: barChartOptions
});

// donutChart
var donutChartCanvas = $('#donutChart').get(0).getContext('2d')
var donutData = {
    labels: [
        'Harsh Break',
        'Over Speeding',
        'Acceleration',
        'Seat Belt Violation',
        'Safe Driving'
    ],
    datasets: [{
        data: [7,15,13,25,40],
        backgroundColor: ['#3544b8','rgb(214, 110, 69)', '#a5c4cc','#d6b615','#0faed6']
    }]
}
var donutOptions = {
    maintainAspectRatio: false,
    responsive: true,
}
new Chart(donutChartCanvas, {
    type: 'doughnut',
    data: donutData,
    options: donutOptions
})
// function to get the fleet charts based on the drop down
function getFleetUtilisation(fleet) {
    if (fleet == "Monthly") {
        labelData = ['Month1', 'Month2', 'Month3', 'Month4', 'Month5'];
        activeData = [8332, 8581, 8409, 8577, 8645];
        idleData = [2336, 2406, 2357, 2204, 2106];
        maintenanceData = [788, 811, 794, 684, 692]
    }
    else if (fleet == "Weekly") {
        labelData = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'];
        activeData = [2083, 1978, 2037, 2077, 2145];
        idleData = [584, 601, 564, 575, 605];
        maintenanceData = [197, 256, 224, 247, 236];
    }
    else {
        labelData = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'];
        activeData = [325, 368, 342, 336, 325];
        idleData = [83, 67, 76, 78, 83];
        maintenanceData = [48, 21, 38, 42, 48];
    }
    var newLineData = {
        labels: labelData,
        datasets: [{
            label: 'Active',
            lineTension: 0,
            borderColor: 'rgb(74, 71, 64)',
            pointColor: '#3b8bba',
            fill: false,
            pointStrokeColor: 'rgba(225,225,225,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(225,225,225,1)',
            data: activeData
        },
        {
            label: 'Idle',
            lineTension: 0,
            borderColor: 'rgb(181, 63, 71)',
            pointColor: '#3b8bba',
            fill: false,
            pointStrokeColor: 'rgba(225,225,225,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(225,225,225,1)',
            data: idleData
        },
        {
            label: 'Maintenance',
            lineTension: 0,
            borderColor: '#4e8fb8',
            pointColor: '#3b8bba',
            fill: false,
            pointStrokeColor: 'rgba(225,225,225,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(225,225,225,1)',
            data: maintenanceData
        }]
    }
    lineChart.data.datasets = newLineData.datasets;
    lineChart.data.labels = newLineData.labels;
    lineChart.update();
};

// function to get the fuel cost based on the dropdown
function getFuelCosts(fuel) {
    if (fuel == "lastMonth") {
        barLabelData = ['Month 1', 'Month 2', 'Month 3', 'Month 4'];
        fuelData = [21000, 20000, 23000, 26000];
        serviceData = [12000, 10000, 10500, 12000];
    }
    else if (fuel == "lastYear") {
        barLabelData = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
        fuelData = [251000, 220000, 245000, 289000];
        serviceData = [144000, 120000, 130000, 124000];
    }
    else {
        barLabelData = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        fuelData = [5000, 4500, 6000, 6500];
        serviceData = [3000, 2500, 2500, 3000];
    }
    var newBarChartData = {
        labels: barLabelData,
        datasets: [{
            label: 'Fuel',
            backgroundColor: 'rgb(214, 110, 69)',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: fuelData
        },
        {
            label: 'Service',
            backgroundColor: 'rgb(33, 115, 39)',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: serviceData
        },
        ]
    };
    barChart.data.datasets = newBarChartData.datasets;
    barChart.data.labels = newBarChartData.labels;
    barChart.update();
}

