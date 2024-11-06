import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage.jsx';
import { Home } from './components/Home.jsx';
import { ProductDetails } from './components/ProductDetails.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { CartList } from './components/CartList.jsx';
import { WishList } from './components/WishList';


const  router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"productDetails/:productId",
        element:<ProductDetails/>,
        loader:() => fetch("/products.json")
      },
      {
        path:"dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:"cart",
            element:<CartList/>
          },
          {
            path:"wishList",
            element:<WishList/>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
