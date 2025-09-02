import * as React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import GridV1 from "@mui/material/Grid"; 

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

const items = [
    {
        img: image1,
        title: "Smooth Browsing",
        desc: "Discover guitars effortlessly with refined search & filters.",
    },
    {
        img: image2,
        title: "Easy Delivery",
        desc: "Fast, reliable delivery straight to your door.",
    },
    {
        img: image3,
        title: "Swift Payments",
        desc: "Secure and quick checkout options.",
    },
];

export default function WhySection() {
    return (
        <Box sx={{ bgcolor: "#000000", color: "#FFFFFF", py: { xs: 8, md: 12 } }}>
            <Container
                maxWidth={false}
                sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 } }}
            >
                <Typography
                    sx={{
                        fontFamily:
                            'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                        fontWeight: 400,
                        fontSize: { xs: 32, md: 44 },
                        lineHeight: 1,
                        letterSpacing: 0,
                        textAlign: "center",
                        color: "#FFFFFF",
                        mb: { xs: 6, md: 8 },
                    }}
                >
                    Why try <Box component="span" sx={{ color: "secondary.main" }}>VibeStrings</Box>?
                </Typography>

                <GridV1 container spacing={{ xs: 4, md: 6 }} justifyContent="center">
                    {items.map(({ img, title, desc }) => (
                        <GridV1 key={title} item xs={12} md={4}>
                            <Stack spacing={0} alignItems="center" textAlign="center">
                                <Box
                                    component="img"
                                    src={img}
                                    alt={title}
                                    sx={{ width: 72, height: 72, mb: "40px" }}
                                />

                                <Typography
                                    sx={{
                                        fontFamily:
                                            'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                                        fontWeight: 700,
                                        fontSize: 18,
                                        lineHeight: 1,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        color: "#FFFFFF",
                                        mb: 1.5,
                                    }}
                                >
                                    {title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily:
                                            'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                                        fontWeight: 400,
                                        fontSize: 14,
                                        lineHeight: 1,
                                        letterSpacing: 0,
                                        textTransform: "capitalize",
                                        color: "#666666",
                                        maxWidth: 230,
                                    }}
                                >
                                    {desc}
                                </Typography>
                            </Stack>
                        </GridV1>
                    ))}
                </GridV1>
            </Container>
        </Box>
    );
}
