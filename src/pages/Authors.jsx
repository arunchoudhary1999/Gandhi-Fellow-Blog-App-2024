import React, {useState} from 'react'

import Avatar2 from '../images/avatar2.png'
import Avatar3 from '../images/avatar3.png'
import Avatar4 from '../images/avatar4.png'
import Avatar5 from '../images/avatar2.png'
import Avatar6 from '../images/avatar3.png'
import { Link } from 'react-router-dom'

const authorsData = [
  {id: 1, avatar: Avatar2, name: "Arun Choudhary", post:3},
  {id: 2, avatar: Avatar3, name: "Rakesh Mishra ji", post:5},
  {id: 3, avatar: Avatar4, name: "Satendra Dangy", post:0},
  {id: 4, avatar: Avatar5, name: "Arun Choudhary", post:2},
  {id: 5, avatar: Avatar6, name: "Rakesh Mishra ji", post:1},
]

const Authors = () => {

  const [authors, setAuthors] = useState(authorsData)

  return (
    <section className="authors">
      {
        authors.length > 0 ? <div className='container authors__container'>
          {
            authors.map(({id, avatar, name, post}) => {
              return <Link key={id} className='author' to={`/posts/users/${id}`}>
                <div className='author__avatar'>
                <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{post}</p>
                </div>
              </Link>
            })
          }
        </div> : <h2 className='center'>No users/authors found.</h2>
      }
    </section>
  )
}

export default Authors
