import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className='flex w-full text-black px-5 2xl:px-32 border-b py-4 border-gray-300 justify-between items-center p-4'>
        
        <div className=' w-60'>
            <img className='h-9' src="/landing-logo.png" alt="logo" />
        </div>

        <div className=' gap-10 hidden lg:flex text-sm'>
            <Link to="/">Home</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#pricing">Pricing</Link>
            <a href="/documentation">Docs</a>
        </div>

        <div className='hidden w-60 lg:flex text-sm gap-3'>
            <div 
              className='bg-black text-white rounded-full py-2 px-6 cursor-pointer'
              onClick={() => navigate('/app')}
            >
              Launch App
            </div>
        </div>
    
    </div>
  )
}

export default Nav