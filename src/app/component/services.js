export function Services(){
    return <>
        <section  className="service_section  py-20">
            <h1 className="text-5xl md:mb-12 text-colorOne font-extrabold text-center">
                Services
            </h1>
            <div className="container md:mx-auto md:w-[1200px]">
                <div className="text-center flex flex-wrap justify-between gap-2 gap-y-10">
                    {/* service one */}
                    <div className="md:w-[45%]">
                        <h1 className="text-colorOne font-bold text-4xl mb-8 md:min-h-20">Website</h1>
                        <p className="text-colorOne text-xl font-light">
                            Design your website to increase traffic 
                            and leads for your business, and keep it 
                            up to date frequently with the website 
                            management included in your package! 
                        </p>
                    </div>
                    {/* service two */}
                    <div className="md:w-[45%]">
                        <h1 className="text-colorOne font-bold text-4xl mb-8 md:min-h-20">Social Media Management</h1>
                        <p className="text-colorOne text-xl font-light">
                        Schedule posts and direct traffic to your business 
                        with the creation and management of your social 
                        media pages. 
                        </p>
                    </div>
                    <div className="md:w-[30%]">
                        <h1 className="text-colorOne font-bold text-4xl mb-8 md:min-h-20">Content Marketing</h1>
                        <p className="text-colorOne text-xl font-light">
                        Record, edit, and upload high quality content of your work across all social media pages to give potential customers more insight into your work
                        </p>
                    </div>
                    <div className="md:w-[30%]">
                        <h1 className="text-colorOne font-bold text-4xl mb-8 md:min-h-20">Advertising</h1>
                        <p className="text-colorOne text-xl font-light">
                        Increase sales by reaching a larger audience with our results driven campaigns to increase your online visibility and drive more people to your business.
                        </p>
                    </div>
                    <div className="md:w-[30%]">
                        <h1 className="text-colorOne font-bold text-4xl mb-8 md:min-h-20">Business Branding</h1>
                        <p className="text-colorOne text-xl font-light">
                        Fresh logo and brand designs are essential to standing out in a crowded market. We offer unlimited revisions across all our packages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}