import { Link } from "react-router-dom"

const OrderFinish = () => {

  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center">
      <div className=" w-80 h-96 bg-white rounded-3xl flex flex-col justify-center items-center ">
        <i className="fa-solid fa-circle-check fa-5x text-[#EF2A39] mb-7"></i>
        <h1 className="text-3xl text-[#EF2A39] font-black mb-3">Success !</h1>
        <span className="text-[#808080] leading-6 text-center mb-14"> Your payment was successful. <br/> A receipt for this purchase has <br/> been sent to your email.</span>
        <Link to='/'>
          <button className="w-56 h-14 bg-[#EF2A39] rounded-2xl">
            <span className="text-white font-bold">Go Back</span>
          </button>        
        </Link>
      </div>
    </div>
  )
}

export default OrderFinish
