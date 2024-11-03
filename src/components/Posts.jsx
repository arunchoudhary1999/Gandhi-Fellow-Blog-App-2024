import React, { useState } from "react";

import PostItem from "../components/PostItem";

import { DUMMY_POSTS } from "../data";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="posts">
      <h1
        style={{
          textAlign: "center",
          background: "red",
          width: "83%",
          margin: "20px auto",
          padding: "20px 0",
          fontSize: "2rem",
        }}
      >
        🕯️{" "}
        <spam
          style={{
            color: "white",
          }}
        >
          H
        </spam>
        <spam
          style={{
            color: "blue",
          }}
        >
          a
        </spam>
        <spam
          style={{
            color: "gold",
          }}
        >
          p
        </spam>
        <spam
          style={{
            color: "neon",
          }}
        >
          p
        </spam>
        <spam
          style={{
            color: "skyblue",
          }}
        >
          y
        </spam>
        <spam
          style={{
            color: "black",
          }}
        >
          {" "}
          D
        </spam>
        <spam
          style={{
            color: "brown",
          }}
        >
          i
        </spam>
        <spam
          style={{
            color: "orange",
          }}
        >
          w
        </spam>
        <spam
          style={{
            color: "pink",
          }}
        >
          a
        </spam>
        <spam
          style={{
            color: "green",
          }}
        >
          l
        </spam>
        <spam
          style={{
            color: "yellow",
          }}
        >
          i
        </spam>
        🕯️
      </h1>
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts Founds</h2>
      )}
    </section>
  );
};

export default Posts;
