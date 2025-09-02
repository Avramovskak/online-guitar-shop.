import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BRAND, GET_BRAND_MODELS, SEARCH_MODELS } from "../graphql/queries";
import { Box, Stack, Typography, TextField, MenuItem, InputAdornment, Alert, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CurvedShowcase from "../components/CurvedShowcase";
import ModelCard from "../components/ModelCard";
import AppFooter from "../components/AppFooter";

const PAGE_SIZE = 12;

export default function ModelsPage() {
    const { brandId } = useParams();
    const navigate = useNavigate();

    const { data: brandData } = useQuery(GET_BRAND, { variables: { id: brandId } });
    const brand = brandData?.findUniqueBrand;

    const [search, setSearch] = React.useState("");
    const [type, setType] = React.useState("");
    const [page, setPage] = React.useState(1);
    const [sortField, setSortField] = React.useState("name");
    const [sortOrder, setSortOrder] = React.useState("ASC");

    const {
        data: modelsData,
        loading: modelsLoading,
        error: modelsError,
    } = useQuery(GET_BRAND_MODELS, {
        skip: !!search,
        variables: { id: brandId, sortBy: { field: sortField, order: sortOrder } },
        fetchPolicy: "cache-and-network",
    });

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
    } = useQuery(SEARCH_MODELS, {
        skip: !search,
        variables: { brandId: String(brandId), name: search },
        fetchPolicy: "cache-and-network",
    });

    const rawItems = search ? searchData?.searchModels ?? [] : modelsData?.findBrandModels ?? [];

    const typeOptions = React.useMemo(() => {
        const set = new Set(rawItems.map((m) => (m.type || "").trim()).filter(Boolean));
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }, [rawItems]);

    const filtered = React.useMemo(() => {
        const t = type.toLowerCase();
        return t ? rawItems.filter((m) => (m.type || "").toLowerCase() === t) : rawItems;
    }, [rawItems, type]);

    const loading = search ? searchLoading : modelsLoading;
    const error = search ? searchError : modelsError;

    const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    React.useEffect(() => setPage(1), [search, type, sortField, sortOrder]);

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Box sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 } }}>
                <CurvedShowcase
                    title="Play like a"
                    highlight="Rock star"
                    subheader={
                        brand
                            ? `With a legacy dating back to the 1950s, ${brand.name} blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance.`
                            : "Explore professional guitars built to play fast, sound bold, and stand out on any stage."
                    }
                    side="right"
                    mediaType="logo"
                    logoSrc={brand?.image}
                    height={420}
                />
            </Box>

            <Box sx={{ maxWidth: 1450, mx: "auto", px: { xs: 2, md: 3 }, mt: { xs: 2, md: 0 } }}>
                <Typography
                    component="h2"
                    sx={{
                        fontFamily: 'Satoshi, Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                        fontWeight: 700,
                        fontSize: 32,
                        lineHeight: 1,
                        textAlign: "center",
                        mb: 3,
                    }}
                >
                    Check out the <Box component="span" sx={{ color: "secondary.main" }}>Selection</Box>
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "240px 380px" },
                        gap: 2,
                        justifyContent: "center",
                        mb: 4,
                    }}
                >
                    <TextField
                        select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Filter by type"
                        label=""
                        SelectProps={{
                            displayEmpty: true,
                            renderValue: (v) => (v ? v : "Filter by type"),
                            MenuProps: {
                                PaperProps: {
                                    sx: {
                                        "& .MuiMenuItem-root:hover": {
                                            bgcolor: "rgba(249, 115, 22, 0.08)",
                                            color: "secondary.main",
                                        },
                                    },
                                },
                            },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "secondary.main",
                            },
                        }}
                    >
                        <MenuItem value="">All types</MenuItem>
                        {typeOptions.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ opacity: 0.6 }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "secondary.main",
                            },
                        }}
                    />
                </Box>

                {error && <Alert severity="error" sx={{ mb: 3 }}>Failed to load models.</Alert>}

                <Box
                    sx={{
                        display: "grid",
                        gap: "60px",
                        gridTemplateColumns: {
                            xs: "repeat(1, 360px)",
                            sm: "repeat(2, 360px)",
                            lg: "repeat(3, 360px)",
                        },
                        justifyContent: "center",
                    }}
                >
                    {loading && !pageItems.length
                        ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                            <Box key={i} sx={{ width: 360 }}>
                                <Box
                                    sx={{
                                        width: 360,
                                        height: 190,
                                        borderRadius: 2,
                                    }}
                                />
                                <Box sx={{ height: 40, mt: 2, borderRadius: 1 }} />
                            </Box>
                        ))
                        : pageItems.map((m) => (
                            <ModelCard
                                key={m.id}
                                model={m}
                                onClick={() => navigate(`/brands/${brandId}/models/${m.id}`)}
                            />
                        ))}
                </Box>

                {pageCount > 1 && (
                    <Stack alignItems="center" sx={{ mt: 4 }}>
                        <Pagination
                            count={pageCount}
                            page={page}
                            onChange={(_, v) => setPage(v)}
                            shape="rounded"
                        />
                    </Stack>
                )}
            </Box>
            <AppFooter />

        </Box>

    );
}
