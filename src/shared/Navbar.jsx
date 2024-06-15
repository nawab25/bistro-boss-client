import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Foods</NavLink></li>
        {
            user ? <li className="mt-2 ml-2 cursor-pointer" onClick={logOut}>Logout</li>
                :
                <li><NavLink to='/login'>Login</NavLink></li>
        }
        <li><Link to='/dashboard/cart'>
            <button className="flex ml-5">
                <span className="text-3xl"><IoCartOutline /></span>
                <div className="badge badge-secondary">{cart.length}</div>
            </button>
        </Link></li>

    </>

    return (
        <div className="navbar fixed z-10 text-white max-w-screen-xl mx-auto bg-black bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <h1>{user?.displayName}</h1>
            </div>
        </div>
    );
};

export default Navbar;