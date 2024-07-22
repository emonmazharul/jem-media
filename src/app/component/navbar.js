import Image from "next/image"
export function Navbar(){
    return <>
        <nav className="bg-colorOne px-20 py-6 gap-20">
            {/* <h4 className="text-white">Logo</h4> */}
            <div className="text-white font-bold flex gap-20 justify-evenly">
                <a href="#">
                    <Image
                        src="/logo.png"
                        width="100"
                        height="80"
                    />
                </a>
                <a href="#" className="md:pt-3">Service</a>
                <a href="#" className="md:pt-3">Why Choose Us</a>
                <a href="#" className="md:pt-3">FAQ</a>
                <a href="#" className="bg-colorTwo md:px-8 rounded-full md:pb-3 md:pt-3">Unlock</a>
            </div>
        </nav>
    </>
}