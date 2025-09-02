import * as React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import heroImg from "../assets/images/guitar.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gridTemplateAreas: { xs: `"copy" "media"`, md: `"copy media"` },
            alignItems: "center",
            columnGap: { xs: 3, md: 4 },
            rowGap: 4,
          }}
        >
          <Box sx={{ gridArea: "copy", textAlign: "center" }}>
            <Stack spacing={2} alignItems="center">
              <Typography
                component="h1"
                sx={{
                  fontFamily:
                    'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                  fontWeight: 700,
                  fontSize: 56,
                  lineHeight: 1,
                  letterSpacing: 0,
                  textAlign: "center",
                }}
              >
                Browse top quality{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Guitars
                </Box>{" "}
                online
              </Typography>

              <Typography
                sx={{
                  fontFamily:
                    'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 1,
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#666666",
                  maxWidth: 520,
                  mt: '25px !important',
                }}
              >
                Explore 50k+ latest collections of branded guitars online with VibeStrings.
              </Typography>

            </Stack>
          </Box>

          <Box sx={{ gridArea: "media" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 540,
                clipPath: "ellipse(120% 100% at 100% 0%)",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={heroImg}
                alt="Guitar Hero"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
