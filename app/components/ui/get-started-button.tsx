"use client"
import React from 'react'
import { IconArrowRight } from '@tabler/icons-react'

interface GetStartedButtonProps {
  text?: string
  redirectUrl?: string
  className?: string
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text = "GET STARTED",
  redirectUrl = "https://docs.modelence.com/quickstart",
  className = ""
}) => {
  const handleClick = () => {
    window.open(redirectUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      className={`w-fit flex items-center justify-center gap-2 mt-10 bg-violet-700 hover:bg-violet-800 dark:bg-violet-800 dark:hover:bg-violet-700 text-white dark:text-neutral-300 px-4 py-3 rounded-md transition-colors duration-200 font-medium cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <button className='flex items-center justify-center gap-2'>
        <p className='text-md font-medium'>{text}</p>
      </button>
      <div>
        <IconArrowRight className='mt-0.5 w-5 h-6' />
      </div>
    </div>
  )
} 