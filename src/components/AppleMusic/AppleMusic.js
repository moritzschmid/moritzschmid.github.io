import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AppleMusic.module.css';

const AppleMusic = ({counter,title}) => {

  const [posts, setPosts] = useState([{ title: "loading ..." }]);
  const [termInput, setTermInput] = useState(title);

  
  useEffect(() => {
    var url = 'https://itunes.apple.com/search?term='+termInput; 
    console.log("counter:useEffect for: "+termInput)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [termInput]);

  const handleChange = event => {
    setTermInput(event.target.value);
  }

return (
  <div className={styles.component} data-testid="AppleMusic">
  <input name="Term" type="text" value={termInput} onChange={handleChange}></input>
    <header>Search results for "{title}" from archive.org</header>
     {
      posts.slice(0, counter).map((object, i) =>
          <p key={i}>
            <a href={ object.trackViewUrl} target="_blank">
             {object.artistName}: {object.trackCensoredName}
            </a>
          </p>
        )
      }
  </div>
);
}

AppleMusic.propTypes = {
  counter: PropTypes.number
};

AppleMusic.defaultProps = {
  title:"react"
};

export default AppleMusic;
