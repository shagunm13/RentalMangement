import { catelog } from "./catelog";

const catelogLocation = catelog.data.locations;

export const getLocations = () => {
  return catelogLocation;
};

export const getLocationByName = (locationName) => {
  return catelogLocation.find((locObj) => locObj.name === locationName);
};

export const getBranchesFromLocationObj = (location) => {
  return location && location.branches ? location.branches : [];
};

// getting all the categories for specific location
export const getCategoryNamesForLocationAndBranch = (
  locationName,
  branchName
) => {
  let categories = [];

  const location = getLocationByName(locationName);
  const branches = getBranchesFromLocationObj(location).filter(
    (branch) => !branchName || branch.name === branchName
  );

  branches.forEach((branch) => {
    categories = [
      ...categories,
      ...branch.categories.filter(
        (category) => !categories.find((cat) => cat.name === category.name)
      )
    ];
  });

  return categories;
};

// getting all the categories for specific branch
export const getCategoryNamesForBranch = (locationName, branchId) => {
  const categoryNames1 = catelogLocation
    .find((locObj) => locObj.name === locationName)
    .branches.find((branchObj) => branchObj.branch_id === branchId)
    .categories.map((catObj) => {
      return catObj;
    });

  return categoryNames1;
};

// getting all the sub-categories for specific category
export const getSubCategoryForCategory = (categoryDetails) => {
  return categoryDetails.subcategories.map(
    (subCategoryDetails) => subCategoryDetails
  );
};
