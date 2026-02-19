'use client'

import React from 'react'
import Link from 'next/link'
import { socialData } from '@/assets/staticData/socialData'

interface SocialLinksProps {
  vertical?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}


const SocialLinks = ( { vertical, size, className}: SocialLinksProps ) => {
  return (
    <div className={`flex items-center gap-4 ${vertical ? 'flex-col' : 'flex-row'} ${className}`}>
        {
            socialData.map((item) => (
                <Link href={item.url} target='_blank' key={item.id} >
                    <item.icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8'}`} />
                </Link>
            ))
        }
    </div>
  )
}

export default SocialLinks