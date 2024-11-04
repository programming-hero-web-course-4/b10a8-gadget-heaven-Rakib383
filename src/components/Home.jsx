import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Hero } from "./Hero";



export const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])

    return (
        <div>
            
            {/*  Hero section */}
                    <Hero />

            {/*   Product cards */}
            <div className="mt-56 lg:mt-72 max-w-7xl mx-auto">
                <h4 className="text-2xl font-bold mb-8 text-center">Explore Cutting-Edge Gadgets</h4>
                {/* categories */}
                <div className="flex gap-5 mt-5 justify-center">
                    <div className="flex flex-col w-40 px-4 py-5 gap-3 shadow-md rounded-lg ml-4 h-[324px]">
                        <button className="btn rounded-full hover:text-white hover:bg-[#9538E2] px-5 bg-gray-200 ">All Product</button>
                        <button className="btn rounded-full hover:text-white hover:bg-[#9538E2] px-5 bg-gray-200 ">Laptops</button>
                        <button className="btn rounded-full hover:text-white hover:bg-[#9538E2] px-5 bg-gray-200 ">Phones</button>
                        <button className="btn rounded-full hover:text-white hover:bg-[#9538E2] px-5 bg-gray-200 ">Smart Watches</button>
                        <button className="btn rounded-full hover:text-white hover:bg-[#9538E2] px-5 bg-gray-200 ">MacBook</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            products.map(product => <Card key={product.product_id} product={product} />)
                        }

                    </div>
                </div>

            </div>

        </div>

    )
}

