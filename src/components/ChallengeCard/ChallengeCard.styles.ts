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

export const cardSx = (): SxProps<Theme> => {
    return {
        borderRadius: 2.75,
        width: '330px'
    };
};

export const containerSx = (): SxProps<Theme> => {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        gap: '16px'
    };
};

export const titleSx = (): SxProps<Theme> => {
    return {
        backgroundColor: palette.main.label,
        textAlign: 'center',
        alignSelf: 'stretch',
        color: palette.font.white,
        textTransform: 'capitalize',
        fontWeight: '800',
        padding: '3px 20px'
    };
};

export const categorySx = (opts?: {
    category?: keyof typeof categoryLabelMap
}): SxProps<Theme> => {
    const colorKey = stateKey(opts?.category);

    return {
        backgroundColor: categoryLabelMap[colorKey],
        alignSelf: 'self-end'
    };
};

export const mainTextSx = (): SxProps<Theme> => {
    return {
        padding: '0 15px'
    };
};

export const optionsSx = (): SxProps<Theme> => {
    return {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        '& .MuiButtonGroup-grouped': {
            border: 'none',
            color: palette.font.gray
        }
    };
};

export const rewardSx = (): SxProps<Theme> => {
    return {
        backgroundColor: palette.main.reward,
        width: '100%',
        padding: '5px 10px',
        marginTop: '100px',
        lineHeight: 1.3
    };
};

export const keywordContainerSx = (): SxProps<Theme> => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    };
};

export const keywordLabelSx = (): SxProps<Theme> => {
    return {
        color: palette.main.label,
        textTransform: 'uppercase',
        fontWeight: '800'
    };
};

export const keywordSx = (): SxProps<Theme> => {
    return {
        backgroundColor: palette.main.label,
        textAlign: 'center',
        alignSelf: 'stretch',
        color: palette.font.white,
        textTransform: 'capitalize',
        fontWeight: '700',
        padding: '0 20px',
        borderRadius: 0
    };
};
