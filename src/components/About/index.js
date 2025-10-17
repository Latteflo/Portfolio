import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'
import { 
  faCode, 
  faShieldAlt, 
  faRocket, 
  faDownload,
  faBriefcase,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'HTML5', 'CSS3', 'SCSS', 'Tailwind',
    'MongoDB', 'Express', 'Git', 'RESTful APIs',
    'Webpack', 'Responsive Design', 'Python', 'Security Best Practices'
  ]

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="page-title">
            <span className="accent">A</span>bout Me
          </h1>
          <p className="subtitle">
            Full-Stack Developer & Cybersecurity Enthusiast
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>My Journey</h3>
            <p>
              From soaring through the skies as a flight attendant to coding innovative solutions, 
              my career transition into tech has been driven by curiosity and passion. The skills 
              I developed in aviation—adaptability, problem-solving under pressure, and excellent 
              communication—now power my approach to development and cybersecurity.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>What I Do</h3>
            <p>
              I build secure, scalable web applications with a focus on modern technologies and 
              best practices. Currently honing my skills at BeCode, I work across the full stack—from 
              crafting intuitive user interfaces to architecting robust backend systems. Every project 
              is an opportunity to create something meaningful.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3>Security Mindset</h3>
            <p>
              In today's digital landscape, security isn't optional—it's essential. I integrate 
              security considerations from the ground up, implementing secure coding practices, 
              data protection measures, and staying current with cybersecurity trends to build 
              applications that users can trust.
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h3>
            <FontAwesomeIcon icon={faGraduationCap} /> Technical Skills
          </h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="beyond-code">
          <h3>Beyond the Code</h3>
          <p>
            When I'm not debugging or deploying, you'll find me swimming laps, exploring new 
            coffee shops, or planning my next travel adventure. I believe in continuous learning—whether 
            it's mastering a new framework, diving into security research, or understanding emerging 
            tech trends. This mindset keeps me sharp and brings fresh perspectives to every project.
          </p>
        </div>

        <div className="cta-section">
          <h3>
            <FontAwesomeIcon icon={faBriefcase} /> Let's Build Something Amazing
          </h3>
          <p>
            I'm actively seeking opportunities to contribute to innovative projects where I can 
            apply my full-stack development skills and security expertise. If you're looking for 
            a dedicated developer who brings technical skills, creative problem-solving, and 
            genuine enthusiasm to the table—let's connect!
          </p>
          
          <div className="button-group">
            <a href="https://drive.google.com/file/d/1nGWorHLkJXewLHx7MuSScAuNpFfbGQkE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flat-button">
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>

          <div className="social-links">
            <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={process.env.REACT_APP_CODEPEN_URL} target="_blank" rel="noopener noreferrer" aria-label="CodePen">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
