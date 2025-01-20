import Image from 'next/image'
import React from 'react'

interface Project {
    image: string;
    name: string;
    client: string;
    category: string[];
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="space-y-[32px]">
            <Image src={project?.image} width={560} height={620} alt="Project" />
            <div className="space-y-[32px]">
                <div className="flex items-center space-x-[32px]">
                    <h4 className="font-syne">{project?.name}</h4>
                    <div className="w-[48px] h-px bg-brand" />
                </div>
                <div className="space-y-[8px]">
                    <div className="flex space-x-[16px] w-fit">
                        <span className="w-[56px] text-[14px] text-grayscale-60">Client:</span>
                        <span className="text-[14px] text-grayscale-20">{project?.client}</span>
                    </div>
                    {project?.category &&
                        <div className="flex space-x-[16px] w-fit">
                            <span className="w-[56px] text-[14px] text-grayscale-60">Work:</span>
                            {project?.category.map((cat, index) => (
                                <span key={index} className="text-[14px] text-grayscale-20">{cat}</span>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
