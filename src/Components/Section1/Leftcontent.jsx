import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Herotext from './Herotext'

const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
        <Herotext />
      <div className='text-9xl'>
        <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
  )
}

export default Leftcontent