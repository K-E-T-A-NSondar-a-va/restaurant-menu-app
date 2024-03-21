import React from "react";

const NavBar = ({ filterItem, menuList }) => {
  return (
    <>
      {/* <nav className="navbar">
        <div>
          <button onClick={() => filterItem("breakfast")}>
            breakfast
          </button>
          <button onClick={() => filterItem("lunch")}>Lunch</button>
          <button onClick={() => filterItem("evening")}>Evening</button>
          <button onClick={() => filterItem("Dinner")}>Dinner</button>
          <button>All</button>
        </div>
      </nav>  */}

      <nav className="navbar">
        <div>
          {menuList.map((currElem) => {
            return (
              <button onClick={() => filterItem(currElem)}>{currElem}</button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
