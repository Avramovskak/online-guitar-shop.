import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#0F172A" },   
        secondary: { main: "#F97316" }, 
        background: { default: "#F8FAFC", paper: "#FFFFFF" },
        text: { primary: "#0F172A", secondary: "#475569" },
        divider: "#E2E8F0",
    },
    typography: {
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
        h1: { fontWeight: 700, fontSize: 36 },
        h2: { fontWeight: 700, fontSize: 28 },
        h3: { fontWeight: 600, fontSize: 22 },
        button: { textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: 14 },
    components: {
        MuiCard: { styleOverrides: { root: { border: "1px solid #E2E8F0" } } },
        MuiButton: { styleOverrides: { root: { borderRadius: 12 } } },
        MuiTab: { styleOverrides: { root: { fontWeight: 600 } } },
    },
});


export default theme;