// import { GraphQLClient,gql } from "graphql-request"
import Blogcard from './blogcard'
import Category from "./category"
import {getPosts} from '../../services'

export default function blog ({posts}) {
    return(
        <div>
            <div>
                {posts?.map((post) => <Blogcard post={post} key={post.title} />)}
            </div>
            <Category />
        </div>
        )
}

export async function getStaticProps () {
    const posts = (await getPosts()) || []

    return {
        props :{posts}     
    }
}
