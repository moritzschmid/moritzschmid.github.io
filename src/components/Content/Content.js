import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.css';

const Content = ({counter,title}) => {

  const [posts, setPosts] = useState([{ title: "loading ..." }]);

  
  useEffect(() => {
    var url = 'https://archive.org/services/search/v1/scrape?fields=title&q=title:"'+title+'"&and[]=collection:"software"&and[]=collection:"code"&count=100&mediatype:"texts"'; 
    console.log("counter:useEffect for: "+title)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [title]);


return (
  <div className={styles.content} data-testid="Content">
    <header>Search results for "{title}" from archive.org</header>
     {
      posts.slice(0, counter).map((object, i) =>
          <p key={i}>
            <a href={'https://archive.org/details/' + object.identifier}>
              {object.title}
            </a>
          </p>
        )
      }
  </div>
);
}

Content.propTypes = {
  counter: PropTypes.number
};

Content.defaultProps = {
  title:"react"
};

export default Content;
