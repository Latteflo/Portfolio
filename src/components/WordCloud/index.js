import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'
import './index.scss'

const container = '.content'
const text = [
  'HTML',
  'JavaScript',
  'CSS3',
  'React',
  'GitHub',
  'Bootstrap',
  'Sass',
  'Netlify',
  'Node.js',
  'MongoDB',
  'Express',
  'Redux',
  'Webpack',
  'Babel',
  'jQuery',
  'Git',
  'NPM',
  'Yarn',
  'VSCode',
  'Chrome',
  'Postman',
  "DBeaver",
  'Heroku',
  'Firebase',
  'Figma',
  'Python',
  'Django',
]
const options = {
  radius: 170,
  maxSpeed: 'normal',
  initSpeed: 'normal',
  direction: 135,
  keep: true,
}

const WordCloud = () => {
  useEffect(() => {
    TagCloud(container, text, options)
  })

  return <div className="content"></div>
}

export default WordCloud
