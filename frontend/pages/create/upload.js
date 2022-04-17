import { getSession } from "next-auth/react";
import { useState } from "react";

export default function Upload() {
  const [keywords, setKeywords] = useState([]);
  

  return (
    <div className="h-screen p-16">
      <h1 className="mb-6 text-4xl">Create a post</h1>
      <form>
        <input
          id="title"
          className="w-1/2 p-4 mb-3 text-3xl text-gray-100 bg-gray-800 outline-none rounded-xl"
          placeholder="Title"
          autoComplete="off"
        />
        <input
          id="desc"
          className="w-3/4 p-3 mb-3 text-3xl text-gray-100 bg-gray-800 outline-none rounded-xl"
          placeholder="Enter a small caption/description"
          autoComplete="off"
        />
        <input
          id="link"
          className="w-1/2 p-4 mb-3 text-2xl text-gray-100 bg-gray-800 outline-none rounded-xl"
          placeholder="Video Link (Optional)"
          autoComplete="off"
        />
        <br />
        <input
          id="name"
          className="w-1/4 p-4 mb-3 text-2xl text-gray-100 bg-gray-800 outline-none rounded-xl"
          placeholder="Name"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
