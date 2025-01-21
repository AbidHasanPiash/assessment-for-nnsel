import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Work {
    id: string;
    image: string;
    name: string;
    client: string;
}

interface WorkCardProps {
    work: Work;
    className?: string;
}

export default function WorkCardOthers({ work, className } : WorkCardProps) {
    return (
        <Link href={`works/${work?.id}`} className={cn(className, 'space-y-4')}>
            <Image 
                src={work?.image} 
                width={360} 
                height={465} 
                alt="Project" 
                className="w-[360px] h-[465px] object-cover rounded-3xl"
            />
            <div className="flex flex-col px-6">
                <h4 className="font-syne">{work?.name}</h4>
                <span className="text-[18px] text-grayscale-50">{work?.client}</span>
            </div>
        </Link>
    )
}
