import React from "react";

const CustomCard = ({ name, img, onCardButton, details, type }) => {
  return (
    <div className="col-md-3 col-sm-12 ">
      <div className="card  mb-3 text-center">
        <img
          className="card-img-top"
          src={img ? `/asset/${type}/${img}` : `/asset/${type}/ImgNotFound.png`}
          alt={name}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => onCardButton(e, details)}
            value={name}
          >
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
