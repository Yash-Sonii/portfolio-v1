import React from 'react'
import { CONTACT } from '../constants'

const Connect = () => {
  return (
  <div className='border-b border-neutral-900 pb-20 text-white'>
    <h1 className='my-10 text-center text-6xl'>Get in Touch</h1>
    <div className='text-center tracking-tighter'>

<p className='my-4 text-4xl call'>{CONTACT.phoneNo}</p>

<a href="#" className='border-b my-5 text-4xl mail'>{CONTACT.email}</a>
    </div>
  </div>
  )
}

export default Connect
