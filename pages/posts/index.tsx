import AllPost from "../../components/posts/all-post";
import {Fragment} from "react";
import {getAllPosts} from "../../lib/posts-utils";

export default function AllPostPage(props: { posts: any; }){
    // const DUMMY_DATA = [
    //     {title: 'Crafting a design system for a multiplanetary future', expert: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.', date:'September 5, 2022', id: '01'},
    //     {title: 'It is red system for a multiplanetary future', expert: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.', date:'September 5, 2022', id: '02'},
    //     {title: 'Crafting a design system for a multiplanetary future', expert: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.', date:'September 5, 2022', id: '03'},
    //     {title: 'Crafting a design system for a multiplanetary future', expert: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.', date:'September 5, 2022', id: '04'},
    // ];
    return(
        <Fragment>
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
