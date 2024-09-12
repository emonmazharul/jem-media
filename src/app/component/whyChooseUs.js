import Image from "next/image"
export default function WhyChooseUs() {
    return <>
        <section id="whychooseus" className="md:mb-7 md:pt-20 md:pb-10">
            <h1 className="text-3xl md:text-5xl mb-10 md:mb-12 font-extrabold text-center">
                Why Choose Us
            </h1>
            <div className="contanier  md:mx-auto md:w-[1200px]">
                <div className="flex flex-col md:flex-row gap-y-14 md:gap-y-0 md:gap-10 md:justify-center text-center px-3 md:px-0">
                    {/* div one */}
                    <div className="md:w-[30%] md:py-7 md:px-7 md:rounded-[40px] choose_us_card transition-all duration-300 ease-in hover:scale-105">
                        <Image
                            alt="check ouir tailored service" 
                            className="mx-auto  object-cover  mb-3 md:mb-6"
                            src="/Scissors Vector (1).svg"
                            width={139}
                            height={139}
                        />
                        <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-3 md:mb-4">Tailored</h1>
                        <p className="text-sm md:text-2xl">
                        Personalised marketing strategies tailored to your business needs to ensure optimal results and growth.
                        </p>
                    </div>
                    {/* div two */}
                    <div className="md:w-[30%] md:py-7 md:px-7 md:rounded-[40px] choose_us_card transition-all duration-300 ease-in hover:scale-105 ">
                        <Image 
                            alt="get service from local people"
                            className="mx-auto object-cover mb-3 md:mb-3"
                            src="/Vector Local.svg"
                            width={139}
                            height={139}
                        />
                        <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-3 md:mb-4">Local</h1>
                        <p className="text-sm md:text-2xl ">
                            {"We’re all about helping local businesses. We won’t leave you hanging with long distance communication."}
                        </p>
                    </div>
                    {/* div three */}
                    <div className="md:w-[30%] md:py-7 md:px-7 md:rounded-[40px] choose_us_card transition-all duration-300 ease-in hover:scale-105">
                        <Image
                            alt="these are the reason why anybody should choose us"
                            className="mx-auto object-cover mb-3 md:mb-6" 
                            src="/Vector Results.svg"
                            width={139}
                            height={139}
                        />
                        <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-3 md:mb-4">Result</h1>
                        <p className="text-sm md:text-2xl">
                            {"We focus on delivering results. Your growth is our success."}    
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}