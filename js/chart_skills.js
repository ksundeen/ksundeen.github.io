const devData = {
    labels: ["Python APIs", "JavaScript", "Git", "UI/UX Frameworks", "Node.js","Angular/Typescript","React/Typescript", "VM DevOps-Azure/AWS", ".NET C# APIs"],
    datasets: [{
        label: 'Dev',
        data: [15,15,12,8,8,8,8,8,5],
        backgroundColor: 'rgba(178, 30, 14, 0.5)',
        borderColor: "rgb(178, 30, 14)",
        borderWidth: 1,
    }]
}

const cloudData = {
    labels: ["Azure VM Lab Services","DevOps", "Security Best Practices", "Cloud Architecture/Design", "Containerization", "AWS CodeBuild", "AWS CloudWatch", "AWS ECR", "Infrastructure as Code"],
    datasets: [{
        label: 'Cloud Platforms',
        data: [7,6,5,3,3,3,3,3,3],
        backgroundColor: 'rgba(198, 131, 13, 0.5)',
        borderColor: "rgb(198, 131, 13)",
        borderWidth: 1,
    }]
}

const geoData = {
    labels: ["Esri JavaScript API 3.x/4.x", "GDAL", "POSTGIS", "GEOS", "ArcPy/arcgis Python", "Leaflet", "Pro SDK Addins", "Open Layers", "D3", "Google Maps API", "Spatial R"],
    datasets: [{
        label: 'Geo Dev',
        data: [10,10,10,9,9,7,6,6,6,5,3],
        backgroundColor: 'rgba(5, 130, 15, 0.5)',
        borderColor: "rgb(5, 130, 15)",
        borderWidth: 1,
    }]
}

const dbData = {
    labels: ["ArcGIS Server", "ArcGIS Enteprise", "ArcSDE", "GeoServer", "PostgreSQL", "MS SQL Server", "SQL/PLSQL", "Web Servers", "Oracle"],
    datasets: [{
        label: 'Map Servers/Databases',
        data: [9,9,9,8,8,8,7,6,5],
        backgroundColor: 'rgba(66, 134, 244, 0.5)',
        borderColor: "rgb(66, 134, 244)",
        borderWidth: 1,
    }]
}

const gisAppData = {
    labels: ["ArcGIS Pro", "QGIS", "ArcGIS Desktop", "ArcGIS Online", "ArcGIS Portal", "Esri Experience Builder", "Survey123", "Esri Web AppBuilder"],
    datasets: [{
        label: 'GIS Applications',
        data: [10,10,10,9,9,8,8,8],
        backgroundColor: 'rgba(48, 213, 200, 0.5)',
        borderColor: "rgb(48, 213, 200)",
        borderWidth: 1,
    }]
}

const softSkillsData = {
    labels: ["Time Management", "Presentations", "Technical/Scientific Writing", "Data/Business Analytics", "Workshops", "Project Management", "Agile", "Personnel Management"],
    datasets: [{
        label: 'Soft Skills',
        data: [20,15,15,10,8,7,7,2],
        backgroundColor: 'rgba(	153, 51, 153, 0.5)',
        borderColor: "rgb(	153, 51, 153)",
        borderWidth: 1,
    }]
}

const chartDivs = {
    "devChart": devData, 
    "cloudChart": cloudData, 
    "geoDevChart": geoData, 
    "dbChart": dbData, 
    "gisAppsChart": gisAppData, 
    "softSkillsChart": softSkillsData
};

const chartOptions = {		
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

const keys = Object.keys(chartDivs);

keys.forEach(item => {    
    const ctx = document.getElementById(item).getContext('2d');
    const aboutChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: chartDivs[item],
        options: chartOptions
    });
});
    
