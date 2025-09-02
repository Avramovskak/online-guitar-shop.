import * as React from "react";
import { Container, Box } from "@mui/material";
import Hero from "../components/Hero";
import BrandsStrip from "../components/BrandsStrip";
import WhySection from "../components/WhySection";
import PromoSection from "../components/PromoSection";
import AppFooter from "../components/AppFooter";

export default function LandingPage() {
    return (
        <Box>
            <Hero />
            <BrandsStrip />
            <WhySection />
            <PromoSection />
            <AppFooter />
        </Box>
    );
}