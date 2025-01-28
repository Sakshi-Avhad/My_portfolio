import React from "react";

const Resume = () => {
  return (
    <div className="resume" id="resume" >
      <h1 style={{paddingTop:"10%" }}>Resume</h1>
      
      <img
        src={`${process.env.PUBLIC_URL}/assets/resume_image/screenshot1.png`}
        alt=""
        style={{ width: "50%", height: "auto", margin: "10px", borderRadius: "10px",border:"3px solid yellow",marginLeft:"20%"}}
      />
      
      <img
        src={`${process.env.PUBLIC_URL}/assets/resume_image/screenshot2.png`}
        alt=""
        style={{ width: "50%", height: "auto", margin: "10px", borderRadius: "10px",border:"3px solid yellow",marginLeft:"20%", }}
      />
      <a
        href="./assets/resume.pdf"
        download="My_Resume.pdf"
        style={{
          display: "block",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "70px",
          fontWeight: "bold",
          width: "20%",
           height: "auto",
            margin: "20px",
            alignItems:"center",
            marginLeft:"40%",
            border:"3px solid yellow",
            textAlign:"center"
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
