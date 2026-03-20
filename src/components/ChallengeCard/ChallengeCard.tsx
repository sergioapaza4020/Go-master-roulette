import { Box, Button, ButtonGroup, Card, CardContent, Chip, Typography } from "@mui/material";
import { IProps } from "./types/IProps";
import { CategoriesEN, CategoriesES } from "@/data/categories";
import { cardSx, categorySx, containerSx, keywordContainerSx, keywordLabelSx, keywordSx, mainTextSx, optionsSx, rewardSx, titleSx } from "./ChallengeCard.styles";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const ChallengeCard = (props: IProps) => {
    const { category, title, mainText, options, idRightOpt, keyword, reward } = props;

    const mainTitle = title ? title : "PREGUNTA";
    const categoryES = CategoriesES[CategoriesEN.indexOf(category)];

    const cardStyles = cardSx();
    const containerStyles = containerSx();
    const titleStyles = titleSx();
    const categoryStyles = categorySx({ category });
    const mainTextStyles = mainTextSx();
    const optionsStyles = optionsSx();
    const rewardStyles = rewardSx();
    const keywordContainerStyles = keywordContainerSx();
    const keywordLabelStyles = keywordLabelSx();
    const keywordStyles = keywordSx();

    const card = (
        <CardContent sx={containerStyles}>
            <Typography sx={titleStyles} variant="h5">{mainTitle}</Typography>
            <Chip sx={categoryStyles} label={`${categoryES}`} />
            <Typography sx={mainTextStyles} variant="body1">{mainText}</Typography>
            <ButtonGroup sx={optionsStyles} variant="text" aria-label="Options">
                {
                    options?.map((opt: string, idx: number) => {
                        const icon: React.ReactNode = idx === idRightOpt ? <CheckRoundedIcon /> : "";
                        return (
                            <Button endIcon={icon}>{opt}</Button>
                        );
                    })
                }
            </ButtonGroup>
            <Typography sx={rewardStyles} variant="h6">{reward}</Typography>
            <Box sx={keywordContainerStyles}>
                <Typography sx={keywordLabelStyles} variant="subtitle1">palabra clave</Typography>
                <Chip sx={keywordStyles} label={keyword} />
            </Box>
        </CardContent>
    );

    return (
        <Card sx={cardStyles} variant="elevation">{card}</Card>
    );
}

