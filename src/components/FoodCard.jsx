import React from 'react'

const FoodCard = ({title1, title2, image, pop, onClick}) => {
  return (
    <div className="h-56 rounded-3xl shadow-[0_6px_17px_rgba(0,0,0,0.13)] relative cursor-pointer" onClick={onClick}>
      <img className="w-28 h-32 mx-auto" src={image} alt="" />
      <div className='ml-3 text-base mb-2'>
        <h1 className='block font-bold'>{title1}</h1>
        <span className=''>{title2}</span>
      </div>
      <div className='w-11 h-5 ml-3 flex items-center justify-center'>
        <i className="fa-solid fa-star text-[#FFD43B]"></i>
        <span className='ml-2'>{pop}</span>
      </div>
      <i className="fa-regular fa-heart absolute bottom-4 right-3"></i>
    </div>
  )
}

export default FoodCard