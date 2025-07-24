"use client"

import { IconTrophy } from "@tabler/icons-react"
import Link from "next/link";


export function Announcement() {
  return (
    <div className="relative flex h-fit w-full flex-col overflow-y-auto">
      <div className='shadow-input text-base mx-auto w-fit mb-6 rounded-full bg-white border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 px-3 py-1'>
          <Link href="https://modelence.com/hackathon" className="flex items-center gap-2">
            <IconTrophy className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
            <p className='font-medium text-neutral-500 dark:text-neutral-400'>Modelence Hackathon, Deadline: July 20 2025, Build AI apps with Modelence and win up to $500!</p>
          </Link>
        </div>
    </div>
  );
}


