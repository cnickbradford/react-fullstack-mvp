import React, { useState, useEffect } from "react";
import "../App.css";
import NewCoin from "./NewCoin";



const Wallet = (props) => {
  const [WalletData, setWalletData] = useState([]);
  const [newWalletForm, setNewWalletForm] = useState(false);
  const [deleteMenu, setDeleteMenu] = useState(false);

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
  }, [WalletData]);

  const toggleDeleteMenu = () => {
    setDeleteMenu(!deleteMenu);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitted)
  }

  const handleDelete = async (e) => {
    let id = e.target.id;
    await fetch(`http://localhost:4000/api/wallet/${id}`, { method: "DELETE" });
    const updatedWallet = WalletData.filter((wallet) => wallet.id !== id);
    setWalletData(updatedWallet);
    setDeleteMenu(false);
  };

  return (
    <>
      <h2>Wallets:</h2>
      <ul className="walletList">
        {WalletData.map((Wallet) => (
          <React.Fragment key={`wallet-${Wallet.id}`}>
            <li>Name: {Wallet.name}</li>
            <li>Coin: {Wallet.coin}</li>
            <li>Quantity: {Wallet.amount}</li>
          </React.Fragment>
        ))}
      </ul>
      <button className="addNewCoin" onClick={() => setNewWalletForm(!newWalletForm)}>Add a New Coin</button>
      {newWalletForm && (
        <NewCoin/>
      )}
      <div className="deleteMenu">
        <button className="deleteMenuButton" onClick={toggleDeleteMenu}>
          Delete Wallet
        </button>
        {deleteMenu && (
          <ul className="deleteList">
            {WalletData.map((Wallet) => (
              <li
                onClick={handleDelete}
                id={Wallet.id}
                key={`delete-${Wallet.id}`}
              >
                {Wallet.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Wallet;

{
  /* <ul className="deleteMenu">
{WalletData.map((Wallet) =>(
    <li key={Wallet.id}>{Wallet.name}</li>
))}
</ul> */
}
