import { useState } from "react";
import Homepage from "./componenets/header";
import Welcome from "./componenets/Welcome";
import CoinPage from "./componenets/CoinPage";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(true);

  return (
    <>
      <Homepage currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage && 
        <Welcome currentPage={currentPage} setCurrentPage={setCurrentPage} />
      }
      {!currentPage && <CoinPage />}
    </>
  );
};

export default App;
