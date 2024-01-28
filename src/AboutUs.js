// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO and Founder',
    image: '/images/test.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nulla ac sem dictum tristique. Proin id scelerisque lacus. Integer id justo et lacus posuere bibendum. Nunc euismod nisl vel velit cursus, vitae condimentum quam tempor.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'CTO',
    image: '/images/test1.jpeg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nulla ac sem dictum tristique. Proin id justo et lacus posuere bibendum. Nunc euismod nisl vel velit cursus, vitae condimentum quam tempor.',
  },
  // Add more team members as needed
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
