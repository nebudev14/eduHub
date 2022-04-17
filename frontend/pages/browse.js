import Head from "next/head";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/router";

export default function Browse() {
  const [input, setInput] = useState("");
  const router = useRouter();

  return (
    <div className="relative h-screen p-12 bg-deep-blue">
      <div className="relative self-center block h-screen mx-20">
        <div className="relative flex flex-row-reverse items-start self-center justify-between h-screen mx-20 ">
          <div className="mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 from-light-pink to-purple-600 rounded-lg blur opacity-75 bg-gradient-to-r group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative flex items-center px-32 py-4 leading-none bg-black rounded-lg">
                <span className="flex items-center space-x-5">
                  <input
                    id="postQuery"
                    name="postQuery"
                    type="text"
                    autoComplete="off"
                    placeHolder="Enter a keyword"
                    className="w-full p-2 pr-32 text-gray-100 bg-gray-900 rounded-2xl"
                    onInput={(e) => setInput(e.target.value)}
                  />
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 pl-3 ml-6 duration-200 border-l-2 hover:text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  onClick={() => {
                    router.push(`/query/${input}`)
                  }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <h1 className="pt-12 pb-12 font-mono text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-light-pink to-pink-white">
              eduHUB
            </h1>
            <p className="w-1/2 m-auto text-center text-white">

            </p>
            <h3 className="text-3xl">Check out what's new!</h3>
            <img className="w-full h-48 mt-12 border-black border-double border-5 rounded-xl"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
