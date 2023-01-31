import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighLighter} from "react-syntax-highlighter";
import classes from './post-content.module.css'
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props){
    const { post } = props;
    const imgPath = `posts/${post.slug}`;
    const customRender = {
        code(code){
            const { className, children } = code;
            const language = className.split('-')[1];
            return <SyntaxHighLighter
                children={children}
                style = {atomDark}
                language = {language}/>
        }
    };
    return(
        <article className={classes.article}>
            <PostHeader title={post.title} key={imgPath} />
            <ReactMarkdown components={customRender}>
                {post.content}
            </ReactMarkdown>
        </article>
        )
}
export default PostContent;