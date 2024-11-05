import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Hero } from "./Hero";



export const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            
        // category fatching

        fetch("productCategories.json")
            .then(res => res.json())
            .then(data => setCategories(data))


    }, [])

    const handleActiveBtn = (categoryBtn) => {


        const activeBtns = document.querySelectorAll('.active-btn')
        activeBtns.forEach(button => button.classList.remove('active-btn'))
        const selectBtn = document.getElementById(categoryBtn);
        selectBtn.classList.add("active-btn")
        
                // fetch categorywise data
        if(categoryBtn !== "All-product") {
            const categoryData = categories.find(category => category.category_name === categoryBtn)
            setProducts(categoryData.products)
        }
                // fetch all category data
        else {
            fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
        }
      
    }


    return (
        <div>

            {/*  Hero section */}
            <Hero />

            {/*   Product cards */}
            <div className="mt-56 lg:mt-72 max-w-7xl mx-auto">
                <h4 className="text-2xl font-bold mb-8 text-center">Explore Cutting-Edge Gadgets</h4>
                {/* categories */}
                <div className="flex gap-5 mt-5 justify-center">

                    {/* buttons */}

                    <div className="flex flex-col w-40 px-4 py-5 gap-3 shadow-md rounded-lg ml-4 h-[270px]">
                        <button onClick={() => handleActiveBtn("All-product")} id="All-product" className="btn rounded-full active-btn  px-5  ">All Product</button>
                        {categories.map(category => (<button onClick={() => handleActiveBtn(category.category_name)} key={category.category_name} id={category.category_name} className="btn rounded-full  px-5 bg-gray-200 ">{category.category_name}</button>))}
                    </div>

                    <div id="container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                           products.map(product => <Card key={product.product_id} product={product} /> ) 
                        }

                    </div>
                </div>

            </div>

        </div>

    )
}

