import React from "react";

const BreadCrumb = ({ reset, category }) => {
  return (
    <React.Fragment>
      <div className="mt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <button type="button" className="btn btn-link" onClick={reset}>
                Equipment Catelog
              </button>
            </li>
            {category && (
              <li className="breadcrumb-item active" aria-current="page">
                <span className="btn">{category}</span>
              </li>
            )}
          </ol>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default BreadCrumb;
