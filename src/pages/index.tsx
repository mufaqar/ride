import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/banner'
import Link from 'next/link'
import { BsFillPlayFill } from 'react-icons/bs'
import Tabs from '@/components/tabs'
import Cta from '@/components/cta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={``} >
      <Banner />
      <section className='py-20 relative'>
        <Image src="/images/bg2.svg" alt='bg2.png' width={540} height={643} className='absolute top-auto left-0 max-w-[30%] md:block hidden' />
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10 relative z-10 items-center'>
          <div className='md:bg-none bg-[url("/images/bg2.svg")] bg-right bg-no-repeat bg-contain md:order-1 order-2'>
            <Image src="/images/2.png" alt='2.png' width={830} height={643} />
          </div>
          <div className='md:order-2 order-1'>
            <h1 className='md:text-[78px] text-5xl leading-none font-bold mb-8 axiformaBold'>
              Let's be fair with the fare.
            </h1>
            <div className='flex flex-wrap gap-2'>
              <Link href="#" className='text-base font-normal uppercase border-Cstm_gren orkneyRegular border-2 bg-Cstm_gren text-title_clr hover:bg-transparent py-2 px-5 rounded-full block w-fit'>
                Download App
              </Link>
              <Link href="#" className='text-base font-normal uppercase border-Cstm_gren orkneyRegular border-2 bg-transparent text-title_clr hover:bg-Cstm_gren hover:text-title_clr py-2 px-5 rounded-full block w-fit'>
                Become a Driver
              </Link>
              <Link href="#" className='text-base font-normal uppercase border-Cstm_gren orkneyRegular border-2 bg-Cstm_gren text-white p-2 rounded-full block w-fit'>
                <BsFillPlayFill size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className='py-20 relative'>
        <Image src="/images/bg3.svg" alt='bg3.png' width={540} height={643} className='absolute top-auto left-[70%] max-w-[30%] md:block hidden' />
        <Tabs />
      </section>
      <Cta />
    </main>
  )
}
