import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative w-screen h-screen bg-deep-blue'>
      <div className='relative self-center block h-screen mx-20'>
        <div className='relative flex flex-row-reverse self-center justify-between h-screen mx-20 mt-auto'>
          <img className='w-full m-auto border-8 border-black border-double h-1/2 rounded-2xl'></img>
            <div className='px-16 py-16 m-auto font-mono'>
              <h1 className= 'text-5xl text-transparent bg-clip-text bg-gradient-to-r from-light-pink to-pink-white'>eduHUB</h1>
              <p className='text-white'>A service dedicated to adskfjaskdlfjs</p>
              <a href='/home'>
                <button className='absolute pb-1 mt-5 bg-pink-white rounded-2xl'>Get Started</button>
              </a>
            </div>

        </div>
      </div>
    </div>
  )
}
