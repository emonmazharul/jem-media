'use client'
import Image from "next/image"
import { useState, useEffect, useCallback ,useRef } from "react";
import { InterestButton } from "./interestButton";

export default InterestButton;


export function ContactSection() {
    const [interest,setInterest] = useState('');
    const [custom_interest, setCustomInterest] = useState('');
    const [svgFillColor, setSvgFillColor] = useState('white');
    const [form_loading,setFormLoading] = useState(false);
    // this success means the form state of form success
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');

    const setting_interest = (new_interest) => {
        if (interest.includes(new_interest)) {
            let modified_interest = interest.replace(new_interest, '');
            setInterest(modified_interest);
            return;
        }
        setInterest(interest.trim() + ' ' + new_interest );
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
            if( (interest.length == 0 && custom_interest.length == 0) || !all_inputs[keys[i]]) {
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
                        interest: interest + '  and' + custom_interest ,
                        ...all_inputs
                    }
                )
            });
            const data = await message_request.json();
            setFormLoading(false);
            setError('');
            setSuccess(data.message);
            setInterest('');
            setCustomInterest('');
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
        }, 12000)
        return () => {
            clearTimeout(timer);
        }
    }, [error,success])

    return <>
        <section id="contact" className="md:py-20 mt-20 md:mt-0  mb-20">
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
                            className="hidden md:block mx-auto transition-all hover:scale-105 delay-75 ease-in-out"
                            alt="contact us to share you information"
                            width={400}
                            height={400}
                            src="/contact-image.png"
                        />
                        
                    </div>
                    <div className="bg-colorOne mx-5 py-5 md:mx-0 md:w-[40%] md:p-5 rounded-[24px]">
                        <h6 className="text-white md:text-[20px] font-medium mb-2 md:mb-4 pl-4 md:pl-0">
                            {/* I’m interested in {interest ? ( interest.length < 20 ? interest : interest.slice(0,20) + ' ...' ) : '...'} */}
                            {/* I am interested in {
                                interest.map((val,index) => <span className="inline-block mr-2" key={index}>{val}</span>)
                            } */}
                            I am interested in {interest.trim()}
                            {custom_interest ? <span className="inline-block">{custom_interest}</span>:null}
                        </h6>
                        <div>
                            <form 
                                onSubmit={form_handler} 
                                className="flex flex-wrap gap-x-4 gap-y-8 px-4 md:px-0 md:justify-between"
                            >
                                <div className="mb-4 md:mb-6 md:pl-0">
                                    {/* {
                                        ['WebWebsite   key={item} 
                                            />
                                        })
                                    } */}
                                    {['Website', 'Branding', 'Social Media', 'Advertising', 'Content'].map(item => (
                                        <InterestButton 
                                            key={item}
                                            interest={interest}
                                            setting_interest={setting_interest} 
                                            item={item} 
                                        />
                                    ))}
                                    <input
                                        type="text"
                                        value={custom_interest}
                                        onChange={(e) => {
                                            setCustomInterest(e.target.value);
                                        }}
                                        className="bg-colorOne py-2 px-4 mb-4 mr-4 md:mr-4 md:mb-4 md:px-4 md:py-2 border border-colorTwo text-white rounded-[8px] focus:outline-none"
                                        placeholder="Other (Please Specify)"

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
                                    <button 
                                        className="bg-colorTwo text-white py-3 md:py-3 md:px-5 w-[100%] md:w-auto rounded-[16px] font-bold transition-all  ease-in duration-150 hover:bg-white hover:text-black hover:border-3 hover:border-black"
                                        onMouseEnter={() => { 
                                           setSvgFillColor('black');
                                        }}
                                        onMouseLeave={() => { 
                                            setSvgFillColor('white');

                                        }}
                                    >
                                        <svg className="inline w-5 h-5 mr-2 transition-all" xmlns="http://www.w3.org/2000/svg" fill={svgFillColor} viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
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

export function FormErrorMessage({error}) {
    return <div className="flex gap-x-3 bg-red-200 text-colorOne w-full px-4 py-2 text-[14px] md:text-[20px]" >
        <Image 
            alt="sorry could not submit your form. please check the info and try again."
            width={20}
            height={20}
            src="/x-mark.svg"
        />
        <span>
            {error || 'Please fill in all the fields'}
        </span>
    </div> 
}

export function FormSuccessMessage({message}) {
    return <div className="flex gap-x-3 bg-green-200 text-colorOne w-full px-4 py-2 text-[14px] md:text-[20px]" >
        <Image 
            alt="successfully send your message"
            width={20}
            height={20}
            src="/check-solid.svg"
        />
        <span>
           { message || 'Succesfully send your messages' } 
        </span>
    </div>
}