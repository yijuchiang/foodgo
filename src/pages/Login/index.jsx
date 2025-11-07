import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { homeApi } from '@/api/home';
import { useUserStore } from '@/store/useUserStore';
import { message } from 'antd';




const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {token, setToken} = useUserStore()
  const [messageApi, contextHolder] = message.useMessage()


  const login = async() => {
    if(!username || !password) {
      messageApi.open({
      type: 'error',
      content: 'Username and password cannot be empty.',
    });
      return
    }
    try {
      const {accessToken} = await homeApi.login(username, password)
      setToken(accessToken)
      messageApi.open({
      type: 'success',
      content: 'Login successful',
    });
    } catch(err) {
      messageApi.open({
      type: 'error',
      content: 'Incorrect username or password',
    });
    }
  }
  
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [])



  return (
  <>
  {contextHolder}
    <div className="flex justify-between">
      <Link to='/'><i className="fa-solid fa-arrow-left w-7"></i></Link>
    </div>
    <p className="text-xl font-poppins text-[#EF2A39] pl-2 pt-8 mb-7">LogIn</p>
    <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
      <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="username">Name</label>
      <input className="h-[72px] border border-solid border-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " id="username" type="text" placeholder="Enter your name" value={username} onChange={(event) => setUsername(event.target.value)}/>
    </div>
    <div className="mx-6 relative text-[#7D7D7D] flex flex-col mb-8">
      <label className="w-24 absolute left-6 -top-2 bg-white px-1" htmlFor="">Password</label>
      <input className="h-[72px] border border-solid border-[#7D7D7D] rounded-lg focus:outline-0 pl-12 " type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)}/>
    </div>
    <div className='flex justify-between items-center h-16'>
      <button className="w-40 h-full text-[#FFFFFF] bg-[#3C2F2F] hover:bg-[#EF2A39] font-bold rounded-2xl shadow" onClick={login}>Log In</button>
      <button className="w-40 h-full text-[#3C2F2F] border border-solid border-[#3C2F2F] hover:text-[#EF2A39] hover:border-[#EF2A39] font-bold rounded-2xl " onClick={() => navigate('/')}>Menu</button>
    </div>
  </>
  )
}

export default Login
