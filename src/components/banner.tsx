import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

function Banner() {
    return (
        <section className='py-16'>
            <Image src="/images/bg1.svg" alt='bg1.png' width={989} height={643} className='absolute top-0 left-[50%] max-w-[50%] md:block hidden' />
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10 relative z-10'>
                <div>
                    <h3 className='md:text-4xl text-2xl font-medium text-[#99C12A]'>
                        Welcome
                    </h3>
                    <h1 className='md:text-[90px] text-5xl leading-none font-bold '>
                        Your Ride your price.
                    </h1>
                    <h3 className='md:text-4xl text-2xl font-medium text-[#99C12A] my-8'>
                        Ride or Drive with the price you both agree upon.
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                        <Link href="#" className='text-base font-normal uppercase border-[#99C12A] border-2 bg-[#99C12A] text-[#272727] py-2 px-5 rounded-full block w-fit'>
                            Download App
                        </Link>
                        <Link href="#" className='text-base font-normal uppercase border-[#99C12A] border-2 bg-transparent text-[#272727] py-2 px-5 rounded-full block w-fit'>
                            Become a Driver
                        </Link>
                        <Link href="#" className='text-base font-normal uppercase border-[#99C12A] border-2 bg-[#99C12A] text-white p-2 rounded-full block w-fit'>
                            <BsFillPlayFill size={24} />
                        </Link>
                    </div>
                </div>
                <div className='md:bg-none bg-[url("/images/bg1.svg")] bg-right bg-no-repeat bg-contain'>
                    <Image src="/images/1.png" alt='1.png' width={830} height={643} />
                </div>
            </div>
        </section>
    )
}

export default Banner