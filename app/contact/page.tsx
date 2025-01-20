'use client'
import PageHead from '@/components/common/PageHead'
import React from 'react'

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Send Succesfull');
    }
    return (
        <div className='space-y-20 py-40'>
            <PageHead title='Contact Me' description='For Any Project Knock Us' />

            <div className='grid grid-cols-2 gap-20 place-content-center'>
                <h1 className='text-[80px]'>
                    Get in Touch With Us
                </h1>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-10'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id='name'/>
                    </div>

                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input id='subject'/>
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <input id='message'/>
                    </div>
                    <button type='submit' className='w-fit px-10 py-3 uppercase bg-brand rounded-full'>
                        <p>Send</p>
                    </button>
                </form>
            </div>

        </div>
    )
}
