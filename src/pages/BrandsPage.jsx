import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_BRANDS } from "../graphql/queries";
import { Grid, Stack, Typography, Skeleton, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BrandCard from "../components/BrandCard";


export default function BrandsPage() {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(GET_BRANDS);


    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Stack spacing={3}>
                <Stack spacing={0.5}>
                    <Typography variant="h2">Guitar Brands</Typography>
                    <Typography color="text.secondary">Pick a brand to explore their models.</Typography>
                </Stack>


                {error && <Alert severity="error">Failed to load brands.</Alert>}


                <Grid container spacing={2}>
                    {loading
                        ? Array.from({ length: 8 }).map((_, i) => (
                            <Grid item key={i} xs={12} sm={6} md={3}>
                                <Skeleton variant="rounded" height={200} />
                            </Grid>
                        ))
                        : data?.findAllBrands?.map((b) => (
                            <Grid item key={b.id} xs={12} sm={6} md={3}>
                                <BrandCard brand={b} onClick={() => navigate(`/brands/${b.id}/models`)} />
                            </Grid>
                        ))}
                </Grid>
            </Stack>
        </Box>
    );
}