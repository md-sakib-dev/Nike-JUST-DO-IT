import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {Link}  from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'
import {FaCartArrowDown} from 'react-icons/fa'
import {BiSolidUser} from 'react-icons/bi'
import Nike from '../assets/Nike.jpg'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import bg from '../assets/bg2.jpg'

const Navbar = () => {
  const [nav,setNav]=useState(true)
  const handleNav =()=>{
    setNav(!nav)

  }
    return (
      

    <div className='bg-white w-full mx-auto  md:h-24 md:border-2 flex  justify-between items-center fixed top-0 Z-10'>
         
      
         
          
          <h1 className=' md:hidden  text-4xl font-bold text-center  text-[#c72092] cursor-pointer m-4 pb-5'>Shoe <span className='text-[#6c14d0] text-4xl underline'>s</span></h1>
            
             <div ><img className='hidden md:block w-[100px]' src={Nike} alt="" /></div>
             <div className='hidden md:flex justify-between gap-3'>
               
                <a className='text-gray-700 hover:text-pink-600 font-bold' href="#Hero">Home</a>
                <a className='text-gray-700 hover:text-pink-600 font-bold' href="#products">Products</a>
                <a className='text-gray-700 hover:text-pink-600 font-bold' href="#about">About</a>
                <a className='text-gray-700 hover:text-pink-600 font-bold' href="#review">Review</a>
                <a className='text-gray-700 hover:text-pink-600 font-bold' href="#services">Services</a>
                <a className='text-gray-700 hover:text-pink-600 font-bold' href="#contact">Contact</a>
             </div>
              
             <div className='hidden md:flex justify-between gap-2'>
             <AiFillHeart/>
             <FaCartArrowDown/>
             <BiSolidUser/>
             </div>
             
            
        <div onClick={handleNav} className='block md:hidden  mr-4'>
           {nav ? <FiMenu size={20}/>: <AiOutlineClose size={20} />}
          </div>
          
        <div className={nav ? 'fixed left-[-100%]' :'fixed left-0 top-0 w-[60%] h-full border-r border-b bg-white border-gray-400 ease-in-out duration-500'}>
          
          <div className='md:hidden relative text-4xl font-bold text-center  text-[#c72092] cursor-pointer m-4 pb-5 animate-bounce'><h1 >Shoe <span className='text-[#6c14d0] text-4xl underline'>s</span></h1></div>
          
        
        <div className='flex flex-col justify-between gap-3 font-bold'>
                <a className='p-4 border-b border-gray-700' href="#Hero">Home</a>
                <a className='p-4 border-b border-gray-700' href="#products">Products</a>
                <a className='p-4 border-b border-gray-700' href="#about">About</a>
                <a className='p-4 border-b border-gray-700' href="#review">Review</a>
                <a className='p-4' to="/services">Services</a>
             </div>
        <div className=' flex p-4 gap-2'>
             <BsInstagram size={20}/>
             <BsFacebook size={20}/>
             <BsTwitter size={20}/>
             </div>
             </div>
            
    </div>
  )
}

export default Navbar