import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-deep-blue relative'>
      <div className='h-screen block relative self-center mx-20'>
        <div className='h-screen mx-20 mt-auto flex flex-row-reverse justify-between relative self-center'>
          <img className='w-96 h-1/2 rounded-2xl border-8 border-double border-black m-auto'></img>
            <div className='m-auto'>
              <h1 className= 'text-transparent text-5xl font-mono text-center bg-clip-text bg-gradient-to-r from-light-pink to-pink-white'>eduHUB</h1>
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <a>
                <button className='absolute bg-pink-white mt-5 rounded-2xl pb-1'>Get Started</button>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}
