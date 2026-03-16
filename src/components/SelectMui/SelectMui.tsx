"use client";

import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { CategoriesSP } from "@/data/categories";

export const SelectMui = () => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const categories: string[] = CategoriesSP;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="simple-select-label">Categoría</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={category}
                    label="Categoría"
                    onChange={handleChange}
                >
                    {
                        categories.map((cat: string, idx: number) => {
                            let value = (idx + 1) * 10;

                            return (
                                <MenuItem value={value}>{cat}</MenuItem>
                            );
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
