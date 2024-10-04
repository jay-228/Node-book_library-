
import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you have a separate CSS file for the component

const Home = () => {
  return (
    <div className="home-container">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" className="home-heading">
          Welcome to MyLibrary
        </Typography>
        <Typography variant="body1" className="home-subtext">
          Discover a wide range of books, from the latest bestsellers to classic reads. Browse through our collection and explore the world of knowledge.
        </Typography>
        <Button
          LinkComponent={Link}
          to="/books"
          className="home-button"
          variant="contained"
        >
          <Typography variant="h5">View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
