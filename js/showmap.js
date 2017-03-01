function showMap(){
    // school Map
    var mymap = L.map('schoolmap', {
        center: [38.548, -96.767],
        maxZoom: 20,
        minZoom: 3,
        zoom: 4 // initial map zoom
    });
    
    // Add OpenStreetMap basemap
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);
    
    // create a pane so that the markers show up above the state boundaries; referenced in the pointToLayer() function.
    
    mymap.createPane('markers');
    mymap.getPane('markers').style.zIndex = 650;

    // Getting ajax data for states
    console.log("Getting state data");
    $.ajax({
        dataType: "json",
        url: "data/state50_pop_1990-2016.geojson",
        success: function(data) {
            // hold data attributes as an array
            var attributes = processStateData(data);
            
            // Create MultiPolygon states layer
            var stateGeojsonLayer = L.geoJson(data, {
                style: styleFeatures
//                onEachFeature: onEachFeature  // can be used for adding interactivity to features
            }).addTo(mymap);
            toggleLayer(mymap, stateGeojsonLayer);
            }
    });
    
    var popup = L.popup();
    
    // Click to show Lat Long on map 
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Location: " + e.latlng.toString())
            .openOn(mymap);
    };

    mymap.on('click', onMapClick);
    getAjaxData(mymap);  // gets data for proportional symbols
};

/* #########################################
######### Functions for State Data #########
##########################################*/

//Turn layer on & off
function toggleLayer(map, layer) {
    $(".layerbutton").click(function() {
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            $(".layerbutton").css("background-color", "gray");
            $(".layerbutton h3 i").html("Off");
        } else {
            map.addLayer(layer);
            $(".layerbutton").css("background-color", "orange");
            $(".layerbutton h3 i").html("On");            
        };
    });
};


// Classifies colors for population
function getColor(d) {
    return d > 800 ? '#bd0026' :
           d > 400  ? '#f03b20' :
           d > 100  ? '#fd8d3c' :
           d > 50  ? '#fecc5c' :
           d > 20  ? '#ffffb2' :
                    '#ffffb2';
};

//// Highlight function to highligt the feature onhover
//function highlightFeature(e) {
//    var layer = e.target;
//
//    layer.setStyle({
//        weight: 5,
//        color: '#666',
//        dashArray: '',
//        fillOpacity: 0.7
//    });
//
//    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//        layer.bringToFront();
//    }
//};
//
//// Resets highlight function on mouseout
//function resetHighlight(e) {
//    layer.resetStyle(e.target);
//};
//// Calls functions for each geojson feature
//function onEachFeature(feature, layer) {
////    layer.options.zIndex = 10;
//    layer.on({
//        mouseover: highlightFeature,
//        mouseout: function(e)
//        
//        // Use this click function return information on the states
////        click: function (e) {
////            map.fitBounds(e.target.getBounds()
////            )}
//    });
//};


// Styles feature, from http://leafletjs.com/examples/choropleth/
function styleFeatures(feature) {
    return {
        fillColor: getColor(feature.properties.popdens90),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
};

// Builds attribute array for enrollment data
function processStateData(data) {
    var attributes = [];
    
    // properties of 1st feature in dataset
    var properties = data.features[0].properties;
    console.log("Properties: ", properties);
    
    // loop through all attributes & populate list
    for (var attribute in properties) {
        // only take attributes with population values, searching for header with "enroll" in the value
        if (attribute.indexOf("2010") > -1) {
            attributes.push(attribute);
        }
    }
    
    console.log(attributes);
    return attributes;
};


/* ##############################################
#### Functions for Proportioanl Symbol Data #####
###############################################*/


// calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
    // Scale factor to adjust symbol size evenly
    var scaleFactor = .01;
    // Area based on attribute value and scale factor
    var area = attValue * scaleFactor;
    // Radius calculated based on area
    var radius = Math.sqrt(area/Math.PI);
    return radius;
};

// Add circle markers for point features to the map
function pointToLayer(feature, latlng, attributes) {
    // symbolize current attribute in attributes array
    var attribute = attributes[0];
    
    // create marker options
    var options = {
        radius: 8,
        fillColor: "#25a7da",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
        pane: 'markers'   //Added to tag to the pane option in the showMap() function
    };        

    // for each feature, determine its value for the selected attribute
    var attValue = Number(feature.properties[attribute]);
    console.log("feature.properties[myAttribute]:", attValue);
    
    // Catches NaN values & sets them to 1
    if ( isNaN(attValue)) {
        attValue = 1;
    };
    
    // give each feature's circle marker a radius based on its attribute value
    options.radius = calcPropRadius(attValue);    
    console.log("options.radius: ", options.radius);

    // create circle marker layer
    var layer = L.circleMarker(latlng, options);
    
    // popupContent changed for hover tooltip

    var year = attribute.split("_")[1];
    var popupContent = "<p><b><i>University: </i></b>" + feature.properties.university + "</p><p><b><i>Enrollment in " + year + ": </i></b> " + feature.properties[attribute] + " students</p>";
    
    var panelContent= panelContent;
//    var popupContent = feature.properties.university;

    // bind the popup to the circle marker
    layer.bindPopup(popupContent, {
        offset: new L.Point(0,-options.radius),
        closeButton: false
    });

    // add event listeners for on hover
    layer.on({
       mouseover: function() {
           this.openPopup();
       },
       mouseout: function() {
           this.closePopup();
       },
       click: function() {
            $("#panel").html(panelContent);
       }
    });
    
    // return  circle marker to the L.geoJson pointToLayer option
    return layer;    
    };

var propGeojsonLayer;
function createPropSymbols(data, map, attributes) {   
    // create a Leaflet GeoJSON layer and adds it to the map
    propGeojsonLayer = L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return pointToLayer(feature, latlng, attributes);
        }
    }).addTo(map);
};



// Resize proportional symbols according to new attribute values
function updatePropSymbols(map, attribute) {
    map.eachLayer(function(layer) {
       // checks for existence of feature in layer & of a selected attribute in layer
       if (layer.feature && layer.feature.properties[attribute]) {
           // update layer style & popup   
            // access feature properties
           sliderval = $('.range-slider').val();

           // take value & access attribute text
           var year = attribute[sliderval].split("_")[1];
           
           var props = layer.feature.properties;
           
           // update each feature's radius based on new attribute vals
           var radius = calcPropRadius(props[attribute]);
           layer.setRadius(radius);

           // add formatted year value attribute to panel content string
           var year = attribute.split("_")[1];   
           
           // add "University" text to popup content string
           var popupContent = "<p><b><i> University:</i></b> " + props.university + "</p><p><i><b>" + year +" Enrollment: </i></b>" + props[attribute] + "</p>";
           
           console.log("popupContent: ",popupContent);

//           panelContent = "<p><b>Enrollment in " + year + ": </b> " + props[attribute] + " students</p>";            
           panelContent = popupContent;
           
           // Catches values with 0's or no values
           if ( isNaN(radius) || radius === 0 ) {
               console.log("found a NaN")
               // replace layer popup
               layer.bindPopup(popupContent, {
                   offset: new L.Point(0,-5)
               });
           } else {        
               // replace layer popup
               layer.bindPopup(popupContent, {
                   offset: new L.Point(0,-radius)
               });
                   
               // add event listeners for on hover
               layer.on({
                    click: function() {
                        $("#panel").html(panelContent);
                    }
                });                   
            };
        };
    });
};

// Adds Year of attribute data as slider is clicked through sequence
function addYearToSlider(map, attributes) {
    // get value of slider range 
    sliderval = $('.range-slider').val();
    
    // take value & access attribute text
    var year = attributes[sliderval].split("_")[1];
    
    // append attribute to dom
    $('#year').html(year + ' Enrollment');
;}

// create sequence controls
function createSequenceControls(map, attributes) {
    // append a range-slider to dom
    $('#sliderpanel').append('<input class="range-slider" type="range">');
    $('#sliderpanel').append('<button class="skip" id="reverse">Reverse</button>');
    $('#sliderpanel').append('<button class="skip" id="forward">Skip</button>');    
    $('#reverse').html('<img src="img/reverse.png">');
    $('#forward').html('<img src="img/forward.png">');
    
    // set slider attributes
    $('.range-slider').attr({
        max: 6,
        min: 0,
        value: 0,
        step: 1
    });
    
    
    // add click listener events for buttons
    $('.skip').click(function() {
        // get old index value
        var index = $('.range-slider').val();
        
        // increment/decrement depending on button clicked
        if ($(this).attr('id') == 'forward') {
            console.log(index)
            index++;      
            
            // if passed last attribute, wrap to beginning again // shorthand if-else: "if index is greater than 6, return 0, else return index"
            index = index > 6 ? 0 : index;    
  
            
        } else if ($(this).attr('id') == 'reverse') {         
            index--;  
            
            // if passed last attribute, wrap to beginning again // shorthand if-else: "if index is less than 0, return 6, else return index"
            index = index < 0 ? 6 : index;
        };
        
        // update slider with value
        $('.range-slider').val(index);
        
        // pass new attribute to update proportional symbol sizes
        updatePropSymbols(map, attributes[index]);          
        
        // add year above slider
        addYearToSlider(map, attributes);
    });
    
    // input listener for slider
    $('.range-slider').on('input', function() {
        // get new index value of sequence
        var index = $(this).val();
        console.log(index);
        
        // pass new attribute to update proportional symbol sizes
        updatePropSymbols(map, attributes[index]);

        addYearToSlider(map, attributes[index]);
    })
};

// Builds attribute array for enrollment data
function processEnrollmentData(data) {
    var attributes = [];
    
    // properties of 1st feature in dataset
    var properties = data.features[0].properties;
    //console.log("Properties: ", properties);
    
    // loop through all attributes & populate list
    for (var attribute in properties) {
        // only take attributes with enrollment values, searching for header with "fall" in the value
        if (attribute.indexOf("fall") > -1) {
            attributes.push(attribute);
        }
    }
    
    //console.log(attributes);
    return attributes;
};

// Import JSON data
function getAjaxData(map){
    // load the data
    $.ajax("data/university_enrollments_over10k.geojson", {
        dataType: "json",
        success: function(response) {
            // hold data attributes as an array
            var attributes = processEnrollmentData(response);
            createPropSymbols(response, map, attributes);
            createSequenceControls(map, attributes);
        }
    });
};
            
$(document).ready(showMap);