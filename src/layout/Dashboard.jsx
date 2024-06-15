import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-orange-400 px-5 min-h-screen py-4">
                <ul className="space-y-5">
                    <li><NavLink className="flex items-center gap-1" to='/dashboard/userHome'>
                    <FaHome></FaHome>
                    User Home</NavLink></li>
                    <li><NavLink className="flex items-center gap-1" to='/dashboard/reservation'>
                    <FaCalendar></FaCalendar>
                    Reservation</NavLink></li>
                    <li><NavLink className="flex items-center gap-1" to='/dashboard/cart'>
                    <FaShoppingCart></FaShoppingCart>
                    My cart</NavLink></li>
                    <li><NavLink className="flex items-center gap-1" to='/dashboard/reviews'>
                    <FaList></FaList>
                    Add Reviews</NavLink></li>
                    <li><NavLink className="flex items-center gap-1" to='/dashboard/bookings'>
                    <FaList></FaList>
                    My Bookings</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;