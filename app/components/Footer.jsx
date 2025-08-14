import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center '>
        <Image src={assets.logo} alt="" className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt="" className='w-6'/><a target='_blank' href='https://mail.google.com/mail/?view=cm&fs=1&to=adithyas9563@gmail.com'>adithyas9563@gmail.com</a>

        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 Adithya S.All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm-mt-0'>
            <li>
                <a  target='_blank' href='https://github.com/adithyasopanam'>Github</a>
            </li>
            <li><a target='_blank' href='https://instagram.com/adithya_sopanam'>Instagram</a></li>
            <li><a target='_blank' href='https://facebook.com/adithyasopanam'>Facebook</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
