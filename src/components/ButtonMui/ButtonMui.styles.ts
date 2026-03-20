import { SxProps, Theme } from "@mui/material";

export const buttonSx = (): SxProps<Theme> => {
    const baseStyles: SxProps<Theme> = {
        minWidth: 110,
        height: 50
    };

    return {
        ...baseStyles
    };
};