import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-black'>
      <Component {...pageProps} />
      <div className='flex justify-between w-full h-full text-white relative p-12'>
        
        <div className='flex justify-between flex-col w-1/2 h-full'>
          <p className='text-center'>eduHUB</p>
          <div className='flex flex-row justify-between w-full h-full'>
            <img></img>
            <img></img>
            <img></img>
            <img></img>

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

        <div className='flex justify-between flex-col w-1/2'>
          <p className='text-center'>Contact</p>
          <div className='p-5 flex flex-col text-center'>
            <a>asdsadas</a>
            <a>asdsadas</a>
            <a>asdsadas</a>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default MyApp;
