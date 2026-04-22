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


        <div className='rounded-full w-full max-w-2xl mt-20 sm:mt-30 flex flex-col sm:flex-row bg-black gap-4 p-4 sm:p-2 items-center mx-6'>
            <img className='rounded-full h-12 w-12 sm:h-15 sm:w-15' src="https://framerusercontent.com/images/2bgOEYAWXMxCuw3emojGtuyV5ng.webp?scale-down-to=512" alt="" />
            <div className='text-white flex flex-col text-xs sm:text-sm justify-center text-center sm:text-left flex-1'>
                <h1 className='text-base sm:text-lg font-bold'>Hello 👋 I’m Luke from support.</h1>
                <p className='text-gray-400'>Let me know if you have any questions about AEGIS.</p>
            </div>
            <div className='flex items-center'> 
                <div className='border border-gray-600 font-medium bg-white text-black rounded-full py-1.5 px-6 text-sm cursor-pointer hover:bg-gray-200'>Chat</div>
            </div>
        </div>
        
        <div className="h-auto min-h-[400px] lg:h-180 w-full mt-24 lg:mt-40 rounded-2xl sm:rounded-3xl relative overflow-hidden bg-black/10 mx-6 max-w-7xl">
            <img className="absolute inset-0 w-full h-full object-cover" src="https://framerusercontent.com/images/uQmXQvxsL3NoGW8jaQIV3vI.webp" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-end px-6 sm:px-12 lg:px-40 justify-center lg:justify-between p-8 sm:p-12">
                <div className='text-white flex flex-col gap-4 sm:gap-8 w-full max-w-3xl text-center lg:text-left'>
                    <h3 className='text-2xl sm:text-4xl lg:text-5xl leading-snug lg:leading-tight font-light'>
                      “Seeking a better way to build on-chain automations, AEGIS reduced our development time by 90%”
                    </h3>
                    <div>
                        <h3 className='text-lg sm:text-2xl font-bold'>Development Team,</h3>
                        <p className='text-gray-300'>AEGIS</p>
                    </div>
                </div>
                <div className='w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0'>
                    <div 
                      className='border-2 border-white/30 font-medium bg-white text-black rounded-full py-3 px-8 sm:px-10 hover:bg-gray-100 transition-colors cursor-pointer text-base sm:text-lg'
                      onClick={() => navigate('/app')}
                    >
                      Explore
                    </div>
                </div>
            </div>
        </div>

        <div id="pricing" className='py-20 sm:py-25 flex flex-col gap-4 sm:gap-7 mt-10 sm:mt-15 text-center items-center px-6'>
            <h1 className='text-4xl sm:text-6xl max-w-2xl leading-tight font-felipa'>Flexible pricing that scales with you</h1>
            <p className='text-gray-500 max-w-lg'>Choose a plan that fits your team's needs, from startup to enterprise.</p>
        </div>

        <div className='flex flex-col lg:flex-row w-full mb-32 lg:mb-40 px-6 lg:px-40 gap-8 max-w-7xl'>
            {/* Free Plan */}
            <div className='border flex flex-col justify-between border-gray-200 bg-white rounded-2xl p-8 min-h-[500px] w-full lg:w-1/3 shadow-sm hover:shadow-md transition-shadow'>
                <div>
                  <div className='text-2xl sm:text-3xl mb-6'>
                    <h3 className='text-gray-500 text-sm uppercase tracking-widest mb-1'>Basic</h3>
                    <h2 className='text-4xl font-bold'>$0<span className='text-lg font-normal text-gray-400'>/month</span></h2>
                  </div>
                  <p className='text-lg text-gray-600 mb-8'>For Beta Users of AEGIS V1. Explore the future of onchain agents.</p>
                  
                  <div className='space-y-4 mb-8'>
                    <h4 className='text-sm font-bold uppercase text-gray-400 tracking-wider'>What's included?</h4>
                    <ul className='space-y-3 text-gray-600 text-sm'>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 10 Automations / month</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> All Monad Testnet features</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Email Notifications</li>
                      <li className="flex items-center gap-2 text-gray-300 line-through"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> Telegram Integration</li>
                    </ul>
                  </div>
                </div>

                <div 
                  className='bg-black text-white text-lg font-bold text-center rounded-full py-4 cursor-pointer hover:bg-gray-800 transition-all active:scale-95'
                  onClick={() => navigate('/app')}
                >
                  Start Now
                </div>
            </div>

            {/* Plus Plan */}
            <div className='border flex bg-white flex-col justify-between border-orange-200 rounded-2xl p-8 min-h-[500px] w-full lg:w-1/3 relative shadow-xl ring-2 ring-orange-500 ring-opacity-20 transform lg:-translate-y-4'>
                <div className='absolute top-0 right-0 bg-orange-500 text-white text-[10px] uppercase font-bold py-1.5 px-6 rounded-bl-xl rounded-tr-xl tracking-widest'>Most Popular</div>
                <div>
                  <div className='text-2xl sm:text-3xl mb-6'>
                    <h3 className='text-orange-500 text-sm uppercase tracking-widest mb-1'>Plus</h3>
                    <h2 className='text-4xl font-bold'>$19<span className='text-lg font-normal text-gray-400'>/month</span></h2>
                  </div>
                  <p className='text-lg text-gray-600 mb-8'>The essential toolkit for active developers and small teams.</p>
                  
                  <div className='space-y-4 mb-8'>
                    <h4 className='text-sm font-bold uppercase text-gray-400 tracking-wider'>What's included?</h4>
                    <ul className='space-y-3 text-gray-600 text-sm'>
                      <li className="flex items-center gap-2 font-medium text-black"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Unlimited Automations</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Telegram & Discord Bots</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Multi-chain Deployment</li>
                      <li className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Priority AI Response</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-100 text-gray-500 text-lg font-bold text-center rounded-full py-4 cursor-not-allowed">
                  Launching Soon
                </div>
            </div>

            {/* Pro Plan */}
            <div className='border text-white bg-black flex flex-col justify-between border-gray-800 rounded-2xl p-8 min-h-[500px] w-full lg:w-1/3 shadow-2xl'>
                <div>
                  <div className='text-2xl sm:text-3xl mb-6'>
                    <h3 className='text-gray-400 text-sm uppercase tracking-widest mb-1'>Pro</h3>
                    <h2 className='text-4xl font-bold'>$49<span className='text-lg font-normal text-gray-600'>/month</span></h2>
                  </div>
                  <p className='text-lg text-gray-400 mb-8'>For Organizations, DAOs & DeFi startups requiring scale.</p>
                  
                  <div className='space-y-4 mb-8'>
                    <h4 className='text-sm font-bold uppercase text-gray-600 tracking-wider'>What's included?</h4>
                    <ul className='space-y-3 text-gray-400 text-sm'>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Custom Agent Templates</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Dedicated Node Access</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> API Access for Teams</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> 24/7 Priority Support</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/10 text-white/50 text-lg font-bold text-center rounded-full py-4 cursor-not-allowed">
                  Enterprise Only
                </div>
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