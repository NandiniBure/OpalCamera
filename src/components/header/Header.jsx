import "./header.css";
import React from "react";
import Banner from "../Banner/Banner";
import ClientHeaderLogic from "../clientHeader/ClientHeader"; 

function Header({ data, setComponentVisible, isComponentVisible }) {
  return (
    <div className="header">
      <ClientHeaderLogic
       data={data}
       setComponentVisible={setComponentVisible}
       isComponentVisible={isComponentVisible} />
      <Banner />
    </div>
  );
}

export default Header;
