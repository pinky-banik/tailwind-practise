import React from 'react';
import img from "../images/cardImg.jpg"
const Home = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
            <img src={img} alt="" />
            <div>
                <div>
                    <p>This is my first tailwind css card</p>
                    <p>sumit saha tutorial</p>
                </div>
                <button>visit now</button>
            </div>
            </div>
        </div>
    );
};

export default Home;