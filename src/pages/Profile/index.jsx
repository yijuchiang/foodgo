import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import { useCartStore } from "@/store/useCartStore";



const Profile = () => {
  const navigate = useNavigate()
  const { setToken } = useUserStore()
  const { cart, cancelCart } = useCartStore();


  const logout = () => {
    setToken('')
    navigate('/login')
  }

  const handlePurchase = () => {
    cancelCart()
    navigate('/orderFinish')
  }


  return (
    <>
      <div className="flex justify-between">
        <Link to='/payment'><i className="fa-solid fa-arrow-left w-7"></i></Link>
      </div>
      <p className="text-xl font-poppins text-[#EF2A39] pl-2 pt-8 mb-7">Profile</p>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="username">Name</label>
        <input className="h-[72px] border border-solid border-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " id="username" type="text" placeholder="Enter your name"/>
      </div>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="">Phone</label>
        <input className="h-[72px] border border-solid border-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " type="tel" placeholder="Enter your phone"/>
      </div>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1 whitespace-nowrap " htmlFor="">Delivery address</label>
        <input className="h-[72px] border border-solid border-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " type="text" placeholder="Enter your delivery address"/>
      </div>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-11">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="">Email</label>
        <input className="h-[72px] border border-solid border-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " type="email" placeholder="Enter your email address"/>
      </div>
      <div className='flex justify-between items-center gap-3 h-16'>
        <button className="inline-block w-40 leading-[64px] text-center tracking-wider text-[#EF2A39] border border-solid border-[#EF2A39] rounded-2xl font-bold hover:bg-[#3C2F2F] hover:text-white hover:border-none" onClick={logout}>Log Out</button>
        {cart.length > 0 ? 
        (<button className="w-52 h-full text-[#FFFFFF] bg-[#3C2F2F] font-bold rounded-2xl shadow hover:bg-yellow-300 hover:text-[#EF2A39] hover:font-black" onClick={handlePurchase}>Complete Purchase</button>) : (
        (<button className="w-52 h-full text-[#FFFFFF] bg-[#3C2F2F] font-bold rounded-2xl shadow " onClick={() => navigate('/')}>Menu</button>)
        )}
      </div>
    </>
  )
}

export default Profile
