import { Box, Typography } from "@mui/material";
import React from "react";
import "./About.css"; // Assuming you will add a separate CSS file

const About = () => {
  return (
    <div className="about-container">
      <Box display="flex" flexDirection="column" alignItems="center" className="about-box">
        <Typography variant="h3" className="about-heading">
          About the "Book Store Details" Project
        </Typography>
        <Typography variant="h5" className="about-description">
          Create a full-stack web application titled "Book Store Details" using React.js for the frontend and Node.js, Express, and MongoDB for the backend. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
