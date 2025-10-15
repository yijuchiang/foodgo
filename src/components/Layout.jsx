import { Footer } from "@/utils/food-images"
import { Add } from "@/utils/food-images"
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom"

const Layout = () => {

  return (
    <div className='flex flex-col min-h-screen mx-5 pt-7 pb-32'>
      <header>
        <div className="flex justify-between">
          <h1 className="text-4xl font-lobster">Foodgo</h1>  
          <img className="w-14 h-14 object-cover rounded-xl" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
        </div>
        <p className="text-lg font-poppins mb-12">Order you favourite food!</p>
      </header>
      <main className="flex-1">
        <Outlet/>
      </main>
      <footer className='fixed bottom-0 left-0 w-full'>
          <div className="relative">
            <img className="w-full h-20" src={Footer} alt="" />
            <div className="absolute inset-0 flex justify-around items-center text-2xl">
              <Link to='/'>
                <i className="fa-regular fa-house text-white"></i>  
              </Link>
              <div className="w-60 flex justify-between">
                <i className="fa-regular fa-user text-white"></i>
                <i className="fa-regular fa-comment text-white"></i>
              </div>
              <i className="fa-solid fa-heart text-white"></i>
            </div>
          </div>
          <Link to='/payment'>
            <img className="w-24 h-24 absolute left-1/2 -translate-x-1/2 bottom-8 cursor-pointer" src={Add} alt=""/>
          </Link>
      </footer>
    </div>
  )
}

export default Layout
