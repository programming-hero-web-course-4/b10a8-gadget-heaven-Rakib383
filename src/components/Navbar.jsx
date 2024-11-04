import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

export const Navbar = () => {

    return (
        <div className="   mt-3 mx-2 ">
            <nav className=" bg-[#9538E2] text-white max-w-7xl mx-auto px-8 rounded-tr-2xl rounded-tl-2xl flex justify-between items-center py-6 md:py-8 "  >
                <h2 className="cursor-pointer font-semibold">Gadget Heaven</h2>
                {/* quick links */}
                <div className="hidden md:flex gap-3">
                    <NavLink to="/" className="hover:text-[#9538E2] hover:bg-white px-2.5 py-1 rounded-md">Home</NavLink>
                    <NavLink to="/statistics" className="hover:text-[#9538E2] hover:bg-white px-2 py-1 rounded-md">Statistics</NavLink>
                    <NavLink to="/dashboard" className="hover:text-[#9538E2] hover:bg-white px-2 py-1 rounded-md">Dashboard</NavLink>
                    <NavLink to="/offer" className="hover:text-[#9538E2] hover:bg-white px-2.5 py-1 rounded-md">Offer</NavLink>
                </div>

                <div className="flex gap-3 text-2xl items-center">
                   <div className="relative">
                   <IoCartOutline className="cursor-pointer hover:text-[#9538E2] hover:bg-white rounded-full md:text-3xl " />
                   <div className="badge absolute -top-3.5 left-3">9</div>
                   </div>
                    <CiHeart className="cursor-pointer hover:text-[#9538E2] hover:bg-white rounded-full md:text-3xl" />
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
