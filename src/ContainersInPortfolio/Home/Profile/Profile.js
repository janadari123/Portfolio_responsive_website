import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import profilephoto from "./../../Imagess/profilephoto.jpg";

export const Profile = () => {
  const handleHireClick = () => {
    alert("Thank you for considering me! please tell me details about position");
  };
  
  const handleResumeClick = () => {
    alert("Resume downloaded successfully!");
  };
  
  return (
    <div className='profile_container'>
      <div className='profile_parent'>
        <div className='profile_details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href="https://github.com/janadari123">
	              <i className="fa fa-github-square"></i>{" "}
              </a>
              <a href="social-icon">
	              <i className="fa fa-google-plus-square"></i>{" "}
              </a>
              <a href="https://www.linkedin.com/in/janadari-chandramali-samarakoon-650187191">
	              <i className="fa fa-linkedin"></i>{" "}
              </a>
              <a href="https://www.sololearn.com/en/profile/14891483">
	              <i className="fa fa-code"></i>{" "}
              </a>
            </div>
          </div>

          <div className="profile-picture">
            <div className="profile-picture-background" style={{ backgroundImage: `url(${profilephoto})` }}></div>
          </div>

          <div className="profile-details-name">
	          <span className="primary-text">
		          {" "}
		          Hello, I'm <span className="highlighted-text">Janadari</span>
	          </span>
          </div>
          <div className="profile-details-role">
	          <span className="primary-text">
		          {" "}
		          <h4>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer ",
                    3000,
                    "Looking for Full stack Developer Internship",
                    3000,
                    "Looking for Software Engineer Internship",
                    3000,
                    "Looking for Software Developer Internship",
                    3000,
                    "Looking for Android Developer Internship",
                    3000,
                  ]}
                />
              </h4>

              <span className="profile-role-tagline">
                Basic skills in building applications with front-end and back-end operations.
              </span>
	          </span>
          </div>
          <div className="profile-options">
	          <button className="btn primary-btn" onClick={handleHireClick}>
              Hire Me
              <span className="tooltip">I'm excited to work with you!</span>
            </button>
            <a href='Janadari.pdf' download='Janadari Janadari.pdf'>
            <button className='btn highlighted-btn' onClick={handleResumeClick}>
                Get Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Profile;