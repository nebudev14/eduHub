import Head from "next/head";
import Image from "next/image";

export default function Browse() {
  return (
    <div className='w-screen h-screen bg-deep-blue relative'>
      <div className='h-screen block relative self-center mx-20'>
        
        <div className='h-screen mx-20 mt-auto flex flex-row-reverse justify-between relative self-center'>
            
            <div className='m-auto'>
                <div className='relative group'>
                    <div className='absolute -inset-0.5 from-light-pink to-purple-600 rounded-lg blur opacity-75 bg-gradient-to-r group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
                    <button className='relative px-32 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'>
                        <span className='flex items-center space-x-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                            <span className='pr-6 text-gray-100 w-full'>idk what to do with this</span>
                        </span>
                        <span className='pl-6 text-indigo-400  group-hover:text-gray-100 transition duration-200'>sdafsdf</span>
                    </button>
                </div>

                <h1 className= 'pt-12 pb-12 text-transparent text-5xl font-mono text-center bg-clip-text bg-gradient-to-r from-light-pink to-pink-white'>eduHUB</h1>
                <p className='text-white text-center w-1/2 m-auto'>jdasfjakfja faksjf kadfsakjf adskfasdkfj askf jaskfjsak dfjaksfkasdj fksj </p>
                <h3 className="text-3xl">Check out what's new!</h3>
                <img className='mt-12 w-full h-48 border-5 border-black border-double rounded-xl'></img>
            </div>
                
        </div>
        
      </div>
    </div>
  );
}
