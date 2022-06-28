import React from 'react';
import News from '../../component/news_article';
import './index.css';

class Home extends React.Component {
    render(){
        return (
            <div className="News">
              <h1>Welcome to Times News</h1>
              <News/>
            </div>
          );
    }
  
}

export default Home;
