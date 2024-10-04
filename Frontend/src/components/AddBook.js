import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={700}
        alignContent="center"
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={10}
        padding={4}
        boxShadow="0px 4px 30px rgba(0, 0, 0, 0.1)"
        borderRadius={10}
        sx={{
          background: "linear-gradient(145deg, #e6f7ff, #ffffff)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 6px 40px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <FormLabel
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#1976d2",
            marginBottom: 1,
          }}
        >
          Name
        </FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          sx={{
            marginBottom: 2,
            borderRadius: "10px",
            backgroundColor: "#f1f9ff",
          }}
        />
        <FormLabel
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#1976d2",
            marginBottom: 1,
          }}
        >
          Author
        </FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          sx={{
            marginBottom: 2,
            borderRadius: "10px",
            backgroundColor: "#f1f9ff",
          }}
        />
        <FormLabel
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#1976d2",
            marginBottom: 1,
          }}
        >
          Description
        </FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          sx={{
            marginBottom: 2,
            borderRadius: "10px",
            backgroundColor: "#f1f9ff",
          }}
        />
        <FormLabel
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#1976d2",
            marginBottom: 1,
          }}
        >
          Price
        </FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          sx={{
            marginBottom: 2,
            borderRadius: "10px",
            backgroundColor: "#f1f9ff",
          }}
        />
        <FormLabel
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#1976d2",
            marginBottom: 1,
          }}
        >
          Image
        </FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          sx={{
            marginBottom: 2,
            borderRadius: "10px",
            backgroundColor: "#f1f9ff",
          }}
        />
        {/* <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              sx={{ color: "#1976d2" }}
            />
          }
          label="Available"
          sx={{ marginBottom: 3, color: "#1976d2" }}
        /> */}

        <Button
          variant="contained"
          type="submit"
          sx={{
            background: "linear-gradient(145deg, #1976d2, #1565c0)",
            color: "#fff",
            padding: "12px",
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "background 0.3s ease-in-out",
            "&:hover": { background: "#0d47a1" },
          }}
        >
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
