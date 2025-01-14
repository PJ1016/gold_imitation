import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
// productId: number;
// name: string;
// actualPrice: number;
// discountedPrice: number;
// description: string;
// categoryId: number;
// stock: number;
// material: string;
// weight: number;
// imageUrl: string;
// createdAt: string;
// rating?: number;
// isAddedToCart?: boolean;
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddJewellery = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleFileChange = (event: any) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = async () => {
    if (!selectedFiles || !name || !category) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);

    // Append all selected files to the form data
    // Append all selected files to the form data
    //@ts-expect-error
    for await (const file of selectedFiles) {
      formData.append("file", file);
    }
    console.log(formData);

    try {
      const response = await axios.post(
        "https://gold-imitation-flask.onrender.com/uploadJewellery",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("File uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file. Please try again.");
    }
  };
  const jewelleryCategories = [
    "Pendants",
    "Necklaces",
    "Bracelets",
    "Earrings",
    "Rings",
    "Anklets",
    "Chains",
    "Religious Jewelry",
    "Gemstone Jewelry",
    "Gold-Plated Jewelry",
    "Silver Jewelry",
    "Custom-Made Jewelry",
    "Antique Jewelry",
    "Bridal Collection",
    "Kids Jewelry",
  ];

  return (
    <Box display="flex" flexDirection="column" gap={2} width="50%" padding={2}>
      <FormControl size="small" variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Jewellery Name"
          variant="standard"
          value={name}
          size="small"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl variant="standard" size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="jewellery_category">Jewellery Category</InputLabel>
        <Select
          labelId="jewellery_category"
          onChange={(e) => setCategory(e.target.value as string)}
          label="Jewellery Category"
          fullWidth
        >
          {jewelleryCategories.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!selectedFiles}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddJewellery;
