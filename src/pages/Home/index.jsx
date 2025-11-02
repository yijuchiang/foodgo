import { useNavigate } from 'react-router-dom'
import FoodCard from '@/components/FoodCard'
import { SettingsSliders } from "@/utils/food-images"
import { useFoodData } from '@/Hooks/useFoodData'
import * as Images from "@/utils/food-images";
import { useState, useEffect } from 'react';
import { useLikesStore } from "@/store/useLikesStore"


const Home = () => {
  const navigate = useNavigate()
  const { foodData } = useFoodData();
  const [searchTitle, setSearchTitle] = useState('')
  const [filterFood, setFilterFood] = useState([])
  const [changeCategory, setChangeCategory] = useState("All")
  const setLikes = useLikesStore(state => state.addLikes)

  useEffect(() => {
    setFilterFood(foodData);
  }, [foodData]);

  const getImageSrc = (image) => {
    if (image.startsWith("http")) {
      return image; // 網路圖片
    }
    return Images[image]; // 本地圖片
  };

  const handleSearch = () => {
    if(!searchTitle.trim()) {
      alert('Please enter would you like to eat?')
      return
    }
    const newFoodCard = foodData.filter((item) => 
    item.title1.toLowerCase().includes(searchTitle.toLowerCase()) ||
    item.title2.toLowerCase().includes(searchTitle.toLowerCase())
    )
    if(!newFoodCard.length){
      setFilterFood(foodData)
    } else {
      setFilterFood(newFoodCard)
    }
  }

  const category = [ "All", "Burger", "Salad", "Drink"]
  const handleFilter = (value) => {    
    setChangeCategory(value);
    if (value === "All"){
      setFilterFood(foodData)
    } else {
      const newFood = foodData.filter((item) => item.category === value)
      setFilterFood(newFood)
    }
  }

  // const addLikes = () => {
  //   if(liked){
  //     addLikes(food)
  //   }
  // }


  return (
    <>
      <search>
        <div className="flex gap-2 items-center mb-10">
          <div className="relative flex items-center flex-1 gap-1 rounded-2xl shadow">
            <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-4"></i>
            <input className="py-4 flex-1 rounded-2xl pl-12 focus:outline-0" onChange={(event) => setSearchTitle(event.target.value)} onKeyDown={(event) => {if (event.key === 'Enter'){handleSearch()}}} type="text" placeholder="Search"/>
          </div>
          <button className="w-14 h-14 relative bg-[#EF2A39] rounded-2xl flex justify-center items-center" onClick={handleSearch}>
            <img className="w-6 aspect-square" src={SettingsSliders} alt="" />
          </button>
        </div>
      </search>
      <nav>
        <div className="flex justify-around h-12 mb-10 overflow-x-auto gap-3">
          {category.map((item) => (
            <button key={item} className={`h-full px-7 flex items-center rounded-2xl ${changeCategory === item ? "bg-[#EF2A39] text-white shadow " : "bg-[#F3F4F6] text-[#6A6A6A]"}`} onClick={() => handleFilter(item)}>{item}</button>
          ))}
        </div>
      </nav>
      <section>
        <div className="gap-3 grid grid-cols-2">
          {(filterFood.length ? filterFood : foodData).map((item) =>
            <FoodCard key={item.id} title1={item.title1} title2={item.title2} image={getImageSrc(item.image)} pop={item.pop} onClick={() => navigate(`/foodDetail/${item.id}`)} onLike={''}/>
          )}
        </div>
      </section>
    </>
  )
}

export default Home