'use client'
import Image from "next/image"
import Link from "next/link"
import { useReducer, useRef } from "react"
export function Navbar(){

    const mobile_menu_ref = useRef(null);
    const hamburger_one_ref = useRef(null);
    const hamburger_two_ref = useRef(null);
    const hamburger_three_ref = useRef(null);

    return <>
        <nav className="bg-colorOne relative px-6 py-4 md:px-20 md:py-6">
            {/* <h4 className="text-white">Logo</h4> */}
            <div className="text-white font-bold flex md:gap-20 justify-between md:justify-evenly">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width="100"
                        height="80" 
                        className=" ease-in-out transition-all hover:scale-105"
                    />
                </Link>
                <Link href="#service" className="hidden md:inline md:pt-3">Service</Link>
                <Link href="#whychooseuse" className="hidden md:inline md:pt-3">Why Choose Us</Link>
                <Link href="/faq" className="hidden md:inline md:pt-3">FAQ</Link>
                <Link href="#" className="hidden md:inline bg-colorTwo md:px-8 rounded-full md:pb-3 md:pt-3">Unlock</Link>
                <Link 
                    href="#" 
                    onClick={(e) => {
                            e.preventDefault();
                            mobile_menu_ref.current.classList.toggle('hidden')
                        }
                    }
                    className="md:hidden"
                >
                    <Image 
                        src="/hamburger.svg"
                        width={25}
                        height={25}
                        className="mt-2"
                    />
                    
                </Link>
            </div>
            <div ref={mobile_menu_ref} className="hidden md:hidden bg-colorOne mt-3 absolute w-full left-0 mobile_nav_menu">
                <Link className="block text-white border-t-2 border-b-2 text-[17px] px-4 py-4" href="/service">service</Link>
                <Link className="block text-white border-b-2 text-[17px] px-4 py-4" href="/contact">contact</Link>
                <Link className="block text-white  border-b-2 text-[17px] px-4 py-4" href="/whychooseus">why choose us</Link>
                <Link className="block text-white border-b-2 text-[17px] px-4 py-4" href="/faq">FAQ</Link>

            </div>
        </nav>
    </>
}