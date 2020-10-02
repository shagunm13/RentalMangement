import React from "react";
import { getLocations } from "../common/api";
import "./style.css";
const NavBar = ({ selectedLocation, onLocationChange }) => {
  console.log(selectedLocation);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <span className="navbar-brand text-white ml-5">
          Rental Management System
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginRight: 100 }}
        >
          <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
            <li className="nav-item dropdown">
              <span className="nav-item text-white">Selected Location: </span>
              <span
                className="dropdown-toggle text-white ml-2"
                id="dropdownMenu1"
                data-toggle="dropdown"
              >
                {selectedLocation.toLowerCase()}
              </span>
              <ul
                className="dropdown-menu multi-level"
                role="menu"
                aria-labelledby="dropdownMenu"
              >
                {getLocations().map((locationObj) => {
                  if (locationObj.branches.length > 0)
                    return (
                      <li
                        className="dropdown-submenu"
                        key={locationObj.dealer_id}
                        value={locationObj.name}
                        onClick={(e) =>
                          onLocationChange(e, {
                            locationName: locationObj.name
                          })
                        }
                      >
                        <span className="dropdown-item" href="#">
                          {locationObj.name.toLowerCase()}
                        </span>
                        <ul className="dropdown-menu">
                          {locationObj.branches.map((branch) => {
                            return (
                              <li
                                className="dropdown-item"
                                key={branch.branch_id}
                                value={branch.name}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onLocationChange(e, {
                                    locationName: locationObj.name,
                                    branchName: branch.name
                                  });
                                }}
                              >
                                <span>{branch.name}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  return (
                    <li
                      className="dropdown-item"
                      key={locationObj.dealer_id}
                      value={locationObj.name}
                    >
                      {locationObj?.name.toLowerCase()}
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
