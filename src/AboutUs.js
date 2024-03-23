// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import pratham from './components/assets/pratham.jpeg'
import dhruv from './components/assets/dhruv.jpeg'
import atharva from './components/assets/atharv.jpeg'
import ved from './components/assets/ved.jpeg'
import sahil from './components/assets/sahil.jpeg'
import monali from './components/assets/fml.png'

const teamMembers = [
  {
    id: 1,
    name: 'Pratham Shetty',
    role: 'Front-end devloper',
    image: pratham,
    bio: 'Pratham is a skilled front-end developer with a passion for creating engaging and user-friendly interfaces. With expertise in HTML, CSS, and JavaScript, Pratham excels at turning design concepts into functional websites and web applications. Dedicated to staying updated with the latest trends and technologies in front-end development, Pratham is committed to delivering high-quality and responsive user experiences.',
  },
  {
    id: 2,
    name: 'Dhruv Gohel',
    role: 'AI enthusiast',
    image: dhruv,
    bio: 'Bio: Dhruv is an enthusiastic advocate for artificial intelligence and its transformative potential. With a strong background in machine learning and data analysis, Dhruv is fascinated by the ways AI can be applied to solve complex problems and improve efficiency across various industries. Eager to explore new algorithms and techniques, Dhruv is driven by a curiosity to push the boundaries of what AI can achieve.',
  },
  {
    id: 1,
    name: 'Atharva Headao',
    role: 'AI enthusiast',
    image: atharva,
    bio: ' Atharva is deeply passionate about artificial intelligence and its implications for the future. With a focus on deep learning and neural networks, Atharva is dedicated to understanding and developing AI solutions that address real-world challenges. Inspired by the potential of AI to revolutionize industries and improve lives, Atharva is constantly exploring new methodologies and applications in the field.',
  },
  {
    id: 2,
    name: 'Ved Bhalerao',
    role: 'Database Administrator',
    image: ved,
    bio: 'Ved is a skilled database administrator proficient in managing and optimizing database systems for efficient data storage and retrieval. With expertise in SQL and database management tools, Ved ensures the integrity, security, and performance of critical data infrastructure. Diligent and detail-oriented, Ved is committed to implementing best practices to maintain data consistency and availability.',
  },
  {
    id: 1,
    name: 'Sahil Gala',
    role: 'Law and Judicial mentor',
    image: sahil,
    bio: 'Sahil brings a wealth of experience and knowledge to his role as a law and judicial mentor. With a background in legal studies and a deep understanding of the legal system, Sahil provides guidance and support to aspiring lawyers and legal professionals. Committed to upholding justice and promoting ethical practices, Sahil is dedicated to nurturing the next generation of legal minds and fostering a culture of integrity and fairness in the legal profession.',
  },
  {
    id: 2,
    name: 'Monali Chaudhari',
    role: 'Mentor',
    image: monali,
    bio: 'A mentor is a guiding light, offering wisdom and support to those navigating unfamiliar paths. They inspire growth, providing invaluable advice and encouragement along the journey of personal and professional development. With experience as their compass, mentors empower mentees to reach their full potential.',
  },
  
];

const AboutUs = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="responsive-container-block leftSide">
          <p className="text-blk heading">Meet Our Development Team</p>
          <p className="text-blk subHeading">
            Justice First is on a mission to revolutionize the legal landscape. Our online education platform leverages cutting-edge AI models to classify cases into categories, significantly reducing the load on the courts and streamlining the legal process. Whether you're an individual seeking legal knowledge or a professional in advertising, media, online marketing, or various other fields, Justice First is your go-to platform. Join us in reshaping the future of legal proceedings.
          </p>
        </div>
        <div className="responsive-container-block rightSide">
          <img className="number1img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg" alt="Image 1" />
          <img className="number2img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png" alt="Image 2" />
          <img className="number3img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png" alt="Image 3" />
          <img className="number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png" alt="Image 5" />
        
          <img className="number6img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png" alt="Image 6" />
        </div>
      </div>

      {/* Team Members Section */}
      <section id="team-members">
        <h2>The Team</h2>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img className="team-member-image" src={member.image} alt={`${member.name} - ${member.role}`} />
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
