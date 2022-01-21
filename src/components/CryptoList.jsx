import React from 'react'
import '../CryptoList.css'
import Axios from 'axios'
import {useState,useEffect} from 'react'
function CryptoList() {

  const [cryptoList,setCryptoList]=useState()
   useEffect(() => {
     Axios.get("https://api.coinlore.net/api/tickers/?start=20&limit=20").then((response)=>{
       setCryptoList(response.data['data'])
       console.log(response.data['data']);
     })
     return () => {
     }
   }, [])

    return (  
    <div className='cryptoList'>
{/*           
          {cryptoList.map((coin)=>{
            return(
              <div>
                <h1>{coin.symbol}</h1>  
              </div>
            )
          })}
           */}
      </div>
       
    )
}

export default CryptoList
