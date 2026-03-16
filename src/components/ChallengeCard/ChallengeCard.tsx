import { Box, Button, ButtonGroup, Chip, Typography } from "@mui/material";
import { IProps } from "./types/IProps";

export const ChallengeCard = (props: IProps) => {
    const { type, category, mainText, options, idRightOpt, keyword, reward } = props;

    return (
        <Box>
            <Typography variant="h4">{type}</Typography>
            <Chip label={`Categoría: ${category}`} />
            <Typography variant="body1">{mainText}</Typography>
            <ButtonGroup variant="text" aria-label="Options">
                {
                    options?.map((opt: string, idx: number) => {
                        const isRightAns: string = idx === idRightOpt ? "✅" : "";
                        return(
                            <Button>{opt}{isRightAns}</Button>
                        );
                    })
                }
            </ButtonGroup>
            <Chip label={keyword}></Chip>
            <Typography variant="subtitle1">{reward}</Typography>
        </Box>
    );
}