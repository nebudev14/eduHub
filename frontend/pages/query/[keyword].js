import axios from "axios";
import Link from "next/link";

export default function SearchResults(props) {
    
    return (
        <div className="flex flex-col items-center justify-start h-screen p-4">
            <h1 className="text-3xl">Search query for {props.keyword}</h1>
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
    );
}

export const getServerSideProps = async context => {
    const {keyword} = context.params;
    const data = await axios.get(`https://eduhub-sigma.vercel.app/api/posts/keyword/${keyword}`);
    const fetchedData = data.data;
    
    return {
        props: {
            fetchedData,
            keyword
        }
    }
}


