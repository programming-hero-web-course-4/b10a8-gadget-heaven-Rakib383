
import { RxCrossCircled } from "react-icons/rx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const WishProduct = ({ item,deleteWishItem }) => {
    const { product_image, product_id, product_title, description, price } = item
    return (
        <div className="card h-36 card-side bg-base-100 shadow-xl p-5 border items-center max-w-4xl mx-auto">
            <figure className="rounded-lg w-36 h-24">
                <img
                    src={product_image}
                    alt="Movie" className="w-full " />
            </figure>
            <div className="card-body gap-1">
                <h2 className="card-title text-lg">{product_title}</h2>
                <p className="text-gray-500">{description}</p>
                <strong>Price: ${price}</strong>
              <Link to={`/productDetails/${product_id}`}>
              <button className=" px-1 w-28 py-2 text-sm  rounded-full text-white bg-[#9538E2] hover:text-[#9538E2]  hover:bg-white hover:outline outline-[#9538E2]">Add to Cart </button>
              </Link>
            </div>
            <button onClick={() => deleteWishItem(product_id)}><RxCrossCircled className="text-2xl text-red-400 mr-8 mb-16" /></button>
        </div>
    )
}

WishProduct.propTypes = {
    item: PropTypes.object,
    deleteWishItem: PropTypes.func
    
}

