export function Services(){
    return <>
        <section id="service" className="service_section mb-10 md:mb-0  md:py-20">
            <h1 className="text-3xl md:text-5xl mb-10 md:mb-20 text-black font-extrabold text-center">
                Services
            </h1>
            <div className="container md:mx-auto md:w-[1200px]">
                <div className="text-center flex flex-wrap justify-center md:gap-8 gap-y-8 md:gap-y-16">
                    {/* service one */}
                    <div className="service_card md:px-4 md:py-4 md:w-[35%]">
                        <h1 className="font-bold text-2xl mb-3 md:mb-4">Website</h1>
                        <p className="px-4 text-[16px] leading-6 font-light">
                            Design your website to increase traffic 
                            and leads for your business, and keep it 
                            up to date frequently with the website 
                            management included in your package! 
                        </p>
                    </div>
                    {/* service two */}
                    <div className="service_card md:px-4 md:py-4 md:w-[35%]">
                        <h1 className="font-bold text-xl mb-3 md:mb-4" >Social Media Management</h1>
                        <p className="px-4 text-[16px] leading-6 font-light">
                        Schedule posts and direct traffic to your business 
                        with the creation and management of your social 
                        media pages. 
                        </p>
                    </div>
                    <div className="service_card md:px-4 md:py-4 md:w-[30%]">
                        <h1 className="font-bold text-2xl mb-3 md:mb-4">Content Marketing</h1>
                        <p className="px-4 text-[16px] leading-6 font-light">
                        Record, edit, and upload high quality content of your work across all social media pages to give potential customers more insight into your work
                        </p>
                    </div>
                    <div className="service_card md:px-4 md:py-4 md:w-[30%]">
                        <h1 className="font-bold text-2xl mb-3 md:mb-4">Advertising</h1>
                        <p className="px-4 text-[16px] leading-6 font-light">
                        Increase sales by reaching a larger audience with our results driven campaigns to increase your online visibility and drive more people to your business.
                        </p>
                    </div>
                    <div className="service_card md:px-4 md:py-4 md:w-[30%]">
                        <h1 className="font-bold text-2xl mb-3 md:mb-4 ">Business Branding</h1>
                        <p className="px-4 text-[16px] leading-6 font-light">
                        Fresh logo and brand designs are essential to standing out in a crowded market. We offer unlimited revisions across all our packages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}