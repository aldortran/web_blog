import AllPost from "../../components/posts/all-post";
import {Fragment} from "react";
import {getAllPosts} from "../../lib/posts-utils";
import Head from "next/head";

export default function AllPostPage(props: { posts: any; }){
    return(
        <Fragment>
            <Head>
                <title>All Post</title>
                <meta name='description' content='A list of all post programming and development'/>
            </Head>
            <AllPost posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps(){
    const allPosts = getAllPosts();

    return{
        props: {
            posts: allPosts,
        }
    }
}
