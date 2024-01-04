import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import College from "../../Assets/Projects/th (23).jpg";
import invest from "../../Assets/Projects/th (24).jpg";
import transaction from "../../Assets/Projects/transaction-processing-system-140920.png";
import appkidukan from "../../Assets/Projects/th (22).jpg";
import wechatapp from "../../Assets/Projects/chat-app-icon-logo_83874-121.avif";
import forthedeveloper from "../../Assets/Projects/10-Ways-For-Excellent-Employee-Development.jpg";
import employee from "../../Assets/Projects/what-is-an-employee-management-system (1).webp";
import Dictionary from "../../Assets/Projects/5680385.jpg";
import whather from "../../Assets/Projects/qQa5Pd7.webp";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Ongoing <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appkidukan}
              isBlog={false}
              title="🏭 Aap Ki Dukan 🌍"
              description="Promoting Make in India by connecting artisans globally. Celebrating India's heritage through authentic handmade products. Join us in supporting local talent and entrepreneurship!🎉
              As the sole contributor to the Aap Ki Dukan project, I spearheaded the development of this web platform using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project aimed to empower local artisans and showcase India's rich cultural heritage through a curated collection of authentic handmade products.
              The utilized tech stack comprises ReactJS and Bootstrap for frontend development, alongside Node Express for backend operations, complemented by MongoDB as the database And cyclic for Hosting."
              demoLink="https://poised-hare-uniform.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forthedeveloper}
              isBlog={false}
              title="For the Developer by the Developer"
              description="A comprehensive full-stack project designed to empower employees in managing their daily routines effectively. This learning-centric platform encapsulates my journey through diverse technologies Like Django.
              The tech stack utilized for the new app includes HTML, CSS, Django, and Bootstrap. Additionally, Rapid API is specifically incorporated to fetch and display news content within the website's news section."
              demoLink="https://drive.google.com/file/d/1lfLJGEhfftNUCpIoGQ2jsdgqmvfnA1Jy/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transaction}
              isBlog={false}
              title="Transaction management "
              description="Our transaction management application offers an unparalleled user experience that is poised to capture your heart. Its seamless integration and user-friendly design make it accessible for startups to deploy effortlessly at a production level, ensuring swift and efficient operations from the get-go..
              The utilized tech stack comprises ReactJS and Bootstrap ChakraUi for frontend development, alongside Node Express for backend operations, complemented by MongoDB as the database used Web socket for Real time chat feature"
              demoLink="https://drive.google.com/file/d/1p9Svor1dMtCimB9SE14vzwNALhwQaaa2/view"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={College}
              isBlog={false}
              title="College Study Hub"
              description="🎓 College Study Hub | MERN Stack Website
              Empowering students with a comprehensive study platform. Facilitating personalized study plans, note management, communication, and advanced features. Join us to enhance your learning experience! 📚💻
              The utilized tech stack comprises ReactJS and Bootstrap for frontend development, alongside Node Express for backend operations, complemented by MongoDB as the database.
              ."
              demoLink="https://smpformnnitians.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wechatapp}
              isBlog={false}
              title="🌟 ChatApp: Real-time Communication with React and WebSockets 🚀"
              description="ChatApp is designed to facilitate instant messaging and foster effective communication among users. With React powering the frontend and WebSockets handling the real-time data transmission, this application offers a responsive and immersive chat experience.
              React js and websocket and Bootstrap as a css Framework"
      
              demoLink="https://wechatforfriends.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invest}
              isBlog={false}
              title="empowering Rajasthan Startups | Advanced Frontend, Basic Backend 🚀"
              description="The primary objective of this website is to support and promote the startup ecosystem in Rajasthan. By leveraging advanced frontend technologies, I have created a visually stunning and user-friendly platform that showcases the diverse range of startups in the region. With a basic backend structure, the website ensures smooth functionality and efficient data management
             This is Completly A Reactjs Website with Nodejs and express for login signup"
              
              demoLink="https://investrajesthan.netlify.app/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="
              USER MANAGEMENT WEBSITE"
              description="Developed a secure MERN website allowing users to log in, manage employee lists, and perform CRUD operations efficiently, ensuring seamless frontend-backend communication.
              The utilized tech stack comprises ReactJS and Bootstrap for frontend development, alongside Node Express for backend operations, complemented by MongoDB as the database."
              
              demoLink="https://influensermanageweb.netlify.app/login"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dictionary}
              isBlog={false}
              title="Dictionary App for the user by the user"
              description="Crafted a lightning-fast dictionary website employing HTML, CSS, and JavaScript, coupled with API integration. Users swiftly discover word meanings with detailed titles and descriptions, ensuring an intuitive and quick search experience"
              
              demoLink="https://anupamxy.github.io/DictionaryApp/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whather}
              isBlog={false}
              title="Wheater Check app"
              description="Designed a responsive weather application utilizing HTML, CSS, and JavaScript, integrated with a weather API to provide accurate location-based weather information. Users can easily check current weather conditions for any desired location."
              
              demoLink="https://anupamxy.github.io/WeatherApp/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
