import { createBrowserRouter } from "react-router-dom";
import { Home, FoodDetail, NotFound, OrderConfirmation, Payment } from "@/pages/index";
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
    ]
  },
  {
    path: '/orderConfirmation',
    element: <OrderConfirmation/>
  }
])

export default router