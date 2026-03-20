import { SxProps, Theme } from "@mui/material";

export const backgroundSx = (): SxProps<Theme> => {
    return {
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
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