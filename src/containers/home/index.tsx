import {
  Grid,
  Pagination,
  Box,
  MenuItem,
  Select,
  InputAdornment,
  Stack,
  Paper,
} from "@mui/material";
import CustomCard from "./customCard";
import { useEffect, useState } from "react";
import { SortOutlined } from "@mui/icons-material";
import type { IJewelryItem } from "../../store/slices/jewelleryCardSlice";
import { useAppSelector } from "../../store/store";
const sortingJewelleryItem = (
  items: IJewelryItem[],
  sortBy: string
): IJewelryItem[] => {
  const sortedItems = [...items];

  const compareDecimals = (a: number, b: number): number => {
    // Using toFixed(2) to handle precision up to 2 decimal places
    // Converting back to number for comparison
    const diff = Number((b - a).toFixed(2));
    if (diff === 0) return 0;
    return diff > 0 ? 1 : -1;
  };

  switch (sortBy) {
    case "highToLow":
      return sortedItems.sort((a, b) =>
        compareDecimals(a.discountedPrice, b.discountedPrice)
      );
    case "lowToHigh":
      return sortedItems.sort((a, b) =>
        compareDecimals(b.discountedPrice, a.discountedPrice)
      );
    case "rating":
      return sortedItems.sort((a, b) =>
        compareDecimals(a?.rating ?? 0, b?.rating ?? 0)
      );
    default:
      return sortedItems;
  }
};

const gridBreakpoints = {
  xs: 12,
  sm: 6,
  md: 3,
};
interface IHomePage {
  jewelleryCardData: IJewelryItem[];
}
const HomePage = ({ jewelleryCardData }: IHomePage) => {
  const [page, setPage] = useState(1);
  const [sortByValue, setSortByValue] = useState("relevant");
  const [jewelryData, setJewelryData] =
    useState<IJewelryItem[]>(jewelleryCardData);

  const itemsPerPage = 5; // Number of items to show per page

  // Calculate total pages
  const totalPages = Math.ceil(jewelryData.length / itemsPerPage);

  // Get current page items
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = jewelryData.slice(startIndex, endIndex);
  // Handle page change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    // Optionally scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSortByValue = (event: any) => {
    setSortByValue(event.target.value);
  };
  useEffect(() => {
    setJewelryData(jewelleryCardData);
  }, [jewelleryCardData]);
  useEffect(() => {
    const sortedData = sortingJewelleryItem(jewelleryCardData, sortByValue);
    setJewelryData(sortedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByValue]);
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        display="flex"
        gap={1}
        alignItems="center"
        justifyContent="flex-end"
        padding={2}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortByValue}
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <SortOutlined />
            </InputAdornment>
          }
          variant="outlined"
          sx={{ minWidth: 200 }}
          onChange={handleSortByValue}
        >
          <MenuItem value="relevant">Relevant</MenuItem>
          <MenuItem value="lowToHigh">Price - Low to High</MenuItem>
          <MenuItem value="highToLow">Price - High to Low</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </Box>
      <Stack direction="row">
        {/* <Paper
          sx={{
            minWidth: "200px",
            position: "sticky",
            maxHeight: "100px",
            top: 0,
          }}
        >
          Hello
        </Paper> */}
        <Grid container spacing={2}>
          {currentItems.map((item: IJewelryItem) => (
            <Grid key={item.productId} item {...gridBreakpoints}>
              <CustomCard item={item} key={item.productId} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* Pagination component */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
};

export default HomePage;
