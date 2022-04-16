import Head from "next/head";
import Image from "next/image";

export default function Browse() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-deep-blue">
      <h1 className="mb-4 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-light-pink to-pink-white">
        eduHUB
      </h1>
      <h3 className="text-3xl">Check out what's new!</h3>
    </div>
  );
}
