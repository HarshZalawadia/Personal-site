document.addEventListener("DOMContentLoaded", function () {
    // Function to initialize the map
    function initMap() {
        // Initialize the map
        const mapDiv = document.getElementById("map");
        const map = new google.maps.Map(mapDiv, {
            zoom: 14, // You can adjust the zoom level as needed
        });

        // Get the user's current location using the Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // Set the map center to the user's current location
                    map.setCenter(userLatLng);

                    // Call your displayData function here or perform other map-related actions
                    // Example: displayData(map, userLatLng);
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

// Handle form submission to read and display data
    document.getElementById("submit-button").addEventListener("click", function () {
        const fileInput = document.getElementById("data-file");
        const file = fileInput.files[0];

        if (file) {
            Papa.parse(file, {
                complete: function (result) {
                    const data = result.data;
                    displayData(data);
                }
            });
        }
    });

// Display data on the map
    function displayData(data) {
        const mapDiv = document.getElementById("map");
        const map = new google.maps.Map(mapDiv, {
            zoom: 14, // You can adjust the zoom level as needed
        });

        // Process data and create route markers and directions on the map
        for (let i = 0; i < data.length; i++) {
            const routeNumber = data[i][0];
            const routeDirection = data[i][1];

            // Use routeNumber and routeDirection to create markers or directions on the map
            // Example: createMarker(map, routeNumber, routeDirection);
        }
    }

});
