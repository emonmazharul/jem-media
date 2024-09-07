'use client'

import { useState, useEffect } from 'react'

export default function Accordion({children,title,id,active}) {

  const [accordionOpen, setAccordionOpen] = useState(false)

  useEffect(() => {
    setAccordionOpen(active)
  }, [])

  return (
    <div className="py-2">
      <h2 >
        <button
          className="w-full rounded-[20px] relative text-center font-semibold text-[14px] md:text-[20px] text-colorOne bg-[#C4D9FA] px-2 py-2"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-01`}
        >
          <span>{title}</span>
          <svg  className="fill-indigo-500 shrink-0 ml-8 absolute right-3 top-[50%] translate-y-[-50%] " width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </svg>           
        </button>        
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
