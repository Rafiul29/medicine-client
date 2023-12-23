import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center py-5 bg-gray-100'>
      <p className='text-xm font-semibold  '> Medicine Store &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer