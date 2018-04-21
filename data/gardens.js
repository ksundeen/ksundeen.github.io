/*
latitude,longitude,name,desc,color,source,precision

46.726197,-92.189332,"527 S 72nd Ave W, Duluth, MN","South 72nd Avenue West, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.794465,-92.102145,"323 E 7th St, Duluth, MN","East 7th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.80252,-92.095558,"1425 E 9th St, Duluth, MN","East 9th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.822003,-92.158016,"2716 W Arrowhead Rd, Duluth, MN","West Arrowhead Road, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.734534,-92.175486,"4441 Grand Ave, Duluth, MN","Grand Avenue, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.783027,-92.111216,"2001 W 4th St, Duluth, MN","West 4th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.660625,-92.267289,"1103 W 3rd St, Duluth, MN","West 3rd Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.771651,-92.12985,"916 W 6th St, Duluth, MN","West 6th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.810416,-92.083249,"827 E 8th St, Duluth, MN","East 8th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.660625,-92.267289,"3000 W 3rd St, Duluth, MN","West 3rd Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.804614,-92.071516,"1701 Jefferson St, Duluth, MN","Jefferson Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.810416,-92.083249,"306 E 8th St, Duluth, MN","East 8th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.79698,-92.094954,"321 E 5th St, Duluth, MN","East 5th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.710208,-92.206379,"28 Riverside Dr, Duluth, MN","Riverside Drive, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.789336,-92.104932,"701 W 5th St, Duluth, MN","West 5th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.781696,-92.108996,"401 W 2nd St, Duluth, MN","West 2nd Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.791937,-92.103503,"724 E 6th St, Duluth, MN","East 6th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.794465,-92.102145,"1031 E 7th St, Duluth, MN","East 7th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street
46.789063,-92.107246,"219 W 6th St, Duluth, MN","West 6th Street, Duluth, Saint Louis County, MN, US",,MapQuest Open,street

*/

var markers = [
    { "id": 1, "GardenLocation": "527 S 72nd Ave W, Duluth, MN", "latitude": 46.726197, "longitude": -92.189332 }, 
    { "id": 2, "GardenLocation": "323 E 7th St, Duluth, MN", "latitude": 46.794465, "longitude": -92.102145 }
    /*
    { "id": 3,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 4,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 5,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 6,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 7,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 8,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 9,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 10,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 11,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 12,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 },
    { "id": 13,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 14,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 }, 
    { "id": 15,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 },
    { "id": 16,  "city": "Duluth, MN", "latitude": 46.786671, "longitude": -92.100487 },
    { "id": 17,  "city": "Superior, WI", "latitude": 46.7207737, "longitude": -92.1040796 }, 
    { "id": 18,  "city": "Superior, WI", "latitude": 46.7207737, "longitude": -92.1040796 },    
    { "id": 19,  "city": "Grand Rapids, MN", "latitude": 47.24041, "longitude": -93.521255 }, 
    { "id": 20,  "city": "Cloquet, MN", "latitude": 46.721771, "longitude": -92.461182 }, 
    { "id": 21,  "city": "Two Harbors, MN", "latitude": 47.022713, "longitude": -91.670731 }, 
    { "id": 22,  "city": "Bayfield, WI", "latitude": 46.810768, "longitude": -90.818237 }, 
    { "id": 23,  "city": "Cook, MN", "latitude": 47.85149659, "longitude": -92.68716392 }, 
    { "id": 24,  "city": "Schroeder, MN", "latitude": 47.54329944, "longitude": -90.89834331 }, 
    { "id": 25,  "city": "Minneapolis, MN", "latitude": 44.97579197, "longitude": -93.27041152 }
    */
];