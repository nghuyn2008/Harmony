import {request, gql} from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function getPosts () {
const query = gql `
    query MyQuery {
        postsConnection {
        edges {
            node {
                authors {
                    id
                    name
                    image {
                        url
                    }
                }
                title
                slug
                datePost
                id
                content {
                    html
                }
                categories {
                    ... on Category {
                        id
                        name
                        slug
                    }
                }
                featuredPost
                photoPost {
                    id
                }
            }
        }
        }
    }`
    const res = await request(graphqlAPI,query)
    return res.postConnection.edges
}
