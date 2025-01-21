import WorkCard from '@/components/card/WorkCard'
import PageHead from '@/components/common/PageHead'
import React from 'react'

export const works = [
    {
        id:'1',
        name: 'Orvillebury',
        client: 'blue',
        image: '/image/Work-1.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
    {
        id:'2',
        name: 'West Lavada',
        client: 'green',
        image: '/image/Work-2.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
    {
        id:'3',
        name: 'Rempelshire',
        client: 'aqua',
        image: '/image/Work-3.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
    {
        id:'4',
        name: 'Delfinaland',
        client: 'lime',
        image: '/image/Work-4.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
    {
        id:'5',
        name: 'Buckridgeburgh',
        client: 'fuchsia',
        image: '/image/Work-5.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
    {
        id:'6',
        name: 'Pfefferstad',
        client: 'black',
        image: '/image/Work-6.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
    {
        id:'7',
        name: 'South Adrienne',
        client: 'purple',
        image: '/image/Work-7.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
    {
        id:'8',
        name: 'Lake Trevor',
        client: 'maroon',
        image: '/image/Work-8.png',
        features: [
            'Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. ',
            'And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills',
        ],
        featureImages: ['/image/Project-details-sub-1.png', '/image/Project-details-sub-2.png'],
    },
]

export default function WorkPage() {
    
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
