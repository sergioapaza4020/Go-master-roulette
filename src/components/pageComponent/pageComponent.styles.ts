import { palette } from "@/themes/pallete";
import { SxProps, Theme } from "@mui/material";

const categoryLabelMap = {
    default: "",
    comedy: palette.category.yellow[50],
    travel: palette.category.green[50],
    fashion: palette.category.pink[50],
    technology: palette.category.blue[50],
    toys: palette.category.skyblue[50],
    gaming: palette.category.orange[50]
} as const;

function stateKey(colorVariant?: keyof typeof categoryLabelMap) {
    if (colorVariant) return colorVariant;
    return "default";
}

export const backgroundSx = (opts?: {
    category?: keyof typeof categoryLabelMap
}): SxProps<Theme> => {
    const colorKey = stateKey(opts?.category);

    return {
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: categoryLabelMap[colorKey]
    };
};

export const foregroundSx = (): SxProps<Theme> => {
    return {
        display: 'flex',
        minHeight: '100vh',
        width: ' 100%',
        maxWidth: '800px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 60px',
        gap: '25px'
    };
};

export const mainBoxSx = (): SxProps<Theme> => {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '15vw',
        minHeight: '10vh',
        gap: '15px'
    };
};