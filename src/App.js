import './App.css'
import './components/CryptoList.css'
import Header from './components/Header.jsx'
import { useState, useEffect } from 'react'
import Axios from 'axios'

function App() {
  const [cryptoList, setCryptoList] = useState()
  useEffect(() => {
    Axios.get('https://api.coinlore.net/api/tickers/?start=20&limit=20').then(
      (response) => {
        setCryptoList(response.data['data'])
        //console.log(response.data['data'])
      },
    )
    return () => {}
  }, [])

  return (
    <>
      <Header />

      <div className="cryptoList">
        {cryptoList.map((coin) => {
          return (
            <div>
              <h1>{coin.symbol}</h1>
              <h1>{coin.id}</h1>
              <h1>{coin.name}</h1>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
