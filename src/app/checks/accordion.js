
import React, { useState,useRef,useEffect } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/24/solid';


const AccordionItem = ({ title, content }) => {
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
          className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-all duration-300 ease-in-out"
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
          <div className="px-4 py-3 bg-white">{content}</div>
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