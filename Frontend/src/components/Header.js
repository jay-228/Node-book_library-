

import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar
        sx={{
          background: "linear-gradient(145deg, #1b2735, #232F3D)",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        }}
        position="sticky"
      >
        <Toolbar>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#f1f1f1",
                "&:hover": { color: "#f0f0f0" },
              }}
            >
              <LibraryBooksOutlinedIcon sx={{ fontSize: 40, marginRight: "8px" }} />
              MyLibrary
            </Typography>
          </NavLink>

          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/add"
              label="Add Product"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": { color: "#f0f0f0" },
              }}
            />
            <Tab
              LinkComponent={NavLink}
              to="/books"
              label="Books"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": { color: "#f0f0f0" },
              }}
            />
            <Tab
              LinkComponent={NavLink}
              to="/about"
              label="About Us"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": { color: "#f0f0f0" },
              }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
