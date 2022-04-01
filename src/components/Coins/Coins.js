import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner'

const Coins = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoding] = useState(false)

    useEffect(() => {
        setLoding(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(coin => setCoins(coin))
        setLoding(false)
    }, [])

    return (
        <>
            {
                loading ? (<Spinner />) : (<div className='px-4 pt-20 mx-auto max-w-7xl md:px-2'>
                    <p className='text-center text-3xl font-bold text-gray'>Available crypto Currencies</p>
                    <p className='text-center my-3 text-2xl'>Total coins: {coins.length}</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
                        {
                            coins.map(cion => <CoinCard coin={cion} />)
                        }
                    </div>
                </div>)
            }
        </>

    );
};

export default Coins;