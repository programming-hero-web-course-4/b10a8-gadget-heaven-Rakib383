export const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 footer-center  p-8 p mt-48 pb-10">
            <aside>
                <h4 className="text-xl font-bold mb-2">Gadget Heaven</h4>
                <p className="text-gray-500">
                    Leading the way in cutting-edge technology and innovation.
                </p>
               
            </aside>
            <div className="divider w-[1280px] mx-auto "></div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-3 md:gap-16 items-start lg:gap-24 ">
                <nav className="flex flex-col gap-2 text-gray-500">
                    <h6 className="font-bold text-lg text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col gap-2 text-gray-500">
                    <h6 className="font-bold text-lg text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav className="flex flex-col gap-2 text-gray-500">
                    <h6 className="font-bold text-lg text-black">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>

                </nav>
            </div>
        </footer>
    )
}
