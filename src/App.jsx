import { useState } from "react";
import Homepage from "./componenets/header";
import Welcome from "./componenets/Welcome";
import CoinPage from "./componenets/CoinPage";
import Charts from "./componenets/Charts";
import "./App.css";


//TODO 

const App = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const [coinData, setCoinData] = useState(null);
  const [currentCoin, setCurrentCoin] = useState(null);
  const [wallets, setWallets] = useState(false);

  return (
    <>
      <Homepage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        coinData={coinData}
        setCoinData={setCoinData}
      />
      {currentPage && (
        <Welcome currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {!currentPage && (
        <CoinPage
          coinData={coinData}
          setCoinData={setCoinData}
          currentCoin={currentCoin}
          setCurrentCoin={setCurrentCoin}
          wallets={wallets}
          setWallets={setWallets}
        />
      )}
    </>
  );
};

export default App;
