var devData = {
    labels: ["Python APIs", "JavaScript", "Source Control", ".NET C#", "React", "UI/UX Frameworks", "Angular/Typescript", "VM DevOps-Azure/AWS", "IIS", "jQuery", "Node.js"],
    datasets: [{
        label: 'Dev',
        data: [9,8,8,8,8,7,7,6,6,6,4],
        backgroundColor: 'rgba(66, 134, 244, 0.5)',
        borderColor: "rgb(66, 134, 244)",
        borderWidth: 1,
    }]
}

var geoData = {
    labels: ["Pro SDK Addins", "ArcPy Python", "Open Layers", "Esri JavaScript API 3.x", "Leaflet API", "D3", "Google Maps API", "GDAL", "Esri JavaScript API 4.x", "Mapbox API", "Spatial R"],
    datasets: [{
        label: 'Geo Dev',
        data: [9,9,7,6,6,6,5,5,5,3,3],
        backgroundColor: 'rgba(5, 130, 15, 0.5)',
        borderColor: "rgb(5, 130, 15)",
        borderWidth: 1,
    }]
}

var dbData = {
    labels: ["ArcGIS Server", "ArcGIS Enteprise","Arc SDE", "GeoServer", "PostgreSQL", "SQL/PLSQL", "Web Servers", "Oracle"],
    datasets: [{
        label: 'Map Servers/Analytics',
        data: [9,9,9,8,8,8,7,6],
        backgroundColor: 'rgba(198, 131, 13, 0.5)',
        borderColor: "rgb(198, 131, 13)",
        borderWidth: 1,
    }]
}

var gisAppData = {
    labels: ["ArcGIS Pro", "ArcGIS Desktop", "QGIS", "ArcGIS Online", "ArcGIS Portal", "Esri Web AppBuilder", "ArcGIS Collector", "Survey123"],
    datasets: [{
        label: 'GIS Applications',
        data: [10,10,10,9,9,8,8,8],
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
    
