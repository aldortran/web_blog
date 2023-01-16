export default function PostHeader(props){
    const {title, expert, slug} = props;
    const exploreLink = `/posts/${slug}`;
    return(
        <header className='flex flex-col bg-zinc-800 max-w-5xl px-8 md:mx-auto sm:text-5xl '>
            <div className='mx-auto max-w-2xl mt-4 justify-center'>
                <time className='text-base px-4 text-zinc-400'>
                    2022
                </time>
                <h1 className='my-6 text-4xl text-zinc-100 font-bold'>{title}</h1>
                <div className='max-w-xl'>
                    <p className='text-zinc-400 text-sm '>{expert}</p>
                </div>
            </div>
        </header>
    )
}