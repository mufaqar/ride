import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cta() {
    return (
        <section className='py-20 bg-Cstm_gren'>
            <div className='container mx-auto px-4 '>
                <div className='max-w-[842px] mx-auto'>
                    <h1 className='md:text-[80px] text-5xl leading-none font-bold mb-8 axiformaBold text-center'>
                        Launching soon on apple & android
                    </h1>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        <Link href="#" className='block w-fit'>
                            <Image src="/images/aple.svg" alt='aple.svg' width={266} height={78} />
                        </Link>
                        <Link href="#" className='block w-fit'>
                            <Image src="/images/gogle.svg" alt='gogle.svg' width={266} height={78} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta