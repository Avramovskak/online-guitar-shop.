import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MODEL_DETAILS } from "../graphql/queries";
import {
  Box,
  Stack,
  Typography,
  Skeleton,
  Alert,
  Tabs,
  Tab,
} from "@mui/material";
import CurvedShowcase from "../components/CurvedShowcase";
import AppFooter from "../components/AppFooter";

function a11yProps(index) {
  return { id: `tab-${index}`, "aria-controls": `tabpanel-${index}` };
}

export default function GuitarDetailsPage() {
  const { brandId, modelId } = useParams();
  const { data, loading, error } = useQuery(GET_MODEL_DETAILS, {
    variables: { brandId, modelId },
  });

  const [tab, setTab] = React.useState(0);
  const [pageIdx, setPageIdx] = React.useState(0);

  if (loading) return <Skeleton variant="rounded" height={300} />;
  if (error) return <Alert severity="error">Failed to load guitar.</Alert>;

  const g = data?.findUniqueModel;
  if (!g) return <Alert severity="warning">Not found.</Alert>;

  const musicians = g.musicians ?? [];
  const pageCount = Math.max(1, Math.ceil(musicians.length / 2));
  const visible = musicians.slice(pageIdx * 2, pageIdx * 2 + 2);

  return (
    <Box>
      <Box sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 } }}>
        <CurvedShowcase
          title={g.name}
          highlight=""
          subheader=""
          side="right"
          mediaType="image"
          imageSrc={g.image}
          height={460}
          mediaBg="orange"
          rotateDeg={-24}
          imageScale={1.1}
        />
      </Box>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          maxWidth: 1450,
          mx: "auto",
          px: { xs: 2, md: 3 },
        }}
      >
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="fullWidth"
          textColor="inherit"
          TabIndicatorProps={{
            sx: { bgcolor: "secondary.main", height: 3 },
          }}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontFamily:
                'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
              fontWeight: 500,
              color: "text.secondary",
            },
            "& .Mui-selected": {
              color: "secondary.main",
              fontWeight: 700,
            },
          }}
        >
          <Tab label="Specification" {...a11yProps(0)} />
          <Tab label="Who plays it?" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <Box sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 }, py: { xs: 4, md: 6 } }}>
        {tab === 0 && (
          <Stack spacing={3}>
            {g.description && (
              <Typography
                sx={{
                  fontFamily:
                    'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                  fontWeight: 300,
                  fontSize: 24,
                  lineHeight: 1,
                  letterSpacing: 0,
                  color: "#000000",
                  maxWidth: 1000,
                }}
              >
                {g.description}
              </Typography>
            )}

            <Box component="ul" sx={{ ml: -2, mt: 1 }}>
              {g.specs?.bodyWood && <li>Body Wood: “{g.specs.bodyWood}”.</li>}
              {g.specs?.neckWood && <li>Neck Wood: “{g.specs.neckWood}”.</li>}
              {g.specs?.fingerboardWood && (
                <li>Fingerboard: “{g.specs.fingerboardWood}”.</li>
              )}
              {g.specs?.pickups && <li>Pickups: “{g.specs.pickups}”.</li>}
              {g.specs?.tuners && <li>Tuners: “{g.specs.tuners}”.</li>}
              {g.specs?.scaleLength && (
                <li>Scale Length: “{g.specs.scaleLength}”.</li>
              )}
              {g.specs?.bridge && <li>Bridge: “{g.specs.bridge}”.</li>}
            </Box>
          </Stack>
        )}

        {tab === 1 && (
          <Stack spacing={4}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 490px)" },
                justifyContent: "center",
                gap: { xs: 3, md: 4 },
              }}
            >
              {visible.map((m, idx) => (
                <ArtistCard key={`${m.name}-${idx}`} artist={m} />
              ))}
            </Box>

            {pageCount > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5 }}>
                {Array.from({ length: pageCount }).map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setPageIdx(i)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor:
                        i === pageIdx ? "secondary.main" : "rgba(0,0,0,0.3)",
                      bgcolor: i === pageIdx ? "secondary.main" : "transparent",
                      cursor: "pointer",
                    }}
                    aria-label={`Show musicians ${i * 2 + 1}-${Math.min(
                      (i + 1) * 2,
                      musicians.length
                    )}`}
                  />
                ))}
              </Box>
            )}
          </Stack>
        )}
      </Box>
    </Box>
  );
}

function ArtistCard({ artist }) {
  return (
    <Box
      sx={{
        width: 490,
        height: 550,
        borderRadius: 2,
        bgcolor: "rgba(249,115,22,0.12)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: 444,
          height: 444,
          borderRadius: 1,
          overflow: "hidden",
          bgcolor: "#fff",
          boxShadow: 1,
        }}
      >
        {artist.musicianImage && (
          <Box
            component="img"
            src={artist.musicianImage}
            alt={artist.name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>

      <Typography
        sx={{
          mt: 2,
          fontFamily:
            'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
          fontWeight: 700,
          fontSize: 14,
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        {artist.name}
      </Typography>
    </Box>

  );
}
