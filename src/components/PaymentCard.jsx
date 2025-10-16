import React from 'react'

const PaymentCard = ({title1, title2, image, price, amount, onDelete}) => {
  return (
    <div className=" mx-6 h-28 pt-2 flex gap-2 mb-2 ">
      <div className=" w-24 h-24 ml-2 rounded-xl overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
      <div className=" leading-5 border border-solid flex-1">
        <h1 className=' font-bold '>{title1}</h1>
        <span className=''>{title2}</span>
      </div>
      <span className="bg-orange-200">${price} x {amount}</span>
      <button className='bg-white w-6 h-6' onClick={onDelete}><i className="fa-solid fa-trash-can text-[#EF2A39]"></i></button>
    </div>
  )
}

export default PaymentCard
