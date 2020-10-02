import React, { useState } from "react";
import Categories from "./container/category";
import { NavBar } from "./components";

import "./styles.css";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState("ILLINOIS");
  const [selectedBranch, setSelectedBranch] = useState("");

  const handleLocationChange = (e, { locationName, branchName }) => {
    setSelectedLocation(locationName);
    setSelectedBranch(branchName);
  };

  const resetBranch = () => setSelectedBranch("");

  return (
    <div className="jumbotron-fluid">
      <NavBar
        selectedLocation={selectedLocation}
        onLocationChange={handleLocationChange}
      />
      <Categories
        selectedLocation={selectedLocation}
        selectedBranch={selectedBranch}
        resetBranch={resetBranch}
      />
    </div>
  );
};

export default App;
