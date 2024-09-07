'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"

export function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobile_menu_ref = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (mobile_menu_ref.current.classList.contains('h-[180.50px]')) {
            mobile_menu_ref.current.classList.remove('h-[180.50px]');
        } else {
            mobile_menu_ref.current.classList.add('h-[180.50px]');
        }
    };

    return (
        <nav className="bg-colorOne relative px-6 py-4 md:px-20 md:py-6">
            <div className="text-white font-bold flex md:gap-20 justify-between md:justify-evenly">
                <Link href="/">
                    <Image
                        alt="jem-media homepage"
                        src="/logo.png"
                        width="100"
                        height="80" 
                        className="ease-in-out transition-all hover:scale-105"
                    />
                </Link>
                <Link href="#service" className="hidden md:inline md:pt-3">Services</Link>
                <Link href="#whychooseus" className="hidden md:inline md:pt-3">Why Choose Us</Link>
                <Link href="/faq" className="hidden md:inline md:pt-3">FAQ</Link>
                <Link href="#contact" className="hidden md:inline bg-colorTwo md:px-8 rounded-full md:pb-3 md:pt-3">Unlock</Link>
                
                {/* Animated Hamburger Button */}
                <button 
                    className="md:hidden mt-1 w-8 h-8 relative focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
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
            <div ref={mobile_menu_ref} className="md:hidden bg-colorOne mt-3 absolute z-20 w-full left-0 mobile_nav_menu h-0 overflow-hidden transition-[height] delay-100 ease-linear">
                <Link className="block text-white border-t-2 border-b-2 text-[17px] px-4 py-4" href="#services">Services</Link>
                <Link className="block text-white  border-b-2 text-[17px] px-4 py-4" href="#whychooseus">why choose us</Link>
                <Link className="block text-white border-b-2 text-[17px] px-4 py-4" href="/faq">FAQ</Link>
            </div>
        </nav>
    )
}