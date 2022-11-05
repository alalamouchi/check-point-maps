import React from "react";
import "./App.css";


import ContactSection from "./components/ContactSection";
import MapSection from "./components/map/Map";

import "./app.css";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
}; 

const App = () => (
  <div className="App">
    <ContactSection />
    <MapSection location={location} zoomLevel={17} /> 
    {<Map />}
  </div>
);

export default App;
