import React from 'react'
import "../css/All.css"

const Review = ({Reviewlist}) => {
  return (
    <div className='w-full mx-auto py-6 px-10 md:px-4' id='review'>
          <h1 className='text-4xl font-bold text-center  text-[#c72092] cursor-pointer m-4 pb-5'>CUSTOMER <span className='text-[#6c14d0] text-4xl'>REVIEW</span></h1>
           <div className='grid  md:grid-cols-3 gap-4 top-[40px] px-32 md:px-10'>
            {Reviewlist?.map((item,index)=>{
                return(
                    <div key={index} className='flex flex-col justify-between'>

                    <div  className='flex justify-arround items-center '>
                        <img className='w-[60px] h-[60px] rounded-full  m-5 ' src={item.image} alt="" />
                        <h1 className=' text-xl font-bold '>{item.name}</h1>

                    </div>
                    <p className=' text-gray-600'>{item.text}</p>
                    </div>
                    
                )
                
            })}

           </div>
    </div>
  )
}

export default Review