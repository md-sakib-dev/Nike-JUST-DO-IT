import React from 'react'

const Shoeitem = ({name,image,price}) => {
  return (
    <div>
        <div>
            <img src={image} alt="" />
        </div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default Shoeitem