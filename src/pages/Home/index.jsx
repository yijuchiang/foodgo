import { useNavigate } from 'react-router-dom'
import FoodCard from '@/components/FoodCard'
import { SettingsSliders, Cheeseburger } from "@/utils/food-images"
import axios from 'axios'

const foodCardData = [
  {
    id: 1,
    image: Cheeseburger,
    title1: 'Cheeseburger',
    title2: 'WendyBurger',
    pop: 4.9
  },
  {
    id: 2,
    image: Cheeseburger,
    title1: 'Cheeseburger',
    title2: 'WendyBurger',
    pop: 4.9
  },
  {
    id: 3,
    image: Cheeseburger,
    title1: 'Cheeseburger',
    title2: 'WendyBurger',
    pop: 4.9
  },
  {
    id: 4,
    image: Cheeseburger,
    title1: 'Cheeseburger',
    title2: 'WendyBurger',
    pop: 4.9
  },
]


const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <search>
        <div className="flex gap-2 items-center mb-10">
          <div className="relative flex items-center flex-1 gap-1 rounded-2xl shadow">
            <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-4 "></i>
            <input className="py-4 flex-1 rounded-2xl pl-12 focus:outline-0 " type="text" placeholder="Search"/>
          </div>
          <button className="w-14 h-14 relative bg-[#EF2A39] rounded-2xl flex justify-center items-center">
            <img className="w-6 aspect-square" src={SettingsSliders} alt="" />
          </button>
        </div>
      </search>
      <nav>
        <div className="flex justify-around items-center h-12 mb-10 overflow-x-auto gap-3">
          <div className="h-full px-7 flex items-center bg-[#EF2A39] text-white rounded-2xl shadow">All</div>
          <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">HamBurger</div>
          <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Salad</div>
          <div className="h-full px-7 flex items-center bg-[#F3F4F6] text-[#6A6A6A] rounded-2xl">Drink</div>
        </div>
      </nav>
      <section>
        <div className="gap-3 grid grid-cols-2">
          {foodCardData.map((item) =>
            <FoodCard key={item.id} title1={item.title1} title2={item.title2} image={item.image} pop={item.pop} onClick={() => navigate(`/foodDetail`)}/>
          )}
          {foodCardData.map((item) =>
            <FoodCard key={item.id} title1={item.title1} title2={item.title2} image={item.image} pop={item.pop} onClick={() => navigate(`/foodDetail`)}/>
          )}
        </div>
      </section>
    </>
  )
}

export default Home