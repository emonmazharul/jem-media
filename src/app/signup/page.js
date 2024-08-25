'use client'
import Image from "next/image"
import { useState } from "react"

export function MyInput({classNames,input_placeholder,input_name}) {
    return <input 
        className={`signup_bg_color px-4 border-b-black outline-none border-b-2 font-medium text-[12px] md:text-[20px] focus:border-b-2 placeholder:text-slate-600 ${classNames}`}  
        name={input_name} 
        placeholder={input_placeholder}
        />
}

export function MyButton({classNames,btn_style,btn_text,clickHandler}) {
    return <button type="input" onClick={clickHandler} className={`${classNames} ${btn_style == 'primary' ? 'bg-colorOne text-white ' : 'text-black border= signup_bg_color'} rounded-[8px] text-[12px] md:text-[18px]  text-center py-2  border-colorOne border-2 transition-all ease-out hover:border-white`}>
        {btn_text}
    </button>
}

export default function SignupPage() {
    const [addBounsFeature,setBonusFeatureState] = useState('no');
    const [idealSite,setIdealSite] = useState('no');

    return <section 
            className="signup_bg_color container md:my-20 rounded-[24px] py-10 md:py-20 px-5 md:px-10 my-10 mx-auto  max-w-[400px] md:max-w-[1200px]" 
        >
            <h1 className="text-center font-bold text-2xl  md:text-6xl mb-5 md:mb-10">
                Customer Website Form
            </h1>
            <h6 className=" text-[14px] md:text-[20px] md:text-left font-medium mb-8 md:mb-16 break-words">
                Fill in this form so the website team at JEM Digital can better understand what your 
                business does and what services you offer to your clients. Please be as detailed as possible with all questions. Upon submission, 
                one of our team will review your input and be able to get started with the website design!
            </h6>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex gap-x-5 mb-10 md:mb-16">
                    <MyInput classNames="w-1/2" input_placeholder="Name" input_name="name" />
                    <MyInput classNames="w-1/2" input_placeholder="Business name" input_name="business_name" />
                </div>
                <div className="mb-10 md:mb-16">
                    <label className="text-[14px] md:text-[20px]">
                        1. Describe all the services you offer, stating each one and briefly describing 
                        what the service does. (Please be as detailed as possible!) 
                    </label>
                    <br/>
                    <br/>
                    <label className="text-[14px] md:text-[20px] md:mb-7">
                        e.g. <strong>“Scaffolding"</strong> - Our expert team of scaffolders will be on site to complete 
                        jobs with industry leading equipment. We are on hand to assist with any 
                        extra help that will speed up your home rennovation.”
                    </label>
                    <MyInput input_name="input_bonus_feature" classNames="mt-8 md:mt-16 w-full" input_placeholder="start typing " />
                    {/* <input  type="text" className="md:mt-5 w-full bg-none" ></input> */}
                </div>
                <div className="mb-10 md:mb-16">
                    <label className="text-[14px] md:text-[20px] md:mb-5">
                        2.Do you have any pictures of your work or business that you can attach for us to add to your website?
                    </label>
                    <div className="mt-3 md:mt-5 flex gap-x-3">
                        <MyButton classNames="w-1/2" clas btn_style="primary" btn_text="yes"/>
                        <MyButton classNames="w-1/2" btn_style="secondary" btn_text="no"/>
                    </div>
                </div>
                <div className="mb-10 md:mb-16">
                    <label className="text-[14px] md:text-[20px]">
                        2.2) Would you be interested in our content services?
                    </label>
                    <p className="text-[14px] md:text-[20px] md:mt-2">
                        We take high quality pictures and videos of your work that we can add to your site, 
                        to really make your business stand out from the crowd, and let people know the quality of your work!
                    </p>
                    <div className="mt-3 md:mt-5 flex gap-x-3">
                        <MyButton classNames="w-1/3" btn_style="primary" btn_text="Yes"/>
                        <MyButton classNames="w-1/3" btn_style="secondary" btn_text="No"/>
                        <MyButton classNames="w-1/3" btn_style="secondary" btn_text="I would like more info"/>
                    </div>
                </div>
                <div className="mb-10 md:mb-16">
                    <label className="text-[14px] md:text-[20px]">
                        3) Are there any bonus features you can think of that you would like added to your website (e.g.  colour schemes, buttons, forms, graphics, integrations)
                    </label>
                    <div className="flex gap-x-5 mt-3 md:mt-5 mb-8 md:mb-16">
                        <MyButton clickHandler={() => setBonusFeatureState('yes')} classNames="w-1/2" clas btn_style="primary" btn_text="yes"/>
                        <MyButton clickHandler={() => setBonusFeatureState('no')} classNames="w-1/2" btn_style="secondary" btn_text="no"/>
                    </div>
                    {
                        addBounsFeature == 'yes' && <div className="mt-3 md:mt-7">
                        <MyInput input_name="three_input" classNames="w-full" input_placeholder="Start typing " />
                        </div>
                    }
                </div>
                <div className="mb-10 md:mb-16">
                    <label className="text-[14px] md:text-[20px]">
                        4. Are there examples of websites that you would like to attach for inspiration? (Paste any links below if yes)
                    </label>
                    <div className="flex gap-x-5 mt-3 md:mt-5 mb-8 md:mb-16">
                        <MyButton clickHandler={() => setIdealSite('yes')} classNames="w-1/2" clas btn_style="primary" btn_text="Yes"/>
                        <MyButton clickHandler={() => setIdealSite('no')} classNames="w-1/2" btn_style="secondary" btn_text="No"/>
                    </div>
                    {
                        idealSite == 'yes' && <div className="mt-3 md:mt-7">
                            <MyInput input_name="four_input" classNames="w-full" input_placeholder="Start typing " />
                        </div>
                    }
                </div>
                <div className="mb-10 md:mb-16">
                    <label className="text-[14px] md:text-[20px]">
                        5. Is there any extra information that you would like to mention that would help describe your business further (e.g. how long you’ve been a business, how the business started, any important history/achievements of the company)
                    </label>
                    <p className="text-[14px] md:text-[20px] mt-3 md:mt-5 mb-5 md:mb-7 ">
                        Ps. All achievements and milestones are worth mentioning!
                    </p>
                    <div>
                        <MyInput input_name="five_input" classNames="w-full" input_placeholder="Start typing " />
                    </div>
                </div>

                <div className="mb-10 md:mb-16">
                    <label className="text-[14px] md:text-[20px]">
                        6.Would you like to discuss any of these questions further on a call with one of our team?
                    </label>
                    <p className="text-[14px] md:text-[20px] my-3">
                        We will reach out to you to schedule an enquiry call if you agree to this!
                    </p>
                    <div className="flex gap-x-5 mt-3 md:mt-5 mb-5 md:mb-16">
                        <MyButton classNames="w-1/2" clas btn_style="primary" btn_text="yes"/>
                        <MyButton classNames="w-1/2" btn_style="secondary" btn_text="no"/>
                    </div>
                    {/* <div className="mt-3 md:mt-7">
                        <MyInput input_name="six_input" classNames="w-full" input_placeholder="Start typing " />
                    </div> */}
                </div>
                <button type="submit" className="bg-colorTwo px-8 md:px-16 py-4 rounded-[16px] md:text-[20px]">
                    <Image
                        className="inline mr-2"
                        src="plane-icon.svg"
                        width={20}
                        height={20}
                    />
                    Submit
                </button>
            </form>
    </section>
}