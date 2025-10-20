import React from 'react'

const PaymentCard = ({title1, title2, image, price, amount, onDelete}) => {
  return (
    <div className=" mx-6 h-28 pt-2 flex gap-2 mb-2 border-b border-dashed border-gray-500 ">
      <div className=" w-24 h-24 ml-2 rounded-xl overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
      <div className="flex w-72 pt-1">
        <div className=" leading-5  flex-1">
          <h1 className='font-bold'>{title1}</h1>
          <span className=''>{title2}</span>
        </div>
        <span className="">${price} x {amount}</span>
        <button className=' w-6 h-6 ml-2' onClick={onDelete}><i className="fa-solid fa-trash-can text-pink-500"></i></button>
      </div>
    </div>
  )
}

export default PaymentCard
