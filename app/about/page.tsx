import PageHead from '@/components/common/PageHead'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
    return (
        <div className='space-y-20 py-40'>
            <PageHead title='About Me' description='Little Brief About Myself' />

            <div className='grid grid-cols-2 gap-20 p-6 place-content-center'>
                <h1 className='text-[80px]'>
                    My mission is to make design easier.
                </h1>
                <div className='text-[21px] p-2 text-secondary-light place-items-center w-full'>
                    Create custom Designs with AARONN that converts more visitors
                    than any website. With lots of unique design, you can easily
                    select a logo without hassle. Create custom landing logos with
                    AARONN that converts more visitors than any website. With lots
                    of revisions, you can easily build a logo without porbolem.
                </div>
            </div>

            <div className="relative flex items-center justify-between gap-10 p-6">
                <div className="absolute left-0 top-6 w-[55px] h-[178px] ring-1 ring-brand rounded-full" />
                <div className="absolute -right-6 bottom-0 w-[178px] h-[55px] ring-1 ring-brand rounded-full" />
                <Image src={'/image/Man-about-me-1.png'} width={361} height={515} alt="Man-about-me-1" />
                <Image src={'/image/Man-about-me-2.png'} width={750} height={515} alt="Man-about-me-2" />
            </div>

            <div className='space-y-10 px-6'>
                <h3 className='font-syne'>Follow me on:</h3>
                <div className='flex items-center justify-between'>
                    {['Dribble','Twitter','Facebook', 'Instagram'].map(item=>(
                        <Link 
                            href={'#'}
                            key={item}
                            className='text-[32px] uppercase font-inter text-secondary-light font-bold'>
                            {item}
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
