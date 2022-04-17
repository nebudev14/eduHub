import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative flex justify-between w-full h-full p-12 text-white bg-black">
      <div className="flex flex-col justify-between w-9/12 h-full">
       
        <div className="flex px-8">
          <img src="/blob.png" className="w-1/4 text-center h-1/4"></img>
          <p className="w-3/4 text-4xl text-center align-text-bottom">eduHUB</p>
        </div>

        <div className="flex flex-row justify-between w-full h-full px-8">
          <p>fb</p>
          <p>insta</p>
          <p>twitter</p>
          <p>gmail</p>
        </div>
      </div>

      <div className="flex flex-col justify-between w-1/2">
        <p className="text-lg text-center">Browse Subjects</p>
        <div className="flex flex-col p-5 space-y-1 text-center">
          <Link href="/" className="text-sm hover:underline hover:cursor-pointer">Biology</Link>
          <Link href="/" className="text-sm hover:underline hover:cursor-pointer">Chemistry</Link>
          <Link href="/" className="text-sm hover:underline hover:cursor-pointer">Physics</Link>
          <Link href="/" className="text-sm hover:underline hover:cursor-pointer">Math</Link>
        </div>
      </div>

      <div className="flex flex-col w-1/2">
        <p className="text-lg text-center ">Join Our Newsletter!</p>
        <div className="flex flex-row p-6 text-center">
          <textarea className="w-3/4 text-deep-blue"></textarea>
          <button className="flex-row w-1/2 bg-pink-white text-deep-blue">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;