import { useLoaderData, useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";



export const ProductDetails = () => {
    const data = useLoaderData();
    const { productId } = useParams();


    const product = data.find(product => product.product_id === productId)
    const { product_image, product_title, price, description, availability, rating } = product

    return (
        <div className="bg-[#9538E2]  text-center pt-5 space-y-4 p-4 relative md:pb-36 md:mb-[340px] mb-[400px] sm:mb-80 pb-40 ">
            <h2 className="font-bold text-xl text-white ">Product Details</h2>
            <p className=" text-white pb-5 max-w-2xl  mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="card card-side bg-base-100 shadow-xl items-center justify-center  absolute transform left-1/2 -translate-x-1/2   top-1/2  md:translate-y-0 w-[430px] sm:w-[580px] lg:w-[740px]">
                <img className="rounded-xl w-52 h-64 px-2 md:w-60"
                    src={product_image}
                    alt="" />

                <div className="flex flex-col items-start py-6 px-5 gap-1.5">
                    <h2 className="font-bold text-base text-start">{product_title}</h2>
                    <p className="font-semibold">Price: ${price}</p>
                    <button className="text-lime-800 px-2 py-1 bg-lime-200 border border-lime-800 rounded-full ">{availability ? "In Stock" : "Out of Stock"}</button>
                    <p className="text-sm text-start text-gray-600 pr-6">{description}</p>
                    <h5 className="font-bold">Specification:</h5>
                    <ol className="list-decimal text-gray-600 ml-7">
                        {
                            product.Specification.map((item, idx) => <li className="text-start" key={idx}>{item}</li>)
                        }
                    </ol>
                    <h5 className="font-bold">Rating <i className="fa-solid fa-star text-[#ffd700]"></i></h5>
                    <div className="flex items-center gap-2 ">
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={rating}
                            isHalf={true}
                            edit={false}

                        />
                        <span className="text-sm p-2.5 py-1 bg-gray-300 rounded-full">{rating}</span>

                    </div>
                    <div className="flex items-center gap-2
                    ">
                        <button className="btn px-4 py-0.5  rounded-full text-white bg-[#9538E2] hover:text-[#9538E2]  hover:bg-white hover:outline outline-[#9538E2]">Add to Cart <IoCartOutline /> </button>
                        <i className="fa-regular fa-heart px-2 py-1 text-[#9538E2] cursor-pointer text-xl bg-gray-200 rounded-full"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
