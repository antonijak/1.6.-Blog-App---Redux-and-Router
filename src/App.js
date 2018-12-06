import React, { Component } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostPreview from "./components/PostPreview";
import NewPost from "./components/NewPost";
import NoMatch from "./components/NoMatch";
import require from "uuid";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import "./App.css";

class App extends Component {
  handleInput = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.props.takeInputValues(value, name);
  };

  addPost = () => {
    let title = this.props.newPost.title;
    let category = this.props.newPost.category;
    let text = this.props.newPost.text;
    let image = this.props.newPost.image;

    if (
      image === "" ||
      !image.match(
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      )
    ) {
      image = "http://placeimg.com/800/500/any";
    }
    if (this.props.isComingFromEdit) {
      this.editPost(title, category, text, image);
    } else {
      let id = require("uuid/v4");

      if (title !== "" && category !== "" && text !== "") {
        this.props.addPost({ title, category, id, image, text });
        this.props.emptyInputValues();
      }
    }
  };

  editPost = (title, category, text, image) => {
    let id = this.props.postToEditId;

    if (title !== "" && category !== "" && text !== "") {
      let newPosts = this.props.posts.map(post => {
        if (post.id === id) {
          return { title, category, image, text, id };
        } else {
          return post;
        }
      });

      this.props.deletePost(newPosts);
      this.props.emptyInputValues();
    }
  };

  setCreatingNotEditing = value => {
    this.props.isEditing(value);
    this.props.emptyInputValues();
  };

  providePostToEdit = id => {
    this.props.posts.filter(post => {
      if (post.id === id) {
        this.props.changeInputValues(post);
        this.props.isEditing(true, post.id);
      }
    });
  };

  deletePost = id => {
    let newPosts = this.props.posts.filter(post => post.id !== id);
    this.props.deletePost(newPosts);
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
              <Posts
                posts={this.props.posts}
                deletePost={this.deletePost}
                setCreatingNotEditing={this.setCreatingNotEditing}
              />
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
                newPost={this.props.newPost}
              />
            )}
          />

          <Route
            path="/posts/:id"
            render={props => (
              <PostPreview
                {...props}
                deletePost={this.deletePost}
                providePostToEdit={this.providePostToEdit}
                posts={this.props.posts}
              />
            )}
          />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    newPost: state.newPost,
    isComingFromEdit: state.isComingFromEdit,
    postToEditId: state.postToEditId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(actions.addPost(post)),
    deletePost: posts => dispatch(actions.deletePost(posts)),
    takeInputValues: (value, name) =>
      dispatch(actions.takeInputValues(value, name)),
    changeInputValues: post => dispatch(actions.changeInputValues(post)),
    emptyInputValues: () => dispatch(actions.emptyInputValues()),
    isEditing: (bool, id) => dispatch(actions.isEditing(bool, id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
