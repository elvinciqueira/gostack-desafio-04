import React, { Component } from "react";

import PostItem from "../PostItem/index";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Elvin Ciqueira",
          avatar:
            "https://avatars1.githubusercontent.com/u/42623554?s=400&u=18a77bb87f741196cf59a006ccb66aa49863c8e5&v=4"
        },
        date: "07 Set 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando? ",
        comments: [
          {
            id: 2,
            author: {
              name: "Elvin do Multiverso T-2",
              avatar:
                "https://avatars1.githubusercontent.com/u/42623554?s=400&u=18a77bb87f741196cf59a006ccb66aa49863c8e5&v=4"
            },
            date: "09 Out 2019",
            content:
              "Eu vim da Terra 2 para dizer que a Rocketseat está sempre em busca de talentos para o time, e geralmente fica de olho em que se destaca no Bootcamp."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
