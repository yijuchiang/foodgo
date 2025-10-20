import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import PaymentCard from "@/components/PaymentCard"
import * as Images from "@/utils/food-images";
import { useCartStore } from "@/store/useCartStore";


const Payment = () => {
  const navigate = useNavigate()
  const { cart, removeCart } = useCartStore();

  const getImageSrc = (image) => {
    if (image.startsWith("http")) {
      return image; // 網路圖片
    }
    return Images[image]; // 本地圖片
  };
    
  const orderPrice = Number(cart.reduce((prev, item) => prev + item.orderPrice, 0).toFixed(2))
  const taxesPrice = Number((orderPrice * 0.01).toFixed(2))
  const totalPrice = Number((orderPrice + taxesPrice + 1.5).toFixed(2))

  return (
    <>
      <div className="flex justify-between ">
        <Link to='/'><i className="fa-solid fa-arrow-left w-7"></i></Link>
        <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
      </div>
      <p className="text-xl font-poppins text-[#EF2A39] pl-2 pt-8 mb-5">Order summary</p>
      {/* orderPrice detail */}
      <div className="mx-6 text-lg text-[#7D7D7D] flex flex-col leading-10">
        <div className="flex justify-between">
          <span>Order</span>
          <span className="tracking-wider">${orderPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span className="tracking-wider">${taxesPrice}</span>
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
          <span className="tracking-wider">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated delivery time:</span>
          <span className="tracking-wider">15-30mins</span>
        </div>
      </div>
      {/* orderItem */}
      <p className="text-xl font-poppins text-[#EF2A39] pl-2 pt-8 mb-5">Order Item</p>
      <main className="">
        {cart.length ? (
        cart.map((item) => 
        <PaymentCard key={item.id} title1={item.food.title1} title2={item.food.title2} image={getImageSrc(item.food.image)} price={item.food.price} amount={item.amount} onDelete={() => removeCart(item.id)}/>
        )) : (<div>你的購物車是空的唷!</div>)}
      </main>
      {/* totalPrice */}
      <div className="h-20 flex justify-between items-end">
        <div className="flex flex-col leading-6">
          <span className="text-[#7D7D7D]">Total price</span>
          <span className="text-[#EF2A39] text-4xl tracking-wider font-black">${totalPrice}</span>
        </div>
        <button className="w-52 h-16 text-[#FFFFFF] bg-[#3C2F2F] rounded-2xl" onClick={() => navigate(`/profile`)}>PAY NOW</button>
      </div>
    </>
  )
}

export default Payment
