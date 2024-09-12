import Image from "next/image"
// import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return <footer className="bg-colorOne pt-6 md:pt-14">
        <div className="container md:w-[1200px] md:mx-auto">
            <div className="flex flex-col md:flex-row gap-y-3 justify-center md:justify-between">
                <div className="md:w-1/3">
                    <Image 
                        alt="jem media logo"
                        src="/JEM-Digital 1.png"
                        width={300}
                        height={300}
                        className="hidden md:block"
                    />     
                </div>  
                <div className="text-slate-300 text-center md:w-1/3">
                    <div className="md:mb-4 space-y-3">
                        <h6 className="text-white text-2xl">Contact us</h6>
                        <div className="text-center px-4 md:px-0">
                            71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
                        </div>
                        <div className="text-slate-300">
                            <span>Contact us:</span>
                            <br/>
                            <span>info@jem-digital.com</span>
                        </div>
                    </div>
                    
                </div>
                <div className="md:w-1/3 md:flex md:justify-center">
                    <ul className="list-none flex justify-center gap-x-6 md:block md:mx-auto space-y-4">
                        <li className="mt-4 md:mt-0">
                            <a className="md:text-[18px] text-[14px] flex gap-x-2 text-white transition-all ease-in duration-100 hover:opacity-85"  href="https://www.facebook.com/profile.php?id=61564244532399" target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-8 h-8 md:h-12 md:w-12" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                                <span className="pt-2 md:pt-3">JEM Digital UK</span>
                            </a>
                        </li>
                        
                        <li>
                            <a className="md:text-[18px] text-[14px] flex gap-x-2 text-white transition-all ease-in duration-100 hover:opacity-85" href="https://www.instagram.com/jemdigitaluk?igsh=MXA0b3dkaGMwdWtzeA%3D%3D&utm_source=qr" target="blank">
                                <Image
                                    alt="jem media instagram logo"
                                    src="/instagram-icon.svg"
                                    width="48"
                                    height="48"
                                    className="w-8 h-8 md:h-12 md:w-12"
                                />
                                 <span className="pt-2 md:pt-3">@jemdigitaluk</span>
                            </a>
                        </li>
                        {/* <li>
                            <a href="#" target="blank">
                                <Image
                                    alt="jem media x/twitter logo"
                                    src="/x-icon.svg"
                                    width="30"
                                    height="30"
                                />
                            </a>
                        </li> */}
                    </ul>
                </div>   
            </div>       
        </div>
        {/* website copyright  */}
        <div className="footer_copyright py-3 mt-6 md:mt-10" >
            <h6 className="text-center">&#169; {new Date().getFullYear()} JEM Digital Ltd</h6>
        </div>
    </footer>
}