import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-black'>
      <Component {...pageProps} />
      <div className='flex justify-between w-full h-full text-white relative p-12'>
        
        <div className='flex justify-between flex-col w-9/12 h-full'>
        <p className='text-center'>banner</p>
          <p className='text-center'>eduHUB</p>
          <div className='flex flex-row justify-between w-full h-full'>
            <p>fb</p>
            <p>insta</p>
            <p>twitter</p>
            <p>gmail</p>

          </div>
        </div>

        <div className='flex justify-between flex-col w-1/2'>
          <p className='text-center'>Browse Subjects</p>
          <div className='p-5 flex flex-col text-center'>
            <a>Biology</a>
            <a>beep</a>
            <a>boop</a>
            <a>beep</a>
          </div>
        </div>

        <div className='flex flex-col w-1/2'>
          <p className='text-center'>Join Our Newsletter</p>
          <div className='p-6 flex flex-row text-center'>
            <textarea className="w-3/4 text-deep-blue"></textarea>
            <button className="bg-pink-white text-deep-blue flex-row w-1/2">Submit</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MyApp;
