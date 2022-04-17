const Footer = () => {
  return (
    <div className="relative flex justify-between w-full h-full p-12 text-white bg-black">
      <div className="flex flex-col justify-between w-9/12 h-full">
       
        <div className="flex px-8">
          <img src="/blob.png" className="text-center w-1/4 h-1/4"></img>
          <p className="text-center w-3/4 text-4xl align-text-bottom">eduHUB</p>
        </div>

        <div className="flex flex-row justify-between w-full h-full px-8">
          <p>fb</p>
          <p>insta</p>
          <p>twitter</p>
          <p>gmail</p>
        </div>
      </div>

      <div className="flex flex-col justify-between w-1/2">
        <p className="text-center">Browse Subjects</p>
        <div className="flex flex-col p-5 text-center">
          <a>Biology</a>
          <a>beep</a>
          <a>boop</a>
          <a>beep</a>
        </div>
      </div>

      <div className="flex flex-col w-1/2">
        <p className="text-center">Join Our Newsletter</p>
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