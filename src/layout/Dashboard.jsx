import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdEmail } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div className="flex gap-6">
            <div className="w-64 bg-yellow-600 px-5 min-h-screen py-4">
                <ul className="space-y-5">
                    {/* Users links  */}
                    {
                        isAdmin ? <>
                            <li><NavLink className="flex items-center gap-1" to='/dashboard/adminHome'>
                                <FaHome></FaHome>
                                Admin Home</NavLink></li>

                            <li><NavLink className="flex items-center gap-1" to='/dashboard/adminAdItems'>
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink></li>

                            <li><NavLink className="flex items-center gap-1" to='/dashboard/manageItems'>
                                <FaList></FaList>
                                Manage Items</NavLink></li>

                            <li><NavLink className="flex items-center gap-1" to='/dashboard/manageBookings'>
                                <FaBook></FaBook>
                                Manage Bookings</NavLink></li>

                            <li><NavLink className="flex items-center gap-1" to='/dashboard/allUsers'>
                                <FaUsers></FaUsers>
                                All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink className="flex items-center gap-1" to='/dashboard/userHome'>
                                    <FaHome></FaHome>
                                    User Home</NavLink></li>

                                <li><NavLink className="flex items-center gap-1" to='/dashboard/reservation'>
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink></li>

                                <li><NavLink className="flex items-center gap-1" to='/dashboard/cart'>
                                    <FaShoppingCart></FaShoppingCart>
                                    My cart ({cart.length})</NavLink></li>

                                <li><NavLink className="flex items-center gap-1" to='/dashboard/reviews'>
                                    <FaList></FaList>
                                    Add Reviews</NavLink></li>

                                <li><NavLink className="flex items-center gap-1" to='/dashboard/bookings'>
                                    <FaList></FaList>
                                    My Bookings</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    {/* Common links  */}
                    <li><NavLink className="flex items-center gap-1" to='/'>
                        <FaHome></FaHome>
                        Home</NavLink></li>

                    <li><NavLink className="flex items-center gap-1" to='/menu'>
                        <FaList></FaList>
                        Menu</NavLink></li>

                    <li><NavLink className="flex items-center gap-1" to='/contact'>
                        <MdEmail />
                        Contact</NavLink></li>
                </ul>

            </div>
            <div className="flex-1 mt-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;