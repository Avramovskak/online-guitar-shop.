import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function CurvedShowcase({
    title,
    highlight,
    subheader,
    side = "right",
    mediaType = "image",
    imageSrc,
    logoSrc,
    height = 420,
    mediaBg = "transparent",
    rotateDeg = 0,
    imageScale = 1,
}) {
    const gridAreas = { xs: `"copy" "media"`, md: side === "right" ? `"copy media"` : `"media copy"` };
    const ellipse = side === "right" ? "ellipse(120% 100% at 100% 0%)" : "ellipse(120% 100% at 0% 0%)";
    const bg =
        mediaBg === "orange"
            ? "linear-gradient(135deg, #F97316 0%, #fb8e3c 100%)"
            : "transparent";

    return (
        <Box sx={{ py: { xs: 4, md: 6 } }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gridTemplateAreas: gridAreas,
                    alignItems: "center",
                    columnGap: { xs: 3, md: 4 },
                    rowGap: 4,
                }}
            >
                <Box sx={{ gridArea: "copy", textAlign: { xs: "center", md: "left" } }}>
                    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
                        <Typography
                            component="h1"
                            sx={{
                                fontFamily:
                                    'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                                fontWeight: 700,
                                fontSize: { xs: 36, md: 48 },
                                lineHeight: 1,
                            }}
                        >
                            {title}{" "}
                            {highlight ? (
                                <Box component="span" sx={{ color: "secondary.main" }}>
                                    {highlight}
                                </Box>
                            ) : null}
                        </Typography>

                        {subheader && (
                            <Typography
                                sx={{
                                    fontFamily:
                                        'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: 1.4,
                                    color: "text.secondary",
                                    maxWidth: 560,
                                }}
                            >
                                {subheader}
                            </Typography>
                        )}
                    </Stack>
                </Box>

                <Box sx={{ gridArea: "media" }}>
                    {mediaType === "image" ? (
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height,
                                clipPath: ellipse,
                                overflow: "hidden",
                                borderRadius: 2,
                                background: bg,
                            }}
                        >
                            {imageSrc && (
                                <Box
                                    component="img"
                                    src={imageSrc}
                                    alt="cover"
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: `translate(-50%, -50%) rotate(${rotateDeg}deg) scale(${imageScale})`,
                                        transformOrigin: "center",
                                        width: "90%",          
                                        height: "auto",
                                        maxWidth: "95%",
                                        maxHeight: "95%",
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 18px 36px rgba(0,0,0,.25))",
                                    }}
                                />
                            )}
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height,
                                clipPath: ellipse,
                                overflow: "hidden",
                                borderRadius: 2,
                                background: "linear-gradient(135deg, #F97316 0%, #fb8e3c 100%)",
                                display: "grid",
                                placeItems: "center",
                            }}
                        >
                            {logoSrc && (
                                <Box
                                    component="img"
                                    src={logoSrc}
                                    alt="brand"
                                    sx={{ maxWidth: "60%", maxHeight: "60%", objectFit: "contain", opacity: 0.95 }}
                                />
                            )}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
