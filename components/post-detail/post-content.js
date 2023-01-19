import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

function PostContent(props){
    const { post } = props;
    const imgPath = `/images/posts/${post.slug}/${post.image}`;
    return(
        <article className='border-x border-zinc-100 max-w-7xl bg-zinc-800 py-8 mx-auto p-5'>
            <PostHeader title={post.title} image={imgPath} />
            <div className='text-white max-w-2xl justify-center mx-auto'>
            <ReactMarkdown className='mx-2 my-auto text-sm'>
                {post.content}
            </ReactMarkdown>
            </div>
        </article>
        )
}
export default PostContent;