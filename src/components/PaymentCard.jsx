

const PaymentCard = ({title1, title2, image,}) => {
  return (
    <div className="bg-pink-500 mx-6 h-28 pt-2 flex gap-2 mb-2 ">
      <div className="bg-blue-400 w-24 h-24 ml-2 rounded-xl">
        <img className="object-cover" src={image} alt="" />
      </div>
      <div className=" bg-yellow-100 leading-5 border border-solid flex-1">
        <h1 className=' font-bold '>eee</h1>
        <span className=''>yyy</span>
      </div>
      <span className="bg-orange-200">$12 x 1</span>
      <button className='bg-white w-6 h-6'><i className="fa-solid fa-trash-can text-[#EF2A39]"></i></button>
    </div>
  )
}

export default PaymentCard
