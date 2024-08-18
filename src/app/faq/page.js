// 'use client'
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import  Accordion from '@/app/component/accordion'
import { text } from '@fortawesome/fontawesome-svg-core'

const faqs = [
    {
      title: "Why do I need Digital Marketing?",
      text: "In today’s digital age, your customers are online. Digital marketing allows you to reach them effectively and affordably. It offers precise targeting, real-time performance tracking, and higher ROI compared to traditional methods. Enhance your online presence, stay ahead of competitors, and engage your audience with personalised content. Our expertise ensures your brand remains relevant and visible, driving growth and success. Partner with us to unlock your full digital potential!",
      active: false,
    },
    {
      title: "How do I request a consultation?",
      text:"Please submit a query using the contact form at the bottom of the page and a specialist from our team will respond to you as soon as possible. Alternatively, if you wish to schedule a call, click the unlock button and a specialist can talk you through the best options for your business, at a time best suited to you!",
      active: false,
    },
    {
      title: "How do you measure the success of a campaign?",
      text:"We measure success through key performance indicators and return on investment (ROI). By analyzing data, we are able to track traffic, leads, and sales. Additionally, we assess brand awareness, customer feedback, and overall campaign reach. Continuous monitoring and reporting ensure we optimise strategies for maximum impact and effectiveness.",
      active: false,
    },
    {
      title: "How long does it take to see results?",
      text:"A fresh website can instantly boost your presence online! Our management team ensures your website is always up to date and looking fresh. In addition, our services will increase your visibility online, creating a portfolio for future potential customers to look at. This means you can expect to see some result almost instantly, although we prioritise building long term relationships with you, as we care about your long term growth, not just your short term success!",
      active: false,
    },
    {
      title: "What sets your agency apart? I've had negative experiences previously.",
      text:"Your growth is our success! We prioritise transparency, results, and client satisfaction. Our tailored strategies are based on your unique needs, backed by data-driven insights and industry expertise. Unlike others, we offer regular updates and clear communication, ensuring you’re always informed. Our dedicated support team work relentlessly to exceed your expectations. Contact us and experience the difference.",
      active: false,
    },
    {
      title: "What is your pricing structure?",
      text:"Every business is unique, and your needs are also unique. Upon completing a consultation call with a member of our team, we will provide custom monthly pricing for everything you require, meaning you will never pay for something unnecessary! Our prices are extremely competitive, to ensure you receive the best value for money.",
      active: false,
    },
    {
      title: "How involved will I need to be in the process?",
      text:`As little as you wish! We understand your passion lies in your business, and it’s our job to ensure you focus on your passion, while we focus on delivering exceptional growth to your online presence and sales.

        We value your input too! Some business owners enjoy giving suggestions for fresh content ideas, or updates for their website. Our team are always working to make sure your needs are met, whether that involves minimal involvement or a full hands-on approach.`,
      // text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title:"How much does it typically cost to work with a marketing agency in the UK?",
      text:"",
      active:false,
    }
  ]

export default function Profilepage() {
    return <section className='my-10 mx-5 md:my-[80px]'>
        <h1 className='text-center text-colorOne my-3 md:my-7 text-2xl md:text-5xl'>FAQ-Your Question Answered</h1>
        <div className='container md:w-[800px] md:mx-auto'>
            {
                faqs.map((faq,index) => 
                    <Accordion  key={index} title={faq.title} id={faq.id} active={faq.active}> 
                        {
                          index+1 !== faqs.length ? <p className='text-[12px] md:text-[18px] text-black p-4 md:leading-6 rounded-[20px] bg-[#C4D9FA]'> {faq.text} </p> : 
                          <div className='bg-[#C4D9FA] md:rounded-[20px]  text-black text-[12px] md:text-[18px] p-4 md:p-4 space-y-4'>
                              <p className='md:leading-5'>We adjust our prices very competitively, within the middle of market rates in most cases.</p>
                              <p className='md:leading-5'>
                                Prices vary largely across the UK, depending on size of business, industry, and location. However, here are some typical prices 
                                you would expect to pay for some of the common services in the UK:
                              </p>
                              <p className='md:leading-6'>
                                <b>Marketing Strategy Development</b> - Typically, developing a full marketing strategy for small-medium businesses can cost from £500 to £1,500 as a one-time fee.
                              </p>
                              <p className='md:leading-6'>
                                <b>Website Building and Management</b> - Between £250 and £1000 a month to build and manage your website full time.
                              </p>
                              <p className='md:leading-6'>
                                <b>Social Media Management</b> - Between £250 and £1000+ a month to create posts and maintain all your social media platforms.
                              </p>
                              <p className='md:leading-6'>
                                <b>SEO (Search Engine Optimisation)</b> - Between £500 and £2000 depending on how competitive your industry is.
                              </p>
                              <p className='md:leading-6'>
                                <b>PPC (Pay-Per-Click) Management</b> Between £750 and £2500+ is an average you can expect to pay to create and manage ad campaigns, e.g. Google ads.
                              </p>
                              <p className='md:leading-6'>
                                Please note that these figures are approximate and may vary based on your specific business needs. However, we are committed to offering you the best possible pricing.
                              </p>
                          </div>
                        }
                    </Accordion> )
            }
        </div>
    </section>
    // return <section id="faq">
    //     <h1 className='text-center text-colorOne font-bold text-5xl md:my-7' > 
    //         FAQ- Your Question Answered
    //     </h1>
    //     <div className='md:mx-auto md:w-[800px] text-center'>
    //         <Accordion>
    //             <AccordionItem className='bg-red-300'>
    //                 <AccordionItemHeading className='bg-red-300'>
    //                     <AccordionItemButton className='accordion__button bg-black text-white'>
    //                         What harsh truths do you prefer to ignore?
    //                     </AccordionItemButton>
    //                 </AccordionItemHeading>
    //                 <AccordionItemPanel>
    //                     <p>
    //                         Exercitation in fugiat est ut ad ea cupidatat ut in
    //                         cupidatat occaecat ut occaecat consequat est minim minim
    //                         esse tempor laborum consequat esse adipisicing eu
    //                         reprehenderit enim.
    //                     </p>
    //                 </AccordionItemPanel>
    //             </AccordionItem>
    //             <AccordionItem>
    //                 <AccordionItemHeading>
    //                     <AccordionItemButton>
    //                         Is free will real or just an illusion?
    //                     </AccordionItemButton>
    //                 </AccordionItemHeading>
    //                 <AccordionItemPanel>
    //                     <p>
    //                         In ad velit in ex nostrud dolore cupidatat consectetur
    //                         ea in ut nostrud velit in irure cillum tempor laboris
    //                         sed adipisicing eu esse duis nulla non.
    //                     </p>
    //                 </AccordionItemPanel>
    //             </AccordionItem>
    //         </Accordion>
    //     </div>
    // </section>

    // return  <div class='accordion-group' data-accordion="default-accordion">
    //     <div class='accordion pb-4 border-b border-solid border-gray-200' id='basic-heading-one-default'>
    //         <button class='accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600' aria-controls='basic-collapse-one-default'>
    //         <h5> How to create an account? </h5>
    //         <svg class='text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    //         <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
    //         </svg>
    //         </button>
    //         <div id='basic-collapse-one-default' class='accordion-content w-full px-0 overflow-hidden pr-4 ' aria-labelledby='basic-heading-one-default'>
    //         <p class='text-base text-gray-600 leading-6'>To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.</p>
    //         </div>
    //     </div>
    //     <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-two-default'>
    //     <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-two-default'>
    //     <h5> Have any trust issue? </h5>
    //     <svg class='text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    //     <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
    //     </svg>
    //     </button>
    //     <div id='basic-collapse-two-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-two-default'>
    //     <p class='text-sm text-gray-500 leading-6'>Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.</p>
    //     </div>
    //     </div>
    //     <div class='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-default'>
    //     <button class='accordion-toggle group  inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600' aria-controls='basic-collapse-three-default'>
    //     <h5> How can I reset my password? </h5>
    //     <svg class='text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    //     <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path>
    //     </svg>
    //     </button>
    //     <div id='basic-collapse-three-default' class='accordion-content  w-full px-0 overflow-hidden  pr-4 ' aria-labelledby='basic-heading-three-default'>
    //     <p class='text-sm text-gray-500 leading-6'>Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.</p>
    //     </div>
    //     </div>
    // </div>
    
}