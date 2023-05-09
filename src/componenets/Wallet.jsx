import React, { useState, useEffect } from "react";
import "../App.css";
import NewCoin from "./NewCoin";



const Wallet = (props) => {
  const [walletData, setWalletData] = useState([]);
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
          console.error("Error fetching wallet data", error);
        })
    );
  }, []);

  const toggleDeleteMenu = () => {
    setDeleteMenu(!deleteMenu);
  };


  const handleDelete = (id) => {
    // let id = e.target.id;
    fetch(`http://localhost:4000/api/wallet/${id}`, { method: "DELETE" });
    setWalletData(walletData.filter((wallet) => wallet.id !== id));
    setDeleteMenu(false);
  };

  return (
    <>
      <h2>Wallets:</h2>
      <ul className="walletList">
        {walletData.map((Wallet) => (
          <React.Fragment key={`wallet-${Wallet.id} `}>
            <li>Coin: {Wallet.coin}</li>
            <li>Quantity: {Wallet.amount}</li>
            <li>Price: ${Wallet.value}</li>
          </React.Fragment>
        ))}
      </ul>
      <button
        className="deleteMenuButton"
        onClick={() => setNewWalletForm(!newWalletForm)}
      >
        Add a New Coin
      </button>
      {newWalletForm && (
        <NewCoin walletData={walletData} setWalletData={setWalletData} />
      )}
      <div className="deleteMenu">
        <button className="deleteMenuButton" onClick={toggleDeleteMenu}>
          Delete Wallet
        </button>
        {deleteMenu && (
          <ul className="deleteList">
            {walletData.map((Wallet) => (
              <li
                onClick={() => handleDelete(Wallet.id)}
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
