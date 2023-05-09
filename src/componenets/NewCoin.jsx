import React, { useState, useEffect } from "react";
import "../App.css";
import e from "cors";

const coin = [
  { id: "bitcoin", name: "BTC" },
  { id: "ethereum", name: "ETH" },
  { id: "dogecoin", name: "DOGE" },
  { id: "litecoin", name: "LTC" },
  { id: "eos", name: "EOS" },
];

const NewCoin = (props) => {
  const [newCoin, setNewCoin] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const URL = "https://api.coincap.io/v2/assets/";

  // useEffect(() => {
  //   if (!isInitialPrice) {
  //     handleSubmit();
  //   }
  // }, [price]);

  const handleNewCoin = (e) => {
    setNewCoin(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault()
      const result = await fetch(URL + newCoin);
      const data = await result.json()
        const updatedPrice = (data.data.priceUsd * quantity);
        console.log(data.data.priceUsd)
        // setIsInitialPrice(false);
      //  setPrice(updatedPrice);
    fetch(`http://localhost:4000/api/wallet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCoin,
        coin: newCoin,
        amount: quantity,
        value: updatedPrice,
        dateOfPurchase: null,
      }),
    })
      .then((response) =>
        response.json().then((data) => {
          props.setWalletData([...props.walletData,...data]);
        })
      )
      .catch((error) => {
        console.error("Error adding coin to wallet", error);
      });
  };

  return (
    <>
      <form>
        <label htmlFor="coin">Select a coin to add</label>
        <select
          id="coins"
          value={newCoin}
          className="deleteMenuButton"
          onChange={handleNewCoin}
        >
          <option value="">---Select Coin---</option>
          {coin.map((coin) => (
            <option key={`create-${coin.id}`} value={coin.id}>
              {coin.name}
            </option>
          ))}
          ;
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantity}
        />
        <button className="deleteMenuButton" onClick={handleSubmit}>
          Add Coin
        </button>
      </form>
    </>
  );
};

export default NewCoin;
