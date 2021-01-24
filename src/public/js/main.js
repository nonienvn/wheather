const map = L.map('map-template').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    console.log(e);
    const cords = [e.latlng.lat, e.latlng.lng]
    
    L.marker(cords).addTo(map).bindPopup('you are here')
    .openPopup();
    
    
     
    });
   
    map.on('click', function(ev){
      var latlng = map.mouseEventToLatLng(ev.originalEvent);
      console.log(latlng.lat + ', ' + latlng.lng);
      const lat = latlng.lat;
       const lng = latlng.lng;
       
      




       const params = 'windSpeed';
       
       fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
         headers: {
            // Get your key by signing up.
           'Authorization': '4aefafde-5d0b-11eb-8ed6-0242ac130002-4aefb060-5d0b-11eb-8ed6-0242ac130002'
         }
       }).then((response) => response.json()).then(data => {
        const wind = data.hours[0].windSpeed.noaa
         console.log(data.hours[0].windSpeed.noaa)

         const datato = {
          latitude: lat,
          longitute: lng,
          windSpeed: wind
 
        }
 
        fetch("/api/location",
        {
    method: "POST",
    body:  JSON.stringify(datato)
    }).then(function(data){ alert( JSON.stringify( data ) ) })
        
 
        
 
         
       
          
       });

       
    });
