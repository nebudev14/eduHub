const Nav = () => {
    return (
        <div className="relative self-center w-1/2 py-8 m-auto text-2xl text-white rounded-xl t-12">
            <div className="relative flex justify-between w-full font-mono">
                <a href = '/' className="p-2 text-transparent duration-200 bg-clip-text bg-gradient-to-r from-light-pink to-pink-white rounded-2xl hover:scale-105">eduHUB</a>
                <a className="self-end hover:scale-105 hover:cursor-pointer" href="/create/upload">Create</a>
            </div>
            
        </div>
    );
  };
  
  export default Nav;