import React from 'react'

const Welcome = (props) => {
  return (
    <div>
        <h3 className="paragraph-header">Stay ahead of the trends</h3>
        <p className='paragraph'>
          Using CryptidCrypto, You can easily see and compare cryptocurrencies
          exchange rates in real time , and keep track of the coins you want to
          buy in our simulated wallet.
        </p>
        <button className='startButton' onClick={() => props.setCurrentPage(!props.currentPage)}>
            Get started
          </button>
    </div>
  )
}

export default Welcome;
