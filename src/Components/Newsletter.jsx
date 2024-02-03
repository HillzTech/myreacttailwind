import React from 'react'

export const Newsletter = () => {
  return (
    <div className='bg-black p-5 text-center my-[50px] mb-[60px] w-[90%] ml-auto mr-auto rounded-[10px]' >
      <h3 className='text-white lg:font-[16px]'>Sign Up For Newsletter</h3>
        <div className='mt-[10px]'>
        <input className="input-group w-[60%] h-[30px] lg:h-[50px]" type="text" placeholder="Enter Email"/>
                <button className='font-bold bg-yellow-700 rounded-[5px] p-1' type="button">Submit</button>
        </div>
    </div>
  )
}
