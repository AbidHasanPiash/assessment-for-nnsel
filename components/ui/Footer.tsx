import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className='h-[740px] bg-footer'>
            <div className='max-w-[1146px] h-full mx-auto flex flex-col justify-between py-20'>
                <div className='space-y-10'>
                    <h4 className='font-syne text-center text-brand'>Get in Touch With Us</h4>
                    <h2 className='font-syne text-center underline'>info@aaronn.com</h2>
                </div>

                <div className='space-y-10'>
                    <div className='grid grid-cols-3 gap-36 w-full'>
                        <Image src={'/image/Brand-logo-white.svg'} width={241} height={42.42} alt="Brand-Logo" />
                        <div>
                            <h4 className='font-syne'>Street Avenue 21, CA</h4>
                            <h4 className='font-syne'>0-8-00-888-000</h4>
                        </div>
                        <div>
                            <h4 className='font-syne'>+9 0283353</h4>
                            <div className='flex items-center space-x-2'>
                                <Image src={'/icon/facebook.png'} width={24} height={24} alt="facebook-Logo" />
                                <Image src={'/icon/twitter.png'} width={24} height={24} alt="twitter-Logo" />
                                <Image src={'/icon/instagram.png'} width={24} height={24} alt="instagram-Logo" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-px bg-border'/>
                    <h4 className='font-syne text-center'>© 2023. Ideapeel. All rights reserved. </h4>
                </div>
            </div>
        </footer>
    )
}
