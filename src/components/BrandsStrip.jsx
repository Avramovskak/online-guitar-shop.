import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_BRANDS } from "../graphql/queries";
import { Box, Stack, Typography, Container, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BrandsStrip() {
    const { data, loading } = useQuery(GET_BRANDS);
    const brands = data?.findAllBrands ?? [];
    const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
            <Container maxWidth={false} sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 } }}>
                <Stack spacing={1.5} textAlign="center" mb={4}>
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: 'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                            fontWeight: 700,
                            fontSize: 44,
                            lineHeight: 1,
                            letterSpacing: 0,
                            textAlign: "center",
                        }}
                    >
                        Featuring the <Box component="span" sx={{ color: "secondary.main" }}>Best Brands</Box>
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                            fontWeight: 500,
                            fontSize: 16,
                            lineHeight: 1,
                            letterSpacing: 0,
                            textAlign: "center",
                            color: "#666666",
                        }}
                    >
                        Select your preferred brand and explore our exquisite collection.
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, 180px)",
                            sm: "repeat(3, 180px)",
                            md: "repeat(4, 180px)", 
                        },
                        justifyContent: "center",
                        columnGap: "199px", 
                        rowGap: "185px",     
                    }}
                >
                    {(loading ? Array.from({ length: 8 }) : brands).map((b, i) => (
                        <Box
                            key={b?.id ?? i}
                            onClick={() => b?.id && navigate(`/brands/${b.id}/models`)}
                            sx={{
                                width: 180,
                                height: 110,
                                borderRadius: 2,
                                display: "grid",
                                placeItems: "center",
                                cursor: b?.id ? "pointer" : "default",
                            }}
                        >
                            {loading ? (
                                <Skeleton variant="rounded" width={180} height={110} />
                            ) : (
                                <Box
                                    component="img"
                                    src={b.image}
                                    alt={b.name}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        filter: "grayscale(1)",
                                        opacity: 0.86,
                                        transition: "filter .25s, opacity .25s, transform .25s",
                                        "&:hover": { filter: "none", opacity: 1, transform: "translateY(-2px)" },
                                    }}
                                />
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
