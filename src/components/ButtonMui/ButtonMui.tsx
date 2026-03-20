import { Button } from "@mui/material";
import { IProps } from "./types/IProps";
import { buttonSx } from "./ButtonMui.styles";

export const ButtonMui = (props: IProps) => {
    const { text, onClick } = props;

    const buttonStyles = buttonSx();

    return (
        <Button sx={buttonStyles} variant="contained" onClick={onClick}>{text}</Button>
    );
}