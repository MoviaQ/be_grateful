import React from 'react'

const Button = ({ text, onClickFunction }) => {
  return (
    <button 
      onClick={onClickFunction} 
      className='min-w-24 max-h-12 p-2 border-4 border-dark-pink rounded-xl transition duration-300 hover:bg-light-pink hover:text-white font-bold hover:scale-105'>
      {text}
    </button>
  )
}

export default Button