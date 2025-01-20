import React from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import ProjectCard from '@/components/card/ProjectCard'

export default function Project() {
    const projects = [
        {
            name: 'Brand Journey Improvements',
            image: '/image/Project-1.png',
            client: 'Organc',
            category: ['Branding', 'Logo design']
        },
        {
            name: 'Brand Grouping',
            image: '/image/Project-2.png',
            client: 'FR',
            category: ['Branding', 'Logo design']
        },
        {
            name: 'NFT Glimps',
            image: '/image/Project-3.png',
            client: 'Rumanda',
            category: ['NFT Design']
        },
        {
            name: 'Brand Suggestions',
            image: '/image/Project-4.png',
            client: 'T3d',
            category: ['NFT logo']
        },
    ]
    return (
        <div className='space-y-20'>
            <div className="flex flex-col items-center justify-center space-y-20">
                <div className="relative">
                    <Image
                        src={'/image/Blur-200.png'}
                        width={517}
                        height={273}
                        alt="Blur-200"
                        className="absolute -top-[150px] -right-[150px]"
                    />
                    <h2 className="font-bold">My Projects Highlight</h2>
                </div>
                <Button variant="outlined" className="uppercase tracking-wider mx-auto">
                    Explore More
                    <Image src={'/icon/arrow-right.png'} width={16} height={10} alt="arrow-right" className="ml-2" />
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-20">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
