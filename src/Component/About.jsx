import React, { useState } from 'react'
import img1 from '../assets/red_shoes1.png'
import img2 from '../assets/red_shoes2.png'
import img3 from '../assets/red_shoes3.png'
import img4 from '../assets/red_shoes4.png'
import "../css/All.css"


const About = () => {
    const [largeImage, setLargeImage] = useState(img1);

  const changeImage = (smallImageSrc) => {
    setLargeImage(smallImageSrc);
  }
  return (
    <div className='w-full mx-auto   py-6 px-10 md:px-4' id='about'>
          <h1 className='text-4xl font-bold text-center  text-[#c72092] cursor-pointer m-4 pb-5'>WEB <span className='text-[#6c14d0] text-4xl'>ABOUT</span></h1>
          <div className='grid md:grid-cols-2 gap-8 top-[45px]'>
            <div className='flex justify-around items-center gap-2'>
                <div className='flex flex-col justify-between gap-2 hover:opacity-100'>
                    <img className='h-[92px] border-[3px] border-solid bg-purple-700 hover:shadow-purple-700 rounded-2xl  p-30 shadow-lg' src={img1} alt="" onClick={() => changeImage(img1)}/>
                    <img className='h-[92px] border-[3px] border-solid bg-purple-700 hover:shadow-purple-700 rounded-2xl  p-30 shadow-lg' src={img2} alt="" onClick={() => changeImage(img2)}/>
                    <img className='h-[92px] border-[3px] border-solid bg-purple-700 hover:shadow-purple-700 rounded-2xl  p-30 shadow-lg' src={img3} alt="" onClick={() => changeImage(img3)}/>
                    <img className='h-[92px] border-[3px] border-solid bg-purple-700 hover:shadow-purple-700 rounded-2xl  p-30 shadow-lg' src={img4} alt="" onClick={() => changeImage(img4)}/>

                </div>
                <div>
                    <img className='w-[400px] h-[350px] border-[3px] border-solid border-purple-700 hover:shadow-purple-700 rounded-2xl  p-30 shadow-lg' src={largeImage} alt="" />
                </div>
            </div>
            <div>
                <p className='text-xl text-gray-600  w-[600px] font-bold text-center mt-[45px] ml-6 bg-gradient-to-r from-pink-600 to-purple-700 text-transparent bg-clip-text border-2 border-solid border-pink-600 rounded-3xl shadow-md hover:shadow-purple-700 md:p-30'>
                At Nike, we're more than just a sportswear brand; we're a symbol of inspiration and innovation. Our journey began with a simple mission: to bring out the athlete in everyone.
  For decades, we've pushed the boundaries of design and technology to elevate your performance. Our iconic Swoosh is a symbol of victory and excellence.
  From running and training to everyday style, we provide you with cutting-edge footwear, apparel, and equipment.
  Join us in celebrating the joy of sport and the power of movement. Nike - where sport meets style.
                </p>
            </div>

          </div>
          <div className='flex justify-between items-center'>

          <button className='bg-[#c72092] text-white w-[150px] mx-auto  my-6     font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>SHOP NOW</button>
          </div>
    </div>
  )
}

export default About