import Image from "next/image"
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return <footer className="bg-colorOne md:py-14">
        <div className="container md:w-[1200px] md:mx-auto">
            <div className="flex justify-between">
                <div>
                    <Image 
                        src="/JEM-Digital 1.png"
                        width={300}
                        height={300}
                    />     
                </div>  
                <div className="text-white">
                    <div className="md:mb-4">
                        <h6>Contact us</h6>
                        <span>
                            070707070707
                        </span>
                        <br/>
                        <span>
                            jemmedia@gmail.com
                        </span>
                    </div>
                    <ul>
                        <li>Address line 1</li>
                        <li>Adress line 2</li>
                        <li>my post code</li>
                    </ul>
                </div>
                <div>
                <ul className="list-none">
                    <li>
                        <a href="" target="blank">
                            <FaFacebook/>
                        </a>
                    </li>
                    <li>
                    <a href="" target="blank">
                            <FaFacebook/>
                        </a>
                    </li>
                    <li>
                        <a href="" target="blank">
                            <FaFacebook/>
                        </a>
                    </li>
                </ul>
            </div>   
            </div>       
        </div>     
    </footer>
}