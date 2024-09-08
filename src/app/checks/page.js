'use client'
import { useState,useRef,useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import { MyComponent } from './accordion';
import { UnlockButton } from './unlockButton';




export default function CheckComponent() {
    return <div>
        <h1 className='md:mt-20 md:mb-10 text-center md:text-6xl'>FAQ your question answered</h1>
        <MyComponent/>
        <div>
          <h1 className='text-5xl'>checking unlock button</h1>
          <UnlockButton/>
        </div>
    </div>
}