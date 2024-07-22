import Image from "next/image"
export function HeroSection() {
    return <main>
        <div className="container md:mx-auto md:w-[1200px]">
            <div className="flex align-middle  md:py-24">
                <div className="md:w-1/2 md:pt-20 ">
                    <div className="md:mb-12 space-y-6">
                        <h1 className="text-5xl font-extrabold">Unlock your <span className="text-colorTwo">brand</span></h1>
                        <h1 className="text-5xl font-extrabold">Unlock your <span className="text-colorTwo">potential</span></h1>
                    </div>
                    <p className="text-colorOne md:text-[18px] md:mb-4">
                        Take your business to the next level with innovative marketing solutions to grow your client base and sales.
                    </p>
                    <p className="md:mb-12 text-colorOne md:text-[18px]">
                        Our team handle the marketing, you focus on your passion
                    </p>
                    <a href="#" className="bg-colorTwo text-colorOne font-extrabold md:px-8 md:py-4 md:text-[30px] rounded-full">Unlock</a>
                </div>
                <div className="md:w-1/2 bg-no-repeat bg-center bg-cover " >
                    <Image 
                        className="object-cover"
                        src={"/heroimage.svg"}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </main>
}