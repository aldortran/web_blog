import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

function PostContent(props){
    const { post } = props;
    const slugId = `/posts/${post.slug}`;
    const titleMark = <ReactMarkdown>
        {post.title}
    </ReactMarkdown>
    return(
        <article className='border-x border-zinc-100 max-w-7xl bg-zinc-800 py-8 mx-auto'>
            <PostHeader title={titleMark} key={slugId} />
            <div className='text-white'>
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
            </div>
        </article>
        )
}
export default PostContent;