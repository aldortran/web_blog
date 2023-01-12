import PostGrid from "../posts/post-grid";
export default function Featureposts(props){
    return(
            <section className='flex flex-col h-full bg-black mx-0.5 h-full max-h-full'>
                <div className='flex text-white bg-zinc-800 px-12 mx-auto w-full max-w-7xl border-x'>
                    <div className='relative px-8 pb-8'>
                        <h1 className='text-4xl font-bold max-w-2xl'>
                            Feature
                        </h1>
                        <div>
                            <PostGrid posts={props.posts}/>
                        </div>
                    </div>
                </div>
        </section>
    )
}