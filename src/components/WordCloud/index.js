import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';

const container = '.content';
const texts = [
  'HTML', 'JavaScript',
  'CSS3', 'React','Git', 
  'GitHub', 'Bootstrap', 'Sass',
  'Netlify'
];
const options = {
  radius: 300,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true
};

const WordCloud = () => {
  useEffect(() => {
    TagCloud(container, texts, options);
  })

  return (
      <span className="content" style={{color:"#ffd700"}}>
    </span>
  )
}

export default WordCloud;

