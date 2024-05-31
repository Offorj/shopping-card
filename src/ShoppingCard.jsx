import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
<image></image>

function ShoppingCard() {
    return (
        <div className='w-3/4 h-screen bg-gray-400 flex justify-center items-center m-auto my-6 rounded-md'>
            <div className='w-2/5 h-[500px] bg-slate-300 rounded-l-lg pt-11 pl-20'>
                <h2 className=' m-auto text-4xl font-semibold text-gray-600'>Soft fleece <br /> cat sweater</h2>
                <span className='flex text-yellow-500  gap-3 pr-6 mt-4'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </span>
                <span className='flex items-center gap-3 mt-9'>
                    <p>Color</p>
                    <button className=' w-7 h-8 bg-slate-500 rounded-md ml-1'></button>
                    <button className=' w-5 h-5 bg-slate-600 rounded-md'></button>
                    <button  className=' w-5 h-5 bg-fuchsia-400 rounded-md'></button>
                    <button  className=' w-5 h-5 bg-yellow-400 rounded-md'></button>
                    <button  className=' w-5 h-5 bg-green-600 rounded-md'></button>
                </span>

                <span className='flex items-center gap-3 mt-4'>
                    <p>Size</p>
                    <button className=' w-7 h-8 border-2 border-gray-400 rounded-md ml-3.5'>S</button>
                    <button className=' w-5 h-5'>M</button>
                    <button  className=' w-5 h-5'>L</button>
                    <button  className=' w-5 h-5'>XL</button>
                </span>

                <h3 className='mt-4'>$14.99</h3>

                <span className='flex items-center mt-3 gap-4'>
                 <button className=' bg-slate-600 text-white rounded-md px-8 py-1'>Order now</button>
                 <button className=' bg-slate-300 border-2 px-2 py-1 border-gray-400 rounded-md'>
                 <FaHeart/>
                 </button>
                </span>

               
            </div>
            <div className='w-2/5 h-[500px] bg-white rounded-r-xl'>
            <img src="/images/71gyZKI5WUL._AC_SL1500_-removebg-preview.png" alt="" className=' w-3/4 m-auto mt-10' />
            <span className=' flex justify-center items-center gap-3 mt-4'>
                <button className=' w-4 h-4 bg-slate-600 rounded-md'></button>
                <button className=' w-3 h-3 bg-slate-300 rounded-md'></button>
                <button className=' w-3 h-3 bg-slate-300 rounded-md'></button>
                <button className=' w-3 h-3 bg-slate-300 rounded-md'></button>
                <button className=' w-3 h-3 bg-slate-300 rounded-md'></button>
            
            </span>
            </div>
        </div>
    );
}

export default ShoppingCard;
