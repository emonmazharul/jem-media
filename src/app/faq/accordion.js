'use client'
import React, { useState,useRef,useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';


export const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (isOpen) {
        const contentEl = contentRef.current;
        setHeight(contentEl.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [isOpen]);
  
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          className="w-full px-4 py-3 text-left text-black bg-[#C4D9FA] font-extrabold  md:text-[20px] transition-all duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{title}</span>
            <ChevronDownIcon
              className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            />
          </div>
        </button>
        <div
          ref={contentRef}
          style={{ height: `${height}px` }}
          className="transition-all duration-300 ease-in-out"
        >
          {content ? <div className="px-4 py-3 md:text-[16px] bg-[#C4D9FA]">{content}</div> : (
              <div className='px-4 py-3 md:text-[16px] bg-[#C4D9FA] space-y-4'>
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
          )}
        </div>
      </div>
    );
  };

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export const MyComponent = () => {
    const accordionItems = [
      { title: 'Section 1', content: 'Content for section 1' },
      { title: 'Section 2', content: 'Content for section 2' },
      { title: 'Section 3', content: 'Content for section 3' },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <Accordion items={accordionItems} />
      </div>
    );
  };

export default Accordion;