import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Browse(props) {
  const [input, setInput] = useState("");
  const router = useRouter();

  return (
    <div className="relative h-screen p-12 bg-deep-blue">
      <div className="relative self-center block h-screen mx-20">
        <div className="relative flex flex-row-reverse items-start self-center justify-between h-screen mx-20 ">
          <div className="mx-auto">
            <div className="relative group">
              <div className="absolute transition duration-1000 rounded-lg opacity-75 -inset-0.5 from-light-pink to-purple-600 blur bg-gradient-to-r group-hover:opacity-100 group-hover:duration-200"></div>
              <button className="relative flex items-center w-full py-4 pl-4 leading-none bg-black rounded-lg">
                <span className="flex items-center space-x-5">
                  <input
                    id="postQuery"
                    name="postQuery"
                    type="text"
                    autoComplete="off"
                    placeHolder="Enter a keyword"
                    className="w-full p-4 pr-32 text-gray-100 bg-gray-900 rounded-2xl"
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
                    router.push(`/query/${input}`);
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
            <h3 className="p-4 text-3xl text-center border-b-2 border-white">
              Check out what&apos;s new!
            </h3>
            <div className="grid grid-cols-2 gap-4 my-8">
              {props.fetchedData.map((post, i) => (
                <Link key={i} href={`/post/${post.slug}`}>
                  <div className="px-4 py-6 text-center border border-white rounded-2xl hover:cursor-pointer">
                    <h1 className="text-2xl">{post.title}</h1>
                    <h3>By {post.author}</h3>
                    <div className="mt-6 text-left ">
                      {post.keywords.map((keyword, i) => (
                        <div key={i} className="inline px-2 py-1 ml-2 border text-pink-white border-pink-white rounded-2xl">
                          {keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const getData = await axios.get("http://localhost:3000/api/posts/");
  const fetchedData = getData.data;
  console.log(fetchedData);
  return {
    props: {
      fetchedData,
    },
  };
};
