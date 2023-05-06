import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


const Charts = (props) => {
  

  
  function createLabels(){
    const labels = [];
    for (let i = 13; i >= 1; i--) {
      labels.push(`${i}mo`);
    }
    return labels
  }
  
  
  const data = {
    labels: createLabels(),
    datasets: [{
        label: 'Recent trends',
        data: props.data.map(dataPoint => dataPoint.priceUsd),
        tension: .01,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: 'rgba(0, 0, 0, 0.3)',
      }],
  };

  const options = {
    // maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={data} options={options} height={80} />
      <div className="currentPrice">Current price: ${props.value} </div>
      <button className="seeWallet" onClick={() => props.setWallets(!props.wallets)}>See your Coins</button>
    </div>
  );
};

export default Charts;
