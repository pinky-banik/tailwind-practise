import React from 'react';
import img from "../images/cardImg.jpg"
const Card = () => {
    return (
        <div className=' h-screen flex justify-center items-center bg-gray-100'>
            <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center'>
                <img className='h-24 w-24 mx-auto rounded-full ring-4 ring-green-400 sm:m-2 hover:scale-110 duration-500' src={img} alt="" />
                <div className='text-center space-y-2 sm:text-left sm:m-2'>
                    <div>
                        <p className='text-lg text-black font-semibold'>my first tailwind card</p>
                        <p className='text-gray-500 font-bold'>sumit saha tutorial</p>
                    </div>
                    <button  className='btn-purple'>visit now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Card;