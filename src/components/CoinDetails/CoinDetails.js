import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState([])
    console.log(coin);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(coin => setCoin(coin))
    }, [id])

    return (
        <div className='h-{80vh} px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-centr'>
                <div >
                    <h1 className='text-3xl'> Genarel info:</h1>
                    <hr />
                    <h2>Coin name{coin.name}</h2>
                    <h2>market cap rank:{coin.market_cap_rank}</h2>
                    <h2>Origin{coin.country_origin ? coin.country_origin : 'Not found'}</h2>
                    <h2>Coin name{coin.name}</h2>


                    <h1 className='text-3xl'> Scores:</h1>
                    <hr />
                    <h2>Community Score :{coin.community_score}</h2>
                    <h2>Developer Score:{coin.market_cap_rank}</h2>
                    <h2>Liquidity Score:{coin.country_origin ? coin.country_origin : 'Not found'}</h2>
                    <h2>Public Interest Score:{coin.public_interest_score}</h2>
                </div>

                <div>
                    <img src={coin.image?.large} alt="" />

                </div>
            </div>
        </div>
    );
};

export default CoinDetails;