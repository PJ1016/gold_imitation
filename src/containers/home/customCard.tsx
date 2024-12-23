import {
  Paper,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Rating,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { formatToINR } from "../../utils/formatToINR";
interface ICustomCard {
  actualPrice: number;
  discountedPrice: number;
  description: string;
  imageUrl: string;
  rating: number;
}
const CustomCard = ({
  actualPrice,
  discountedPrice,
  description,
  imageUrl,
  rating,
}: ICustomCard) => {
  return (
    <Paper
      sx={{
        maxWidth: 250,
        minHeight: 300,
        margin: "1rem",
        position: "relative",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
      elevation={5}
    >
      <CardMedia
        sx={{ height: 175, objectFit: "fill" }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontSize="1rem" color="primary">
              {formatToINR(discountedPrice)}
            </Typography>
            <Typography
              fontSize="0.8rem"
              color="text.disabled"
              sx={{
                textDecoration: "line-through",
              }}
            >
              {formatToINR(actualPrice)}
            </Typography>
          </Box>
          <Rating
            sx={{ fontSize: "0.8rem" }}
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </Box>

        <Typography variant="caption" sx={{ color: "GrayText" }}>
          {description}
        </Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <Button sx={{ width: "100%" }} variant="contained">
          Add to cart
        </Button>
      </CardContent>
    </Paper>
  );
};

export default CustomCard;
