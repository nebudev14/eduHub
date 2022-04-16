import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-deep-blue relative'>
      <div className='h-screen block relative self-center mx-20'>
        <div className='h-screen mx-20 mt-auto flex flex-row-reverse justify-between relative self-center'>
          <img className='w-full h-1/2 rounded-2xl border-8 border-double border-black m-auto'></img>
            
            <div className='m-auto px-16 py-16 font-mono p-12'>
              <h1 className= 'text-transparent text-5xl bg-clip-text bg-gradient-to-r from-light-pink to-pink-white'>eduHUB</h1>
              <p className='text-white'>A service dedicated to adskfjaskdlfjs</p>
              <a href='/home'>
                <button className='absolute bg-pink-white mt-5 rounded-2xl pb-1'>Get Started</button>
              </a>
            </div>

        </div>
      </div>
    </div>
  )
}
