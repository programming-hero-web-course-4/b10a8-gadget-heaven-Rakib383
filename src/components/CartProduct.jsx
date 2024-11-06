
import { RxCrossCircled } from "react-icons/rx";
import { useOutletContext } from "react-router-dom";
export const CartProduct = ({ item }) => {
    const { product_image, product_id, product_title, description, price } = item
    const {deleteCartItem} = useOutletContext();
    return (
        <div className="card h-32 card-side bg-base-100 shadow-xl p-5 border items-center max-w-4xl mx-auto">
            <figure className="rounded-lg w-36 h-24">
                <img
                    src={product_image}
                    alt="Movie" className="w-full " />
            </figure>
            <div className="card-body gap-1.5">
                <h2 className="card-title">{product_title}</h2>
                <p className="text-gray-500">{description}</p>
                <strong>Price: ${price}</strong>
            </div>
            <button onClick={() => deleteCartItem(product_id,price)}><RxCrossCircled className="text-2xl text-red-400 mr-8 mb-16" /></button>
        </div>
    )
}
