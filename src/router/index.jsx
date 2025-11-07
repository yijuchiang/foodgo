import { createBrowserRouter } from "react-router-dom";
import { Home, FoodDetail, NotFound, OrderFinish, Payment, Profile, Likes, Login } from "@/pages/index";
import Layout from "@/components/Layout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/foodDetail/:id',
        element: <FoodDetail/>
      },
      {
        path: '*',
        element: <NotFound/>
      },
      {
        path: '/payment',
        element: <Payment/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/likes',
        element: <Likes/>
      },
      {
        path: '/login',
        element: <Login/>
      },
    ]
  },
  {
    path: '/orderFinish',
    element: <OrderFinish/>
  }
])

export default router