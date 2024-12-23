import { Link, Outlet, useLocation, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export const Dashboard = () => {
    const { cartItems, wishLists, totalPrice, deleteWishItem, deleteCartItem, descendingSort, handlePurchase } = useOutletContext();

    const { pathname } = useLocation()


    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="flex flex-col items-center text-center text-white bg-[#9538E2] gap-2 py-5">
                <h3 className="font-bold text-xl ">Dashboard</h3>
                <p className="text-gray-200 w-[700px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="space-x-4 mt-3">
                    <Link to="/dashboard/cart">
                        <button className={`${pathname == "/dashboard/cart" ? "active-tab" : ""}  border rounded-full px-7 py-1.5`}>Cart</button>
                    </Link>
                    <Link to="/dashboard/wishList">
                        <button className={`${pathname == "/dashboard/wishList" ? "active-tab" : ""}  border rounded-full px-7 py-1.5`}>WishList</button>
                    </Link>
                </div>

            </div>

            <Outlet context={{ cartItems, totalPrice, wishLists, deleteWishItem, deleteCartItem, descendingSort, handlePurchase }} />

        </div>
    )
}

