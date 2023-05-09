import React from "react";
import "../App.css";



const Homepage = (props) => {
  const handleClick = () => {
    props.setWallets(false);
    props.setCurrentPage(true)
  };
  return (
    <>
      <header className="header">
        <h1 className="title">CryptidCrypto</h1>
        <h1
          className="home"
          onClick={handleClick}
        >
          Home
        </h1>
      </header>
    </>
  );
};

export default Homepage;
