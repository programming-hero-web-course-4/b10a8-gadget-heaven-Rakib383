import PropTypes from "prop-types";


export const NewProduct = ({ product }) => {

    const { product_image, product_title, price, description, } = product
    return (
        <div className="card card-side bg-base-100 shadow-xl items-center justify-center w-[430px] sm:w-[580px] lg:w-[740px] mt-5 px-4">
            <img className="rounded-xl w-52 h-64 px-2 md:w-60"
                src={product_image}
                alt="" />

            <div className="flex flex-col items-start py-6 px-5 gap-1.5">
                <h2 className="font-bold text-base text-start">{product_title}</h2>
                <p className="font-semibold">Price: ${price}</p>

                <p className="text-sm text-start text-gray-600 pr-6">{description}</p>
                <h5 className="font-bold">Specification:</h5>
                <ol className="list-decimal text-gray-600 ml-7">
                    {
                        product.Specification.map((item, idx) => <li className="text-start" key={idx}>{item}</li>)
                    }
                </ol>
                <button
                    className=" px-3.5 py-3 mt-2  rounded-full text-white bg-[#9538E2] ">Upcoming...
                </button>
            </div>
        </div>
    )
}

NewProduct.propTypes = {
    product: PropTypes.object
}
