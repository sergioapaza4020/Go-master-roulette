import { Button } from "@mui/material";
import { IProps } from "./types/IProps";
import { buttonSx } from "./ButtonMui.styles";
import { useCategory } from "@/context/category-context";

export const ButtonMui = (props: IProps) => {
    const { text, onClick } = props;

    const { category } = useCategory();

    const buttonStyles = buttonSx({ category });

    return (
        <Button sx={buttonStyles} variant="contained" onClick={onClick}>{text}</Button>
    );
}