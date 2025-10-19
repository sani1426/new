
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2'>
        <Image src="/images/logo.png" width={50} height={20} className='rounded-2xl logo' alt='logo-image'  />
        <h1 className='text-3xl lg:text-4xl text-nowrap'>Mr.Sam</h1>
    </Link>
  )
}

export default Logo