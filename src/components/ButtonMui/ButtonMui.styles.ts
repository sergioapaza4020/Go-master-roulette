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

export const buttonSx = (opts?: {
    category?: keyof typeof categoryLabelMap
}): SxProps<Theme> => {
    const colorKey = stateKey(opts?.category);

    return {
        minWidth: 110,
        height: 50,
        backgroundColor: categoryLabelMap[colorKey]
    };
};