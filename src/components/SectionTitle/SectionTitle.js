import React from 'react'

const SectionTitle = ({title,subtitle}) => {
  return (
    <div className="text-center space-y-5">
      <h3 className='text-2xl font-semibold text-cyan-400'>{title}</h3>
      <h2 className='text-4xl font-bold'>{subtitle}</h2>
    </div>
  )
}

export default SectionTitle