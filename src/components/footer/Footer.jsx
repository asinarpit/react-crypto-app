import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-full relative bg-gradient-to-r  flex flex-wrap bg-[#b3c4cc]'>
            <div className='w-full max-w-7xl mt-20 mx-auto grid grid-cols-3 gap-5 place-items-start md:place-items-center p-5'>

                <div>
                    <img src="/zypto-logo.png" className='w-[200px]' alt="" />
                </div>

                <div className='flex text-sm md:text-base flex-col gap-5'>
                    <p>Parent company: Zypto SP ZOO,</p>
                    <p>VASP License number: RDWW-874</p>
                    <p>Zypto Pay operates in collaboration with local partners in different regions. Please consult our terms of service for more information.</p>

                </div>

                <div  className='flex text-sm md:text-base flex-col gap-5'>
                    <p>Please note that Zypto recently acquired FCF Pay and is currently rebranding said services to the Zypto brand and carrying out our migration plan to complete the transition.</p>
                    <p>Please consult <a className='text-[#005578] font-semibold' href="#"> FCFpay.com</a> for more information about FCF products and services.</p>
                </div>

            </div>

            <div className='w-full h-[50px] absolute bottom-0 left-0 flex justify-center items-center'>
                <code>&#169; 2023-2024 Arpit Singh </code>
                </div>

                




        </div>
    );
}

export default Footer;
