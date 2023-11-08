import React from 'react'
import bg from '../assets/bg1.png'
import shoes from '../assets/shoes.png'
import "./Hero.css"
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'
import "../css/All.css"

const Hero = () => {
  return (
    
    
    <div className='   bg-cover   bg-no-repeat p-5  w-full' 
    style={{backgroundImage:`url(${bg})`}} id='Hero'>

    <div className='w-full mx-auto  px-4 grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-between '>

        <div>
            <h1 className='text-5xl  w-[530px]   lg:text-7xl  font-mono text-gradient top-[20px] md:top-[45px]'>NIKE <br /> <span>Collection</span></h1>
            <p className='text-xl w-[530px]  mt-5 font-bold  top-[35px] md:top-[85px]'>Dive into the world of NIKE's latest collection, where form meets function. Elevate your performance and style with a range of cutting-edge athletic wear, designed to empower your every move. From running to training, discover excellence in every piece.</p>


        </div>
       
        </div>
        <div className='flex justify-between items-center '>
            <div className=''>
                <img className='w-[400px] md:w-[500px] lg:w-[550px] ml-5 mt-16' src={shoes} alt="" />
            </div>
            <div className='hidden xl:flex xl:flex-col justify-between gap-2'>
                      <BsFacebook/>
                      <BsTwitter/>
                      <BsInstagram/>
                      <BiLogoLinkedin/>

            </div>
        </div>

    </div>
    <div>
            <button  className='bg-[#c72092] md:ml-[500px] text-white w-[150px] mx-auto rounded-lg my-6 font-medium py-1 '>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Hero