import axios from "axios";

export default function Post(props) {
  const data = props.fetchedData;

  return (
    <div className="flex flex-row h-screen p-6 text-center">
      <div className="w-1/4 p-4 my-4 border-r-2 border-white">
        <h1 className="mb-4">Keywords</h1>
        {data.keywords.map((keyword, i) => (
          <div
            key={i}
            className="inline p-2 mr-4 text-xs text-center border rounded-3xl border-pink-white"
          >
            {keyword}
          </div>
        ))}
        <div>
            <h2 className="mt-6 ">Written by {data.author}</h2>
        </div>
      </div>
      <div className="w-3/5 p-6 text-left">
        <h1 className="inline p-4 text-3xl border-b-2 border-white">
          {data.title}
        </h1>
        <p className="pr-12 my-8">{data.desc}</p>
        {data.link === "" ? null : (
          <iframe
            src={`https://www.youtube.com/embed/${data.link.split("=")[1]}`}
            className="w-full h-96 rounded-2xl"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const getData = await axios.get(
    `http://localhost:3000/api/posts/slug/${slug}`
  );
  const fetchedData = getData.data;

  return {
    props: {
      fetchedData,
    },
  };
};

