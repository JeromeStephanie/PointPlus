import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import Headroom from 'react-headroom'
import Home from './Pages/Home'
import Order from './Pages/Order'
import Person from './Pages/Person'
import Favorites from './Pages/Favorites'
import Splash7 from './Components/Splash7'
import Card from './Components/Card'
import ItemDetails from './Pages/ItemDetails'
import CheckOut from './Pages/CheckOut'
import Login from './Pages/Login'
import SignUp2 from './Pages/SignUp2'
import SignUp from './Pages/SignUp'
import AccountCreated from './Pages/AccountCreated'
import RecentOrders from './Pages/RecentOrders'
import VerifyPay from './Pages/VerifyPay'
import CheckOut2 from './Pages/CheckOut2'
import Sidebar from './Components/Sidebar'
import Headers from './Components/Headers'
import ShowNavBar from './Components/ShowNavBar'
import ResturantsDetails from './Pages/ResturantsDetails'
import Footer from './Components/Footer'
import PaymentSuccessful from './Pages/PaymentSuccessful'

function App () {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    fetchData()
  }, [])

  return (
    <Router>
      {loading ? (
        <Splash7 />
      ) : (
        <div className='app-container'>
          <div className='App flex w-full'>
            <Sidebar />
            <div className='overflow-y-scroll ml-0 max-h-[calc(100vh-4rem)] w-[100%] border border-green-800'>
              <Routes>
                <Route path='/' element={<Root />}>
                  <Route index element={<Home />} />
                  <Route path='/person' element={<Person />} />
                  {/* <Route
                      path='/product/:productId'
                      element={<ItemDetails />}
                    /> */}
                  <Route
                    path='/product/:productId'
                    element={<ResturantsDetails />}
                  />
                  <Route path='/favs' element={<Favorites />} />
                  <Route path='/orders' element={<Order />} />
                  <Route path='/splash7' element={<Splash7 />} />
                  <Route path='/card' element={<Card />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/checkout' element={<CheckOut />} />
                  <Route path='/signup2' element={<SignUp2 />} />
                  <Route path='/signup' element={<PaymentSuccessful />} />
                  <Route path='/accountcreated' element={<AccountCreated />} />
                  <Route path='/recentOrders' element={<RecentOrders />} />
                  <Route path='/verify' element={<VerifyPay />} />
                  <Route path='/checkout2' element={<CheckOut2 />} />
                  <Route path='/sidebar' element={<Sidebar />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  )
}

const Root = () => {
  return (
    <>
      <div className=''>
        <ShowNavBar>
          <Headroom>
            <Headers />
          </Headroom>
        </ShowNavBar>
        <Outlet />
        <ShowNavBar>
          <Footer />
        </ShowNavBar>
      </div>
    </>
  )
}

export default App
