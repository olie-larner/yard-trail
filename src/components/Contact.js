import React from 'react'
import { Link } from 'react-router-dom'

import insta from "../images/logos/instagram.png"
import facebook from "../images/logos/facebook.png"
const Contact = () => {
  return (
    <div id="contact" className='w-full bg-white  py-16'>
        <div className='container w-10/12 mx-auto pb-8 text-center'>
            <h2 className='text-3xl md:text-5xl font-semibold italic mb-4 md:mb-8'>If you have any questions please get in touch:</h2>
            <div className='flex w-auto mx-auto justify-evenly'>
            
                    <Link target="_blank" className='text-2xl md:text-3xl hover:text-trail-pink font-medium' to="mailto:yardtrailstroud@gmail.com">
                    yardtrailstroud@gmail.com
                    </Link>
            </div>
        </div>
        <div className='container w-10/12 mx-auto text-center'>
            <h2 className=' text-4xl font-semibold italic mb-10'>Follow us</h2>
            <div className='flex w-8/12 md:w-1/4 mx-auto justify-evenly'>
                <Link target="_blank" to="https://www.instagram.com/yardtrailstroud/">
                    <img src={insta} className='w-14 h-14 relative transition-all bottom-0 hover:bottom-1' alt="" />
                    </Link>
                    <Link target="_blank" to="https://www.facebook.com/yardtrailstroud/">
                    <img src={facebook} className='w-14 h-14 relative transition-all bottom-0 hover:bottom-1' alt="" />
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact