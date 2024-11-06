
import { Link } from "react-router-dom"
import bannerImage from "../assets/banner.jpg"
export const Hero = () => {
    return (
        <div className="mx-2 relative ">
            <div className=" bg-[#9538E2] text-white  max-w-7xl mx-auto rounded-bl-2xl rounded-br-2xl text-center py-3 px-8 space-y-3  pb-32 md:pb-56 ">
                <h2 className="text-xl font-extrabold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p className="text-sm px-9 pb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to="/dashboard">
                <button className="btn text-[#9538E2] rounded-full hover:text-white hover:bg-[#9538E2] border-4 ">Shop Now</button>
                </Link>

            </div>
            <div className="p-4 rounded-2xl bg-gray-100 absolute transform left-1/2 -translate-x-1/2   top-1/2 translate-y-1/4 md:translate-y-0 w-[400px] sm:w-[580px] lg:w-[740px] ">
                <img src={bannerImage} className="rounded-2xl h-[260px]    md:h-[300px] w-full lg:h-[360px]" alt="" />
            </div>

        </div>
    )
}
