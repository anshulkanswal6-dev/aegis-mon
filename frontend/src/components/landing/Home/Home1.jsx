import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import agent from '../../../assets/landing/agent.jpeg'
import tx2 from '../../../assets/landing/tx-2.png'
import algorand from '../../../assets/landing/algorand.png'
import bnb from '../../../assets/landing/bnb.png'
import educhain from '../../../assets/landing/educhain.png'
import ethereum from '../../../assets/landing/ethereum.png'
import monad from '../../../assets/landing/monad.png'

const Home1 = () => {
    const navigate = useNavigate();

    const brands = [
        { src: ethereum, className: "h-12 w-50" },
        { src: monad, className: "h-25 w-60" },
        { src: algorand, className: "h-35 w-60" },
        { src: bnb, className: "h-50 w-60" },
        { src: educhain, className: "h-12 w-50" },
    ]

    return (
        <div className='flex w-full flex-col items-center justify-center'>

            <div className="w-[90%] max-w-lg overflow-hidden rounded-full mt-5 bg-[#f6f4f0]">
                <div className="whitespace-nowrap py-2 text-sm animate-marquee">
                    🎉 Exciting news! AEGIS V1 Beta is now live and ready to build onchain agents! 🎉 Exciting news! AEGIS V1 Beta is now live and ready to build onchain agents! 🎉 Exciting news! AEGIS V1 Beta is now live and ready to build onchain agents! 🎉 Exciting news! AEGIS V1 Beta is now live and ready to build onchain agents! 🎉 Exciting news! AEGIS V1 Beta is now live and ready to build onchain agents!
                </div>
            </div>

            <div className='text-center flex mt-13 flex-col gap-5 items-center w-full max-w-4xl px-6'>
               
                <h1 className='text-4xl sm:text-6xl lg:text-8xl mb-1 font-felipa text-[#373533] leading-tight'>Agentic Execution Layer for Onchain Jobs</h1>
                <p className='text-base md:text-lg max-w-4xl'>Build powerful onchain AI agents effortlessly using simple natural language prompts. <br className='hidden md:block' />
                No prior smart contract expertise or complex SDK setup required to get started.</p>
                <div className='flex flex-col sm:flex-row w-full sm:w-auto mt-6 text-sm gap-3'>
                    <div 
                      className='bg-black text-white rounded-full hover:bg-gray-900 py-3 px-8 text-center cursor-pointer'
                      onClick={() => navigate('/app')}
                    >
                      Get Started
                    </div>
                    <div className='border border-gray-300 font-medium hover:bg-gray-100 rounded-full py-3 px-8 text-center cursor-pointer'>View Docs</div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mt-10 lg:mt-31 px-6 w-full max-w-7xl justify-center items-center lg:items-stretch">
                <img
                    className="h-[300px] md:h-[450px] lg:h-115 w-full lg:w-1/3 shadow-xl rounded-md object-cover object-top"
                    src={tx2}
                    alt="Transactions Dashboard"
                />
                <div
                    className="
                    flex flex-col items-center px-7 pt-7 overflow-hidden
                    h-[300px] md:h-[450px] lg:h-115
                    w-full lg:w-1/3
                    bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')] 
                    bg-cover bg-center bg-orange-500 bg-blend-multiply
                    rounded-md 
                ">
                    <div className='bg-black/40 rounded-md flex items-center gap-5 justify-center text-white w-full py-3'>
                        <img className='h-7 uppercase' src="https://framerusercontent.com/images/uijBCMcq0cF8Mi9JorcmB8XUmU.svg" alt="" />
                        <h1 className='text-sm md:text-base'>Build Your First Onchain Agent</h1>
                    </div>
                    <img
                        className="rounded-md mt-5 object-cover object-top h-full w-full"
                        src={agent}
                        alt="Agent Dashboard"
                    />
                </div>
                <div className="h-auto min-h-[300px] sm:h-115 w-full lg:w-1/3 flex flex-col justify-between rounded-md text-white p-5 bg-black">
                    <h1 className='text-2xl lg:text-3xl'>“AEGIS feels like the missing execution layer of Web3 <br className='hidden lg:block' /> where ideas become on-chain actions without <br className='hidden lg:block' /> friction.”</h1>
                    <div className='text-sm text-gray-400'>
                        <p>Kartikey Garg</p>
                        <p>Developer Activations, Monad Foundation</p>
                    </div>
                </div>
            </div>



            <div className='mt-32 lg:mt-40 flex flex-col gap-10 lg:gap-15 items-center px-6 w-full'>
                <h3 className='text-xl sm:text-3xl lg:text-4xl italic text-center'>Built for and deployed on these chains...</h3>
                <div className="relative w-full overflow-hidden">
                    {/* Fade overlays */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-30 bg-gradient-to-r from-white/70 to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full  w-30 bg-gradient-to-r from-white/70 to-transparent" />

                    {/* Marquee container */}
                    <motion.div
                        className="flex gap-20 items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear",
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[200px]">
                                <img
                                    src={brand.src}
                                    alt=""
                                    className={`${brand.className} max-w-[200px] object-contain filter grayscale opacity-80 hover:opacity-100 transition-all duration-500`}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className='py-20 w-full px-6 lg:px-40 mt-10 mb-18 lg:mt-8 flex justify-center max-w-10xl'>
                <div className='w-full max-w-4xl'>
                    <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black'>
                        <iframe 
                            className='absolute inset-0 w-full h-full'
                            src="https://www.youtube.com/embed/gu8FRINJjB8?si=8-l7d1-5-5-5-5-5" 
                            title="AEGIS Introduction"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default Home1