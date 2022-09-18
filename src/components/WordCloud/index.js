import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';
import './index.scss';

const container = '.content';
const text = [
  'HTML', 'JavaScript',
  'CSS3','Tailwind CSS','React','Git', 
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
    TagCloud(container, text, options);
  })

  return (
      <span className="content">
    </span>
  )
}

export default WordCloud;


