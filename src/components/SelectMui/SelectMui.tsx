"use client";

import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { CategoriesEN, CategoriesES } from "@/data/categories";
import { useCategory } from "@/context/category-context";
import { Category } from "@/types/category.type";
import { inputLabelSx, selectSx } from "./SelectMui.styles";
import { useEffect, useState } from "react";

export const SelectMui = () => {
    const { category, setCategory } = useCategory();
    const [keyboardFocus, setKeyboardFocus] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as Category);
    };

    useEffect(() => {
        const onKey = () => {
            setKeyboardFocus(true);
        };
        const onMouse = () => {
            setKeyboardFocus(false);
        };
        window.addEventListener('keydown', onKey);
        window.addEventListener('mousedown', onMouse);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('mousedown', onMouse);
        };
    }, []);
    const focusCls = keyboardFocus ? 'keyboard-focus' : 'mouse-focus';

    const categories: string[] = CategoriesES;
    const values: string[] = CategoriesEN;

    const inputLabelStyles = inputLabelSx({ category });
    const selectStyles = selectSx({ category });

    return (
        <Box sx={selectStyles}>
            <FormControl fullWidth>
                <InputLabel sx={inputLabelStyles} id="simple-select-label">Categoría</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={category}
                    className={focusCls}
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
