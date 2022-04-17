import axios from "axios";
import Link from "next/link";

export default function SearchResults(props) {
    
    return (
        <div className="flex flex-col items-center justify-start h-screen p-4">
            <h1 className="text-3xl">Search query for {props.keyword}</h1>
            <div className="grid grid-cols-2 gap-4 my-8">
             
            </div>
        </div>
    );
}

// export const getServerSideProps = async context => {
//     const {keyword} = context.params;
//     const data = await axios.get(`http://localhost:3000/api/posts/keyword/${keyword}`);
//     const fetchedData = data.data;
    
//     return {
//         props: {
//             fetchedData,
//             keyword
//         }
//     }
// }

