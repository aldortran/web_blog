import PostContent from '../../components/post-detail/post-content'
import {getPostData, getPostFiles} from "../../lib/posts-utils";
function PostDetail(props: { post: any; }){
    // @ts-ignore
    return(<PostContent post={props.post}/>)
}
export function getStaticProps(context: { params: any; }){
    const {params} = context;
    const {slug} = params;
    const postData = getPostData(slug);
    return{
        props:{
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths(){
    const postFilenames = getPostFiles();
    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, '') );
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: true,
    }
}
export default PostDetail;