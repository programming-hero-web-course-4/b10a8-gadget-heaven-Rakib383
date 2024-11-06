import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const Card = ({ product }) => {
    const { product_id, product_image, product_title, price } = product

    return (
        <div className="flex flex-col border w-64 gap-1  items-center justify-center rounded-xl  py-2">
            <img className="w-48 h-44" src={product_image} alt="" />
            <h2 className="font-bold">{product_title}</h2>
            <p className="text-gray-500">Price: ${price}</p>

            <Link to={`/productDetails/${product_id}`}>
                <button className="text-[#9538E2] px-3 py-2 border rounded-full hover:text-white hover:bg-[#9538E2] mt-1 mb-2.5 border-[#9538E2] font-semibold" >View Details</button>
            </Link>

        </div>
    )
}

Card.propTypes = {
    product: PropTypes.object.isRequired,

}
