import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import PaymentCard from "@/components/PaymentCard"

const Payment = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex justify-between ">
        <Link to='/'><i className="fa-solid fa-arrow-left w-7"></i></Link>
        <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
      </div>
      <p className="text-xl font-poppins text-[#EF2A39] pl-2 pt-8 mb-5">Order summary</p>
      {/* detail */}
      <div className="mx-6 text-lg text-[#7D7D7D] flex flex-col leading-10">
        <div className="flex justify-between">
          <span>Order</span>
          <span className="tracking-wider">$16.48</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span className="tracking-wider">$0.3</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery fees</span>
          <span className="tracking-wider">$1.5</span>
        </div>
        <hr className="border-[#7D7D7D]"/>
      </div>
      {/* totalPrice */}
      <div className="mx-6 mt-6 leading-10 mb-2">
        <div className="flex justify-between text-lg font-poppins ">
          <span>Total:</span>
          <span className="tracking-wider">$18.19</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated delivery time:</span>
          <span className="tracking-wider">15-30mins</span>
        </div>
      </div>
      {/* orderItem */}
      <p className="text-xl font-poppins text-[#EF2A39] pl-2 pt-8 mb-5">Order Item</p>
      <main className="">
        <PaymentCard></PaymentCard>
      </main>
      {/* pay */}
      <div className="h-20 flex justify-between items-end">
        <div className="flex flex-col leading-6">
          <span className="text-[#7D7D7D]">Total price</span>
          <span className="text-[#EF2A39] text-4xl tracking-wider font-black">$18.19</span>
        </div>
        <button className="w-52 h-16 text-[#FFFFFF] bg-[#3C2F2F] rounded-2xl" onClick={() => navigate(`/orderConfirmation`)}>Pay Now</button>
      </div>
    </>
  )
}

export default Payment
