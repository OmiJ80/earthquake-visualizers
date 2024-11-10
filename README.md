# Earthquake Visualizer

This application visualizes recent earthquake data using React, Leaflet, and Tailwind CSS.

## Setup

- Clone the repository
- Run `npm install` to install dependencies
- Start the application with `npm start`

## Technologies Used
- **React** for building the UI
- **Leaflet** with `react-leaflet` for map integration
- **Tailwind CSS** for styling



**Earthquake Visualizer**
Earthquake Visualizer is a web application that allows users to view recent earthquake activity worldwide. This tool is especially valuable for students, researchers, and geography enthusiasts who want to explore seismic patterns using real-time data.

The application uses the USGS Earthquake API to fetch and display the latest earthquake data on an interactive map. Users can view details such as the location, magnitude, and time of each earthquake.

##Table of Contents

1.Features
2.Technologies Used
3.Installation and Setup
4.Usage
5.Deployment
6.Developer Notes

1.Features

Live Earthquake Data: Displays data on earthquakes from the past day, updated automatically.
Interactive Map: View earthquakes globally on an interactive map powered by Leaflet, with clickable markers that show details on each earthquake.
Magnitude-Based Icons: The application uses icons for quick visualization of earthquake locations, with color variations indicating different magnitudes.

2.Technologies Used

React: A JavaScript library for building user interfaces.
Leaflet & React-Leaflet: A popular library for interactive maps, integrated seamlessly with React.
Tailwind CSS: Utility-first CSS framework for rapid UI styling.
USGS Earthquake API: Provides up-to-date global earthquake information.

3.Installation and Setup

To run this application locally, follow these steps:

1.Initialize a React Project:
npx create-react-app earthquake-visualizer
cd earthquake-visualizer


2.Install dependencies:
npm install

3.Run the application:
npm start

4.View in the browser: Open http://localhost:3000 to view the app.

npm install
Run the application:

npm start
View in the browser: Open http://localhost:3000 to view the app.

4.Usage
When you launch the application:
The map will automatically load recent earthquake data and display it as markers.
Click on a marker to see more details about the earthquake, including its magnitude, location, and time.
To explore further, pan or zoom on the map for a closer look at regions with seismic activity.
Deployment
For deployment, this project can be easily set up on any free hosting platform that supports React, such as StackBlitz, Vercel, or Netlify.

5.Deploying on StackBlitz
Go to StackBlitz.
Create a new project and import your repository.
The app will be hosted online automatically and accessible via a shareable link.

6.Developer Notes
Data Fetching: Data is pulled from the USGS Earthquake API using the fetch function in the useEffect hook. It retrieves recent earthquake data (for the past day) in GeoJSON format.
State Management: The component’s earthquakes state is used to hold earthquake data for easy display and manipulation.
Map Integration: react-leaflet is used to create the interactive map component, and each earthquake is marked with a clickable marker.
Icon Customization: Earthquake markers use Leaflet’s icon component. You can further customize these icons based on earthquake magnitude by modifying the icon color or size, which helps to visually differentiate earthquake severity.