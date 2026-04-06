import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import UserRoutes from './components/Routes/Private';
import UserDashboard from './pages/User/UserDashBoard';
import YourOrder from './pages/YourOrder';
import AdminRoutes from './components/Routes/Admin';
import AdminDashboard from './pages/Admin/AdminDashBoard';
import CreatePost from './pages/Admin/CreatePost';
import CreateCategory from './pages/Admin/CreateCategory';
import Advertisement from './components/Advertisement';
import AllPosts from './pages/Admin/AllPosts';
import AllTrip from './pages/Admin/AllTrip';
import ProuductDetails from './pages/ProuductDetails';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage'
import Payments from './pages/Payments';
import ThankYou from "./components/ThankYou";
import SelectedCategory from './pages/SelectedCategory'
import UpdatePost from './pages/Admin/UpdatePost'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:slug' element={<ProuductDetails/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/payment' element={<Payments/>}/>
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path='/search' element={<SearchPage/>}/>
        <Route path="/category/:slug" element={<SelectedCategory />} />

        <Route path='/user' element={<UserRoutes/>}>
          <Route path='' element={<UserDashboard/>}/>
          <Route path='your-order' element={<YourOrder/>}/>
        </Route>

        <Route path='/admin' element={<AdminRoutes/>}>
          <Route path='' element={<AdminDashboard/>}/>
          <Route path='/admin/create-post' element={<CreatePost/>}/>
          <Route path="/admin/create-category" element={<CreateCategory/>}/>
          <Route path="/admin/get-all-posts" element={<AllPosts/>}/>
          <Route path="/admin/all-booking" element={<AllTrip/>} />
          <Route path="/admin/post/:slug" element={<UpdatePost />} />
        </Route>
      </Routes>
      <Advertisement/>
      <Footer/>
    </>
  )
}

export default App
