import { SxProps, Theme } from "@mui/material";

export const cardSx = (): SxProps<Theme> => {
    return {
        borderRadius: 2.75,
        width: '350px'
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
        backgroundColor: '#f00',
        textAlign: 'center',
        alignSelf: 'stretch',
        color: '#fff',
        textTransform: 'capitalize',
        fontWeight: '800',
        padding: '3px 20px'
    };
};

export const categorySx = (): SxProps<Theme> => {
    return {
        backgroundColor: '#23eea0',
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
            color: '#044fa2'
        }
    };
};

export const rewardSx = (): SxProps<Theme> => {
    return {
        backgroundColor: 'yellow',
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
        color: '#f00',
        textTransform: 'uppercase',
        fontWeight: '800'
    };
};

export const keywordSx = (): SxProps<Theme> => {
    return {
        backgroundColor: '#f00',
        textAlign: 'center',
        alignSelf: 'stretch',
        color: '#fff',
        textTransform: 'capitalize',
        fontWeight: '700',
        padding: '0 20px',
        borderRadius: 0
    };
};
