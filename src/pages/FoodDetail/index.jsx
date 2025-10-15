import { useState } from 'react';
import { useNavigate, Link, useParams} from 'react-router-dom'
import { SpicylineCheeseburger } from "@/utils/food-images"
import { useFoodData } from '@/Hooks/useFoodData'
import * as Images from "@/utils/food-images";


const FoodDetail = () => {
  const navigate = useNavigate()
  const [amount, setAmount] = useState(1)
  const { foodData } = useFoodData()
  const { id } = useParams()
  const food = foodData.find((item) => item.id === Number(id))

  const getImageSrc = (image) => {
    if (image.startsWith("http")) {
      return image; // 網路圖片
    }
    return Images[image]; // 本地圖片
  };
  

  if (!food) return <div>loading</div>

  return (
    <>
      {/* top */}
      <div className="flex justify-between items-center mb-12">
        <Link to='/'><i className="fa-solid fa-arrow-left w-7"></i></Link>
        <img className="w-[280px]" src={getImageSrc(food?.image)} alt="" />
        <button><i className="fa-solid fa-magnifying-glass w-5 h-5"></i></button>
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
        <button className="w-60 h-full text-[#FFFFFF] bg-[#3C2F2F] rounded-2xl shadow-[0_9px_30px_rgba(0,0,0,0.25)]" onClick={() => navigate(`/payment`)}>ORDER NOW</button>
      </div>
    </>
  )
}

export default FoodDetail