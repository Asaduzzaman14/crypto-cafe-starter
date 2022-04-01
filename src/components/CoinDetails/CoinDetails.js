import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState([])

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(coin => setCoin(coin))
    }, [id])

    return (
        <div className='px-4 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-centr'>
                <div >
                    <h1 className='text-3xl'> Genarel info:</h1>
                    <hr />
                    <h2>Name{coin.name}</h2>
                </div>

                <div>
                    <img src={coin.image?.large} alt="" />

                </div>
            </div>
        </div>
    );
};

export default CoinDetails;