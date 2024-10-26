import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.JPG'

const PostAuthor = () => {
  return (
    <div className='post__link'>
        <Link to={`/posts/users/sdfsdf`} className='post__author'>
        <div className='post__author-avatar'>
            <img src={Avatar} alt="" />
        </div>
        <div className='post__author-details'>
            <h1>By: Arun Choudhary</h1>
            <small>Just Now</small>
        </div>
    </Link>
    </div>
  )
}

export default PostAuthor
