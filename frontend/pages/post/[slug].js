import axios from "axios";

export default function Post(props) {
  const data = props.fetchedData;

  return (
    <div className="flex flex-row h-screen p-6 text-center">
      <div className="w-1/4 p-4 my-4 border-r-2 border-white">
        <h1 className="mb-4">Keywords</h1>
        
      </div>
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const { slug } = context.params;
//   const getData = await axios.get(
//     `http://localhost:3000/api/posts/slug/${slug}`
//   );
//   const fetchedData = getData.data;

//   return {
//     props: {
//       fetchedData,
//     },
//   };
// };
