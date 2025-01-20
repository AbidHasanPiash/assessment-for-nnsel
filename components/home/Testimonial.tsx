import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
    return (
        <div className="flex gap-10">
            <div className="space-y-10 w-fit pt-10">
                <div className="relative">
                    <Image
                        src={'/image/Blur-200-hero.png'}
                        width={517}
                        height={273}
                        alt="Blur-200"
                        className="absolute -top-[150px] -left-[150px]"
                    />
                    <h2 className="font-syne">Testimonial</h2>
                </div>
                <p className="text-grayscale-50">
                    “Aaronn was fantastic to work with from start to finish. We were looking for
                    a simple, stand-out logo and he delivered. I tried designing the logo myself
                    thinking I wouldn't need to pay the money for a professional graphic designer
                    but I was very wrong. Working with Aaronn was worth every penny and was
                    surprisingly affordable! I remember him saying simplicity is key to a successful
                    logo and boy he was right. I can't thank Aaronn enough for his effort and
                    professionalism. I would recommend him to anyone looking for a design!”
                </p>
                <h4 className="font-syne">-Martin lee</h4>
            </div>
            <div className="w-[199px] h-[183px]">
                <Image src={'/icon/quote.png'} width={199} height={183} alt="quote" className="w-full h-full object-contain" />
            </div>
        </div>
    )
}
