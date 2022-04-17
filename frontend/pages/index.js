import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative w-full h-screen bg-deep-blue'>
      <div className='relative self-center block h-screen mx-20'>
        <div className='relative flex flex-row-reverse self-center justify-between h-screen mx-20 snap-center snap-y'>
          <img src='/sharpboi.png' className='animate-bop w-96 m-auto border-8 border-black border-double h-1/2 rounded-2xl'></img>
            <div className='px-16 py-16 m-auto font-mono'>
              <h1 className= 'text-5xl text-transparent bg-clip-text bg-gradient-to-r from-light-pink to-pink-white'>eduHUB</h1>
              <p className='text-white'>A service dedicated to allowing users to post their own educational content and as well as browse videos based on topics that they want to learn.</p>
              <a href='/browse'>
                <button className='absolute p-2 mt-5 text-black duration-200 bg-pink-white rounded-2xl hover:scale-110'>Get Started</button>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}
