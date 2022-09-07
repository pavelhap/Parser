import React, { Component } from 'react';
import Post from './components/Post';
// import posts from './post.json'
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
  }

  fetchPosts() {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get('https://631872a1ece2736550ca37b1.mockapi.io/posts')
      .then(({ data }) => {
        setPosts(data);
      });
  }
  render() {
    const { posts } = this.props;
    const { items } = posts;
    return (
      <div>
        <div><button onClick={this.fetchPosts.bind(this)}>Получить запись</button> </div>
        <h3> Регионы: </h3>
        <ul>
          <li>
            <button onClick={() => this.props.changeRegion('ING')}> Первый</button></li>
          <li>
            <button onClick={() => this.props.changeRegion('CHE')}> Второй</button></li>
          <li>
            <button onClick={() => this.props.changeRegion('DAG')}> Третий</button></li>
        </ul>

        {!items.length ? (
          <span> Loading...</span>
        ) :
          items.map(({ title, description, image }, key) => (
            <Post
              key={key}
              title={title}
              description={description}
              image={image}
            />
          )
          )
        }
      </div>
    );
  }

}

const state = (props) => {
  return {
    ...props,
  };
}

const actions = (dispatch) => ({
  setPosts: data =>
    dispatch({
      type: 'SET_POSTS',
      payload: data

    }),
  changeRegion: name =>
    dispatch({
      type: 'CHANGE_REGION',
      payload: name,

    }),
});



export default connect(state, actions)(App);