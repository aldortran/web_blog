import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from './post-content.module.css'
function PostContent(props){
    const { post } = props;
    const imgPath = `/images/posts/${post.slug}/${post.image}`;
    return(
        <article className={classes.article}>
            <PostHeader title={post.title} image={imgPath} />
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </article>
        )
}
export default PostContent;