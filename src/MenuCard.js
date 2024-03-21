import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      {menuData.map((currElem) => {

        const {id, name, category, image, description } = currElem;  // array destructuring: no need of: currElem.id, currElem.category ...
        
        return (
          <div className="card">
            <div className="card-id" key={id}>
              {id}
            </div>
            <div className="category" key={category}>
              {category}
            </div>
            <h2 className="card-title" key={name}>
              {name}
            </h2>
            <div className="desciption" key={description}>
              {description}
            </div>
              <img key={image} src={image} alt="image" className="card-image" />
              <div><button>order</button></div>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
