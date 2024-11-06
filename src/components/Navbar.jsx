import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import PropTypes from "prop-types";

export const Navbar = ({ cartItems }) => {

    const {pathname} = useLocation()
    

    return (
        <div className="mt-3 mx-2 ">
            <nav className={`${pathname === "/" ? "bg-[#9538E2] text-white" : "bg-white text-black"}  max-w-7xl mx-auto px-8 rounded-tr-2xl rounded-tl-2xl flex justify-between items-center py-5 md:py-4 `}  >
                <h2 className="cursor-pointer font-semibold">Gadget Heaven</h2>
                {/* quick links */}
                <div className="hidden md:flex gap-3">
                    <NavLink to="/" className="hover:text-[#9538E2] hover:bg-white px-2.5 py-1 rounded-md">Home</NavLink>
                    <NavLink to="/statistics" className="hover:text-[#9538E2] hover:bg-white px-2 py-1 rounded-md">Statistics</NavLink>
                    <NavLink to="/dashboard/cart" className={`${pathname == "/dashboard/wishList" ? "active" : ""} hover:text-[#9538E2] hover:bg-white px-2 py-1 rounded-md`}>Dashboard</NavLink>
                    <NavLink to="/offer" className="hover:text-[#9538E2] hover:bg-white px-2.5 py-1 rounded-md">Offer</NavLink>
                </div>

                <div className="flex gap-3 text-2xl items-center">
                    <div className="relative">
                        <Link to="/dashboard/cart">
                            <IoCartOutline className="cursor-pointer hover:text-[#9538E2] hover:bg-white rounded-full md:text-3xl " /></Link>
                        <div className="badge absolute -top-3.5 left-3">{cartItems.length}</div>
                    </div>
                    <Link to="/dashboard/wishList" >
                        <CiHeart className="cursor-pointer hover:text-[#9538E2] hover:bg-white rounded-full md:text-3xl" /></Link>
                    <div className="dropdown dropdown-bottom dropdown-end text-xl md:hidden">
                        <div tabIndex={0} role="button" className=" m-1"> <FaBars className="cursor-pointer" /></div>

                        <ul tabIndex={0} className="dropdown-content menu bg-[#9538E2] rounded-box z-[1] w-32 p-2 shadow  py-3 mt-3 ">
                            <NavLink to="/" className="hover:text-[#9538E2] hover:bg-white px-2 py-2 rounded-xl">Home</NavLink>
                            <NavLink className="hover:text-[#9538E2] hover:bg-white px-2 py-2 rounded-xl" to="/statistics">Statistics</NavLink>
                            <NavLink className="hover:text-[#9538E2] hover:bg-white px-2 py-2 rounded-xl" to="/dashboard">Dashboard</NavLink>
                            <NavLink to="/offer" className="hover:text-[#9538E2] hover:bg-white px-2 py-2 rounded-xl">Offer</NavLink>
                        </ul>
                    </div>



                </div>

            </nav>

        </div>
    )
}

Navbar.propTypes = {
    cartItems: PropTypes.array.isRequired
}