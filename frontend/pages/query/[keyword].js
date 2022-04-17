export default function SearchResults(props) {
    const kw = props.keyword;
    return (
        <div className="flex items-center justify-center h-screen">
            {kw}
        </div>
    );
}

export const getServerSideProps = async context => {
    const {keyword} = context.params;
    

    return {
        props: {
            keyword
        }
    }
}

