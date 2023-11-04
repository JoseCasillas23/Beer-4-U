const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
function success(pos) {
const location_Obj = pos.coords;
const latitud = location_Obj.latitude;
const longitud = location_Obj.longitude;
console.log(latitud)
console.log(longitud)//Double 

}

function error(err) {
console.warn(`ERROR(${err.code}): ${err.message}`);
}

//Function that gets the object of location
function getLocation(){
    navigator.geolocation.getCurrentPosition(success, error, options);

}

