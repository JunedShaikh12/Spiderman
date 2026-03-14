import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-3 px-18 flex gap-10 h-[90vh] '>
        <Leftcontent />
        <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content