
import { useNavigate, useOutletContext } from "react-router-dom";
import filterImg from "../assets/filter.png"
import { CartProduct } from "./CartProduct"
import modalImg from "../assets/Group.png"


export const CartList = () => {

    const { cartItems, totalPrice, descendingSort, handlePurchase} = useOutletContext();
    const navigate = useNavigate();

    
   


    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center px-10 py-5 mb-7 ">
                <span className="font-bold">Cart</span>
                <div className="space-x-4 flex items-center">
                    <strong className="font-bold mr-2">Total cost: ${totalPrice} </strong>
                    <div className="flex items-center px-2 rounded-full py-1 border border-[#9538E2] ">
                        <button onClick={descendingSort} className=" px-2 py-1 text-sm text-[#9538E2] font-semibold">Sort by Price</button>
                        <img className="w-4 h-4" src={filterImg} alt="" />
                    </div>

                    <button  onClick={() => {
                        if(cartItems.length > 0) {
                            document.getElementById('my_modal_1').showModal()
                        }
                          
                    }
                       
                         } className={` ${totalPrice == 0 ? " opacity-40 cursor-not-allowed " : "hover:text-[#9538E2] hover:bg-white outline"} bg-[#9538E2] text-white px-3.5 py-2 text-sm rounded-full`}>Purchase</button>

                </div>
            </div>
            <div className="space-y-5 mx-8">
                {
                    cartItems.map((item, idx) => <CartProduct key={idx} item={item} />)

                }
            </div>

            <dialog id="my_modal_1" className="modal w-[400px] mx-auto">
                <div className="modal-box items-center justify-center flex flex-col gap-1">
                    <img src={modalImg} alt="" />
                    <h3 className="font-bold text-lg mt-3">Payment Successfull</h3>
                    <div className="divider m-0"></div>
                    <p className="py-2">Thanks for purchasing.</p>
                    <h5 className="font-bold">Total: ${totalPrice}</h5>
                    <div className="modal-action w-full ">
                        <form method="dialog" className=" px-6 w-full">

                            <button onClick={() => {
                                handlePurchase()
                                navigate("/")
                            }} className="btn w-full rounded-full ">Close</button>

                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    )
}

