import { getSession } from "next-auth/react";
import { useState } from "react";

export default function Upload() {
  const [keywords, setKeywords] = useState([]);
  const [link, setLink] = useState("");

  const addKeyword = async (event) => {
    event.preventDefault();
    if (event.target.keywords.value !== "") {
      setKeywords([...keywords, event.target.keywords.value]);
    }
    event.target.keywords.value = "";
  };

  const submitData = async (event) => {
    try {
      event.preventDefault();
      const title = event.target.title.value;
      const desc = event.target.desc.value;
      const link = event.target.link.value;
      const author = event.target.name.value;
      const keywordList = keywords;
      const body = {
        title: title,
        desc: desc,
        link: link,
        author: author,
        keywords: keywordList,
      };
      event.target.title.value = '';

      await fetch("/api/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  return (
    <div className="h-full p-16">
      <h1 className="mb-6 text-4xl">Create a post</h1>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <div className="py-2 mb-4">
            {keywords.map((keyword) => (
              <div
                key={keyword}
                className="inline w-full px-4 py-2 mr-4 text-black border bg-pink-white rounded-2xl"
              >
                {keyword}
              </div>
            ))}
          </div>
          <form
            className="flex items-center justify-start"
            onSubmit={addKeyword}
          >
            <input
              id="keywords"
              className="p-4 mb-3 text-xl text-gray-100 bg-gray-800 outline-none w-1/8 rounded-xl"
              placeholder="Keywords"
              autoComplete="off"
            />
            <button
              type="submit"
              className="px-2 py-1 mb-4 ml-4 text-2xl border border-gray-400 rounded-xl"
            >
              Add
            </button>
          </form>
          <form onSubmit={submitData}>
            <input
              id="title"
              className="w-full p-4 mb-3 text-3xl text-gray-100 bg-gray-800 outline-none rounded-xl"
              placeholder="Title"
              autoComplete="off"
              required
            />
            <br />
            <input
              id="desc"
              className="w-full p-3 mb-3 text-3xl text-gray-100 bg-gray-800 outline-none rounded-xl"
              placeholder="Enter a small caption/description"
              autoComplete="off"
              required
            />
            <br />
            <input
              id="link"
              className="w-1/2 p-4 mb-3 text-2xl text-gray-100 bg-gray-800 outline-none rounded-xl"
              placeholder="Video Link (Optional)"
              autoComplete="off"
              onInput={(e) => setLink(e.target.value)}
              required
            />
            <br />
            <input
              id="name"
              className="w-1/2 p-4 mb-3 text-2xl text-gray-100 bg-gray-800 outline-none rounded-xl"
              placeholder="Author name"
              autoComplete="off"
              required
            />
            <br />
            <button
              type="submit"
              className="px-4 py-2 mt-2 text-3xl duration-200 border border-gray-400 rounded-2xl hover:text-pink-white hover:border-pink-white"
            >
              Publish
            </button>
          </form>
        </div>
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${link.split("=")[1]}`}
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
