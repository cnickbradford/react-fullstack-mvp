import React, { useState } from 'react'
const coin = [
  { id: "bitcoin", name: "BTC" },
  { id: "ethereum", name: "ETH" },
  { id: "dogecoin", name: "DOGE" },
  { id: "litecoin", name: "LTC" },
  { id: "eos", name: "EOS" },
];



const NewCoin = () => {
  const [newCoin, setNewCoin] = useState('');
  const [quantity, setQuantity] = useState(1);
    

  const handleNewCoin =(e)=>{
    setNewCoin(e.target.value)
  }

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('form submitted');
   }

    return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='coin'>Select a coin to add</label>
        <select id='coins' value={newCoin} onChange={handleNewCoin}>    
        <option value="">---Select Coin---</option>
        {coin.map((coin) =>{
            <option key={`create-${coin.id}`} value={coin.name}>
                {coin.name}
            </option>
        })}
        </select>
        </form>
      
    </>
  )
}

export default NewCoin
