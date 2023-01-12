import Link from "next/link";
function PostItems(props){
    const { title, expert, date, id, isFeatured} = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        date:'numeric',
        month:'long',
        year:'numeric',
        });
    const exploreLink = `/posts/${id}`;
    return <li className='col-span-2 rounded-lg  shadow group group-hover:rounded-full  bg-zinc-800 hover:bg-zinc-600'>
        <Link href={exploreLink} legacyBehavior>
            <a className='flex flex-col items-center max-w-2xl rounded-full '>
                <div className='justify-center flex flex-col m-8'>
                    <time className='text-zinc-400 text-sm px-4 flex'>
                        <span className='absolute bg-red-500 inset-x--2 '></span> <h4>{formattedDate}</h4>
                    </time>
                    <h2 className='text-base font-semibold dark:text-zinc-800 mt-3'>
                        {title}
                    </h2>
                    <p className='text-zinc-400 text-sm mt-3'>
                        {expert}
                    </p>
                    <div className='mt-3'>
                        <span className='text-teal-500 text-sm'>
                        Read article
                    </span>
                    </div>
                </div>

            </a>

        </Link>

        <div>
        </div>
    </li>
}
export default PostItems;