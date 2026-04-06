import React, {useState} from 'react'
import { FaUser} from 'react-icons/fa'
import logo from "../assets/logo (2).png";
import { useAuth } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    // const isSignIn = false;
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    // console.log("This is the auth user", auth?.user);

    // Redirect logic
    const redirectDashboard = (e) => {
        e.stopPropagation();
        if (auth?.user?.role === "admin") {
            navigate("/admin");
        } else {
            navigate("/user");
        }
    };

    // Handle dropdown toggle
    const handleDropDownToggle = () => {
        setIsDropDownOpen((prevState) => !prevState);
    };

    // Close dropdown when mouse leaves
    const closeDropDown = () => {
        setIsDropDownOpen(false);
    };

    // Handle logout logic
    const handleLogout = () => {
        setAuth({
        ...auth,
        user: null,
        token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
        navigate("/");
    };

  return (
    <nav className='flex items-center justify-between p-5'>
        <div className='flex items-center space-x-2'>
            <img src={logo} alt="Logo" className="ml-[7rem]" />
        </div>
        <div className='hidden md:flex space-x-5'>
            <a href="/" className='text-gray-600 hover:text-gray-900'>Home</a>
            <a href="/cart" className='text-gray-600 hover:text-gray-900'>Cart</a>
            <a href="/" className='text-gray-600 hover:text-gray-900'>Activites</a>
            <a href="/" className='text-gray-600 hover:text-gray-900'>Contact</a>
            <a href="/" className='text-gray-600 hover:text-gray-900'>About</a>
        </div>
        <div className='flex items-center space-x-5 mr-[9rem] relative'>
            <FaUser size={20} onClick={handleDropDownToggle} className='text-2xl text-gray-600 hover:text-gray-900 cursor-pointer'/>
            {isDropDownOpen && (
                <div onMouseLeave={closeDropDown} className='absolute mt-35 right-0 w-50 bg-white border border-gray-200 rounded shadow-lg z-50'>
                    <ul>
                        <li onClick={redirectDashboard} className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>
                            Your Profile
                        </li>
                        {/* <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>
                            <a href="/">Your Orders</a>
                        </li> */}
                        {auth.user ? (
                            <li onClick={handleLogout} className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>
                                Sign Out
                            </li>
                        ) : (
                            <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>
                                <Link to={"/login"}>Sign In</Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar