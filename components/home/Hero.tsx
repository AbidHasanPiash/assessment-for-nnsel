import Image from 'next/image'
import React from 'react'
import Button from '@/components/common/Button'

export default function Hero() {
    return (
        <div className="space-y-40">
            <div className="flex flex-col space-y-20">

                <div className="relative">
                    <Image
                        src={'/image/Blur-200-hero.png'}
                        width={517}
                        height={273}
                        alt="Blur-200"
                        className="absolute -top-[150px] right-0"
                    />
                    <h1 className="max-w-[891px] mx-auto text-center">Adaptive Logo Design for Your Brand</h1>
                </div>


                <Button className="uppercase tracking-wider mx-auto">
                    Explore works
                    <Image src={'/icon/arrow-right.png'} width={16} height={10} alt="arrow-right" className="ml-2" />
                </Button>
            </div>

            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center space-y-10">
                    <div className="relative">
                        <Image
                            src={'/image/Blur-200-hero.png'}
                            width={517}
                            height={273}
                            alt="Blur-200"
                            className="absolute -top-[150px] -left-[150px]"
                        />
                        <h3 className="font-bold">Let's get know <br /> about me closer</h3>
                    </div>
                    <p className="text-grayscale-50">
                        Aaronn is a New York-based visual designer focusing on branding
                        and visual identity. Her portfolio showcases her wide range of
                        work, spanning books, posters and web design.
                    </p>
                    <Button>
                        Discover More About Me
                    </Button>
                </div>
                <div className="place-items-end relative">
                    <div className="absolute right-[440px] bottom-10 w-[55px] h-[178px] ring-1 ring-brand rounded-full" />
                    <div className="absolute right-0 -top-[17px] w-[110px] h-[34px] ring-1 ring-brand rounded-full" />
                    <Image src={'/image/Man-hero.png'} width={454} height={506} alt="Man-hero" className="" />
                </div>
            </div>
        </div>
    )
}
