import React, { useState, useEffect } from "react";
import {
  getCategoryNamesForLocationAndBranch,
  getSubCategoryForCategory
} from "../common/api";
import { CustomCard, BreadCrumb } from "../components";

const Categories = ({ selectedLocation, selectedBranch, resetBranch }) => {
  const [type, setType] = useState("category");
  const [displayArray, setDisplayArray] = useState([]);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setType("category");
    setCategory("");
    let categoryArray = getCategoryNamesForLocationAndBranch(
      selectedLocation,
      selectedBranch
    );
    setMessage("");
    setDisplayArray(categoryArray);
  }, [selectedLocation, selectedBranch]);

  const resetCategory = () => {
    setCategory("");
    setType("category");
    let categoryArray = getCategoryNamesForLocationAndBranch(
      selectedLocation,
      selectedBranch
    );
    setMessage("");
    setDisplayArray(categoryArray);
  };

  const handleCardButtonClick = (e, categoryDetails) => {
    setDisplayArray([]);

    if (type !== "subCategory") {
      setCategory(e.target.value);
      setType("subCategory");
      let subCategoryArray = getSubCategoryForCategory(categoryDetails);
      setDisplayArray(subCategoryArray);
      setMessage("");
    } else {
      setMessage("Please Select Location");
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <BreadCrumb category={category} reset={resetCategory} />
        {message && <h3 className="text-center mt-5">{message}</h3>}
        <div className="row ">
          {displayArray &&
            displayArray.map((categoryObj) => {
              return (
                <CustomCard
                  key={categoryObj.name}
                  name={categoryObj.name}
                  img={categoryObj.image}
                  type={type}
                  details={categoryObj}
                  onCardButton={handleCardButtonClick}
                />
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
