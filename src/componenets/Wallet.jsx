import React, { useState, useEffect } from "react";
import '../App.css';

const Wallet = () => {
  const [WalletData, setWalletData] = useState([]);
  const [deleteMenu, setDeleteMenu] = useState(false)
  useEffect(() => {
    fetch("http://localhost:4000/api/wallet").then((response) =>
      response
        .json()
        .then((data) => {
          setWalletData(data);
        })
        .catch((error) => {
          console.error("Error fetching wallet data");
        })
    );
  }, []);

  const toggleDeleteMenu = () =>{
    setDeleteMenu(!deleteMenu)
  }

  return (
    <>
      <h2>Wallets:</h2>
      <ul className="walletList" >
        {WalletData.map((Wallet) => (
            <>
          <li key={Wallet.id}>Name: {Wallet.name}</li>
          <li>Coin: {Wallet.coin}</li>
          <li>Quantity: {Wallet.amount}</li>
          </>
        ))}
      </ul>
        <button className="deleteMenuButton" onClick={toggleDeleteMenu}>Delete Wallet
        {deleteMenu && (
            <>
            <ul className="deleteMenu">
                {WalletData.map((Wallet) =>(
                    <li key={Wallet.id}>{Wallet.name}</li>
                ))}
            </ul>
            </>
        )}
        </button>
    </>
  );
};

export default Wallet;



            // {/* {Wallet.name} {Wallet.coin} {Wallet.amount} {Wallet.amount} {Wallet.dateOfPurchase}