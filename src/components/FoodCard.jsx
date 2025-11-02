import { useState } from "react"
import { useLikesStore } from "@/store/useLikesStore"




const FoodCard = ({title1, title2, image, pop, onClick}) => {
  const [liked, setLiked] = useState(false)
  const setLikes = useLikesStore(state => state.addLikes)

  const handleLikesButtonChange = () => {
    setLiked(!liked)
    addLikes()
  }

  // const addLikes = () => {
  //   const product = {
  //     id: food.id,
  //     food
  //   }
  //   setLikes(product)
  // }


  return (
    <div className="h-56 rounded-3xl shadow-[0_6px_17px_rgba(0,0,0,0.13)] relative cursor-pointer py-2">
      <div className="w-28 h-32 mx-auto overflow-hidden rounded-2xl" onClick={onClick}>
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
      <div className='ml-3 text-base mb-2'>
        <h1 className='block font-bold'>{title1}</h1>
        <span className=''>{title2}</span>
      </div>
      <div className='w-11 h-5 ml-3 flex items-center justify-center'>
        <i className="fa-solid fa-star text-[#FFD43B]"></i>
        <span className='ml-2'>{pop}</span>
      </div>
      <button className='absolute bottom-4 right-3' onClick={handleLikesButtonChange}>
        <i className={liked ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart"}></i>
      </button>
    </div>
  )
}

export default FoodCard