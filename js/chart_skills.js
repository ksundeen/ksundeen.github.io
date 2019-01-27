var devData = {
    labels: ["Python APIs", "Git/Subversion", "Bootstrap", "JavaScript", "jQuery", "Azure/AWS", "Angular/Typescript", "UX", "Node.js", ".NET C#"],
    datasets: [{
        label: 'Dev',
        data: [9,8,7,7,6,6,5,5,4,4],
        backgroundColor: 'rgba(66, 134, 244, 0.5)',
        borderColor: "rgb(66, 134, 244)",
        borderWidth: 1,
    }]
}

var geoData = {
    labels: ["ArcPy Python", "Esri JavaScript API 3.x", "Leaflet API", "D3", ".NET Customization ArcGIS/ArcPro", "Google Maps API", "GDAL", "Esri JavaScript API 4.x", "Spatial R", "Mapbox API"],
    datasets: [{
        label: 'Geo Dev',
        data: [10,7,5,5,5,4,4,4,4,3],
        backgroundColor: 'rgba(5, 130, 15, 0.5)',
        borderColor: "rgb(5, 130, 15)",
        borderWidth: 1,
    }]
}

var dbData = {
    labels: ["ArcGIS Server", "MS Excel Customization", "SQL/PLSQL", "MySQL", "Postgresql", "ArcSDE using MySQL", "Postgresql, Oracle", "R Regression"],
    datasets: [{
        label: 'Data Access/Analytics',
        data: [10,10,9,9,9,8,8,5],
        backgroundColor: 'rgba(198, 131, 13, 0.5)',
        borderColor: "rgb(198, 131, 13)",
        borderWidth: 1,
    }]
}

var gisAppData = {
    labels: ["ArcGIS Desktop", "ArcGIS Online", "Arc Pro", "Esri Web AppBuilder Dev", "ArcGIS Collector", "Survey123", "ArcGIS Enterprise", "QGIS"],
    datasets: [{
        label: 'GIS Applications',
        data: [10,10,9,9,9,8,8,7],
        backgroundColor: 'rgba(178, 30, 14, 0.5)',
        borderColor: "rgb(178, 30, 14)",
        borderWidth: 1,
    }]
}

var chartDivs = {"devChart": devData, "geoDevChart": geoData, "dbChart": dbData, "gisAppsChart": gisAppData};

var chartOptions = {		
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                callback: function(value) {if (value % 1 === 0) {return value;}},
                suggestedMax: 5
            },
            gridLines: {
                display: true
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            }
        }]
    }
}

// var ctx = document.getElementById("devChart").getContext('2d');
const keys = Object.keys(chartDivs);

keys.forEach(item => {    
    var ctx = document.getElementById(item).getContext('2d');
    var aboutChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: chartDivs[item],
        options: chartOptions
    });
});
    
