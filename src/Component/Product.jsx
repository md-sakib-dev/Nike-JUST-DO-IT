import React from 'react'
// import {Shoelist} from '../Helper/Shoelist'
import "../css/All.css"

const Product = ({ Shoelist}) => {
  return (
    <div className='w-full mx-auto py-4' id='products'>
             <div>
                <h1 className='text-4xl font-bold text-center  text-[#c72092] cursor-pointer'>OUR PRODUCTS</h1>
             </div>
         <div className='grid md:grid-cols-4 gap-4 top-[40px] px-32 md:px-10'>
              { Shoelist ?.map((item,index)=>{
                return(
                    <div key={index} className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'> 
                    <div className='flex flex-col gap-3'>
                        <img src={item?.image} alt="" /> 
                        <div className='text-center'>
                            <h1>{item?.name}</h1>
                            <p>{item?.price}</p>
                            <button className='w-[200px] mx-auto rounded-md my-4 p-2 bg-[#c72092] text-white'>ADD to CART</button>

                        </div>

                    </div>

                    </div>
                )
              })}
         </div>
         
         </div>
         )
            
}

export default Product