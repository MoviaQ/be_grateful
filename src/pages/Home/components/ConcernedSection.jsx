import React from 'react'
import Button from '../../../components/Button'

const ConcernedSection = () => {
  return (
    <div className="m-0 bg-gradient-to-r from-white to-light-blue w-screen h-screen">
      <h2 className='p-14 text-5xl font-bold '> Are you concerned?  </h2>
    <div className='flex '> 
      <div>
        <p className='m-20 text-2xl font-semibold w-64 '>Make an account and start journaling, it’s free!</p>
        <span className='m-20'> 
        <Button text="Register" />
        </span>
      </div>

      <div className='w-1/2 h-200 bg-gray-200 border border-black rounded-xl ' > Here will be the img </div>
      </div>

    </div>
  )
}

export default ConcernedSection
