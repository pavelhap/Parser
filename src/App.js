import React, { Component } from 'react';
import Post from './components/Post';
import JSON from './post.json';
import Header from './components/Header';
import axios from 'axios';
import { connect } from 'react-redux';
// import { Container,Header, Button,Item, Segment} from 'semantic-ui-react';
import {Grid, Card, Container,  CircularProgress, Button,Item, Segment} from '@mui/material/';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  // fetchPosts() {
  //   const { setPosts } = this.props;
  //   setPosts([]);
  //   axios.get('https://631872a1ece2736550ca37b1.mockapi.io/posts')
  //     .then(({ data }) => {
  //       setPosts(data);
  //     });
  // }


  fetchPosts() {
    const { setPosts } = this.props;
    setPosts([]);
    setPosts(JSON);
      
  };

  UNSAFE_componentWillMount() {
    this.fetchPosts()
  }
  regionText(s) {
    switch (s) {
      case 'ING':
        return 'Первый';
      case 'DAG':
        return 'Второй';
      case 'CHE':
        return 'Третий';
    }
  }
  render() {
    const { posts } = this.props;
    const { items } = posts;
    return (
    
      <Container>
        <Header/>
        <div><Button variant="text" onClick={this.fetchPosts.bind(this)}>Update</Button> </div>

        {/* <Button.Group>
          <Button onClick={this.props.changeRegion.bind(this, 'ING')}>One</Button>
          <Button onClick={this.props.changeRegion.bind(this, 'CHE')}>Two</Button>
          <Button onClick={this.props.changeRegion.bind(this, 'DAG')}>Three</Button>
        </Button.Group> */}
        <Grid
         container
         spacing={0}
         direction="column"
         alignItems="center"
         justify="center"
         style={{ minHeight: '100vh' }}>
        <Card 
        >
          {!items.length ? (
                <CircularProgress />
          ) :
            items.map((item, key) => (
              <Post
                key={key}
                {...item}
              />
            )
            )
          }
        </Card>
        </Grid>
      </Container>
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