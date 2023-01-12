import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
const DUMMY_POST = {title: '# Crafting a design system for a multi-planetary future', expert: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.', id:'03'}

function PostContent(){
    const slugId = `/posts/${DUMMY_POST.id}`;
    const titleMark = <ReactMarkdown>
        {DUMMY_POST.title}
    </ReactMarkdown>
    return(
        <article className='border-x border-zinc-100 max-w-7xl bg-zinc-800 py-8 mx-auto'>
            <PostHeader title={titleMark} key = {DUMMY_POST.id} id={slugId} />
            <div className='text-white'>
            <ReactMarkdown>
                {DUMMY_POST.expert}
            </ReactMarkdown>
            </div>
        </article>
        )
}
export default PostContent;