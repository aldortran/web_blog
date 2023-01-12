import PostGrid from "./post-grid";
import MainNavigation from "../layout/main-navigation";

function AllPost(props){
    return(
        <section className='flex flex-col h-full bg-black mx-0.5 h-full max-h-full'>
            <div className=' text-white bg-zinc-800 px-12 mx-auto w-full max-w-7xl border-x'>
                <div className='text-4xl font-bold max-w-2xl mt-6 mx-4 px-8 relative'>
                    <h1>All Post</h1>
                </div>
                <div className='relative px-8 pb-8'>
                    <PostGrid posts={props.posts}/>
                </div>
            </div>
        </section>
    )
}
export default AllPost;