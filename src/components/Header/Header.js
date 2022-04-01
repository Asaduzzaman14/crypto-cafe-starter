import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between bg-slate-200 py-3 px-8'>
            <Link to='/'><div className='text-4xl '>Crypto Cafa</div></Link>

            <div className='flex md:'>
                <div className='mr-3 text-xl'>    <CustomLink to='/'>Home</CustomLink>               </div>
                <div className='mr-3 text-xl'>    <CustomLink to='/coins'>Coins</CustomLink>        </div>
                <div className='mr-3 text-xl'>    <CustomLink to='/coindetail/:id'>CoinsDetail</CustomLink>        </div>
                <div className='mr-3 text-xl'>    <CustomLink to='/contact'>Contact</CustomLink>   </div>
            </div>

        </div>
    );
};

export default Header;