import React, { Component } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostPreview from "./components/PostPreview";
import NewPost from "./components/NewPost";
import NoMatch from "./components/NoMatch";
import require from "uuid";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

let id1 = require("uuid/v4");
let id2 = require("uuid/v4");

class App extends Component {
  state = {
    posts: [
      {
        title: "My day in Integrify",
        category: "Work",
        id: id1.toString(),
        image: "https://picsum.photos/500/300",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "My talk at React Meetup",
        category: "Speech",
        id: id2.toString(),
        image: "https://picsum.photos/700/300",
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        title: "It is a long established fact that a reader will be distracted",
        category: "Some category",
        id: "2",
        image: "https://picsum.photos/600/300",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        title: "This is one long title for blog",
        category: "Recreation",
        id: "1",
        image: "https://picsum.photos/400/300",
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        title: "This is one long title for blog",
        category: "Recreation",
        id: "1",
        image: "https://picsum.photos/800/300",
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        title: "This is one long title for blog",
        category: "Recreation",
        id: "1",
        image: "https://picsum.photos/900/300",
        text:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      }
    ],
    newPost: {
      title: "",
      category: "Work",
      image: "",
      text: ""
    }
  };

  handleInput = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({ newPost: { ...this.state.newPost, [name]: value } });
    console.log(name, value);
  };

  addPost = () => {
    let title = this.state.newPost.title;
    let category = this.state.newPost.category;
    let text = this.state.newPost.text;
    let image = this.state.newPost.image;
    let id = require("uuid/v4");
    if (
      image === "" ||
      !image.match(
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      )
    ) {
      image = "https://picsum.photos/500/300";
    }

    if (title !== "" && category !== "" && text !== "") {
      this.setState({
        posts: [...this.state.posts, { title, category, id, image, text }],
        newPost: { title: "", category: "Work", text: "", image: "" }
      });
    }
  };

  deletePost = id => {
    let newPosts = this.state.posts.filter(post => {
      let validPost;
      post.id !== id && (validPost = post);
      return validPost;
    });
    this.setState({
      posts: newPosts
    });
  };

  render() {
    return (
      <div className="App">
        <nav id="main-nav">
          <ul id="main-nav-ul">
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/posts">POSTS</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/posts"
            render={() => (
              <Posts posts={this.state.posts} deletePost={this.deletePost} />
            )}
          />

          <Route
            exact
            path="/posts/newpost"
            render={props => (
              <NewPost
                {...props}
                addPost={this.addPost}
                handleInput={this.handleInput}
                newPost={this.state.newPost}
              />
            )}
          />

          <Route
            path="/posts/:id"
            render={props => (
              <PostPreview
                {...props}
                deletePost={this.deletePost}
                posts={this.state.posts}
              />
            )}
          />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
