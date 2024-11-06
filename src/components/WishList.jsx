import { useOutletContext } from "react-router-dom"
import { WishProduct } from "./WishProduct"


export const WishList = ( ) => {

    const {wishLists,deleteWishItem} = useOutletContext();

    return (
        <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center px-10 py-5 mb-7 ">
                    <span className="font-bold">WishList</span>
                   
                </div>
                <div className="space-y-5 mx-8">
                    {
                        wishLists.map(item => <WishProduct key={item.product_id} item={item} deleteWishItem={deleteWishItem} />)

                    }
                </div>



            </div> 
    )
}

