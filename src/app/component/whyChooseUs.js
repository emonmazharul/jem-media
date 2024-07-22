export default function WhyChooseUs() {
    return <>
        <section className="md:py-20">
            <h1 className="text-5xl md:mb-12 text-colorOne font-extrabold text-center">
                Why choose us
            </h1>
            <div className="contanier  md:mx-auto md:w-[1200px]">
                <div className="flex gap-10 justify-center text-center">
                    {/* div one */}
                    <div className="md:w-[30%] md:py-7 md:px-7 md:rounded-[40px] choose_us_card transition-all ease-in hover:scale-105">
                        <h1 className="text-4xl mb-6 font-extrabold text-black">Customised Solutions</h1>
                        <p className="text-2xl">
                            Personalised marketing strategies tailored to 
                            your business needs to ensure optimal results and growth.
                        </p>
                    </div>
                    {/* div two */}
                    <div className="md:w-[30%] md:py-7 md:px-7 md:rounded-[40px] choose_us_card transition-all ease-in hover:scale-105 ">
                        <h1 className="text-4xl md:min-h-20 mb-6 font-extrabold text-black">Locally Driven</h1>
                        <p className="text-2xl ">
                        We’re all about helping local businesses, not leaving you hanging with long distance communication.
                        </p>
                    </div>
                    {/* div three */}
                    <div className="md:w-[30%] md:py-7 md:px-7 md:rounded-[40px] choose_us_card transition-all ease-in hover:scale-105">
                        <h1 className="text-4xl mb-6 md:min-h-20 font-extrabold text-black">Results Oriented</h1>
                        <p className="text-2xl">
                        We focus on delivering results, your growth is our success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}