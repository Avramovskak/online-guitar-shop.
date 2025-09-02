import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function ModelCard({ model, onClick }) {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: 360,
                cursor: "pointer",
                "&:hover .thumb": { transform: "translateY(-2px)" },
            }}
        >
            <Box
                className="thumb"
                sx={{
                    width: 360,
                    height: 190,
                    borderRadius: 2,
                    overflow: "hidden",
                    display: "grid",
                    placeItems: "center",
                    transition: "transform .25s ease",
                }}
            >
                <Box
                    component="img"
                    src={model.image}
                    alt={model.name}
                    sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
            </Box>

            <Stack spacing={0.5} sx={{ mt: 1.5 }}>
                <Typography
                    sx={{
                        fontFamily:
                            'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                        fontWeight: 700,
                        fontSize: 14,
                        lineHeight: 1,
                    }}
                >
                    {model.name}
                </Typography>
                <Typography
                    sx={{
                        fontFamily:
                            'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: 1,
                        color: "#666666",
                        mt:'10px !important',
                    }}
                >
                    {model.price ? `$${Number(model.price).toLocaleString()}` : "—"}
                </Typography>
            </Stack>
        </Box>
    );
}
