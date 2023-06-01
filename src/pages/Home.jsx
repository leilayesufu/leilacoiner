import React, { useEffect } from 'react'
import homeStore from '../stores/homeStore'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'


const Home = () => {
    const store= homeStore()


    React.useEffect(()=>{
      if(store.trending.length === 0)
        store.fetchCoins()
    },[])

  return (
    <div>
    <Header></Header>
    <header className='headerSearch'>
        <div className='width'>
        <h2>Search any crypto coin</h2>
        <div className='home-search-input'>
        <input type="text" value={store.query} onChange={store.setQuery} ></input>
        <i className="fa fa-spinner" aria-hidden="true" width="20px" ></i>
        </div>
        
        </div>
    </header>
    <div className='home-cryptos'>
      <div className='width'>
      <h2>{(store.searched? "Search Results": "Trending Coins")}</h2>
      <div className='trends'>
      {store.coins.map(coin => {
        return (
          <div className='home-crypto' key={coin.id}>
          <Link to = {`/${coin.id}`}>
            <span className='home-crypto-image'><img src={coin.image}></img></span>
            <span className='home-crypto-name'>{coin.name}</span>
            {(coin.priceBtc && (<span className='home-crypto-prices'>
              <span className='home-crypto-btc'>
                <img src="./bitcoin.webp"></img>
                {coin.priceBtc} BTC</span>
              <span className='home-crypto-usd'>({coin.priceUsd} USD)</span>
            </span>
      ))}
          </Link>
          </div>
        )
     })}
      </div>
      
      </div>
      
    </div>
     
    </div>
  )
}

export default Home;