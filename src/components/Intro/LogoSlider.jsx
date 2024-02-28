import React from 'react';
import Marquee from 'react-fast-marquee';


const LogoSlider = () => {
    return (

        <Marquee  className='overflow-hidden'  autoFill="true" gradient="true">
            <div className='w-[200px]  h-[80px] pr-10'>
                <img className='w-full h-full object-contain' src="/Banxa.svg" alt="" />

            </div>

            <div className='w-[200px] my-2 h-[80px] pr-10'>
                <img className='w-full h-full object-contain' src="/Coinify.svg" alt="" />
            </div>

            <div className='w-[200px] my-2 h-[80px] pr-10'>
                <img className='w-full h-full object-contain' src="/Coinmarketcap.svg" alt="" />
            </div>

            <div className='w-[200px] my-2 h-[80px] pr-10'>
                <img className='w-full h-full object-contain' src="/GateIO.svg" alt="" />
            </div>

            <div className='w-[200px] my-2 h-[80px] pr-10'>
                <img className='w-full h-full object-contain' src="/PancakeSwap.svg" alt="" />

            </div>

            <div className='w-[200px] my-2 h-[80px] pr-10'>
                <img className='w-full h-full object-contain' src="/Uniswap.svg" alt="" />

            </div>


            <div className='w-[200px] my-2 h-[80px] pr-10'>
                <img className='w-full h-full object-contain' src="/Binance.svg" alt="" />

            </div>

        </Marquee>



    );
}

export default LogoSlider;
