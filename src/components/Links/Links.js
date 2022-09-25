import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import './Links.css';

const Links = () => {

  var links = [
    {
      title: "Learn React",
      url: "https://reactjs.org"
    },
    {
      title: "Props cheatsheet",
      url: "https://www.freecodecamp.org/news/react-props-cheatsheet/"
    },{
      title: "React components render twice",
      url:"https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625"
    },{
      title:"React Redux",
      url:"https://react-redux.js.org/"
    }
  ];

  return (
    <div className="Links">
      
      {
        links.map((link, i) => 
          <div key={i}>
           <a
              className="link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer">
              {link.title}
            </a>
          </div>
        )
      }
    </div>

  )
};

Links.propTypes = {};

Links.defaultProps = {};

export default Links;
