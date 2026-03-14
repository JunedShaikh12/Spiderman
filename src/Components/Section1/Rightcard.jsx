import React from 'react'
import Rightcardcontent from './Rightcardcontent'
const Rightcard = (props) => {
  return (
    <>
    <Rightcardcontent img={props.img} tag={props.tag} intro={props.intro} number={props.number} />
    </>
  )
}

export default Rightcard