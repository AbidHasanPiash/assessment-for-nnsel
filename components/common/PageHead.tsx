import Image from 'next/image'
import React from 'react'
import Separator from './Separator'

interface PageHeadProps {
    title: string;
    description: string;
}

export default function PageHead({ title, description }: PageHeadProps) {
    return (
        <div className='space-y-20'>
            <div className="flex flex-col justify-center">
                <div className="relative">
                    <Image
                        src={'/image/Blur-200-hero.png'}
                        width={517}
                        height={273}
                        alt="Blur-200"
                        className="absolute -top-[150px] -left-[150px]"
                    />
                    <h3 className="font-bold">{title}</h3>
                </div>
                <p className="text-grayscale-50">{description}</p>
            </div>
            <Separator />
        </div>
    )
}
