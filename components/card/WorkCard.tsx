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

export default function WorkCard({ work, className } : WorkCardProps) {
    return (
        <Link href={`works/${work?.id}`} className={cn(className, 'space-y-4')}>
            <Image src={work?.image} width={560} height={620} alt="Project" />
            <div className="flex flex-col items-center">
                <span className="text-[13px] text-grayscale-20">{work?.client}</span>
                <h4 className="font-syne">{work?.name}</h4>
            </div>
        </Link>
    )
}
