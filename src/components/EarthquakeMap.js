import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Center map on a global view
const mapCenter = [20, 0];
const zoomLevel = 2;

// Set up marker icon for Leaflet
const earthquakeIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const EarthquakeMap = () => {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    // Fetch earthquake data from USGS API
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    )
      .then((response) => response.json())
      .then((data) => {
        // Transform the data to extract only necessary information
        const earthquakeData = data.features.map((quake) => ({
          id: quake.id,
          place: quake.properties.place,
          magnitude: quake.properties.mag,
          time: new Date(quake.properties.time).toLocaleString(),
          coordinates: [
            quake.geometry.coordinates[1],
            quake.geometry.coordinates[0],
          ],
        }));
        setEarthquakes(earthquakeData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full h-screen p-4">
      <MapContainer center={mapCenter} zoom={zoomLevel} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {earthquakes.map((quake) => (
          <Marker
            key={quake.id}
            position={quake.coordinates}
            icon={earthquakeIcon}
          >
            <Popup>
              <div>
                <h2 className="font-bold">Location: {quake.place}</h2>
                <p>Magnitude: {quake.magnitude}</p>
                <p>Time: {quake.time}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default EarthquakeMap;
