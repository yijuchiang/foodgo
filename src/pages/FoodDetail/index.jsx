import { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { SpicylineCheeseburger } from "@/utils/food-images";
import { useFoodData } from '@/Hooks/useFoodData';
import { useCartStore } from '@/store/useCartStore';
import { Spin, notification } from 'antd';
import { getImageSrc } from "@/utils/getImageSrc"


const FoodDetail = () => {
  const [amount, setAmount] = useState(1)
  const { foodData } = useFoodData()
  const { id } = useParams()
  const food = foodData.find((item) => item.id === Number(id))
  const setCart = useCartStore(state => state.addCart)
  const pageId = foodData.findIndex((item) => item.id === Number(id))
  const prevFood = foodData[pageId - 1]
  const nextFood = foodData[pageId + 1]
  const [api, contextHolder] = notification.useNotification();
  
  useEffect(() => {
  setAmount(1);
  }, [id]);

  const addCart = () => {
    const product = {
      id: new Date().getTime(),
      orderPrice: amount * food.price,
      amount,
      food
    }
    setCart(product)
    setAmount(1)
  }

  const openNotification = () => {
    api.open({
      message: 'Item added to your cart !!!',
      duration: 2,
      placement: 'bottom'
    });
  };

  const handleAddCart = () => {
    addCart()
    openNotification()
  }


  if (!food) return <Spin className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="large" />



  return (
    <>
      {contextHolder}
      {/* top */}
      <div className="flex justify-between items-center mb-12">
        {prevFood ? (
          <Link to={`/foodDetail/${prevFood.id}`}><i className="fa-solid fa-arrow-left w-7"></i></Link>
        ) : (
          <span className="w-7"></span>
        )}
        <img className="w-[280px]" src={getImageSrc(food?.image)} alt="" />
        {nextFood ? (
          <Link to={`/foodDetail/${nextFood.id}`}><i className="fa-solid fa-arrow-right w-7"></i></Link>
        ) : (
          <span className="w-7"></span>
        )}
      </div>
      <section>
        <h1 className="text-2xl font-bold mb-2">{food?.title1} {food?.title2}</h1>
        <div className="flex">
          <i className="fa-solid fa-star text-[#FFD43B]"></i>
          <span className="block text-[#808080] mb-5 ml-1 ">{food?.pop} - 26 mins</span>
        </div>
        <span className="block text-[#6A6A6A] leading-7 mb-7">{food?.desc}</span>
      </section>
      {/* choose */}
      <div className='h-16 flex justify-between items-center mb-16'>
        <img className="block w-40" src={SpicylineCheeseburger} alt="" />
        <div>
          <span className='block text-xs mb-1'>Portion</span>
          <div className="flex gap-5 items-center">
            <button className="w-10 h-10 bg-[#EF2A39] rounded-xl" onClick={() => setAmount(prev => Math.max(prev - 1, 1))}>
              <span className="text-white font-black">—</span>
            </button>
            {amount}
            <button className="bg-[#EF2A39] text-white rounded-xl w-10 h-10 inline-flex items-center justify-center" onClick={() => setAmount(prev => prev + 1)}><i className="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>
      {/* button */}
      <div className='flex justify-between items-center gap-3 h-16'>
        <span className="inline-block w-24 leading-[64px] text-center tracking-wider text-[#FFFFFF] bg-[#EF2A39] rounded-2xl">${food?.price}</span>
        <button className="w-60 h-full text-[#FFFFFF] bg-[#3C2F2F] rounded-2xl shadow-[0_9px_30px_rgba(0,0,0,0.25)]" onClick={handleAddCart}>Add to Cart</button>
      </div>
    </>
  )
}

export default FoodDetail