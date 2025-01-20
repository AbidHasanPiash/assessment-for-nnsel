import PageHead from '@/components/common/PageHead'
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
        </div>
    )
}
