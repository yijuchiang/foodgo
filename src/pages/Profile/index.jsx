import { Link, useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex justify-between">
        <Link to='/'><i className="fa-solid fa-arrow-left w-7"></i></Link>
        <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
      </div>
      <p className="text-xl font-poppins text-[#EF2A39] pl-2 pt-8 mb-7">Profile</p>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="username">Name</label>
        <input className="h-[72px] border-2 border-solid border-blue-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " id="username" type="text" placeholder="Search"/>
      </div>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="">Password</label>
        <input className="h-[72px] border-2 border-solid border-blue-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " type="password" placeholder="Search"/>
      </div>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1 whitespace-nowrap " htmlFor="">Delivery address</label>
        <input className="h-[72px] border-2 border-solid border-blue-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " type="text" placeholder="Search"/>
      </div>
      <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-11">
        <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="">Email</label>
        <input className="h-[72px] border-2 border-solid border-blue-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " type="email" placeholder="Search"/>
      </div>
      <div className='flex justify-between items-center gap-3 h-16'>
        <button className="inline-block w-24 leading-[64px] text-center tracking-wider text-[#FFFFFF] bg-[#EF2A39] rounded-2xl" onClick={()=> navigate(`/`)}>MENU</button>
        <button className="w-60 h-full text-[#FFFFFF] bg-[#3C2F2F] rounded-2xl shadow-[0_9px_30px_rgba(0,0,0,0.25)]" onClick={() => navigate(`/payment`)}>ORDER SUMMARY</button>
      </div>

      
    </>
  )
}

export default Profile
