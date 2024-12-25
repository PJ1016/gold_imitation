import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ContactUs from "./containers/contactUs";
import Home from "./containers/home";
import About from "./containers/about";
import BuyNow from "./containers/buyNow";
import { useAppDispatch, useAppSelector } from "./store/store";
import { fetchJewelleryData } from "./store/slices/jewelleryCardSlice";
// Page Components

const App: React.FC = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "serif",
      h1: {
        fontSize: "2.5rem",
        color: "#d4af37", // Gold color for h1
      },
      h2: {
        fontSize: "2rem",
        color: "#d4af37", // Gold color for h2
      },
    },
  });
  const { jewelleryCardData } = useAppSelector((state) => state.jewelleryData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchJewelleryData());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home jewelleryCardData={jewelleryCardData} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/buyNow" element={<BuyNow />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
