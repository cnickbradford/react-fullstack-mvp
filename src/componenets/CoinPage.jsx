import React, { useEffect } from "react";
import { useState } from "react";
import Charts from "./Charts";
import Wallet from "./Wallet";
import "../App.css";

const URL = "https://api.coincap.io/v2/assets/";
//https://api.coincap.io/v2/assets/bitcoin/history?interval=d1

const CoinPage = (props) => {
  function getData(e) {
    const fetchPrice = async () => {
      const result = await fetch(URL + e.target.id);
      result.json().then((json) => {
        props.setCurrentCoin(json.data.priceUsd);
        //console.log(json.data.priceUsd);
      });
    };

    const fetchData = async () => {
      props.setWallets(false)
      const result = await fetch(URL + e.target.id + "/history?interval=d1");
      result.json().then((json) => {
        let values = json.data;
        let data = [];
        for (let i = 0; i < values.length; i++) {
          if (i % 29 === 0) {
            data.push(values[i]);
          }
        }
        props.setCoinData(data);
        // console.log(data)
      });
    };
    fetchPrice();
    fetchData();
  }

  return (
    <>
      <button className="deleteMenuButton" id="bitcoin" onClick={getData}>
        BTC
      </button>
      <button className="deleteMenuButton" id="ethereum" onClick={getData}>
        ETH
      </button>
      <button className="deleteMenuButton" id="dogecoin" onClick={getData}>
        DOGE
      </button>
      <button className="deleteMenuButton" id="litecoin" onClick={getData}>
        LTC
      </button>
      <button className="deleteMenuButton" id="eos" onClick={getData}>
        EOS
      </button>
      {props.coinData && !props.wallets && (
        <Charts
          data={props.coinData}
          value={props.currentCoin}
          wallets={props.wallets}
          setWallets={props.setWallets}
        />
      )}
      {props.wallets && (
        <Wallet wallets={props.wallets} setWallets={props.setWallets} />
      )}
    </>
  );
};

export default CoinPage;
