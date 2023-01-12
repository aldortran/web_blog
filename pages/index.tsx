import Hero from '../components/home-page/hero'
import {Fragment} from "react";
import FeaturePosts from '../components/home-page/featureposts'
import {getFeaturePost} from '../lib/posts-utils'
// @ts-ignore
export default function HomePage(props: { posts: any; }) {
  // @ts-ignore
  return (
      <Fragment>
              <Hero/>
              <FeaturePosts posts={props.posts}/>
      </Fragment>
  )
}
export function getStaticProps(){
     const featurePosts = getFeaturePost();
     return{
         props:{
             posts: featurePosts
         }
     }
}