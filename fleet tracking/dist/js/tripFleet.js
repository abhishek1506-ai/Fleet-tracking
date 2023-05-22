
window.onload = function(){
    var currentFleetId = sessionStorage.getItem('fleetId');
    document.getElementById("currentFleetId").value = currentFleetId;
};

var tripData = [
    {
        "Fleet": "F8907",
        "TripID": "TID456",
        "Status": "In Transit",
        "Origin": "Lewisham",
        "Destination": "Hyde Park",
        "StartTime": "08:30",
        "ETA": "14:45",
        "Model": "Merc",
        "NumberPlate": "LA 5M T5678",
        "OnTime": "97%",
        "Distance": "12754",
        "FuelEffeciency": "36",
        "BatteryStatus": 12.5,
        "Engine": 198,
        "Fuel": 65,
        "TyrePressure": 75,
        "DriverId":56907,
        "Name":"Watson",
        "Contact":7745611238,
        "Acceleration":8,
        "Speeding":5,
        "Breaking":8,
        "Trips":46,
        "Rating":8.1,
    },
    {
        "Fleet": "F8978",
        "TripID": "TID389",
        "Status": "BrokeDown",
        "Origin": "Manchester",
        "Destination": "Hyde Park",
        "StartTime": "10:30",
        "ETA": "15:30",
        "Model": "Merc",
        "NumberPlate": "LA 6T X908",
        "OnTime": "89%",
        "Distance": "13421",
        "FuelEffeciency": "38",
        "BatteryStatus": 12.8,
        "Engine": 225,
        "Fuel": 95,
        "TyrePressure": 55,
        "DriverId":982367,
        "Name":"John",
        "Contact":5454677899,
        "Acceleration":14,
        "Speeding":9,
        "Breaking":12,
        "Trips":67,
        "Rating":7.6,
    }
];

var fuelConsumptionChartData = [{
    "FleetId": "F8907",
    "Data": [
        {
            "Day1": 68,
            "Day2": 76,
            "Day3": 95,
            "Day4": 85
        },
        {
            "Week1": 350,
            "Week2": 390,
            "Week3": 505,
            "Week4": 450
        },
        {
            "Month1": 1560,
            "Month2": 1800,
            "Month3": 1900,
            "Month4": 1950
        }]
}, {
    "FleetId": "F8978",
    "Data": [
        {
            "Day1": 68,
            "Day2": 76,
            "Day3": 95,
            "Day4": 35
        },
        {
            "Week1": 350,
            "Week2": 390,
            "Week3": 505,
            "Week4": 400
        },
        {
            "Month1": 1360,
            "Month2": 1650,
            "Month3": 1750,
            "Month4": 1878
        }]
}
];
var distanceTravelledChartData = [{
    "FleetId": "F8907",
    "Data": [
        {
            "Day1": 180,
            "Day2": 190,
            "Day3": 150,
            "Day4": 165
        },
        {
            "Week1": 1010,
            "Week2": 980,
            "Week3": 945,
            "Week4": 890
        },
        {
            "Month1": 4000,
            "Month2": 3500,
            "Month3": 3800,
            "Month4": 4200
        }]
}, {
    "FleetId": "F8978",
    "Data": [
        {
            "Day1": 190,
            "Day2": 180,
            "Day3": 165,
            "Day4": 195
        },
        {
            "Week1": 900,
            "Week2": 950,
            "Week3": 1005,
            "Week4": 895
        },
        {
            "Month1": 3700,
            "Month2": 4200,
            "Month3": 3800,
            "Month4": 3500
        }]
}
];

//-Reponsive chart1
//-----------------
var batteryChart = new JustGage({
    id: 'batteryChart',
    decimals: true,
    value: 12.5,
    min: 0,
    max: 15,
    symbol: 'V',
    pointer: true,
    gaugeWidthScale: 0.6,
    customSectors: [{
        color: '#4e8fb8',
        lo: 0,
        hi: 12.9
    }],
    counter: true
});
//-Reponsive chart2
//-----------------
var engineChart = new JustGage({
    id: 'engineChart',
    value: 200,
    min: 0,
    max: 300,
    symbol: '°F',
    pointer: true,
    gaugeWidthScale: 0.6,
    customSectors: [{
        color: '#4e8fb8',
        lo: 0,
        hi: 220
    },
    {
        color: '#ff0000',
        lo: 220,
        hi: 300
    },],
    counter: true
});
//-Reponsive chart3
//-----------------
var fuelChart = new JustGage({
    id: 'fuelChart',
    value: 60,
    min: 0,
    max: 100,
    symbol: '%',
    pointer: true,
    gaugeWidthScale: 0.6,
    customSectors: [{
        color: '#4e8fb8',
        lo: 0,
        hi: 100
    }],
    counter: true
});
//-Reponsive chart4
//-----------------
var tyreChart = new JustGage({
    id: 'tyreChart',
    value: 55,
    min: 0,
    max: 100,
    symbol: 'psi',
    pointer: true,
    gaugeWidthScale: 0.6,
    customSectors: [{
        color: '#4e8fb8',
        lo: 0,
        hi: 80
    }],
    counter: true
});

// Fuel Consumption Chart
var fuelLabelData = ['Day 1', 'Day 2', 'Day 3', 'Day 4'];
if (sessionStorage.getItem('fleetId') == "F8907") {
    var fuelData = [68, 76, 95, 85];
    var distanceData = [180, 195, 150, 165];
}
else {
    var fuelData = [68, 76, 95, 35];
    var distanceData = [190, 180, 165, 195];
}
var fuelChartData = {
    labels: fuelLabelData,
    datasets: [{
        label: 'Fuel Consumption',
        backgroundColor: 'rgb(214, 110, 69)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: fuelData
    }
    ]
}

var fuelChartCanvas = $('#fuelConsumptionChart').get(0).getContext('2d')

var fuelChartOptions = {
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
            barPercentage: 0.4,
            ticks: {
                fontColor: "#445054",
                fontSize: 12
            }
        }]
    }
};

var fuelConsumptionChart = new Chart(fuelChartCanvas, {
    type: 'bar',
    data: fuelChartData,
    options: fuelChartOptions
});


// Distance Travelled Chart
var distanceLabelData = ['Day 1', 'Day 2', 'Day 3', 'Day 4'];

var distanceChartData = {
    labels: distanceLabelData,
    datasets: [{
        label: 'Fuel Consumption',
        backgroundColor: '#ebdd63',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: distanceData
    }
    ]
}

var distanceChartCanvas = $('#distanceTravelledChart').get(0).getContext('2d')

var distanceChartOptions = {
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
            gridLines: {
                display: false,
            }, barPercentage: 0.4,
            ticks: {
                fontColor: "#445054",
                fontSize: 12
            }
        }]
    }
};

var distanceTravelledChart = new Chart(distanceChartCanvas, {
    type: 'bar',
    data: distanceChartData,
    options: distanceChartOptions
});

document.getElementById("fleetId").innerHTML = sessionStorage.getItem('fleetId');
for (i = 0; i < tripData.length; i++) {
    if (sessionStorage.getItem('fleetId') == tripData[i].Fleet) {
        document.getElementById("tripId").innerHTML = tripData[i].TripID;
        document.getElementById("status").innerHTML = tripData[i].Status;
        document.getElementById("origin").innerHTML = tripData[i].Origin;
        document.getElementById("destination").innerHTML = tripData[i].Destination;
        document.getElementById("startTime").innerHTML = tripData[i].StartTime;
        document.getElementById("model").innerHTML = tripData[i].Model;
        document.getElementById("numberPlate").innerHTML = tripData[i].NumberPlate;
        document.getElementById("onTime").innerHTML = tripData[i].OnTime;
        document.getElementById("distance").innerHTML = tripData[i].Distance;
        document.getElementById("name").innerHTML = tripData[i].Name;
        document.getElementById("driverId").innerHTML = tripData[i].DriverId;
        document.getElementById("contact").innerHTML = tripData[i].Contact;
        document.getElementById("acceleration").innerHTML = tripData[i].Acceleration;
        document.getElementById("speeding").innerHTML = tripData[i].Speeding;
        document.getElementById("breaking").innerHTML = tripData[i].Breaking;
        document.getElementById("trips").innerHTML = tripData[i].Trips;
        document.getElementById("rating").innerHTML = tripData[i].Rating;
        batteryChart.refresh(tripData[i].BatteryStatus);
        engineChart.refresh(tripData[i].Engine);
        fuelChart.refresh(tripData[i].Fuel);
        tyreChart.refresh(tripData[i].TyrePressure);
    }
}
// clickable dropdown fuel consumption
function getFuelConsumption(fuel) {

    var dummyFuelLabel = [];
    var dummyFuelData = [];
    for (i = 0; i < fuelConsumptionChartData.length; i++) {
        if (sessionStorage.getItem('fleetId') == fuelConsumptionChartData[i].FleetId) {
            if (fuel == "lastMonth") {
                dummyFuelLabel = ["Week 1", "Week 2", "Week 3", "Week 4"];
                dummyFuelData.push(fuelConsumptionChartData[i].Data[1].Week1)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[1].Week2)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[1].Week3)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[1].Week4)
            }
            else if (fuel == "lastYear") {
                dummyFuelLabel = ["Month 1", "Month 2", "Month 3", "Month 4"];
                dummyFuelData.push(fuelConsumptionChartData[i].Data[2].Month1)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[2].Month2)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[2].Month3)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[2].Month4)
            }
            else {
                dummyFuelLabel = ["Day 1", "Day 2", "Day 3", "Day 4"];
                dummyFuelData.push(fuelConsumptionChartData[i].Data[0].Day1)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[0].Day2)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[0].Day3)
                dummyFuelData.push(fuelConsumptionChartData[i].Data[0].Day4)
            }

        }
    }
    fuelLabelData = dummyFuelLabel;
    fuelData = dummyFuelData;
    var dummyFuelChartData = {
        labels: fuelLabelData,
        datasets: [{
            label: 'Fuel Consumption',
            backgroundColor: 'rgb(214, 110, 69)',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: fuelData
        }
        ]
    }
    fuelConsumptionChart.data.datasets = dummyFuelChartData.datasets;
    fuelConsumptionChart.data.labels = dummyFuelChartData.labels;
    fuelConsumptionChart.update();
}
// clickable dropdown distance travelled
function getDistanceTravelled(distance) {
    var dummyDistanceLabel = [];
    var dummyDistanceData = [];
    for (i = 0; i < distanceTravelledChartData.length; i++) {
        if (sessionStorage.getItem('fleetId') == distanceTravelledChartData[i].FleetId) {
            if (distance == "lastMonth") {
                dummyDistanceLabel = ["Week 1", "Week 2", "Week 3", "Week 4"];
                dummyDistanceData.push(distanceTravelledChartData[i].Data[1].Week1)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[1].Week2)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[1].Week3)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[1].Week4)
            }
            else if (distance == "lastYear") {
                dummyDistanceLabel = ["Month 1", "Month 2", "Month 3", "Month 4"];
                dummyDistanceData.push(distanceTravelledChartData[i].Data[2].Month1)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[2].Month2)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[2].Month3)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[2].Month4)
            }
            else {
                dummyDistanceLabel = ["Day 1", "Day 2", "Day 3", "Day 4"];
                dummyDistanceData.push(distanceTravelledChartData[i].Data[0].Day1)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[0].Day2)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[0].Day3)
                dummyDistanceData.push(distanceTravelledChartData[i].Data[0].Day4)
            }

        }
    }
    distanceLabelData = dummyDistanceLabel;
    distanceData = dummyDistanceData;
    var dummyDistanceChartData = {
        labels: distanceLabelData,
        datasets: [{
            label: 'Fuel Consumption',
            backgroundColor: '#ebdd63',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: distanceData
        }
        ]
    }
    distanceTravelledChart.data.datasets = dummyDistanceChartData.datasets;
    distanceTravelledChart.data.labels = dummyDistanceChartData.labels;
    distanceTravelledChart.update();
}

function goToPreviousPage(){
    location.href = "./fleettracking-one.html";
}
function createTicket(){
    alert("Ticket has been created successfully")
}


