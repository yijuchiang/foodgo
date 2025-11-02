import { useLikesStore } from "@/store/useLikesStore"


const likes = () => {
  const { likes } = useLikesStore();



  return (
    <div>
    {/* {likes.map((item) =>
      <FoodCard key={item.id} title1={item?.title1} title2={item?.title2} image={getImageSrc(item?.food?.image)} pop={item?.pop}></FoodCard>)} */}
    </div>
  )
}

export default likes 
