import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';


const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState([])
    const [loading, setLoading] = useState(false)
    // console.log(coin);

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(coin => setCoin(coin))
        setLoading(false)
    }, [id])


    return (
        <>
            {
                loading ? (<Spinner />) : (<div className='h-{80vh} px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                    <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-centr'>
                        <div className='order-2 md:-order-1'>
                            <h1 className='text-3xl mb-2'> Genarel info:</h1>
                            <hr />
                            <p className='text-xl'>Coin name:{coin.name}</p>
                            <p className='text-xl'>market cap rank:{coin.market_cap_rank}</p>
                            <p className='text-xl'>Origin:{coin.country_origin ? coin.country_origin : 'Not found'}</p>
                            <p className='text-xl'>Coin name:{coin.name}</p>


                            <h1 className='text-3xl mt-4 mb-2'> Scores:</h1>
                            <hr />
                            <p className='text-xl'>Community Score :{coin.community_score}</p>
                            <p className='text-xl'>Developer Score:{coin.market_cap_rank}</p>
                            <p className='text-xl'>Liquidity Score:{coin.country_origin ? coin.country_origin : 'Not found'}</p>
                            <p className='text-xl'>Public Interest Score:{coin.public_interest_score}</p>
                        </div>

                        <div>
                            <img src={coin.image?.large} alt="" />

                        </div>
                    </div>
                </div>)
            }
        </>

    );
};

export default CoinDetails;