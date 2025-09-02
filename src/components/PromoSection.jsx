import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import image4 from "../assets/images/image4.png";

export default function PromoSection() {
    return (
        <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
            <Box sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 } }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            component="h2"
                            sx={{
                                fontFamily:
                                    'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                                fontWeight: 400,
                                fontSize: { xs: 32, md: 48 },
                                lineHeight: 1.4,
                                letterSpacing: 0,
                            }}
                        >
                            Browse and buy your{" "}
                            <Box component="span" sx={{ color: "secondary.main" }}>
                                favorite guitars
                            </Box>{" "}
                            with VibeStrings.
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            justifyContent="center"
                            sx={{ mt: 3 }}
                        >
                            <Box
                                component="img"
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                sx={{ height: 44 }}
                            />
                            <Box
                                component="img"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg"
                                alt="Get it on Google Play"
                                sx={{ height: 44 }}
                            />
                        </Stack>
                    </Box>

                    <Box sx={{ display: "grid", placeItems: "center" }}>
                        <Box
                            component="img"
                            src={image4}
                            alt="Promo"
                            sx={{
                                Width: { xs: 570, md: 570 },
                                Height: { xs: 300, md: 533 },
                                objectFit: "contain",
                                borderRadius: 2,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
