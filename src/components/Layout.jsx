import { Box } from "@mui/material";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";


export default function Layout({ children }) {
   return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Box component="main" sx={{ flex: "1 0 auto" }}>
        <Outlet />
      </Box>

      <AppFooter />
    </Box>
  );
}