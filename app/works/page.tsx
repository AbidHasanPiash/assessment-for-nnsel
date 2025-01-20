import WorkCard from '@/components/card/WorkCard'
import PageHead from '@/components/common/PageHead'
import React from 'react'

export default function WorkPage() {
    const works = [
        {
            name: 'Orvillebury',
            client: 'blue',
            image: '/image/Work-1.png'
        },
        {
            name: 'West Lavada',
            client: 'green',
            image: '/image/Work-2.png'
        },
        {
            name: 'Rempelshire',
            client: 'aqua',
            image: '/image/Work-3.png'
        },
        {
            name: 'Delfinaland',
            client: 'lime',
            image: '/image/Work-4.png'
        },
        {
            name: 'Buckridgeburgh',
            client: 'fuchsia',
            image: '/image/Work-5.png'
        },
        {
            name: 'Pfefferstad',
            client: 'black',
            image: '/image/Work-6.png'
        },
        {
            name: 'South Adrienne',
            client: 'purple',
            image: '/image/Work-7.png'
        },
        {
            name: 'Lake Trevor',
            client: 'maroon',
            image: '/image/Work-8.png'
        },
    ]
    return (
        <div className='space-y-20 py-40'>
            <PageHead title='My works' description='Showcase About Works'/>            
            <div className='grid grid-cols-6 gap-10'>
                {works?.map((work, index) => (
                    <WorkCard 
                        key={index} 
                        work={work} 
                        className={index >= 3 && index < 5 ? 'col-span-3' : 'col-span-2'}
                    />
                ))}
            </div>
        </div>
    )
}
