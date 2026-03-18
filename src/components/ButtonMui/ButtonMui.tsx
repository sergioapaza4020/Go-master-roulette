import { Button } from "@mui/material";
import { IProps } from "./types/IProps";

export const ButtonMui = (props: IProps) => {
    const { text, onClick } = props;

    return (
        <Button variant="contained" onClick={onClick}>{text}</Button>
    );
}