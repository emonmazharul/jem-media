'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FormErrorMessage,FormSuccessMessage } from "./contactSection"

// import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const formHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        const email = e.target.elements.email.value;

        try {
            const response = await fetch('/api/client-email', {
                method:'POST',
                body: JSON.stringify({email,}),
            });
            setLoading(false);
            if(response.status != 201) {
                throw new Error('Request failed, Please try again');
            }
            const data = await response.json();
            setSuccess(data.message);

        } catch (e) {
            setLoading(false);
            setError(e.message);
            console.log(e);
        }
        
    }

    return <footer className="bg-colorOne pt-6 md:pt-14">
        <div className="container md:w-[1200px] md:mx-auto">
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 justify-center md:justify-between">
            <div className="order-3 md:order-1 md:w-[30%] md:flex md:justify-center">
                    <ul className="list-none flex justify-center gap-x-6 md:block md:mx-auto space-y-4">
                        <li className="mt-4 md:mt-0">
                            <a className="md:text-[18px] text-[14px] flex gap-x-2 text-white transition-all ease-in duration-100 hover:opacity-85"  href="https://www.facebook.com/profile.php?id=61564244532399" target="blank">
                                <Image
                                    alt="jem media facebook page"
                                    src="/facebook-icon.png"
                                    width="48"
                                    height="48"
                                    className="w-8 h-8 md:h-12 md:w-12"
                                />
                                <span className="pt-2 md:pt-3">JEM Digital UK</span>
                            </a>
                        </li>
                        
                        <li>
                            <a className="md:text-[18px] text-[14px] flex gap-x-2 text-white transition-all ease-in duration-100 hover:opacity-85" href="https://www.instagram.com/jemdigitaluk?igsh=MXA0b3dkaGMwdWtzeA%3D%3D&utm_source=qr" target="blank">
                                <Image
                                    alt="jem media instagram page"
                                    src="/insta-icon.png"
                                    width="48"
                                    height="48"
                                    className="w-8 h-8 md:h-12 md:w-12"
                                />
                                 <span className="pt-2 md:pt-3">@jemdigitaluk</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>   
                <div className="order-2 md:order-2 text-slate-300 text-center md:w-[30%]">
                    <div className="md:mb-4 space-y-3">
                        <h6 className="hidden md:block text-white text-2xl">Contact us</h6>
                        <div className="text-center px-4 md:px-0">
                            71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
                        </div>
                        <div className="text-slate-300">
                            <span>Contact us:</span>
                            <br/>
                            <Link href="mailto:info@jem-digital.com">info@jem-digital.com</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="order-1 md:order-3 text-center mt-4 md:mt-0 md:text-left md:w-[30%]">
                    <h6 className="text-white md:text-[20px] font-extrabold mb-4 md:mb-4" >JEM Digital Newsletter</h6>
                    <span className="text-white md:text-[16px]">Free Marketing Tips & Tricks for your Business!</span>
                    <form onSubmit={formHandler} className="mt-6">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your email"
                            className="rounded-[8px] w-[70%] md:w-[80%] py-3 pl-3 outline-none"

                        />
                        <br/>
                        <br/>
                        {success && <p className="mb-2 text-white text-[12px] md:text-[18px]  font-semibold">{success}</p>}
                        {error && <p className="mb-2 text-red-600 text-[12px] md:text-[18px]  font-semibold">Request failed! Pleae try again</p>}
                        <button type="submit" className="bg-colorTwo py-3 text-center w-[70%] text-white rounded-[8px] inline-block md:w-[80%]">{loading ? 'Subscribing' : 'Subscribe' }</button>
                    </form>
                </div>
                 
            </div>       
        </div>
        {/* website copyright  */}
        <div className="footer_copyright bg-[#FFFFFF]  py-3 mt-6 md:mt-10" >
            <h6 className="text-center">&#169; {new Date().getFullYear()} JEM Digital Ltd</h6>
        </div>
    </footer>
}