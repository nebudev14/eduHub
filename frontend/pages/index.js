import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative w-screen h-screen bg-deep-blue'>
      <div className='relative self-center block h-screen mx-20'>
        <div className='relative flex flex-row-reverse self-center justify-between h-screen mx-20 mt-auto'>
          <img className='w-full m-auto border-8 border-black border-double h-1/2 rounded-2xl'></img>
            <div className='m-auto'>
              <h1 className= 'font-mono text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-light-pink to-pink-white'>eduHUB</h1>
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <a>
                <button className='absolute pb-1 mt-5 bg-pink-white rounded-2xl'>Get Started</button>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}
