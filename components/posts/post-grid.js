import PostItems from "./post-items";
function PostGrid(props){
    const { posts } = props;

    return(
        <ul role='list' className='grid grid-rows-1 sm:grid-rows-2 grid-flow-row sm:grid-flow-col gap-3 pt-4'>
            {posts.map((post) =>
                (<PostItems
                    key={posts.id}
                    post={post}
                />
                )
            )}

        </ul>
    )
}
export default  PostGrid
