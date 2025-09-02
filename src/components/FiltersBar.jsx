import * as React from "react";
import { Box, Stack, TextField, MenuItem, ToggleButton, ToggleButtonGroup, IconButton, Tooltip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function FiltersBar({ search, setSearch, type, setType, sortField, setSortField, sortOrder, setSortOrder, onClear }) {
    return (
        <Box sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 2, bgcolor: "background.paper" }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ xs: "stretch", md: "center" }}>
                <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search models…"
                    size="medium"
                    fullWidth
                />

                <TextField select value={type} onChange={(e) => setType(e.target.value)} label="Type" size="medium" sx={{ minWidth: 160 }}>
                    <MenuItem value="">All types</MenuItem>
                    <MenuItem value="electric">Electric</MenuItem>
                    <MenuItem value="acoustic">Acoustic</MenuItem>
                    <MenuItem value="bass">Bass</MenuItem>
                </TextField>

                <TextField select value={sortField} onChange={(e) => setSortField(e.target.value)} label="Sort by" size="medium" sx={{ minWidth: 160 }}>
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="type">Type</MenuItem>
                    <MenuItem value="price">Price</MenuItem>
                </TextField>

                <ToggleButtonGroup
                    exclusive
                    value={sortOrder}
                    onChange={(_, v) => v && setSortOrder(v)}
                    size="small"
                    color="secondary"
                >
                    <ToggleButton value="ASC">ASC</ToggleButton>
                    <ToggleButton value="DESC">DESC</ToggleButton>
                </ToggleButtonGroup>

                <Tooltip title="Clear filters">
                    <IconButton onClick={onClear}>
                        <ClearIcon />
                    </IconButton>
                </Tooltip>
            </Stack>
        </Box>
    );
}
