import React from 'react';
import './Courses.css'

const Courses = () => {
  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="course1">
        <h5>Cisco online course</h5>
        <p>Programming Essentials in Python / Fundamentals of Programming</p>
      </div>

      <div className="course2">
        <h5>Introduction to IoT</h5>
        <p>Simplilearn</p>
      </div>

      <div className="course3">
        <h5>Data Mining/ Python Matplotlib / Python for Machine Learning / Digital Image Processing</h5>
        <p>Great Learning Online Course</p>
      </div>

      <div className="course4">
        <h5>English Course</h5>
        <p>Sarasavi Bandarawela</p>
      </div>
      
    </div>
  );
};

export default Courses;