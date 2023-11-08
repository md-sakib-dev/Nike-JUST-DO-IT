import React from 'react'
import logo from '../assets/logo.png'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full h-auto mx-auto py-16'>
        <footer className="bg-gray-900 text-gray-300 py-12 ">
  <div className="container mx-auto flex flex-wrap justify-between items-start">
   
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
    <div ><img className='hidden md:block w-[150px] pb-6' src={logo} alt="" /></div>
      <p className="text-sm">
      Elevate your game with Nike's cutting-edge sportswear and footwear, designed for style, performance, and unbeatable comfort. Experience excellence today!
      </p>
    </div>
    
    
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="text-sm">
        <li><a href="#Hero" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </div>
    
    
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="text-sm">House:365, NatunBazar,Dhaka City</p>
      <p className="text-sm">mahbubalamsakib007@gmail.com</p>
      <p className="text-sm">(880) 1537-506184</p>
    </div>
    
   
    <div className="w-full md:w-1/2 lg:w-1/4">
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
            <BsInstagram size={20}/>
             <BsFacebook size={20}/>
             <BsTwitter size={20}/>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer