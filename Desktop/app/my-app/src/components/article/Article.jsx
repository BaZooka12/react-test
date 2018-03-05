import React, { Component } from 'react';
import { Background } from 'components';
import articles from 'utils/articles';


class Article extends Component {
  render() {
    //получаем Id из Url(Match из ReactRouter)
    const numb = this.props.match.params.id; 
    const data = articles.filter((article) => article.id === +numb)[0]

    return (
      <Background>
        <div>
          {data.text}
        </div>
      </Background>
    )
  }
}

export default Article;