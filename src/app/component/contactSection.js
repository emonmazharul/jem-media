import Image from "next/image"
export function ContactSection() {
    return <>
        <section className="md:py-20 mb-14 md:mb-0">
            <div className="container md:w-[1200px] md:mx-auto ">
                <div className="flex flex-col md:flex-row justify-center md:justify-between">
                    <div className="md:w-[50%]">
                        <div className="text-colorOne text-2xl  md:text-5xl text-center md:text-left font-bold mb-10 md:mb-16">
                            <h1 className="md:mb-6">Let’s discuss </h1>
                            <h1>
                                your business’ <span className="text-[#40E0D0]">needs</span>
                            </h1>
                        </div>
                        <Image 
                            className="hidden md:block mx-auto"
                            width={400}
                            height={400}
                            src="/contact-image.png"
                        />
                        {/* <ul className="list-none text-colorOne md:ml-14 md:text-[20px] md:font-bold md:space-y-10">
                            <li className="md:space-x-2">
                                <Image className="inline" src="/envelope-icon.svg" width="30" height="30"/>
                                <span>JEMDigital@Gmail.com</span>
                            </li>
                            <li className="md:space-x-2">
                                <Image className="inline" src="/phone-icon.svg" width="30" height="30"/>
                                <span>+123 456 789</span>
                            </li>
                            <li className="md:space-x-2">
                                <Image className="inline" src="/location-icon.svg" width="30" height="30"/>
                                <span>123 Address Line </span>
                            </li>
                        </ul> */}
                    </div>
                    <div className="bg-colorOne mx-5 py-5 md:mx-0 md:w-[40%] md:p-5 rounded-[24px]">
                        <h6 className="text-white md:text-[20px] font-medium mb-2 md:mb-4 pl-4 md:pl-0">I am interesting in</h6>
                        <div className="mb-6 md:mb-10 pl-4 md:pl-0">
                            {
                                ['Website', 'Branding', 'Social Media', 'Advertising', 'Content', 'Other Please Specify'].map(item => {
                                    return <button className="py-2 px-4 mb-4 mr-4 md:mr-4 md:mb-4 md:px-4 md:py-2 border border-colorTwo text-white rounded-[8px] hover:bg-colorTwo" key={item}>{item}</button>
                                })
                            }
                        </div>
                        <div>
                            <form className="flex flex-wrap gap-x-4 gap-y-8 px-4 md:px-0 md:justify-between">
                                <input type="text" placeholder="Name" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%]" />
                                <input type="text" placeholder="Business name" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%]" />
                                <input type="email" placeholder="Email" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%]" />
                                <input type="phone" placeholder="Phone Number" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%]" />
                                <input type="text" placeholder="Leave a message" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[100%]" />
                                <div className="mt-10 w-full">
                                    <button className="bg-colorTwo text-white py-3 md:py-3 md:px-5 w-[100%] md:w-auto rounded-[16px]">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}