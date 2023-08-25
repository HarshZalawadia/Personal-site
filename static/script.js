document.addEventListener("DOMContentLoaded", function () {
    function initMap() {
        const mapDiv = document.getElementById("map");
        const map = new google.maps.Map(mapDiv, {
            zoom: 14,
        });

        // Get the user's current location using geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // Set the map center to the user's current location
                    map.setCenter(userLatLng);

                    // Display markers using the user's current location
                    displayData(map, userLatLng);
                },
                function (error) {
                    console.error("Error getting user location:", error);
                    // Handle the error or set a default location if needed
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            // Handle the case where geolocation is not supported
        }
    }

    function displayData(map, userLatLng) {
        // Assuming your data is available in a global variable named 'data'
        for (let i = 0; i < data.length; i++) {
            const routeNumber = data[i][0];
            const routeDirection = data[i][1];
            createMarker(map, routeNumber, routeDirection, userLatLng);
        }
    }

    function createMarker(map, routeNumber, routeDirection, userLatLng) {
        // Create a marker on the map using routeNumber and routeDirection
        const marker = new google.maps.Marker({
            position: userLatLng,
            map: map,
            title: routeNumber + " - " + routeDirection,
        });
    }

    initMap();
});
