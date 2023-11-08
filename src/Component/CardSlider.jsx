import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({slides}) => {
    const settings ={
        dots: true,
        infinite :true,
        speed:700,
        slidesToShow:3,
        slidesToScroll:1
    }
  return (
    <div className='w-full m-auto py-16 '>
        <h1 className='text-4xl font-bold text-center  text-[#c72092] cursor-pointer pb-4'>Trending Items</h1>
        <Slider {...settings}>

        {slides?.map((i)=>{
            return(

                <div className='flex flex-col  items-center gap-2 p-2 '>
                    <div className='w-[400px] flex justify-center items-center z-100'>
                        <img src={i.image} alt="" />
                    </div>
                    <div className='text-xl font-semibold'>
                        <p>{i.p}</p>
                    </div>
                   </div>
                   
            )
        })}
        </Slider>
    </div>
  )
}

export default CardSlider