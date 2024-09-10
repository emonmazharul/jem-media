import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
    return <main className="md:mb-30">
        <div className="container md:mx-auto md:w-[1200px]">
            <div className="flex flex-col md:flex-row align-middle">
                <div className="md:w-1/2 md:pt-32 ">
                    <div className="text-center md:text-left my-6 md:mb-12 md:mt-0 space-y-2 md:space-y-6">
                        <h1 className="text-3xl md:text-5xl font-extrabold">Unlock your <span className="text-colorTwo">Potential</span></h1>
                        <h1 className="text-3xl md:text-5xl font-extrabold">Unlock your <span className="text-colorTwo">Brand</span></h1>
                    </div>
                    <div className="text-center md:text-left md:px-0 px-4">
                        <p className="text-center md:text-left text-[14px] md:text-[18px] mb-2 md:mb-4">
                            Take your business to the next level with innovative marketing solutions to grow your client base and sales.
                        </p>
                        <p className="mb-6 md:mb-20  text-black text-center md:text-left  text-[14px] md:text-[18px]">
                            Our team handle the marketing, you focus on your passion
                        </p>
                        <Link href="https://calendly.com/jem-digital-info/15min?preview_source=et_card&month=2024-09"  target="blank" className="bg-colorTwo text-colorOne font-extrabold px-4 py-2 md:px-8 md:py-4 md:text-[30px] rounded-full">Unlock</Link>
                    </div>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0 md:pt-20 mb-20 md:mb-16 bg-no-repeat bg-center bg-cover " >
                    <Image
                        alt="We are offering variety of digital services. Check out and unlock" 
                        className="object-cover md:mx-auto"
                        src={"/heroimage.svg"}
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </div>
    </main>
}