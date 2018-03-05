import React from 'react';
import { Background, Post } from 'components';
import articles from 'utils/articles'

const Home = () => (

  <Background abc={'Home'}>
    {articles.map(({id,title, text, author, date}) => (
      <Post key={id} title={title} text={text} author={author} date={date} id={id}/>
              ))}
  </Background>
)

export default Home;