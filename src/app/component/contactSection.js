'use client'
import Image from "next/image"
import { useState, useEffect } from "react";

export function ContactSection() {
    const [interest,setInterest] = useState('');
    
    const [form_loading,setFormLoading] = useState(false);
    // this success means the form state of form success
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');

    const setting_interest = (new_interest) => {
        setInterest(new_interest);
    }

    const form_handler = async (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');
        setFormLoading(true);
        const all_inputs = {
            name:e.target.elements['name'].value,
            business_name:e.target.elements['business_name'].value,
            email:e.target.elements['email'].value,
            phone : e.target.elements['phone'].value,
            message_text : e.target.elements['message_text'].value
        }
        
        const keys = ['name', 'business_name', 'email', 'phone', 'message_text'];
        for (let i=0; i<keys.length; i++) {
            if(interest == '' || !all_inputs[keys[i]]) {
                setFormLoading(false);
                setSuccess('');
                setError('Please fill in all the fields');
                return;
            }
        }
       
        try {
            const message_request = await fetch('/api/send-message', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        interest,
                        ...all_inputs
                    }
                )
            });
            const data = await message_request.json();
            setFormLoading(false);
            setError('');
            setSuccess(data.message);
            setInterest('');
            e.target.reset();
        } catch (e) {
            setFormLoading(false)
            setSuccess('')
            setError('Please read the instruction and  try again');
        }
        
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setError('');
            setSuccess('');
        }, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, [error,success])

    return <>
        <section id="contact" className="md:py-20 mb-14 md:mb-0">
            <div className="container md:w-[1200px] md:mx-auto ">
                <div className="flex flex-col md:flex-row justify-center md:justify-between">
                    <div className="md:w-[50%]">
                        <div className="text-2xl  md:text-5xl text-center md:text-left font-bold mb-10 md:mb-16">
                            <h1 className="md:mb-6">Let’s discuss </h1>
                            <h1>
                                your business’ <span className="text-[#40E0D0]">needs</span>
                            </h1>
                        </div>
                        <Image 
                            className="hidden md:block mx-auto"
                            alt="contact us to share you information"
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
                        <h6 className="text-white md:text-[20px] font-medium mb-2 md:mb-4 pl-4 md:pl-0">
                            I’m interested in {interest ? ( interest.length < 20 ? interest : interest.slice(0,20) + ' ...' ) : '...'}
                        </h6>
                        {/* <div className="mb-6 md:mb-10 pl-4 md:pl-0">
                            {
                                ['Website', 'Branding', 'Social Media', 'Advertising', 'Content', 'Other (Please Specify)'].map(item => {
                                    return <button className="py-2 px-4 mb-4 mr-4 md:mr-4 md:mb-4 md:px-4 md:py-2 border border-colorTwo text-white rounded-[8px] hover:bg-colorTwo" key={item}>{item}</button>
                                })
                            }
                        </div> */}
                        <div>
                            <form 
                                onSubmit={form_handler} 
                                className="flex flex-wrap gap-x-4 gap-y-8 px-4 md:px-0 md:justify-between"
                            >
                                <div className="mb-4 md:mb-6 md:pl-0">
                                    {
                                        ['Website', 'Branding', 'Social Media', 'Advertising', 'Content'].map(item => {
                                            return <button 
                                                onClick={() => {setting_interest(item)}} 
                                                name="interest" 
                                                type="button" 
                                                value={item}
                                                className={`py-2 px-4 mb-4 mr-4 md:mr-4 md:mb-4 md:px-4 md:py-2 border border-colorTwo text-white rounded-[8px] hover:bg-colorTwo ${interest == item ? 'bg-colorTwo' : ''} `} 
                                                key={item}
                                            >
                                                {item}
                                            </button>
                                        })
                                    }
                                    <input
                                        type="text"
                                        onChange={(e) => setInterest(e.target.value.trim())}
                                        className="bg-colorOne py-2 px-4 mb-4 mr-4 md:mr-4 md:mb-4 md:px-4 md:py-2 border border-colorTwo text-white rounded-[8px] focus:outline-none"
                                        placeholder="Other (Pleae Specify)"

                                    />
                                </div>
                                <input name="name" required type="text" placeholder="Name" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%] focus:bg-colorOne focus:outline-none" />
                                <input name="business_name" required type="text" placeholder="Business name" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%] focus:outline-none" />
                                <input name="email" required type="email" placeholder="Email" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%] focus:outline-none" />
                                <input name="phone" required type="phone" placeholder="Phone Number" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[45%] focus:outline-none" />
                                <input name="message_text" required type="text" placeholder="Leave a message" className="block font-medium text-white border-b-2 bg-colorOne border-b-colorTwo w-[100%] focus:outline-none" />
                                
                                {
                                    form_loading == false && error ? <FormErrorMessage/> : null
                                }
                                {
                                    form_loading == false && success ? <FormSuccessMessage/> : null
                                }

                                <div required className="mt-10 w-full">
                                    <button className="bg-colorTwo text-white py-3 md:py-3 md:px-5 w-[100%] md:w-auto rounded-[16px]">
                                        <Image
                                            className="inline mr-2"
                                            alt="submit message"
                                            src="plane-icon.svg"
                                            width={20}
                                            height={20}
                                        />
                                        {form_loading ? 'Sending' : 'Send message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export function FormErrorMessage() {
    return <div className="flex gap-x-3 bg-red-200 text-colorOne w-full px-4 py-2 text-[14px] md:text-[20px]" >
        <Image 
            alt="sorry could not submit your form. please check the info and try again."
            width={20}
            height={20}
            src="/x-mark.svg"
        />
        <span>
            Please fill in all the fields
        </span>
    </div> 
}

export function FormSuccessMessage() {
    return <div className="flex gap-x-3 bg-green-200 text-colorOne w-full px-4 py-2 text-[14px] md:text-[20px]" >
        <Image 
            alt="successfully send your message"
            width={20}
            height={20}
            src="/check-solid.svg"
        />
        <span>
            Succesfully send your messages
        </span>
    </div>
}