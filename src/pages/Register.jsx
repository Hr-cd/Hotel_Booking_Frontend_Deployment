import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigation = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        setEmail("")
        setPassword("")
        if (!name || !email || !password) {
            toast.error("All fields are required")
            return
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Please enter a valid email address");
        return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, {
                name,  
                email,
                password
            })
            toast.success("Register Successfully")
            navigation("/login")
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
            setError(error.response.data.message)
        }
    }

  return (
    <div className='flex justify-center items-center bg-gray-100 pt-10 pb-10'>
        <div className='w-full max-w-md bg-white rounded-lg shadow-md p-10'>
            <h2 className='text-2xl font-semibold text-center mb-5'>Sign Up</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label className='black text-sm font-medium text-gray-700'>
                        Name
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='mt-2 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'/>
                    </label>
                </div>
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
                <button type='submit' className='w-full bg-blue-600 text-white py-2 px-4 mt-5 rounded-md hover:bg-blue-700 transition duration-300'>
                    Register
                </button>
            </form>
            <p className='text-center mt-5 text-sm text-gray-700'>
                Already have an Account?{" "}
                <a href="/login" className='text-blue-500 hover:underline'>Please Login</a>
            </p>
        </div>
    </div>
  )
}

export default Register