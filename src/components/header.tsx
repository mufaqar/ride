import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className='py-3 relative z-50'>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                <div className='w-1/3'>
                    <Link href="/">
                        <Image src="/images/logo-blck.svg" alt='logo' width={72} height={20} className='md:max-h-20 max-h-12 ml-0' />
                    </Link>
                </div>
                <nav className='w-1/3'>
                    <button className='md:hidden block ml-auto' onClick={() => setOpen(!open)}>
                        {
                            open ? (<GrClose size={26} />) : (<FaBars size={26} />)
                        }
                    </button>
                    <ul className={`flex md:flex-row flex-col justify-center md:gap-10 gap-2 md:static bg-transparent absolute ${open ? 'left-0 right-0 top-16 bg-gray-100 p-5' : 'top-[-200px]'}`}>
                        <li>
                            <Link href="/" className='text-base font-normal text-[#272727]'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal text-[#272727]'>
                                It's all about you
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal text-[#272727]'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='w-1/3 md:block hidden'>
                    <ul className='flex justify-end gap-10 items-center'>
                        <li>
                            <span className='text-base font-normal text-[#272727] text-right block'>
                                Call Us
                            </span>
                            <Link href="tel:213-460-2382" className='text-base font-bold text-[#272727]'>
                                213-460-2382
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base font-normal uppercase bg-[#99C12A] text-white py-2 px-5 rounded-full block'>
                                Get In Touch
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header