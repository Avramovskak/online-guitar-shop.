import * as React from "react";
import { Box, Container, Stack, Typography, Link, IconButton } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

function VibeLogo(props) {
    return (
        <Box
            component="svg"
            viewBox="0 0 24 24"
            width={28}
            height={28}
            sx={{ color: "secondary.main", flex: "0 0 auto" }}
            {...props}
        >
            <path
                fill="currentColor"
                d="M12 12c0 5-4.03 9-9 9V3c4.97 0 9 4 9 9Zm0 0c0 5 4.03 9 9 9V3c-4.97 0-9 4-9 9Z"
            />
        </Box>
    );
}

export default function AppFooter() {
    return (
        <Box component="footer" sx={{ bgcolor: "#F3F4F6", color: "text.primary", }}>
            <Container maxWidth={false} sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 }, py: { xs: 5, md: 7 } }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr 1fr 1fr" },
                        gap: { xs: 4, md: 8 },
                        alignItems: "start",
                    }}
                >
                    <Box>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <VibeLogo />
                                <Typography variant="h6" fontWeight={700}>VibeStrings</Typography>
                            </Stack>

                            <Stack spacing={1.25} sx={{ mt: 0.5 }}>
                                <Stack direction="row" spacing={1.25} alignItems="center">
                                    <EmailOutlinedIcon fontSize="small" sx={{ opacity: 0.8 }} />
                                    <Link href="mailto:Enquiry@VibeStrings.com" underline="none" color="inherit">
                                        Enquiry@VibeStrings.com
                                    </Link>
                                </Stack>
                                <Stack direction="row" spacing={1.25} alignItems="center">
                                    <LocationOnOutlinedIcon fontSize="small" sx={{ opacity: 0.8 }} />
                                    <Typography>San Francisco</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box>
                        <Typography fontWeight={700} sx={{ mb: 1.5 }}>
                            PAGES
                        </Typography>
                        <Stack spacing={1.1}>
                            <Link component={RouterLink} to="/brands" underline="none" color="inherit">Store</Link>
                            <Link underline="none" color="inherit" href="#">Collections</Link>
                            <Link underline="none" color="inherit" href="#">Support</Link>
                        </Stack>
                    </Box>

                    <Box>
                        <Typography fontWeight={700} sx={{ mb: 1.5 }}>
                            PRODUCT
                        </Typography>
                        <Stack spacing={1.1}>
                            <Link underline="none" color="inherit" href="#">Terms</Link>
                            <Link underline="none" color="inherit" href="#">Privacy Policy</Link>
                            <Link underline="none" color="inherit" href="#">Copyright</Link>
                        </Stack>
                    </Box>

                    <Box>
                        <Typography fontWeight={700} sx={{ mb: 1.5 }}>
                            FOLLOW US
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton size="small" color="inherit" aria-label="Facebook"><FacebookIcon fontSize="small" /></IconButton>
                            <IconButton size="small" color="inherit" aria-label="Twitter"><TwitterIcon fontSize="small" /></IconButton>
                            <IconButton size="small" color="inherit" aria-label="Instagram"><InstagramIcon fontSize="small" /></IconButton>
                        </Stack>
                    </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: { xs: 5, md: 7 } }}>
                    © 2022 Copyright · VibeStrings
                </Typography>
            </Container>
        </Box>
    );
}
