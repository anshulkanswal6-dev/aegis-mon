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

        <div className='w-full max-w-7xl px-6 lg:px-40 mt-16 lg:mt-20 flex flex-col md:flex-row gap-6'>
            <div className='w-full md:w-1/2 h-80 flex flex-col justify-between rounded-md bg-[#212121] p-5'>
                <h1 className='text-2xl'>“10x faster execution layer — turning intent into on-chain agents instantly. <br /> <br />No SDKs, no contracts, just a simple english prompt.”</h1>
                <div className='flex gap-3'>
                    <img className='h-10 rounded-full' src={founder} alt="" /> 
                    <a href="https://www.linkedin.com/in/anshul-kanswal/">
                    <div className='text-sm'>
                    <h3>Anshul Kanswal</h3>
                    <p className='text-gray-300'>Founder, AEGIS</p>
                    </div>
                    </a>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-80 flex justify-center items-center bg-orange-500 bg-blend-multiply bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] rounded-md bg-cover'>
                <div 
                  className="bg-white text-black text-xl text-center rounded-full py-3 px-8 cursor-pointer"
                  onClick={() => navigate('/app')}
                >
                  Launch AEGIS
                </div>
            </div>
        </div>


        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20 mt-24 w-full max-w-7xl px-5 lg:px-34 text-sm'>
            <div className='flex text-gray-500 flex-col gap-5'>
                <h3 className='text-white font-bold tracking-widest'>ECOSYSTEM</h3>
                <Link to="/app" className='hover:text-white cursor-pointer transition-colors'>Platform</Link>
                <p className='hover:text-white cursor-pointer transition-colors'>Architecture</p>
                <p className='hover:text-white cursor-pointer transition-colors'>Nodes</p>
            </div>
            <div className='flex text-gray-500 flex-col gap-5'>
                <h3 className='text-white font-bold tracking-widest'>RESOURCES</h3>
                <Link to="/documentation" className='hover:text-white cursor-pointer transition-colors'>Documentation</Link>
                <p className='hover:text-white cursor-pointer transition-colors'>Telegram</p>
                <p className='hover:text-white cursor-pointer transition-colors'>Source</p>
            </div>
            <div className='flex text-gray-500 flex-col gap-5'>
                <h3 className='text-white font-bold tracking-widest'>LEGAL</h3>
                <p className='hover:text-white cursor-pointer transition-colors'>Privacy</p>
                <p className='hover:text-white cursor-pointer transition-colors'>Terms</p>
            </div>
            <div className='flex text-gray-500 flex-col gap-5 col-span-2 md:col-span-1'>
                <h3 className='text-white font-bold tracking-widest'>CONTACT</h3>
                <p className='break-all'>anshulkanswal01@gmail.com</p>
                <p>Noida, UP, India</p>
            </div>
        </div>


        <div className='flex flex-col md:flex-row mt-20 border-t border-gray-800 py-10 w-full max-w-7xl px-6 lg:px-34 items-center justify-between gap-6'>
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
