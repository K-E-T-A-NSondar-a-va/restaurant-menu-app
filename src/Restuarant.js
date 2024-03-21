import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";
import NavBar from "./NavBar";

// const uniqueList = Menu.map((currElem) => {
//   return currElem.category; // to get each categories
// })

// const uniqueList = [new Set (

//   Manu.map((currElem) => {
//     return currElem.category;
//   })

// )];  // it will return the set, but we need array.

// so, spread operator is used to do that:

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All"
];   

console.log("Unique List = "+uniqueList);

const Restuarant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);


  console.log(Menu);

  const filterItem = (category) => {
    
    if(category === "All") {
      console.log("all seleceted!!")
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });

    setMenuData(updatedList);

  };

  return (
    <>
      <NavBar filterItem = {filterItem} menuList = {menuList} />

      {/* passing the props to the MenuCard: */}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restuarant;
