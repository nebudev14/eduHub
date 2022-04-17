import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full p-16 bg-gradient-to-br from-deep-blue">
      <div className="flex items-start justify-center">
        <div className="px-16 font-mono ">
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-light-pink to-pink-white">
            eduHUB
          </h1>
          <p className="text-2xl text-white">
            A service dedicated to finding education quicker
          </p>
          <a href="/browse">
            <button className="absolute p-2 mt-5 text-3xl text-black duration-200 bg-pink-white rounded-2xl hover:scale-110">
              Get Started
            </button>
          </a>
        </div>
        <div className="h-screen mx-20 ">
          <img
            src="/sharpboi.png"
            className="m-auto border-8 border-black border-double w-96 h-1/2 rounded-2xl"
          ></img>
        </div>
      </div>
    </div>
  );
}
