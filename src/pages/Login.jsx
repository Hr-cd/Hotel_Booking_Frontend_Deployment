import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../context/UserContext'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [auth, setAuth] = useAuth()
    const navigation = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        // setEmail("")
        try {
            const res = await axios.post("https://hotel-booking-backend-deployment-ddgh.onrender.com/api/auth/login", {  
                email,
                password
            })
            toast.success("Login Successfully")
            setAuth({
                ...auth,
                user: res.data?.user,
                token: res.data?.token,
            })
            localStorage.setItem("auth", JSON.stringify(res.data))
            navigation("/")
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
            setError(error.response.data.message)
        }
    }

  return (
    <div className='flex justify-center items-center bg-gray-100 pt-10 pb-10'>
        <div className='w-full max-w-md bg-white rounded-lg shadow-md p-10'>
            <h2 className='text-2xl font-semibold text-center mb-5'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label className='black text-sm font-medium text-gray-700'>
                        Email
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-2 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'/>
                    </label>
                </div>
                <div className='mb-5'>
                    <label className='black text-sm font-medium text-gray-700'>
                        Password
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'/>
                    </label>
                </div>
                <div className='flex items-center justify-between'>
                    <label className='flex items-center'>
                        <input type="checkbox" className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'/>
                        <span className='ml-2 text-sm text-gray-700'>Keep me Signed In</span>
                    </label>
                    <a href="" className='text-sm text-blue-600 hover:underline'>Forget Password?</a>
                </div>
                {error && <p className='text-red-500 text-sm mt-3'>{error}</p>}
                <button type='submit' className='w-full bg-blue-600 text-white py-2 px-4 mt-5 rounded-md hover:bg-blue-700 transition duration-300'>
                    Login
                </button>
            </form>
            <p className='text-center mt-5 text-sm text-gray-700'>
                Don't have an Account?{" "}
                <a href="/register" className='text-blue-500 hover:underline'>Register</a>
            </p>
        </div>
    </div>
  )
}

export default Login
