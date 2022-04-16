import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-deep-blue relative'>
      <div className='h-screen block relative self-center mx-20'>
        
        <div className='h-screen mx-20 mt-auto flex flex-row-reverse justify-between relative self-center'>
          <img className='w-full h-1/2 rounded-2xl border-8 border-double border-black m-auto'></img>
            
            <div className='m-auto p-12'>
              <h1 className= 'text-transparent text-5xl font-mono text-center bg-clip-text bg-gradient-to-r from-light-pink to-pink-white'>eduHUB</h1>
              <p className='text-white'>sdafasdff</p>
            </div>
        </div>

      </div>
    </div>
  )
}
