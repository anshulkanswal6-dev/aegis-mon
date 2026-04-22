import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";


const Home3 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the Aegis Layer?",
            answer: "Aegis is an autonomous execution environment designed to simplify complex on-chain workflows through advanced agentic orchestration."
        },
        {
            question: "How do I create an automation?",
            answer: "Simply define your objective in natural language. Aegis interprets your intent and coordinates the necessary logic for consistent, reliable execution."
        },
        {
            question: "Is the platform non-custodial?",
            answer: "Yes. Aegis is built on a non-custodial foundation, meaning you always retain full authority over your digital assets and automation parameters."
        },
        {
            question: "What can I automate with Aegis?",
            answer: "From sophisticated monitoring to complex asset movements, Aegis can handle almost any repetitive or conditional on-chain task."
        },
        {
            question: "How are alerts managed?",
            answer: "Aegis provides integrated real-time monitoring, delivering critical execution status and alerts directly to your preferred control interface."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='px-6 lg:px-40 flex flex-col mb-10 mt-10 gap-20 lg:gap-60 py-20 max-w-7xl mx-auto w-full'>
            <div>
                <h1 className='text-5xl text-center lg:text-left'>FAQ</h1>
                <div className='mt-12 lg:mt-20'>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`py-6 lg:py-7 border-gray-300 ${index === 0 ? 'border-y' : 'border-b'}`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <div className='flex justify-between items-center cursor-pointer group'>
                                <h1 className={`text-lg transition-colors ${activeIndex === index ? 'text-orange-500' : 'group-hover:text-orange-500'}`}>
                                    {faq.question}
                                </h1>
                                <IoIosArrowDown className={`text-xl transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-orange-500' : ''}`} />
                            </div>
                            
                            <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className='text-gray-500 text-sm leading-relaxed'>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        {/* <div className='rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row text-white justify-between w-full h-auto lg:h-110 bg-black overflow-hidden relative'>
            <div className='flex w-full lg:w-1/2 flex-col gap-6 lg:gap-7 py-4 lg:py-7 relative z-10' >
                <h3 className='text-gray-500 uppercase tracking-widest text-sm'>Join the revolution</h3>
                <h1 className='text-4xl lg:text-6xl leading-tight'> Build the future <br /> of onchain commerce.</h1>
                <p className='text-gray-400 text-lg'>AEGIS’s unified platform transforms scattered insights into optimized automation—technical knowledge optional.</p>
                <div className='flex flex-col sm:flex-row mt-5 text-sm gap-4'>
                    <div className='bg-white text-black flex gap-2 items-center justify-center font-bold rounded-full py-4 px-8 cursor-pointer hover:bg-gray-200 transition-colors'>Launch Platform</div>
                    <div className='border border-white/30 text-white flex gap-2 items-center justify-center font-bold rounded-full py-4 px-8 cursor-pointer hover:bg-white/10 transition-colors'>Read Whitepaper</div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 h-72 lg:h-full mt-10 lg:mt-0 flex overflow-hidden justify-center items-center bg-orange-500 bg-blend-multiply bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] rounded-2xl bg-cover relative'>
                 <div className='absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent'></div>
                 <img className='w-4/5 lg:w-70 relative z-10 filter drop-shadow-2xl' src="https://framerusercontent.com/images/LRO06G7J3Wnsm00sMeyKFq9gfU.png?scale-down-to=2048" alt="" />
            </div> */}
        {/* </div> */}




    </div>
  )
}

export default Home3