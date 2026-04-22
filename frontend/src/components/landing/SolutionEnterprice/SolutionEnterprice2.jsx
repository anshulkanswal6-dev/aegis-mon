import React, { useState } from 'react'

const SolutionEnterprice2 = () => {

    const [activeTab, setActiveTab] = useState("Operations");

    const tabs = ["Operations", "Agents", "Entities", "Dashboard", ];


  return (
    <div className='bg-[#f9f7f5] flex flex-col px-2 items-center'>


         <div className='py-20 w-full px-40 mt-25 flex gap-20 justify-between'>
                <div className=' flex flex-col pt-15 gap-10'>
                    <p className='text-sm'>Welcome to Profiled</p>
                    <h1 className='text-6xl'>Get guidance when technology ends</h1>
                    <p className='text-gray-500'>Artifact’s unified platform transforms scattered insights into optimized, AI-driven automation—technical knowledge optional.</p>
                    <div className='bg-black w-35 text-xl text-white rounded-full py-2 px-6 '>Buy Now</div>

                    <div className='flex  mt-5 gap-5 gap-10'>
                        <div className='flex gap-5 flex-col w-full'>
                            <div className='h-20 w-30 flex  items-center justify-center rounded-md bg-cover relative overflow-hidden bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] '>
                            <div className="absolute inset-0 bg-pink-400  mix-blend-multiply"></div>
                                <img className="relative z-10" src="https://framerusercontent.com/images/ZASyIQTjun93AF0QsgZlmXT2Cdc.svg" alt="" />
                            </div>
                            <p className='text-sm'> Simplify integrations with seamless API connectivity across platforms and enterprise tools.</p>

                        </div>
                        <div className='flex gap-5 flex-col w-full'>
                            <div className='h-20 w-30 flex items-center justify-center rounded-md bg-cover relative overflow-hidden bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] '>
                            <div className="absolute inset-0 bg-orange-400  mix-blend-multiply"></div>
                                 <img className="relative z-10" src="https://framerusercontent.com/images/x7F0y0CwLoH7ogR5vnsHdnOLFw.svg" alt="" />
                            </div>
                            <p className='text-sm'> Simplify integrations with seamless API connectivity across platforms and enterprise tools.</p>

                        </div>
                    </div>
                </div>

                <div className='flex flex-col flex-col-reverse w-160 gap-2'>
                    <div className='flex flex-row-reverse gap-2'>
                        <div className='bg-black flex flex-col justify-between items-start text-white p-7 rounded-md h-80 w-80'>
                            <img className='h-3.5' src="https://framerusercontent.com/images/3PjTs2GiiXAtOZsaeT6ymqT4CTM.svg" alt="" />
                            <h3 className='text-xl'>$5.1M+ revenue unlocked through optimization.</h3>
                            <button className='text-sm py-2 px-5 bg-white text-black rounded-full'>Customer Stories</button>
                        </div>
                        <div className='h-80 w-80 rounded-md overflow-hidden object-cover object-center'>
                            <img src="https://framerusercontent.com/images/bf1HunKyaYmF1ZJsvddmzdzVgw.webp?scale-down-to=1024" alt="" />
                        </div>
                    </div>

                    <div className="relative rounded-md w-full h-80  overflow-hidden bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')] bg-cover  bg-orange-500 bg-blend-multiply bg-center">
                    <img
                        className=" object-cover object-center mx-auto"
                        src="https://framerusercontent.com/images/WygglN4IcuqxoGF9a8tPLrNvE.webp"
                        alt=""
                    />
                    </div>
                </div>


            </div>






            <div className='flex flex-col   w-full  py-30 text-center items-center justify-center '>
                <h1 className='text-5xl w-5xl'>Customers love Artifact. Over 100 companies rely on Artifact to power their business operations.</h1>


               
                    {/* Tabs */}
                    <div className="flex mt-10 gap-3">
                        {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-md font-medium transition ${
                            activeTab === tab
                                ? "bg-black text-white"
                                : "text-gray-600 border border-gray-200 hover:text-black"
                            }`}
                        >
                            {tab}
                        </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="h-130 mt-3 rounded-md w-6xl bg-[#E5E3DE] p-6">
                        {activeTab === "Operations" && 
                         <div className='w-full flex items-center justify-center gap-10 h-full'>
                            <div className='w-100'>
                                <img className='h-90' src="https://framerusercontent.com/images/BjK7jJzvyWTpp6F8lLeQFqwZo.png?scale-down-to=1024" alt="" />
                            </div>
                            <div className='flex flex-col text-left w-100 gap-10'>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
                                    <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
                                </div>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Real-time operational intelligence</h1>
                                    <p className='text-gray-600'>flows naturally through Artifact’s custom built distributed architecture.</p>
                                </div>
                            </div> 
                        </div>
                        }
                        {activeTab === "Agents" && 
                         <div className='w-full flex items-center justify-center gap-10 h-full'>
                         <div className='w-100'>
                             <img className='h-90' src="https://framerusercontent.com/images/DfV5becey398qemZ2CqOhc25k.webp?scale-down-to=1024" alt="" />
                         </div>
                         <div className='flex flex-col text-left w-100 gap-10'>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Real-time operational intelligence</h1>
                                    <p className='text-gray-600'>flows naturally through Artifact’s custom built distributed architecture.</p>
                                </div>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
                                    <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
                                </div>
                         </div> 
                     </div>
                        }
                        {activeTab === "Dashboard" && 
                         <div className='w-full flex items-center justify-center gap-10 h-full'>
                         <div className='w-100'>
                             <img className='h-90' src="https://framerusercontent.com/images/OSzS6SeV6xGQR7ovo8GAJvr1r1c.webp" alt="" />
                         </div>
                         <div className='flex flex-col text-left w-100 gap-10'>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Real-time operational intelligence</h1>
                                    <p className='text-gray-600'>flows naturally through Artifact’s custom built distributed architecture.</p>
                                </div>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
                                    <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
                                </div>
                         </div> 
                     </div>
                        }
                        {activeTab === "Entities" && 
                         <div className='w-full flex items-center justify-center gap-10 h-full'>
                         <div className='w-100'>
                             <img className='h-90' src="https://framerusercontent.com/images/DfV5becey398qemZ2CqOhc25k.webp?scale-down-to=1024" alt="" />
                         </div>
                         <div className='flex flex-col text-left w-100 gap-10'>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
                                    <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
                                </div>
                                <div className='flex text-lg flex-col items-start'>
                                    <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
                                    <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
                                </div>
                         </div> 
                     </div>
                        }
                    </div>
                    </div>




            

    </div>
  )
}

export default SolutionEnterprice2