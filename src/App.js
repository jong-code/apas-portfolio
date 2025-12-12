import './App.css';
import { useEffect } from 'react';
import profileImage from './image/profile.jpg';

function App() {
  useEffect(() => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      html.classList.add('dark-mode');
      themeToggle?.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
      themeToggle?.classList.remove('dark-mode');
    }

    // Add event listener
    const handleThemeToggle = () => {
      if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        themeToggle?.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark-mode');
        themeToggle?.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
    };

    themeToggle?.addEventListener('click', handleThemeToggle);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          html.classList.add('dark-mode');
          themeToggle?.classList.add('dark-mode');
        } else {
          html.classList.remove('dark-mode');
          themeToggle?.classList.remove('dark-mode');
        }
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup
    return () => {
      themeToggle?.removeEventListener('click', handleThemeToggle);
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);
  return (
    <div className="App">
      <section id="home">
        <header>
          <div className="logo">
            <p>JADE</p>
          </div>

          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

   
        </header>

        <content>
          <div className="intro">
            <h1>JADE T. APAS</h1>
            <div className="intro-goal">
              <h1 className="typing-text"></h1>
            </div>
            
            <p>Innovative creator who transforms ideas into clean, functional digital products through the fusion of design creativity and technological expertise.</p>
          </div>
          <div className="profile">
            <div className="flip">
              <img id="myProfile" src={profileImage} alt="Profile Picture" />
            </div>
          </div>
        </content>

        <div className="cards-container">
          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3>Skills</h3>
            <p>Explore my data analysis expertise and core competencies</p>
            <ul>
              <li>Statistical Analysis</li>
              <li>Data Visualization</li>
              <li>Machine Learning</li>
              <li>Business Intelligence</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Resume</h3>
            <p>Download my complete professional resume and work history</p>
            <ul>
              <li>Work Experience</li>
              <li>Education</li>
              <li>Certifications</li>
              <li>Projects</li>
            </ul>
            <a href="file/resume.pdf" download="JadeApas_Resume.pdf">
              <button className="card-button">Download Resume</button>
            </a>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3>Qualifications</h3>
            <p>My data analysis credentials and professional achievements</p>
            <ul>
              <li>Data Science Degree</li>
              <li>Analytics Certifications</li>
              <li>Technical Training</li>
              <li>Industry Recognition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>Hello! I'm Jade T. Apas, a dedicated data analyst transforming raw data into actionable insights through statistical analysis and visualization to drive informed decision-making.</p>
            
            <p>My data analysis journey began with a fascination for patterns and evolved into a passion for uncovering insights through statistical methods. I'm committed to rigorous analysis, clear visualization, and continuous learning of emerging analytical techniques and industry best practices.</p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Experience</h4>
                  <p>Years of analyzing complex datasets</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Collaboration</h4>
                  <p>Effective collaborator with cross-functional teams</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Dedication</h4>
                  <p>Committed to continuous learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-list">
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">JavaScript</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-list">
                  <span className="skill-tag">PHP</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="skill-list">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Responsive Design</span>
                  <span className="skill-tag">API Integration</span>
                  <span className="skill-tag">Data Visualization</span>
                  <span className="skill-tag">Statistical Analysis</span>
                  <span className="skill-tag">Data Mining</span>
                  <span className="skill-tag">Machine Learning</span>
                  <span className="skill-tag">SpreedSheets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
          <p>Explore my portfolio of data analysis projects spanning statistical analysis, data visualization, machine learning, and business intelligence</p>
        </div>

        <div className="projects-grid">
          {/* Project 1: Claw Machine (Arduino) */}
          <div className="project-card">
            <div className="project-preview project-bg-1">
              <div className="project-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>Arduino Claw Machine</h3>
              <p>Automated claw machine system utilizing sensor technology for intelligent object detection and retrieval through Arduino-based microcontroller programming.</p>
              <div className="project-tags">
                <span className="project-tag">Arduino</span>
                <span className="project-tag">C++</span>
                <span className="project-tag">IoT</span>
                <span className="project-tag">Sensors</span>
              </div>
            </div>
          </div>

          {/* Project 2: Laundry Management System */}
          <div className="project-card">
            <div className="project-preview project-bg-2">
              <div className="project-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>Hotel Management System</h3>
              <p>Comprehensive web application for hotel operations with real-time room availability, guest management, and reservation confirmations.</p>
              <div className="project-tags">
                <span className="project-tag">HTML5</span>
                <span className="project-tag">CSS3</span>
                <span className="project-tag">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Project 3: Sea Shell Classification App */}
          <div className="project-card">
            <div className="project-preview project-bg-3">
              <div className="project-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>Sea Shell Classification App</h3>
              <p>Mobile application for sea shell classification using machine learning models to identify and classify different sea shells based on their features.</p>
              <div className="project-tags">
                <span className="project-tag">Kotlin</span>
                <span className="project-tag">XML</span>
                <span className="project-tag">Android</span>
              </div>
            </div>
          </div>

          {/* Project 4: StarFish Classification App */}
          <div className="project-card">
            <div className="project-preview project-bg-3">
              <div className="project-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>StarFish Classification App</h3>
              <p>Mobile application for StarFish classification using machine learning models to identify and classify different Starfish based on their features.</p>
              <div className="project-tags">
                <span className="project-tag">Kotlin</span>
                <span className="project-tag">XML</span>
                <span className="project-tag">Android</span>
              </div>
            </div>
          </div>

          {/* Project 5: Procurement Chatbot Assistant */}
          <div className="project-card">
            <div className="project-preview project-bg-3">
              <div className="project-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>Procurement Chatbot Assistant</h3>
              <p>Chatbot assistant for procurement using Python and Streamlit to interact with Snowflake database.</p>
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">Streamlit</span>
                <span className="project-tag">Snowflake</span>
              </div>
            </div>
          </div>

          {/* Project 6: StatusFlow: Office Staff Status Tracker */}
          <div className="project-card">
            <div className="project-preview project-bg-3">
              <div className="project-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>StatusFlow: Office Staff Status Tracker</h3>
              <p>Office staff status tracker using Flutter and Supabase.</p>
              <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Supabase</span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <button className="view-all-projects-btn">View All Projects</button>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
          <p>Have a project in mind or just want to say hello? Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>jadeapas17@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>09519180558</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>P-4 Maygatasan, Bayugan, Agusan del Sur</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://github.com/jong-code" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/jade.apas.77" aria-label="Facebook" target="_blank">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.495v-9.294H9.691V11.03h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.921.001c-1.507 0-1.799.717-1.799 1.77v2.252h3.594l-.468 3.676h-3.126V24h6.127C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <button id="open-form-btn" className="open-form-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Send a Message
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Overlay */}
      <div id="form-overlay" className="form-overlay">
        <div className="form-container">
          <button id="close-form-btn" className="close-form-button" aria-label="Close form">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Jade T. Apas. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      <button id="scroll" aria-label="Scroll to top" title="Scroll to top">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default App;
