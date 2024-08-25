import  Accordion from '@/app/component/accordion'

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
    
}