export function ContactSection() {
    return <>
        <section className="bg-[#F7F7F7] md:py-20">
            <div className="container md:w-[1200px] md:mx-auto ">
                <div className="flex justify-between">
                    <div className="md:w-[50%]">
                        <div className="text-colorOne text-5xl font-bold md:mb-24">
                            <h1 className="md:mb-6">Let’s discuss </h1>
                            <h1>
                                your business’ <span className="text-[#40E0D0]">needs</span>
                            </h1>
                        </div>
                        <ul className="list-none text-colorOne md:ml-14 md:text-[20px] md:font-bold md:space-y-10">
                            <li>

                                JEMDigital@Gmail.com
                            </li>
                            <li>
                                +123 456 789
                            </li>
                            <li>
                                123 Address Line 
                            </li>
                        </ul>
                    </div>
                    <div className="bg-colorOne md:w-[40%] md:p-5 md:rounded-[24px]">
                        <h6 className="text-white md:text-[20px font-medium] md:mb-4">I am interesting in</h6>
                        <div className="mb-10">
                            {
                                ['Website', 'Branding', 'Social Media', 'Advertising', 'Content', 'Other Please Specify'].map(item => {
                                    return <button className="md:mr-4 md:mb-4 md:px-4 md:py-2 border border-colorTwo text-white rounded-[8px] hover:bg-colorTwo" key={item}>{item}</button>
                                })
                            }
                        </div>
                        <div>
                            <form className="flex flex-wrap gap-x-4 gap-y-8 justify-between">
                                <input type="text" placeholder="Name" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo md:w-[45%]" />
                                <input type="text" placeholder="Businessname" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo md:w-[45%]" />
                                <input type="email" placeholder="Email" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo md:w-[45%]" />
                                <input type="phone" placeholder="Phone Number" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo md:w-[45%]" />
                                <input type="text" placeholder="Leave a message" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo md:w-[100%]" />
                                <div className="mt-10">
                                    <button className="bg-colorTwo md:py-3 md:px-5 rounded-[16px]">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}