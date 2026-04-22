import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Home2 = () => {
  const navigate = useNavigate();

  return (
    <div id="features" className='bg-[#f6f4f0] flex flex-col px-2 items-center '>
        <div className='text-3xl md:text-4xl lg:text-5xl mt-20 lg:mt-30 w-full max-w-5xl px-6 text-center leading-tight'>
            <span>Engineered with Love</span>
            <span className='text-gray-500'> by the team at AEGIS, delivering 10x faster on-chain development.</span>
        </div>
        <div className="grid w-full max-w-7xl px-6 mt-16 lg:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white flex-col flex gap-7 items-start p-8 w-full rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"> 
                <img className='h-12' src="https://framerusercontent.com/images/qF3seVabEE7dooAezFKepy4X4sw.svg" alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>Automate workflows</h3>
                    <p className='text-gray-500'>User prompts and answers follow-up questions. No SDKs. No manual contract writing.</p>
                </div>
            </div>
            
            <div className="bg-white flex-col flex gap-7 items-start p-8 w-full rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"> 
                <img className='h-12' src="https://framerusercontent.com/images/loSrBvaqvws3TXHJ13Y5ubMs1A.svg" alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>Smart Execution</h3>
                    <p className='text-gray-500'>Automate workflows do not require wallet private keys from user to delegate funds.</p>
                </div>
            </div>
            <div className="bg-white flex-col flex gap-7 items-start p-8 w-full rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"> 
                <img className='h-12' src="https://framerusercontent.com/images/hvhFixoMlDwEb5kzNXSNNhuEUm4.svg" alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>Onchain Agents</h3>
                    <p className='text-gray-500'>Build and deploy agents that handle real-time swaps, payments, and complex interactions.</p>
                </div>
            </div>
            <div className="bg-white flex-col flex gap-7 items-start p-8 w-full rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"> 
                <img className='h-12' src="https://framerusercontent.com/images/3cJrFjlm5lgF6Tbjt9xU3p3QVs.svg" alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>Real-time Analytics</h3>
                    <p className='text-gray-500'>Monitor your agents in real-time with deep insights into every transaction and triggered action.</p>
                </div>
            </div>
            <div className="bg-white flex-col flex gap-7 items-start p-8 w-full rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"> 
                <img className='h-12' src="https://framerusercontent.com/images/mgPw1n73bkIqjDTUYnZYdXQxzpU.svg" alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>Continuous Trigger Monitoring</h3>
                    <p className='text-gray-500'>Continuously evaluates scheduled triggers, price-based conditions, and on-chain events.</p>
                </div>
            </div>
            <div className="bg-white flex-col flex gap-7 items-start p-8 w-full rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"> 
                <img className='h-12' src="https://framerusercontent.com/images/1hrMoHur5e3kUt6ubeQtOzyp68.svg" alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>Seamless Integration</h3>
                    <p className='text-gray-500'>Deploy automations, monitor execution, receive alerts, and manage agents remotely.</p>
                </div>
            </div>
        </div>


        <div className='rounded-full w-full max-w-2xl mt-30 flex flex-col sm:flex-row bg-black gap-5 p-4 sm:p-3 items-center sm:items-start mx-6'>
            <img className='rounded-full h-15 w-15' src="https://framerusercontent.com/images/2bgOEYAWXMxCuw3emojGtuyV5ng.webp?scale-down-to=512" alt="" />
            <div className='text-white flex flex-col text-sm justify-center text-center sm:text-left flex-1'>
                <h1 className='text-lg font-bold'>Hello 👋 I’m Luke from support.</h1>
                <p className='text-gray-400'>Let me know if you do have any questions about AEGIS.</p>
            </div>
            <div className='flex items-center py-2'> 
            <div className='border border-gray-300 font-medium bg-white text-black rounded-full mx-6 py-2 px-7 '>Chat</div>
            </div>
        </div>
        
        <div className="h-auto min-h-[500px] lg:h-180 w-full mt-40 rounded-3xl relative overflow-hidden bg-black/10 mx-6 max-w-7xl">
            <img className="absolute inset-0 w-full h-full object-cover" src="https://framerusercontent.com/images/uQmXQvxsL3NoGW8jaQIV3vI.webp" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-end px-8 md:px-20 lg:px-40 justify-center lg:justify-between p-12">
                <div className='text-white flex flex-col gap-6 lg:gap-8 w-full max-w-3xl text-center lg:text-left'>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl leading-tight'>“Seeking a better way to build on-chain automations, AEGIS reduced our development time by 90%”</h3>
                    <div>
                        <h3 className='text-xl lg:text-2xl font-bold'>Development Team,</h3>
                        <p className='text-gray-300'>AEGIS</p>
                    </div>
                </div>
                <div className='w-full lg:w-auto flex justify-center lg:justify-end mt-10 lg:mt-0'>
                    <div 
                      className='border-2 border-white/30 font-medium bg-white text-black rounded-full py-3 px-10 hover:bg-gray-100 transition-colors cursor-pointer text-lg'
                      onClick={() => navigate('/app')}
                    >
                      Explore
                    </div>
                </div>
            </div>
        </div>


            <div id="pricing" className=' py-25 flex flex-col gap-7 mt-15 text-center items-center'>
                <h1 className='text-4xl sm:text-6xl w-full max-w-3xl '>Flexible pricing that scales with you</h1>
                <p>Choose a plan that fits your team's needs, from startup to enterprise.</p>
                
            </div>
            <div className='flex flex-col lg:flex-row w-full mb-32 lg:mb-40 px-6 lg:px-40 gap-12 lg:gap-8 max-w-7xl'>
                <div className=' border flex flex-col justify-between border-gray-300 rounded-md p-6 h-auto lg:h-150 w-full lg:w-1/3'>
                    <div className='text-3xl'>
                    <h3>Basic</h3>
                    <h2 className='text-orange-600 font-medium'>$0/month</h2>
                    </div>
                    <p className='text-xl'>For Beta Users <br /> of AEGIS V1. <br /><br /></p>
                    <div 
                      className='bg-black text-white text-xl text-center rounded-full py-3 px-6 cursor-pointer hover:bg-gray-900'
                      onClick={() => navigate('/app')}
                    >
                      Start Now
                    </div>

                    <div className='text-gray-600 flex flex-col gap-2'>
                        <h1 className='text-black'>What's included?</h1>
                        <div className='flex flex-col ml-5 gap-2'>
                        <li>10 Automations/ month </li>
                        <li>No Telegram/discord Integrations</li>
                        <li>Email Integration Availabe</li>
                        <li>24/7 Slack support</li>
                        </div>
                    </div>
                    <p className='text-gray-500 text-sm'>Early Bird Pricing</p>
                </div>
                <div className=' border flex bg-white flex-col justify-between border-gray-300 rounded-md p-6 h-auto lg:h-150 w-full lg:w-1/3 relative'>
                    <div className='absolute top-0 right-0 bg-orange-600 text-white text-[10px] uppercase font-bold py-1 px-4 rounded-bl-lg'>Most Popular</div>
                    <div className='text-3xl'>
                    <h3>Plus</h3>
                    <h2 className='text-orange-600 font-medium'>$19/month</h2>
                    </div>
                    <p className='text-xl'>The essential toolkit for small teams and developers.</p>
                    <div className="bg-gradient-to-r from-orange-500 text-xl to-pink-800 text-white text-center rounded-full py-3 px-6">Not Available Yet </div>

                    <div className='text-gray-600 flex flex-col gap-2'>
                        <h1 className='text-black'>What's included?</h1>
                        <div className='flex flex-col ml-5 gap-2'>
                        <li>10 Automation/per day </li>
                        <li>Email integration</li>
                        <li>Telegram & Discord Integrations</li>
                        <li>Priority support</li>
                        </div>
                    </div>
                    <p className='text-gray-500 text-sm'>Launching Soon</p>
                </div>
                <div className=' border text-white bg-black flex flex-col justify-between border-gray-300 rounded-md p-6 h-auto lg:h-150 w-full lg:w-1/3'>
                    <div className='text-3xl'>
                    <h3>Pro</h3>
                    <h2 className='text-orange-600 font-medium'>$49/month</h2>
                    </div>
                    <p className='text-xl'>For Organizations/DAOs & Defi startups.</p>
                    <div className="bg-white text-black text-xl text-center rounded-full py-3 px-8 cursor-not-allowed opacity-50">Not Available Yet</div>

                    <div className='text-gray-300 flex flex-col gap-2'>
                        <h1 className='text-white'>What's included?</h1>
                         <div className='flex flex-col ml-5 gap-2'>
                        <li>Coming Soon</li>
                        <li>Coming Soon</li>
                        <li>Coming Soon</li>
                        </div>
                    </div>
                    <p className='text-gray-400 text-sm'>Launching Soon</p>
                </div>
            </div>

            {/* <div className=' py-25 flex flex-col gap-7 text-center items-center'>
                <h1 className='text-6xl w-170 '>See why customers love using Artifact</h1>
                <p>98% Satisfaction from over 600 verified reviews.</p>
                

                

                <div className="grid text-left w-[60vw] mt-20 grid-cols-3 gap-4">
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
            <div className="bg-white flex-col flex gap-7 items-start  p-5 w-full rounded-md"> 
                <img className='h-12' src="https://framerusercontent.com/images/mgPw1n73bkIqjDTUYnZYdXQxzpU.svg" alt="" />
                <div>
                    <h3>Automate workflows</h3>
                    <p className='text-gray-500'>and optimize efficiency with AI-powered task management solutions for any moden business.</p>
                </div>
            </div>
            <div className="bg-white flex-col flex gap-7 items-start  p-5 w-full rounded-md"> 
                <img className='h-12' src="https://framerusercontent.com/images/1hrMoHur5e3kUt6ubeQtOzyp68.svg" alt="" />
                <div>
                    <h3>Automate workflows</h3>
                    <p className='text-gray-500'>and optimize efficiency with AI-powered task management solutions for any moden business.</p>
                </div>
            </div>
        </div>

        <div className="border border-gray-300 text-black text-xl text-center rounded-full py-3 px-8">Meet Customers</div>


            </div> */}

    </div>
  )
}

export default Home2