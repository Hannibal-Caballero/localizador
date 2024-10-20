function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const datetime = now.toLocaleDateString('es-ES', options);
    document.getElementById('datetime').innerText = datetime;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').innerText = `Ubicación: Latitud ${latitude}, Longitud ${longitude}`;
        }, () => {
            document.getElementById('location').innerText = 'No se pudo obtener la ubicación.';
        });
    } else {
        document.getElementById('location').innerText = 'Geolocalización no soportada.';
    }
}

// Actualiza la hora y la fecha cada segundo
setInterval(updateDateTime, 1000);

// Llama a la función para obtener la ubicación
getLocation();

// Llama a la función de inmediato para mostrar la hora inicialmente.
updateDateTime();
