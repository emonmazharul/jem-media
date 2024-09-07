'use client'
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b  border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden bg-colorOne transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-blue-50">{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg shadow-md overflow-hidden bg-[#C4D9FA]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

const accordionItems = [
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly by composing utility classes.'
    },
    {
      title: 'How does Next.js differ from React?',
      content: 'Next.js is a React framework that provides additional features like server-side rendering, static site generation, and API routes, making it easier to build production-ready React applications.'
    },
    {
      title: 'What are the benefits of using an accordion?',
      content: `Accordions help organize content in a compact way, allowing users to focus on specific information without being overwhelmed by all the content at once. They're particularly useful for FAQs, product details, and other content that can be logically grouped.`
    }
  ];




export default function CheckComponent() {
    return <div>
        <h1 className='md:mt-20 md:mb-10 text-center md:text-6xl'>FAQ your question answered</h1>
        <div className="md:mb-20 flex items-center justify-center p-4">
            <Accordion items={accordionItems} />
        </div>
    </div>
}