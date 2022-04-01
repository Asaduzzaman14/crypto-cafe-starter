import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between bg-slate-200 py-3 px-5'>
            <div className='text-2xl'>Crypto Cafa</div>

            <div className='flex'>
                <div className='mr-3'>    <CustomLink to='/'>Home</CustomLink>               </div>
                <div className='mr-3'>    <CustomLink to='/coins'>Coins</CustomLink>        </div>
                <div className='mr-3'>    <CustomLink to='/coindetail/:id'>CoinsDetail</CustomLink>        </div>
                <div className='mr-3'>    <CustomLink to='/contact'>Contact</CustomLink>   </div>
            </div>

        </div>
    );
};

export default Header;