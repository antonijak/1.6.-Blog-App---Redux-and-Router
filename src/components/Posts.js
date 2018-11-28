import React, { Component } from "react";
import AddPostBtn from "./AddPostBtn";
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
        id: require("uuid/v4")
      },
      {
        title: "My talk at React Meetup",
        category: "Speech",
        id: require("uuid/v4")
      }
    ]
  };
  render() {
    return (
      <div className="home">
        <Link to="/posts/newpost">
          <AddPostBtn />
        </Link>

        {this.state.posts.map((post, i) => (
          <Link
            to={"/posts/" + post.id}
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
