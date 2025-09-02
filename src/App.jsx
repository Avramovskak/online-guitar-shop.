import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import BrandsPage from "./pages/BrandsPage";
import ModelsPage from "./pages/ModelsPage";
import GuitarDetailsPage from "./pages/GuitarDetailsPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:brandId/models" element={<ModelsPage />} />
          <Route path="/brands/:brandId/models/:modelId" element={<GuitarDetailsPage />} />
      </Routes>
    </ThemeProvider>
  );
}
