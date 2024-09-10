'use client'
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"

export function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobile_menu_ref = useRef(null);

    const toggleMenu = () => {
        const element_height = `h-[300px]`
        // console.log(eleme)
        setIsMenuOpen(!isMenuOpen);
        if (mobile_menu_ref.current.classList.contains(element_height)) {
            mobile_menu_ref.current.classList.remove(element_height);
        } else {
            mobile_menu_ref.current.classList.add(element_height);
        }
    };

    return (
        <nav className="bg-colorOne relative px-6 py-4 md:px-20 md:py-6">
            <div className="text-white font-bold flex md:gap-20 justify-between md:justify-evenly items-start">
                <Link href="/">
                    <Image
                        alt="jem-media homepage"
                        src="/logo.png"
                        width="100"
                        height="100" 
                        className="md:hidden ease-in-out transition-all hover:scale-105"
                    />
                    <Image
                        alt="jem-media homepage"
                        src="/logo.png"
                        width="160"
                        height="120" 
                        className="hidden md:block ease-in-out object-cover transition-all hover:scale-105"
                    />
                </Link>
                <Link href="#service" className="hidden md:inline md:pt-3">Services</Link>
                <Link href="#whychooseus" className="hidden md:inline md:pt-3">Why Choose Us</Link>
                <Link href="/faq" className="hidden md:inline md:pt-3">FAQ</Link>
                <Link href="https://calendly.com/jem-digital-info/15min?preview_source=et_card&month=2024-09" target="blank" className="hidden md:inline bg-colorTwo md:px-8 rounded-full md:pb-3 md:pt-3">
                    Unlock
                </Link>
                
                {/* Animated Hamburger Button */}
                <button 
                    className="md:hidden mt-1 w-8 h-8 relative focus:outline-none"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Toggle menu</span>
                    <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span 
                            aria-hidden="true" 
                            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2.5'}`}
                        ></span>
                        <span 
                            aria-hidden="true" 
                            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                        ></span>
                        <span 
                            aria-hidden="true" 
                            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2.5'}`}
                        ></span>
                    </div>
                </button>
            </div>
            <div id="mobile_menu" ref={mobile_menu_ref} className="md:hidden bg-colorOne mt-3 absolute z-20 w-full left-0 mobile_nav_menu h-0 overflow-hidden transition-[height] delay-100 ease-linear">
                <Link className="block text-white border-t-2 border-b-2 text-[17px] px-4 py-4" href="#services">Services</Link>
                <Link className="block text-white  border-b-2 text-[17px] px-4 py-4" href="#whychooseus">Why Choose Us</Link>
                <Link className="block text-white  border-b-2 text-[17px] px-4 py-4" href="#howitworks">
                    How It Works
                </Link>
                <Link className="block text-white  border-b-2 text-[17px] px-4 py-4" href="#contact">
                    Contact Us
                </Link>
                <Link 
                    className="block text-white border-b-2 text-[17px] px-4 py-4"
                    href="/faq"
                    onClick={(e) => {
                        mobile_menu_ref.current.classList.add('hidden');
                        redirect('/faq')
                    }}
                >
                    FAQ
                </Link>
            </div>
        </nav>
    )
}