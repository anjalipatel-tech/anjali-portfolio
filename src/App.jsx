import "./App.css";

import profile from "./assets/Your Photo.png";

import business1 from "./assets/Business SS 1.png";
import business2 from "./assets/Business SS 2.png";
import business3 from "./assets/Business SS 3.png";
import business4 from "./assets/Business SS 4.png";

import dashboard1 from "./assets/Dashboard SS 1.png";
import dashboard2 from "./assets/Dashboard SS 2.png";

import alpha from "./assets/Alpha.jpeg";
import delta from "./assets/Delta.jpeg";
import ibmAI from "./assets/IBM AI.jpeg";
import ibmCertificate from "./assets/IBM Certificate.jpeg";
import internship1 from "./assets/Internship1.jpeg";
import internship2 from "./assets/Internship2.jpeg";
import resume from "./assets/resume.pdf";

function App() {
  return (
    <div className="container">

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>
      <div className="bg-circle circle3"></div>

      {/* Navbar */}

      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}

      <section className="hero">

        <img
          src={profile}
          alt="Anjali Patel"
          className="profile-img"
        />

        <h1>Anjali Patel</h1>

        <h2>Full Stack Developer</h2>

        <p>
          Computer Science & Engineering Graduate passionate
          about building modern, scalable and user-friendly
          web applications using Full Stack Development
          technologies.
        </p>

        <div className="buttons">

          <a
            href="https://www.linkedin.com/in/anjali-patel-04aaa5327"
            target="_blank"
            rel="noreferrer"
            className="hero-btn"
          >
            LinkedIn
          </a>

          <a
            href={resume}
            download="Anjali_Patel_Resume.pdf"
            className="hero-btn"
          >
            Resume
          </a>

          <a
            href="mailto:anjalipatel2k@gmail.com"
            className="hero-btn"
          >
            Email
          </a>

        </div>
      </section>

      {/* Stats Section */}

      <section className="stats-section">

        <a href="#experience" className="stat-card">
          <h3>2+</h3>
          <p>Internships</p>
        </a>

        <a href="#projects" className="stat-card">
          <h3>2+</h3>
          <p>Major Projects</p>
        </a>

        <a href="#certificates" className="stat-card">
          <h3>6+</h3>
          <p>Certificates</p>
        </a>

      </section>
      {/* About Section */}

      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="card">
          <p>
            I am a Computer Science & Engineering graduate from
            Kashi Institute of Technology, Varanasi.
          </p>

          <p>
            Passionate about creating responsive web applications,
            modern dashboards and full-stack solutions using the
            latest development technologies.
          </p>

          <p>
            My goal is to build scalable and user-friendly digital
            products that solve real-world problems efficiently.
          </p>
        </div>
      </section>

      {/* Education */}

      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-grid">

          <div className="edu-card">
            <h3>B.Tech (CSE)</h3>
            <p>Kashi Institute of Technology</p>
            <p>2022 - 2026</p>
            <p>CGPA: 7.5</p>
          </div>

          <div className="edu-card">
            <h3>Class 12</h3>
            <p>Lal Bahadur Shastri Inter College</p>
            <p>2020 - 2021</p>
            <p>76.66%</p>
          </div>

          <div className="edu-card">
            <h3>Class 10</h3>
            <p>Lal Bahadur Shastri Inter College</p>
            <p>2018 - 2019</p>
            <p>83.33%</p>
          </div>

        </div>
      </section>

      {/* Skills */}

      <section id="skills" className="section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
          <span>Bootstrap</span>
          <span>Git</span>
          <span>Redux</span>
          <span>Tailwind CSS</span>
          <span>MySQL</span>
          <span>GitHub</span>
          <span>Postman</span>
        </div>
      </section>

      {/* Experience Timeline */}

      <section id="experience" className="section">
        <h2>Experience Timeline</h2>

        <div className="card">

          <h3>Frontend Development Internship</h3>

          <p>
            Websphere Solution | 3 Months
          </p>

          <br />

          <h3>Full Stack Development Internship</h3>

          <p>
            Metconnect Infotech Pvt. Ltd. | 3 Months
          </p>

        </div>
      </section>


      {/* Projects Section */}

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">

          {/* Project 1 */}

          <div className="card project-showcase">

            <img src={business1} alt="Business Project" className="project-banner" />

            <div className="project-content">

              <h3>Corporate Business & Recruitment Portal</h3>

              <p>
                A modern recruitment and business platform developed
                for managing company services, recruitment solutions,
                appointments and client interactions.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>REST API</span>
              </div>

              <div className="mini-gallery">
                <img src={business2} alt="" />
                <img src={business3} alt="" />
                <img src={business4} alt="" />
              </div>

            </div>

          </div>

          <br />

          {/* Project 2 */}

          <div className="card project-showcase">

            <img src={dashboard1} alt="Dashboard" className="project-banner" />

            <div className="project-content">

              <h3>Enterprise Admin Dashboard Platform</h3>

              <p>
                Professional dashboard system for business analytics,
                customer insights, reporting and management.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Dashboard</span>
                <span>Analytics</span>
                <span>Reports</span>
              </div>

              <div className="mini-gallery">
                <img src={dashboard2} alt="" />
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Certificates */}

      <section id="certificates" className="section">
        <h2>Certificates</h2>

        <div className="certificate-grid">

          <div className="certificate-card">
            <img src={ibmAI} alt="IBM AI" />
            <h3>IBM AI Certificate</h3>
            <p>
              Successfully completed IBM AI certification covering
              Artificial Intelligence fundamentals and modern AI technologies.
            </p>
          </div>

          <div className="certificate-card">
            <img src={ibmCertificate} alt="IBM Certificate" />
            <h3>IBM Professional Certificate</h3>
            <p>
              Professional IBM certified training focused on software
              development, industry skills and problem solving.
            </p>
          </div>

          <div className="certificate-card">
            <img src={internship1} alt="Internship 1" />
            <h3>Frontend Development Internship</h3>
            <p>
              Completed practical frontend development training with
              hands-on project experience and responsive web design.
            </p>
          </div>

          <div className="certificate-card">
            <img src={internship2} alt="Internship 2" />
            <h3>Full Stack Internship</h3>
            <p>
              Worked on full stack development using React, Node.js,
              MongoDB and REST APIs.
            </p>
          </div>

          <div className="certificate-card">
            <img src={alpha} alt="Alpha" />
            <h3>Alpha Program</h3>
            <p>
              Successfully completed professional technical learning
              program focused on software development concepts.
            </p>
          </div>

          <div className="certificate-card">
            <img src={delta} alt="Delta" />
            <h3>Delta Program</h3>
            <p>
              Advanced learning program covering practical development
              skills and real-world implementation techniques.
            </p>
          </div>

        </div>
      </section>

      {/* Achievements */}

      <section className="section">
        <h2>Achievements</h2>

        <div className="card">

          <h3>Campus Placement</h3>

          <p>
            Successfully placed through campus recruitment
            process with a package of 7 LPA.
          </p>

          <br />

          <h3>Professional Certifications</h3>

          <p>
            Completed multiple certifications in Full Stack
            Development, AI and Software Technologies.
          </p>

        </div>
      </section>

      {/* Contact */}

      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="card contact">

          <p>
            <strong>Email:</strong>
            {" "}
            anjalipatel2k@gmail.com
          </p>

          <p>
            <strong>LinkedIn:</strong>
            {" "}
            <a
              href="https://www.linkedin.com/in/anjali-patel-04aaa5327"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn Profile
            </a>
          </p>

        </div>
      </section>

      {/* Footer */}

      <footer className="footer">
        <h3>Anjali Patel</h3>
        <p>Full Stack Developer</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;