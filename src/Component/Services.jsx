import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import truck from '../assets/truck1.png'
import rotate from '../assets/rotate.png'
import headset from '../assets/headset.jpg'
import "../css/All.css"

const Services = () => {
  return (
    <div className='w-full mx-auto py-10 px-20 md:px-10' id='services'>
         <h1 className='text-4xl font-bold text-center  text-[#c72092] cursor-pointer m-4 pb-5'>OUR <span className='text-[#6c14d0] text-4xl'>SERVICES</span></h1>
         <div className='grid md:grid-cols-3 gap-9 items-center'>
            <div className='flex flex-col justify-between'>
              <img className='w-[200px]' src={truck} alt="" />
            <h1 className='font-bold'>Fast Delivery</h1>
            <p>Experience lightning-fast delivery at your fingertips. Get your orders swiftly with our rapid and reliable delivery service.</p>
            </div>
            <div className='flex flex-col justify-between'>
              <img className='w-[200px]' src={rotate} alt="" />
            <h1 className='font-bold'>10 Days Replacement</h1>
            <p>Enjoy peace of mind with our 10-day replacement guarantee. If you're not satisfied, we'll replace your product hassle-free.</p>
            </div>
            <div className='flex flex-col justify-between'>
              <img className='w-[200px] ' src={headset} alt="" />
            <h1 className='font-bold'>24 x 7 Support</h1>
            <p>Experience peace of mind with our round-the-clock support. We're here 24/7 to assist you, ensuring your needs are met anytime.</p>
            </div>

         </div>

    </div>
  )
}

export default Services