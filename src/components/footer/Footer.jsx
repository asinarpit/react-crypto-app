import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-full bg-gradient-to-r flex flex-col gap-10 bg-[#b3c4cc] p-5'>
            <div className='w-full max-w-7xl mt-20 mx-auto flex justify-between flex-wrap md:flex-nowrap  gap-5'>

                <div >
                    <img src="/zypto-logo.png" className='w-[200px]' alt="" />
                </div>

                <div className='flex text-xs font-semibold text-gray-600  md:text-sm flex-col gap-5 '>
                    <p>Parent company: Zypto SP ZOO,</p>
                    <p>VASP License number: RDWW-874</p>
                    <p>Zypto Pay operates in collaboration with local partners in different regions. Please consult our terms of service for more information.</p>

                </div>

                <div className='flex text-xs text-gray-600 font-semibold md:text-sm flex-col gap-5'>
                    <p>Please note that Zypto recently acquired FCF Pay and is currently rebranding said services to the Zypto brand and carrying out our migration plan to complete the transition.</p>
                    <p>Please consult <a className='text-[#005578] font-semibold' href="#"> FCFpay.com</a> for more information about FCF products and services.</p>
                </div>

            </div>

            <div className='mx-auto my-2 '>
                <code>&#169; 2023-2024 Arpit Singh </code>
            </div>






        </div>
    );
}

export default Footer;
