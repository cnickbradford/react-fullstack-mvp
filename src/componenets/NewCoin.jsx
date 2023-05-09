import React, { useState, useEffect } from "react";
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
  const [isInitialPrice, setIsInitialPrice] = useState(true);
  const URL = "https://api.coincap.io/v2/assets/";

  useEffect(() => {
    if (!isInitialPrice) {
      handleSubmit();
    }
  }, [price]);

  const handleNewCoin = (e) => {
    setNewCoin(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const getPrice = async (e) => {
    e.preventDefault();
    const result = await fetch(URL + newCoin);
    result.json().then((json) => {
      let updatedPrice = json.data.priceUsd * quantity;
      setIsInitialPrice(false);
      setPrice(updatedPrice);
    });
  };

  const handleSubmit = async () => {
    fetch(`http://localhost:4000/api/wallet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCoin,
        coin: newCoin,
        amount: quantity,
        value: price,
        dateOfPurchase: null,
      }),
    })
      .then((response) =>
        response.json().then((data) => {
          props.setWalletData(data);
        })
      )
      .catch((error) => {
        console.error("Error adding coin to wallet", error);
      });
  };

  return (
    <>
      <form onSubmit={getPrice}>
        <label htmlFor="coin">Select a coin to add</label>
        <select id="coins" value={newCoin} onChange={handleNewCoin}>
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
        <button type="submit">Add Coin</button>
      </form>
    </>
  );
};

export default NewCoin;
