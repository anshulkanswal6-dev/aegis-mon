import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md w-full text-black px-5 lg:px-20 2xl:px-32 border-b py-4 border-gray-200 flex justify-between items-center'>
        
        <div className='flex-shrink-0'>
            <img className='h-8 md:h-9' src="/landing-logo.png" alt="logo" />
        </div>

        {/* Desktop Links */}
        <div className='gap-8 hidden lg:flex text-sm font-medium'>
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/#features" className="hover:text-gray-600 transition-colors">Features</Link>
            <Link to="/#pricing" className="hover:text-gray-600 transition-colors">Pricing</Link>
            <a href="/documentation" className="hover:text-gray-600 transition-colors">Docs</a>
        </div>

        {/* Desktop CTA */}
        <div className='hidden lg:flex items-center gap-3'>
            <div 
              className='bg-black text-white rounded-full py-2.5 px-6 text-sm font-medium cursor-pointer hover:bg-gray-800 transition-all active:scale-95 shadow-sm'
              onClick={() => navigate('/app')}
            >
              Launch App
            </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 lg:hidden flex flex-col items-center p-10 gap-8 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-orange-500 transition-colors w-full text-center">Home</Link>
            <Link to="/#features" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-orange-500 transition-colors w-full text-center">Features</Link>
            <Link to="/#pricing" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-orange-500 transition-colors w-full text-center">Pricing</Link>
            <a href="/documentation" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium hover:text-orange-500 transition-colors w-full text-center">Docs</a>
            <div 
              className='bg-black text-white rounded-full py-4 px-10 text-center text-base font-bold shadow-lg w-full max-w-[280px] active:scale-95 transition-transform'
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/app');
              }}
            >
              Launch App
            </div>
          </div>
        )}
    
    </nav>
  )
}

export default Nav