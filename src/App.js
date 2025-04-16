import React from 'react';


import './App.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="logo">SP</div>
        <nav className="nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Siddharth Pagare</h1>
        <h2>Software Developer | Full Stack Enthusiast</h2>
        <p>Crafting elegant solutions for complex problems with a passion for clean code</p>
        <div className="hero-buttons">
          <button className="btn primary">Download Resume</button>
          <button  className="btn secondary"><a href="#projects">View Projects</a></button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image">
           <img src="/Portfolio_DP.jpeg" alt="Siddharth Pagare" />


          </div>
          <div className="about-text">
            <p>I’m Siddharth Pagare, a Computer Science student passionate about building impactful tech solutions. With hands-on experience in Java, MySQL, and OAuth integrations, I’ve developed projects ranging from e-commerce platforms to sign language interfaces. I'm driven by curiosity, efficient problem-solving, and continuous learning. I thrive in collaborative environments and enjoy turning innovative ideas into functional, user-friendly applications.</p>
            <div className="tech-tags">
              <span className="tag">Java</span>
              <span className="tag">JDBC</span>
              <span className="tag">Springboot</span>
              <span className="tag">Python</span>
              <span className="tag">MySQL</span>
              
            </div>
            <blockquote>
              "The best way to predict the future is to implement it."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon react"></div>
                <span>React</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon html"></div>
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon css"></div>
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon javascript"></div>
                <span>JavaScript</span>
              </div>
              </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon nodejs"></div>
                <span>Java</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon python"></div>
                <span>Springboot</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon java"></div>
                <span>Python</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon fastapi"></div>
                <span>FastAPI</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon mysql"></div>
                <span>MySQL</span>
              </div>
              
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Others</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon git"></div>
                <span>Git</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon database"></div>
                <span>Database</span>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-icon git"></div>
                <span>Leadership Skills</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon database"></div>
                <span> Time Management</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon database"></div>
                <span> Clarity and Conciseness</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon database"></div>
                <span> Active Listening</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-image">
              <img src="/Clickart_index.jpeg" alt="E-commerce Platform" />
            </div>
            <h3>Clickart</h3>
            <p>Full-stack e-commerce solution with advanced features</p>
            <div className="project-tech">
              <span className="tech-pill">Java</span>
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">CSS3</span>
              <span className="tech-pill">MySQL</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link live">Live Demo</a>
              <a href="https://github.com/Siddharthp23/Clickart" className="project-link github">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/Vision_Bot.png" alt="E-commerce Platform" />
            </div>
            <h3>Vision Bot.ai</h3>
            <p>An Ai based chatbot which helps the user in every aspect</p>
            <div className="project-tech">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">Google-Generativeai</span>
              <span className="tech-pill">Streamlit</span>
              
            </div>
            <div className="project-links">
              <a href="#" className="project-link live">Live Demo</a>
              <a href="https://github.com/Siddharthp23/vision_bot.ai" className="project-link github">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/Hotel_Management_index.jpeg" alt="Task Management App" />
            </div>
            <h3>Hotel Management App</h3>
            <p>Real-time collaborative task management</p>
            <div className="project-tech">
              <span className="tech-pill">Java-AWT</span>
              <span className="tech-pill">MySQL</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link live">Live Demo</a>
              <a href="https://github.com/Siddharthp23/Hotel-Management-System" className="project-link github">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/Vibezstudio_index.png" alt="AI Image Generator" />
            </div>
            <h3>Vibezstudio</h3>
            <p>A music listening platform</p>
            <div className="project-tech">
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">CSS3</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link live">Live Demo</a>
              <a href="https://github.com/Siddharthp23/VibeStudioz" className="project-link github">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/Techno_Clubs_portal.jpg" alt="E-commerce Platform" />
            </div>
            <h3>College Clubs Portal</h3>
            <p>Full-stack platform which pprovides solution with advanced features</p>
            <div className="project-tech">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">React</span>
              <span className="tech-pill">FastAPI</span>
              <span className="tech-pill">MySQL</span>
            </div>
            <div className="project-links">
              <a href="https://techno-clubs-portal.vercel.app/club" className="project-link live">Live Demo</a>
              <a href="https://github.com/arorasimran624/Techno_clubs_portal" className="project-link github">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/Vision_Bot.png" alt="E-commerce Platform" />
            </div>
            <h3>Vision Bot.ai</h3>
            <p>An Ai based chatbot which helps the user in every aspect</p>
            <div className="project-tech">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">Google-Generativeai</span>
              <span className="tech-pill">Streamlit</span>
              
            </div>
            <div className="project-links">
              <a href="#" className="project-link live">Live Demo</a>
              <a href="https://github.com/Siddharthp23/vision_bot.ai" className="project-link github">GitHub</a>
            </div>
          </div>
          

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-container">
          <div className="experience-item">
            <div className="experience-header">
              <h3>Served as an Intern</h3>
              <p className="company">@ Composio</p>
            </div>
            <ul className="experience-details">
              <li>Led Integrations based on OAuth Authentication</li>
              <li>Tested integrated yaml files</li>
            </ul>
          </div>

          {/* <div className="experience-item">
            <div className="experience-header">
              <h3>Full Stack Developer</h3>
              <p className="company">Digital Innovations • 2019 - 2021</p>
            </div>
            <ul className="experience-details">
              <li>Developed e-commerce platform</li>
              <li>Implemented CI/CD pipeline</li>
              <li>Optimized database queries</li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          <div className="education-item">
            <div className="education-header">
              <h3>Bachelor of Technology</h3>
              <h5>Computer Science and Engineering</h5>
              <p className="university">Medicaps University • 2022 - 2026</p>
            </div>
            <div className="education-details">
              <span className="gpa">CGPA: 8.56</span>
              <p>Focus in Artificial Intelligence</p>
            </div>
          </div>
        </div>

        <div className="education-container">
          <div className="education-item">
            <div className="education-header">
              <h3>12th Boards</h3>
              <h5>CBSE Board</h5>
              <p className="university">Aaditya Vidhya Vihar Hr. Sec. school • 2022</p>
            </div>
            <div className="education-details">
              <span className="gpa">percentage: 91.2%</span>
              <p>Focus in Science Stream </p>
            </div>
          </div>
        </div>
        <div className="education-container">
          <div className="education-item">
            <div className="education-header">
              <h3>10th Boards</h3>
              <h5>CBSE Board</h5>
              <p className="university">Aaditya Vidhya Vihar Hr. Sec. school • 2020</p>
            </div>
            <div className="education-details">
              <span className="gpa">percentage: 87.6%</span>
              <p>Focuses on all the subjects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates">
        <h2 className="section-title">Certificates & Achievements</h2>
        <div className="certificates-container">
          <div className="certificate-card">
            <div className="certificate-image">
              <img src="/LIDAR_Certificate.png" alt="LIDAR Certificate" />
            </div>
            <h3>LIDAR Data Proccessing and Applications</h3>
            <p>issued by IIRS</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-image">
              <img src="/Hackathon_Certificate.png" alt="Hackathon_Certificate" />
            </div>
            <h3>Moonhack Hackathon</h3>
            <p>issued by Medicaps University</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-image">
              <img src="/Composio_Certificate.png" alt="Composio_Certificate" />
            </div>
            <h3>Internship Certificate</h3>
            <p>issued by Composio</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-image">
              <img src="/Python_Essential 2.png" alt="Python_Essential 2" />
            </div>
            <h3>Python Essentials 2</h3>
            <p>issued by CISCO</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-image">
              <img src="/Python_Essential 1.png" alt="Python_Essential 1" />
            </div>
            <h3>Python Essentials 1</h3>
            <p>issued by CISCO</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-image">
              <img src="/Java_Certificate.png" alt="Java_Certificate" />
            </div>
            <h3>Java Professional</h3>
            <p>issued by SSI Digital</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-image">
              <img src="/AAKAR_Certificate.png" alt="AAKAR_Certificate" />
            </div>
            <h3>Mobile Control Robot workshop AAKAR</h3>
            <p>issued by IIT Bombay</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>

          <div className="connect">
            <h3>Connect With Me</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="social-links">
              <a href="https://github.com/Siddharthp23" className="social-link github"></a>
              <a href="https://www.linkedin.com/in/siddharth-pagare-061a57281" className="social-link linkedin" target="_blank" rel="noopener noreferrer"></a>

              <a href="#" className="social-link email"></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2022 Siddharth Pagare. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://github.com/Siddharthp23" className="social-icon github"></a>
          <a href="https://www.linkedin.com/in/siddharth-pagare-061a57281" className="social-link linkedin" target="_blank" rel="noopener noreferrer"></a>

          <a href="#" className="social-icon email"></a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;