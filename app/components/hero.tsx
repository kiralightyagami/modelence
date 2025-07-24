"use client"
import React from 'react'
import Image from 'next/image'
import { GetStartedButton } from './ui/get-started-button'
import { BackgroundBeams } from './ui/background-beams'
import { BackgroundBeamsLight } from './ui/background-beams-light'
import { useTheme } from '../lib/theme-context'
import { BentoGrid, BentoGridItem } from './ui/card'
import { CardDemo, CardDemoLight } from './works-with'

export const Hero = () => {
  const { theme } = useTheme()
  
  return (
    <div className='flex flex-col items-center justify-center'>
        {theme === 'dark' ? <BackgroundBeams /> : <BackgroundBeamsLight />}
        <div className='shadow-input text-base mx-w-xs w-fit flex items-center gap-2 justify-center mt-12 mb-12 rounded-full bg-white border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 px-3 py-1'>
            <p className='font-medium text-neutral-500 dark:text-neutral-400'>Backend by</p> <Image src="https://modelence.com/ycombinator.svg" alt="backend" width={100} height={100} />
        </div>
        <div className='text-6xl max-w-4xl mb-6 font-bold text-spacing-wide text-center text-neutral-900 dark:text-neutral-100'>
        All-in-one TypeScript Platform for Startups
        </div>
        <div className='text-2xl max-w-2xl text-center text-neutral-500 dark:text-neutral-400'>
        Ship production AI apps 10x faster with built-in auth, database and LLM integration
        </div>
       <GetStartedButton />
       <div className='mt-10 w-full'>
       <div className="flex items-center justify-center mb-4">
            <p className="text-lg text-neutral-500 dark:text-neutral-300">WORKS WITH</p>
        </div>
       {theme === 'dark' ? <CardDemo /> : <CardDemoLight />}
       </div>
    </div>
  )
}
