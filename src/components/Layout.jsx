import { Footer, Add, User } from "@/utils/food-images"
import { Outlet, Link } from 'react-router-dom'
import { useUserStore } from "@/store/useUserStore"

const Layout = () => {
  const {token} = useUserStore()
  

  return (
    <div className='md:max-w-[600px] md:mx-auto flex flex-col min-h-screen pt-7 pb-32'>
      <div className="mx-5">
        <header>
          <div className="flex justify-between">
            <Link to='/'><h1 className="text-4xl font-lobster">Foodgo</h1></Link>
            {token ? (
              <Link to='/profile'>
                <img className="w-14 h-14 object-cover rounded-xl" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987" alt="" />
              </Link>
              ) : (
              <Link to='/login'>
                <img className="w-16 h-16" src={User}/>
              </Link>
            )}
          </div>
          <p className="text-lg font-poppins mb-12">Order you favourite food!</p>
        </header>
        <main className="flex-1">
          <Outlet/>
        </main>
      </div>
      <footer className='md:max-w-[600px] md:left-1/2 md:-translate-x-1/2 fixed bottom-0 left-0 w-full'>
          <div className="relative">
            <img className="w-full h-20" src={Footer} alt="" />
            <div className="absolute inset-0 flex justify-around items-center text-2xl">
              <Link to='/'>
                <i className="fa-regular fa-house text-white"></i>  
              </Link>
              <div className="w-60 flex justify-between">
                {token ? (
                  <Link to='/profile'><i className="fa-regular fa-user text-white"></i></Link>
                ) : (
                  <Link to='/login'><i className="fa-regular fa-user text-white"></i></Link>
                )}
                <i className="fa-regular fa-comment text-white"></i>
              </div>
              <Link to='./Likes'>
                <i className="fa-solid fa-heart text-white"></i>
              </Link>
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
