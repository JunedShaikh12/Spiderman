import React from 'react'
import Rightcard from './Rightcard'
const Rightcontent = (props) => {
  return (
    <div id='right' className= 'h-full flex flex-nowrap overflow-x-auto rounded-4xl gap-10 w-2/3  p-6'>
     {
      props.users.map((elem)=>{
        return <Rightcard img={elem.img} tag={elem.tag} intro={elem.intro} number={elem.number} />
      })
     }
    </div>
  )
}

export default Rightcontent