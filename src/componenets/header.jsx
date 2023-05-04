import React from "react";

const Homepage = (props) => {
  return (
    <>
      <header className="header">
        <h1 className="title">CryptidCrypto</h1>
        <h1
          className="home"
          onClick={() => props.setCurrentPage(!props.currentPage)}
        >
          Home
        </h1>
      </header>
    </>
  );
};

export default Homepage;
