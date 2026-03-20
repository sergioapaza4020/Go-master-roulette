import { palette } from "@/themes/pallete";
import { SxProps, Theme } from "@mui/material";

const categoryLabelMap = {
    default: "",
    comedy: palette.category.yellow[400],
    travel: palette.category.green[400],
    fashion: palette.category.pink[300],
    technology: palette.category.blue[400],
    toys: palette.category.skyblue[400],
    gaming: palette.category.orange[400]
} as const;

function stateKey(colorVariant?: keyof typeof categoryLabelMap) {
    if (colorVariant) return colorVariant;
    return "default";
}

export const selectSx = (opts?: {
    category?: keyof typeof categoryLabelMap
}): SxProps<Theme> => {
    const colorKey = stateKey(opts?.category);

    return {
        minWidth: 250,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: categoryLabelMap[colorKey],
            borderWidth: '1px',
        },
        '& .MuiInputBase-input': {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            p: '0.938rem 1.125rem 0.938rem 0.875rem',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: categoryLabelMap[colorKey],
        },
        '&.keyboard-focus .MuiOutlinedInput-notchedOutline': {
            borderColor: categoryLabelMap[colorKey],
        },
        '&.mouse-focus.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: categoryLabelMap[colorKey],
            borderWidth: '1px',
        },
    };
};

export const inputLabelSx = (opts?: {
    category?: keyof typeof categoryLabelMap
}): SxProps<Theme> => {
    const colorKey = stateKey(opts?.category);

    return {
        color: categoryLabelMap[colorKey]
    };
};