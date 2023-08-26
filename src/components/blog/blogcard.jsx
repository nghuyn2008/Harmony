import React from 'react'
import moment from 'moment'
import Link from 'next/link'
const blogcard = ({post}) => {
  console.log(post);

  return (
      <div className ='bg-white rounded-lg p-0 lg:p-8 pb-12 mb:8'>
        <div className = 'realative overflow-hidden pb-80 mb-6'>
          <img
            src={post.photoPost.url}
            alt={post.title}
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <h1 className ='transition duration-700 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold'>
          <Link href={`/post/${post.slug}`}> 
            {post.title}
          </Link>
        </h1>
        <div className ='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img 
              alt={post.author.name}
              height='30px'
              width='30px'
              className='align-mode rounded-full'
              src={post.author.image.url}
              />
              <p className='inline align middle text-black-700 ml-2 text-lg'>{post.author.name}</p>
          </div>
          <div className="font-medium text-black-700">
            <span> 
              {moment(post.datePost).format('MMM,DD,YYYY')}
            </span>
          </div>
        </div>
        <p className='text-center text-lg text-black-700 font-normal px-4 lg+px-20 mb-8'></p>
          <div className='text-center'>
            <Link href={`/post/${post.slug}`}>
              <span className="inline block bg-gray-600 font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Read Now
              </span>
            </Link>
          </div>
      </div>
  )
}

export default blogcard