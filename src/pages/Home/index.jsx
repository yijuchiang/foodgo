import { useNavigate } from 'react-router-dom'
import FoodCard from '@/components/FoodCard'
import { useFoodData } from '@/Hooks/useFoodData'
import { useState, useEffect } from 'react';
import { useLikesStore } from "@/store/useLikesStore"
import { getImageSrc } from "@/utils/getImageSrc"


const Home = () => {
  const navigate = useNavigate()
  const { foodData } = useFoodData();
  const [searchTitle, setSearchTitle] = useState('')
  const [filterFood, setFilterFood] = useState([])
  const [changeCategory, setChangeCategory] = useState("All")
  const { likes, addLikes, removeLikes } = useLikesStore()

  useEffect(() => {
    setFilterFood(foodData);
  }, [foodData]);


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

  const addToLikes = (id) => {
    const isLikes = likes.some((item) => item.id === id)
    if (isLikes){ 
      removeLikes(id)
    } else {
      const product = foodData.find((item) => item.id === id)
      addLikes(product)
    }
  }


  return (
    <>
      <search>
        <div className="flex gap-2 items-center mb-10">
          <div className="relative flex items-center flex-1 gap-1 rounded-2xl shadow">
            <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-4"></i>
            <input className="py-4 flex-1 rounded-2xl pl-12 focus:outline-0" onChange={(event) => setSearchTitle(event.target.value)} onKeyDown={(event) => {if (event.key === 'Enter'){handleSearch()}}} type="text" placeholder="Search"/>
          </div>
          <button className="w-14 h-14 rounded-2xl border border-solid border-[#EF2A39] text-[#EF2A39] hover:bg-[#EF2A39] hover:text-white hover:font-bold" onClick={handleSearch}>GO!</button>
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
            <FoodCard key={item.id} id={item.id} title1={item.title1} title2={item.title2} image={getImageSrc(item.image)} pop={item.pop} onClick={() => navigate(`/foodDetail/${item.id}`)} onLike={() => addToLikes(item.id)}/>
          )}
        </div>
      </section>
    </>
  )
}

export default Home