import React from 'react'

const Rightcardcontent = (props) => {
    console.log(props)
    return (
        <>
            <div className='h-full w-80 overflow-hidden  shrink-0 relative rounded-4xl'>
                <img className='h-full w-full object-cover' src={props.img} alt="" />
                <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                    <h2 className='text-xl font-bold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.number}</h2>
                    <div>
                        <p className='text-lg leading-relaxed text-white mb-14'>{props.intro}</p>
                        <div className='flex justify-between'>
                            <button className='bg-gray-950 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Rightcardcontent