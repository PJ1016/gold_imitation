import { FC, useEffect, useState, useCallback } from "react";
import {
  Grid,
  Pagination,
  Box,
  MenuItem,
  Select,
  InputAdornment,
  Stack,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { SortOutlined } from "@mui/icons-material";
import CustomCard from "./customCard";
import type { IJewelryItem } from "../../store/slices/jewelleryCardSlice";
import { useNavigate } from "react-router-dom";

// Constants
const ITEMS_PER_PAGE = 5;

const SORT_OPTIONS = {
  RELEVANT: "relevant",
  LOW_TO_HIGH: "lowToHigh",
  HIGH_TO_LOW: "highToLow",
  RATING: "rating",
} as const;

type SortOptionType = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

const GRID_BREAKPOINTS = {
  xs: 12,
  sm: 6,
  md: 3,
} as const;

// Helper functions
const compareDecimals = (a: number, b: number): number => {
  const diff = Number((b - a).toFixed(2));
  return diff === 0 ? 0 : diff > 0 ? 1 : -1;
};

const sortJewelryItems = (
  items: IJewelryItem[],
  sortBy: SortOptionType
): IJewelryItem[] => {
  const sortedItems = [...items];

  switch (sortBy) {
    case SORT_OPTIONS.HIGH_TO_LOW:
      return sortedItems.sort((a, b) =>
        compareDecimals(a.discountedPrice, b.discountedPrice)
      );
    case SORT_OPTIONS.LOW_TO_HIGH:
      return sortedItems.sort((a, b) =>
        compareDecimals(b.discountedPrice, a.discountedPrice)
      );
    case SORT_OPTIONS.RATING:
      return sortedItems.sort((a, b) =>
        compareDecimals(a?.rating ?? 0, b?.rating ?? 0)
      );
    default:
      return sortedItems;
  }
};

// Component interfaces
interface HomePageProps {
  jewelleryCardData: IJewelryItem[];
}

// Sub-components
const SortingSelect: FC<{
  value: SortOptionType;
  onChange: (value: SortOptionType) => void;
}> = ({ value, onChange }) => (
  <Select
    labelId="sort-select-label"
    id="sort-select"
    value={value}
    size="small"
    startAdornment={
      <InputAdornment position="start">
        <SortOutlined />
      </InputAdornment>
    }
    variant="outlined"
    sx={{ minWidth: 200 }}
    onChange={(event: SelectChangeEvent) =>
      onChange(event.target.value as SortOptionType)
    }
  >
    <MenuItem value={SORT_OPTIONS.RELEVANT}>Relevant</MenuItem>
    <MenuItem value={SORT_OPTIONS.LOW_TO_HIGH}>Price - Low to High</MenuItem>
    <MenuItem value={SORT_OPTIONS.HIGH_TO_LOW}>Price - High to Low</MenuItem>
    <MenuItem value={SORT_OPTIONS.RATING}>Rating</MenuItem>
  </Select>
);

const HomePage: FC<HomePageProps> = ({ jewelleryCardData }) => {
  const [page, setPage] = useState(1);
  const [sortByValue, setSortByValue] = useState<SortOptionType>(
    SORT_OPTIONS.RELEVANT
  );
  const navigate = useNavigate();
  const [jewelryData, setJewelryData] =
    useState<IJewelryItem[]>(jewelleryCardData);

  // Memoized calculations
  const totalPages = Math.ceil(jewelryData.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = jewelryData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Handlers
  const handlePageChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const handleSortChange = useCallback((value: SortOptionType) => {
    setSortByValue(value);
  }, []);

  // Effects
  useEffect(() => {
    setJewelryData(jewelleryCardData);
  }, [jewelleryCardData]);

  useEffect(() => {
    const sortedData = sortJewelryItems(jewelleryCardData, sortByValue);
    setJewelryData(sortedData);
  }, [jewelleryCardData, sortByValue]);

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        display="flex"
        gap={1}
        alignItems="center"
        padding={2}
        sx={{
          justifyContent: { sm: "flex-end", xs: "center" },
        }}
      >
        <Button variant="contained" onClick={() => navigate("/addJewellery")}>
          Add Jewellery Items
        </Button>
        <SortingSelect value={sortByValue} onChange={handleSortChange} />
      </Box>

      <Stack direction="row">
        <Grid container spacing={2}>
          {currentItems.map((item) => (
            <Grid
              display="flex"
              key={item.productId}
              item
              {...GRID_BREAKPOINTS}
              justifyContent={{ sm: "flex-end", xs: "center" }}
            >
              <CustomCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>

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
