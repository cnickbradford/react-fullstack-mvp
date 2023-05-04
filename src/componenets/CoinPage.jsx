import React, { useEffect } from "react";

const URL = "https://api.coincap.io/v2/assets/";


const CoinPage = (props) => {
  function getData(e) {
    const fetchData = async () => {
      const result = await fetch(URL + e.target.id);
      result.json().then((json) => {
        console.log(json.data.priceUsd);
      });
    };
    fetchData();
  }

  return (
    <>
      <button className="coinButton" id="bitcoin" onClick={getData}>
        BTC
      </button>
      <button className="coinButton" id="ethereum" onClick={getData}>
        ETH
      </button>
      <button className="coinButton" id="dogecoin" onClick={getData}>
        DOGE
      </button>
      <button className="coinButton" id="litecoin" onClick={getData}>
        LTC
      </button>
      <button className="coinButton" id="eos" onClick={getData}>
        EOS
      </button>
    </>
  );
};

export default CoinPage;
