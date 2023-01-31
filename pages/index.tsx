import Hero from '../components/home-page/hero'
import {Fragment} from "react";
import FeaturePosts from '../components/home-page/featureposts'
import {getFeaturePost} from '../lib/posts-utils'
import Head from "next/head";
// @ts-ignore
export default function HomePage(props) {
  // @ts-ignore
  return (
      <Fragment>
          <Head>
              <title>Blog Tin</title>
              <meta
                  name='description'
                  content='My Blog and I post about programming and web development'
              />
          </Head>
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