import React from 'react';
import { Link } from 'react-router';
import { NavLink } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";


const Navber = () => {
    return (
        <div className=" flex justify-between py-2 w-11/12 mx-auto  bg-base-100 border-b-indigo-500 border-b-2">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                   <NavLink className={({isActive}) => isActive?  'text-indigo-500' : ''} to='/'>Home</NavLink>
                   <NavLink className={({isActive}) => isActive?  'text-indigo-500' : ''} to='/about'>About</NavLink>
                   <NavLink className={({isActive}) => isActive?  'text-indigo-500' : ''} to='/cart'>  <FaCartPlus size={20} /> </NavLink>
                   <NavLink className={({isActive}) => isActive?  'text-indigo-500' : ''} to='/favourites'>   <BsBookmarkStarFill size={20} />  </NavLink>
                </ul>
                </div>
                <div>

                
                <Link to='/'  className=" text-xl p-0">FlagShipPhoneOff</Link>
                
                </div>
                
            </div>



            <div className=" flex justify-between items-center ">

                <div className=" hidden lg:flex mr-5">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <NavLink className={({isActive}) => isActive?  'text-indigo-500' : ''} to='/'>Home</NavLink>
                        <NavLink className={({isActive})=> isActive? 'text-indigo-500': ''} to='/about'>About</NavLink>

                    </ul>
                    
                </div>

                <div className='flex gap-3'>
                <NavLink className={({isActive}) => isActive?  'text-indigo-500' : ''} to='/cart'>  <FaCartPlus size={20} /> </NavLink>
                <NavLink className={({isActive}) => isActive?  'text-indigo-500' : ''} to='/favourites'>   <BsBookmarkStarFill size={20} />  </NavLink>

                </div>

            </div>

        </div>
    );
};

export default Navber;