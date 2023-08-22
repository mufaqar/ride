import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'

function Footer() {
    return (
        <footer className='bg-[url("/images/footer-bg.png")] bg-cover bg-no-repeat bg-center'>
            <div className='py-16 container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-10'>
                <div>
                    <Link href="/">
                        <Image src="/images/logo-gren.svg" alt='logo' width={72} height={20} className='md:max-h-28 max-h-16 ml-0' />
                    </Link>
                </div>
                <div>
                    <h6 className='text-base font-normal orkneyRegular text-white mb-5'>
                        Join Our Newsletter
                    </h6>
                    <form>
                        <div className="flex items-center border border-white/40">
                            <div className="relative w-full">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                                <input className="w-full px-4 text-base orkneyRegular placeholder:text-base bg-transparent placeholder:text-white focus:outline-none h-full" placeholder="Enter Email" type="email" id="email" />
                            </div>
                            <div>
                                <button type="submit" className="py-3 px-5 w-fit bg-Cstm_gren">
                                    <BsArrowRight size={18} className="text-[#4048BF]" />
                                </button>
                            </div>
                        </div>
                    </form>
                    <ul className='flex gap-3 mt-8'>
                        <li>
                            <Link href="#" className='text-xl leading-none font-normal text-white'>
                                <BiLogoFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-xl leading-none font-normal text-white'>
                                <BiLogoTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-xl leading-none font-normal text-white'>
                                <BiLogoInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-xl leading-none font-normal text-white'>
                                <BiLogoYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='grid gap-2'>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Ride Clone App - Taxi Booking
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Online Food Delivery System
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Delivery Anything
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Grocery Delivery App
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Medicine Delivery App
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Online Doctor Appointment Booking
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='grid gap-2'>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Get A Quote
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal orkneyRegular text-white hover:font-bold'>
                                Our Team
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='py-5 container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-4 border-t border-white/10'>
                <div>
                    <p className='text-base font-normal orkneyRegular text-white'>
                        © Tahir. All rights reserved.
                    </p>
                </div>
                <ul className='flex gap-2 divide-x md:justify-end justify-start'>
                    <li>
                        <Link href="#" className='text-base leading-none font-normal orkneyRegular text-white px-2 hover:font-bold'>
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='text-base leading-none font-normal orkneyRegular text-white px-2 hover:font-bold'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='text-base leading-none font-normal orkneyRegular text-white px-2 hover:font-bold'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer