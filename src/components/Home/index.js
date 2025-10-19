import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const canvasRef = useRef(null)
  
  const nameArray = ['l', 'o', 'r', 'e', 'n', 't', 'i', 'n', 'a']
  const surnameArray = [' ', 'S', 'i', 'm', 'i', 'o', 'n']
  const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => clearTimeout(timer)
  }, [])

  // Fun interactive particle system with varied sizes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 120
    const mouse = { x: null, y: null, radius: 200 }
    const colors = ['#13ffe0', '#e90948']

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        // Varied sizes - small, medium, and large particles
        this.baseSize = Math.random() * 4 + 1
        this.size = this.baseSize
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.6 + 0.3
        // For bouncy effect
        this.velocity = { x: this.speedX, y: this.speedY }
        // Trail system
        this.trail = []
        this.maxTrailLength = 8
        // Contrasting color for trail
        this.trailColor = this.color === colors[0] ? colors[1] : colors[0]
      }

      update() {
        // Add current position to trail
        this.trail.push({ x: this.x, y: this.y, size: this.size })
        
        // Limit trail length
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift()
        }
        
        this.x += this.velocity.x
        this.y += this.velocity.y

        // Fun mouse interaction - particles repel and grow
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx)
            const force = (mouse.radius - distance) / mouse.radius
            
            // Repulsion force
            this.velocity.x -= Math.cos(angle) * force * 5
            this.velocity.y -= Math.sin(angle) * force * 5
            
            // Particles grow when near mouse
            this.size = this.baseSize * (1 + force * 1.5)
            this.opacity = Math.min(this.opacity + force * 0.3, 1)
          } else {
            // Return to normal size
            this.size += (this.baseSize - this.size) * 0.1
            this.opacity += ((Math.random() * 0.6 + 0.3) - this.opacity) * 0.05
          }
        } else {
          // Gradual return to base size
          this.size += (this.baseSize - this.size) * 0.1
        }

        // Friction - smooth slowdown
        this.velocity.x *= 0.95
        this.velocity.y *= 0.95

        // Add back base speed
        this.velocity.x += (this.speedX - this.velocity.x) * 0.05
        this.velocity.y += (this.speedY - this.velocity.y) * 0.05

        // Boundary wrapping
        if (this.x > canvas.width) {
          this.x = 0
          this.trail = []
        }
        if (this.x < 0) {
          this.x = canvas.width
          this.trail = []
        }
        if (this.y > canvas.height) {
          this.y = 0
          this.trail = []
        }
        if (this.y < 0) {
          this.y = canvas.height
          this.trail = []
        }
      }

      draw() {
        // Draw trail first (behind particle)
        for (let i = 0; i < this.trail.length; i++) {
          const trailPoint = this.trail[i]
          const trailOpacity = (i / this.trail.length) * 0.3 // Fade out trail
          const trailSize = trailPoint.size * (i / this.trail.length) * 0.8
          
          ctx.fillStyle = this.trailColor
          ctx.globalAlpha = trailOpacity
          ctx.beginPath()
          ctx.arc(trailPoint.x, trailPoint.y, trailSize, 0, Math.PI * 2)
          ctx.fill()
        }
        
        // Draw main particle
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Glow effect for larger particles
        if (this.size > 3) {
          ctx.shadowBlur = 10
          ctx.shadowColor = this.color
        } else {
          ctx.shadowBlur = 0
        }
        
        ctx.globalAlpha = 1
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Dynamic connection lines
    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.4
            
            const gradient = ctx.createLinearGradient(
              particles[a].x, particles[a].y,
              particles[b].x, particles[b].y
            )
            gradient.addColorStop(0, `rgba(19, 255, 224, ${opacity})`)
            gradient.addColorStop(1, `rgba(233, 9, 72, ${opacity})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.shadowBlur = 0
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    // Event handlers
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="home-page">
      <canvas ref={canvasRef} className="particles-canvas"></canvas>
      
      {/* Subtle corner ambient lighting */}
      <div className="ambient-lights">
        <div className="light-corner light-top-left"></div>
        <div className="light-corner light-bottom-right"></div>
      </div>

      {/* Background gradient orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _13`}>'</span>
          <span className={`${letterClass} _14`}>m</span>
          <span className={`${letterClass} _15`}> </span>
          <span className={`${letterClass} _16 special`}>F</span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={17}
          />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={surnameArray}
            idx={26}
          />
          <br />
        </h1>
        
        <h2 className="job-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={35}
          />
        </h2>
        
        <h3 className='aspirations'>
          <span className="code-comment">{"//"}</span> Developer / Cybersecurity Enthusiast / Skilled Full-Stack Craftswoman
        </h3>
        
        <div className="cta-wrapper">
          <Link to="/contact" className="flat-button">
            <span className="button-content">
              CONTACT ME
              <span className="button-arrow">→</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
