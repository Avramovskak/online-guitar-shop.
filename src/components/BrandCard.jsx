import * as React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";


export default function BrandCard({ brand, onClick }) {
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardActionArea onClick={onClick} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}>
                {brand.image && (
                    <CardMedia component="img" height="120" image={brand.image} alt={brand.name} sx={{ objectFit: "contain", p: 2 }} />
                )}
                <CardContent>
                    <Stack spacing={0.5}>
                        <Typography variant="h6" fontWeight={700}>{brand.name}</Typography>
                        {brand.origin && <Typography variant="body2" color="text.secondary">{brand.origin}</Typography>}
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}