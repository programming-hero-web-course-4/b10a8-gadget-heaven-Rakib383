import { useEffect, useState } from "react"
import { NewProduct } from "./NewProduct"

export const NewProductsList = () => {

    const [newProducts,setNewProducts] = useState([])

    useEffect(()=>{
        fetch("newProducts.json")
        .then(res => res.json())
        .then (data => setNewProducts(data))
    },[])

    return (

        <div className="flex flex-col gap-2 items-center mt-8">
            <h2 className="font-bold text-xl text-purple-600">Our upcoming products</h2>
            <p className="font-semibold"> Don't miss the chance to get early Discount</p>
            {
                newProducts.map(product => <NewProduct key={product.product_id} product = {product}/>)
            }
        </div>
    )
}
