import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog (1).JPG'

const PostDetails = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
        <div className='post-detail_buttons'>
          <Link to={`/post/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/post/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
        </div>

        <h1 className='post-detail__h1'>This is the post title!</h1>
      <div className='post-detail__thumbnail'>
        <img src={Thumbnail} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis dolores temporibus aliquam iure inventore molestias distinctio et dolorum. Iusto suscipit voluptatibus tenetur obcaecati ea.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus eligendi placeat nemo qui. Ipsam, laborum deleniti. Quo eaque nostrum magnam, ipsum, molestiae iste perspiciatis sunt quae rerum autem delectus earum? Voluptates et quis sit veniam quae impedit ullam aspernatur alias quas beatae omnis tenetur enim magnam obcaecati, quibusdam dignissimos perferendis. Similique rem at labore!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa facere totam necessitatibus minima modi fuga eius sit esse reprehenderit. Similique veritatis provident reprehenderit autem exercitationem porro nam ab nisi at quod facere, neque inventore tenetur magnam, beatae quo debitis quas officia. Eaque necessitatibus totam quibusdam, exercitationem explicabo magni, dolores rerum alias officiis ea pariatur dignissimos amet tempora neque excepturi! Neque est hic id eum magni, suscipit corporis, ullam commodi optio in qui. Architecto, hic laudantium soluta distinctio recusandae ipsa quis animi voluptas quisquam explicabo sit nostrum id deleniti! Asperiores autem temporibus, itaque iure aliquam quas harum exercitationem, impedit iste reiciendis, labore quia unde! Error debitis deserunt veniam odit perspiciatis velit repudiandae hic maiores eveniet vero? Sed eius corrupti obcaecati itaque amet dolore, incidunt eveniet expedita.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum repellat corporis dolore saepe totam cum alias asperiores consectetur est.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi eveniet eaque modi quae. Aperiam natus corrupti dolorum reiciendis doloremque molestias cum exercitationem explicabo nulla assumenda ut, quia, dicta earum perferendis ipsum labore aut vel alias corporis, quibusdam quam? Pariatur error sed voluptate dignissimos ex animi eveniet architecto ut possimus officiis id velit, nesciunt provident eum soluta odio, aut ab suscipit. Ut id sint voluptate nostrum sit hic fugit amet accusamus animi aliquam commodi ipsa, quidem blanditiis enim maxime. Aperiam, minus ut fugit nulla porro, dolore dolores accusamus rem, sapiente consequatur quasi cum omnis. Ab error, itaque amet eum, culpa corporis, ratione laudantium aspernatur numquam deleniti assumenda harum doloremque! Magnam facilis velit reiciendis sint alias aliquam, rerum autem reprehenderit dolore voluptate enim dolores sed repudiandae exercitationem accusantium ullam, nam minima nihil? Asperiores aliquam reprehenderit repudiandae ea, corrupti ullam magnam, distinctio eum optio maiores quae, placeat quis veritatis est eaque. Asperiores iste, voluptates enim laudantium adipisci illum eos aliquam facere pariatur corporis perspiciatis consectetur! Illo, similique, consectetur culpa amet explicabo vitae corporis unde ab perferendis nemo eum commodi quaerat in facilis temporibus sequi vero reiciendis nulla omnis dolore sunt accusamus voluptates, incidunt aut. Perferendis voluptatibus aut praesentium. Voluptatum repudiandae facere quaerat.</p>
      </div>
      
    </section>
  )
}

export default PostDetails
