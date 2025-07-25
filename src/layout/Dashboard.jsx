import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'
import { FaBook, FaList, FaShirt } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className='flex w-full' style={{ backgroundColor: '#F9F9F9' }}>
            <div className='min-h-screen bg-slate-200 w-1/5 py-8 px-5'>
                <Link to="/" className='flex items-center cursor-pointer'>
                    <img
                        className="w-16"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className='text-3xl font-bold ml-3 text-black'>Easy Bazaar</h2>
                </Link>
                <div className="mt-4">
                    {
                        isAdmin ? <ul>
                            <li className="list-none py-3 text-base">
                                <NavLink className="flex items-center capitalize font-cinzel font-medium" to='/dashboard/adminhome'>
                                    <AiFillDashboard className='mr-2 text-2xl' />
                                    dashboard</NavLink>
                            </li>
                            <li className="list-none py-3 text-base">
                                <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/additems'><FaShirt className='mr-2 text-2xl' />add items</NavLink>
                            </li>
                            <li className="list-none py-3 text-base">
                                <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/manageitems'><FaList className='mr-2 text-2xl' />manage items</NavLink>
                            </li>
                            <li className="list-none py-3 text-base">
                                <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/managebookings'><FaBook className='mr-2 text-2xl' />manage bookings</NavLink>
                            </li>
                            <li className="list-none py-3 text-base">
                                <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/dashboard/allusers'><HiUserGroup className='mr-2 text-2xl' />all users</NavLink>
                            </li>
                            <hr className="text-gray-400 my-2" />
                            <li className="list-none py-3 text-base">
                                <NavLink className="flex items-center uppercase font-cinzel font-medium" to='/'><IoMdHome className='mr-2 text-2xl' />home</NavLink>
                            </li>
                        </ul> : ''
                    }
                </div>
            </div>
            <div className="min-w-4/5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;