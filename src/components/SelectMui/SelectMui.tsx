"use client";

import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { CategoriesEN, CategoriesSP } from "@/data/categories";
import { useCategory } from "@/context/category-context";
import { Category } from "@/types/category.type";

export const SelectMui = () => {
    const { category, setCategory } = useCategory();

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as Category);
    };

    const categories: string[] = CategoriesSP;
    const values: string[] = CategoriesEN;

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
                    defaultValue=""
                >
                    {
                        categories.map((cat: string, idx: number) => {
                            return (
                                <MenuItem value={values[idx]}>{cat}</MenuItem>
                            );
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
