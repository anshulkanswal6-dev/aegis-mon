import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import founder from '../../assets/landing/founder.png'
import logojpeg from '../../assets/landing/logo.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-black flex text-white py-20 flex-col items-center'>
        <h1 className='text-4xl mt-10 md:text-5xl lg:text-6xl text-center w-full max-w-4xl px-6'>
        Transforming potential 
         <br className='hidden md:block' />
        into performance
        </h1>

        <div className='w-full max-w-7xl px-6 md:px-20 lg:px-40 mt-12 sm:mt-16 lg:mt-20 flex flex-col md:flex-row gap-6'>
            <div className='w-full md:w-1/2 h-auto min-h-[300px] flex flex-col justify-between rounded-xl bg-[#212121] p-6 sm:p-8'>
                <h1 className='text-xl sm:text-2xl font-light leading-relaxed italic'>“10x faster execution layer — turning intent into on-chain agents instantly. No SDKs, no contracts, just a simple english prompt.”</h1>
                <div className='flex gap-3 mt-8'>
                    <img className='h-10 w-10 rounded-full object-cover' src={founder} alt="" /> 
                    <a href="https://www.linkedin.com/in/anshul-kanswal/" target="_blank" rel="noopener noreferrer">
                      <div className='text-sm'>
                        <h3 className='font-bold'>Anshul Kanswal</h3>
                        <p className='text-gray-400'>Founder, AEGIS</p>
                      </div>
                    </a>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-[300px] flex justify-center items-center bg-orange-500 bg-blend-multiply bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] rounded-xl bg-cover shadow-xl'>
                <div 
                  className="bg-white text-black text-lg font-bold text-center rounded-full py-3.5 px-10 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                  onClick={() => navigate('/app')}
                >
                  Launch AEGIS
                </div>
            </div>
        </div>


        <div className='grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mt-24 w-full max-w-7xl px-6 md:px-20 lg:px-40 text-sm'>
            <div className='flex text-gray-500 flex-col gap-4'>
                <h3 className='text-white font-bold tracking-widest text-xs'>ECOSYSTEM</h3>
                <Link to="/app" className='hover:text-white cursor-pointer transition-colors'>Platform</Link>
                <p className='hover:text-white cursor-pointer transition-colors'>Architecture</p>
                <p className='hover:text-white cursor-pointer transition-colors'>Nodes</p>
            </div>
            <div className='flex text-gray-500 flex-col gap-4'>
                <h3 className='text-white font-bold tracking-widest text-xs'>RESOURCES</h3>
                <Link to="/documentation" className='hover:text-white cursor-pointer transition-colors'>Documentation</Link>
                <p className='hover:text-white cursor-pointer transition-colors'>Telegram</p>
                <p className='hover:text-white cursor-pointer transition-colors'>Source</p>
            </div>
            <div className='flex text-gray-500 flex-col gap-4'>
                <h3 className='text-white font-bold tracking-widest text-xs'>LEGAL</h3>
                <p className='hover:text-white cursor-pointer transition-colors'>Privacy</p>
                <p className='hover:text-white cursor-pointer transition-colors'>Terms</p>
            </div>
            <div className='flex text-gray-500 flex-col gap-4'>
                <h3 className='text-white font-bold tracking-widest text-xs'>CONTACT</h3>
                <p className='break-all hover:text-white transition-colors cursor-pointer'>anshulkanswal01@gmail.com</p>
                <p>Noida, UP, India</p>
            </div>
        </div>


        <div className='flex flex-col md:flex-row mt-20 border-t border-gray-800/50 py-12 w-full max-w-7xl px-6 md:px-20 lg:px-40 items-center justify-between gap-8'>
            <div className='flex flex-col md:flex-row items-center gap-6 text-center md:text-left'>
                <img className='h-9 w-18 rounded shadow-lg' src={logojpeg} alt="" />
                <div>
                   <p className='text-gray-400 font-bold'>AEGIS</p>
                   <p className='text-gray-600 text-xs mt-1'>Deployed on Monad Testnet</p>
                </div>
            </div>
            <div className='text-gray-500 text-xs italic'>
                © {new Date().getFullYear()} AEGIS — All rights reserved.
            </div>
        </div>

    </div>
  )
}

export default Footer
