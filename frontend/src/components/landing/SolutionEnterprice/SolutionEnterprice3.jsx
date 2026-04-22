import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";



const SolutionEnterprice3 = () => {
  return (
    <div className='bg-[#f9f7f5]  '>

<div className=' py-25 flex flex-col gap-7 text-center items-center'>
                <h1 className='text-6xl w-170 '>See why customers love using Artifact</h1>
                <p>98% Satisfaction from over 600 verified reviews.</p>
                <div className="bg-black text-white text-xl text-center rounded-full py-3 px-8">Start Now</div>
               

                

        <div className="grid text-left w-[70vw] mt-20 grid-cols-2 gap-4">
            <div className="bg-white flex-col flex gap-7 items-start  p-5 w-full rounded-md"> 
                <img className='h-12' src="https://framerusercontent.com/images/qF3seVabEE7dooAezFKepy4X4sw.svg" alt="" />
                <div>
                    <h3>Automate workflows</h3>
                    <p className='text-gray-500'>and optimize efficiency with AI-powered task management solutions for any moden business.</p>
                </div>
            </div>
            
            <div className="bg-white flex-col flex gap-7 items-start  p-5 w-full rounded-md"> 
                <img className='h-12' src="https://framerusercontent.com/images/loSrBvaqvws3TXHJ13Y5ubMs1A.svg" alt="" />
                <div>
                    <h3>Automate workflows</h3>
                    <p className='text-gray-500'>and optimize efficiency with AI-powered task management solutions for any moden business.</p>
                </div>
            </div>
            <div className="bg-white flex-col flex gap-7 items-start  p-5 w-full rounded-md"> 
                <img className='h-12' src="https://framerusercontent.com/images/hvhFixoMlDwEb5kzNXSNNhuEUm4.svg" alt="" />
                <div>
                    <h3>Automate workflows</h3>
                    <p className='text-gray-500'>and optimize efficiency with AI-powered task management solutions for any moden business.</p>
                </div>
            </div>
            <div className="bg-white flex-col flex gap-7 items-start  p-5 w-full rounded-md"> 
                <img className='h-12' src="https://framerusercontent.com/images/3cJrFjlm5lgF6Tbjt9xU3p3QVs.svg" alt="" />
                <div>
                    <h3>Automate workflows</h3>
                    <p className='text-gray-500'>and optimize efficiency with AI-powered task management solutions for any moden business.</p>
                </div>
            </div>
           
            
        </div>

       


            </div>



            <div className='flex w-full px-40 py-15 pb-30 gap-10'>
                <div className='w-full gap-5 flex flex-col'>
                    <p>Let us show you Artifact</p>

                    <h1 className='text-6xl'>Smarter automation, fewer mistakes</h1>

                    <p>Artifact’s unified platform transforms scattered insights into optimized automation—technical knowledge optional.</p>


                <div className='flex text-gray-500 text-sm items-center gap-2'>
                    <p>G2 </p> 
                    <div className='flex'>
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    
                    </div>
                    <p> 620+ Reviews</p>
                </div>

                <div className='flex mt-5 gap-2'>
                        <div className='bg-black flex flex-col justify-between items-start text-white p-7 rounded-md h-80 w-80'>
                            <img className='h-3.5' src="https://framerusercontent.com/images/3PjTs2GiiXAtOZsaeT6ymqT4CTM.svg" alt="" />
                            <h3 className='text-xl'>$5.1M+ revenue unlocked through optimization.</h3>
                            <button className='text-sm py-2 px-5 bg-white text-black rounded-full'>Customer Stories</button>
                        </div>
                        <div className='h-80 w-80 rounded-md overflow-hidden object-cover object-center'>
                            <img src="https://framerusercontent.com/images/pl3Ta18azDa0biNfqwf7tVd4iuA.webp" alt="" />
                        </div>
                    </div>





                </div>

                <div className=" w-full mx-auto bg-white p-8 rounded-lg shadow-sm">
      <form className="flex h-full flex-col gap-10">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        {/* Organization */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Organization
          </label>
          <input
            type="text"
            placeholder="Add some additional context with this helper text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How did you hear about us?
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none">
            <option>Choose option</option>
            <option>Google</option>
            <option>Friend / Referral</option>
            <option>Social Media</option>
            <option>Other</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
        >
          Request a demo
        </button>
      </form>
    </div>

            </div>


    </div>
  )
}

export default SolutionEnterprice3