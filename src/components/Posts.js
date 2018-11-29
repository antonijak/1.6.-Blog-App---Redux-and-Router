import React, { Component } from "react";
import Button from "./Button";
import PostItem from "./PostItem";
import NewPost from "./NewPost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import require from "uuid";
import "./Posts.css";

const uuidv4 = require("uuid/v4");

class Posts extends Component {
  state = {
    posts: [
      {
        title: "My day in Integrify",
        category: "Work",
        id: require("uuid/v4"),
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "My talk at React Meetup",
        category: "Speech",
        id: require("uuid/v4"),
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      }
    ]
  };
  render() {
    return (
      <div className="home">
        <Link to="/posts/newpost">
          <Button title="ADD POST" />
        </Link>

        {this.state.posts.map((post, i) => (
          <Link
            to={{
              pathname: "/posts/" + post.id,
              state: {
                title: post.title,
                text: post.text,
                category: post.category
              }
            }}
            className="post-item-container"
            key={i + "key"}
          >
            <PostItem
              title={post.title}
              category={post.category}
              id={post.id}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Posts;
