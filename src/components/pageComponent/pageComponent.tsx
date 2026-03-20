"use client";

import styles from "@/app/page.module.css";
import { Box } from "@mui/material";
import { SelectMui } from "../SelectMui/SelectMui";
import { IEvent } from "@/interfaces/event.interface";
import { ChallengeCard } from "../ChallengeCard/ChallengeCard";
import testEvents from "@/data/test-events.json";
import { useCategory } from "@/context/category-context";
import { ButtonMui } from "../ButtonMui/ButtonMui";
import React, { useState } from "react";
import { backgroundSx, foregroundSx, mainBoxSx } from "./pageComponent.styles";

export const PageComponent = () => {
    const { category, setCategory } = useCategory();

    const [showCard, setShowCard] = useState<boolean>(false);
    const [randomEvent, setRandomEvent] = useState<IEvent | null>(null);

    const events: IEvent[] = testEvents;

    const handleShowCard: React.MouseEventHandler = () => {
        const filteredEvents: IEvent[] = events.filter((event) => event.category === category);
        const randomEvent = filteredEvents.length > 0
            ? filteredEvents[Math.floor(Math.random() * filteredEvents.length)]
            : null;

        setCategory(category);
        setRandomEvent(randomEvent);
        setShowCard(true);
    }

    const backgroundStyles = backgroundSx();
    const foregroundStyles = foregroundSx();
    const mainBoxStyles = mainBoxSx();

    return (
        <Box sx={backgroundStyles} component="div">
            <Box sx={foregroundStyles} component="main">
                <Box sx={mainBoxStyles}>
                    <SelectMui />
                    <ButtonMui text="¡vamos!" onClick={handleShowCard} />
                </Box>
                {
                    showCard && randomEvent && (
                        <ChallengeCard
                            key={randomEvent.id}
                            id={randomEvent.id}
                            type={randomEvent.type}
                            category={randomEvent.category}
                            title={randomEvent.title}
                            mainText={randomEvent.mainText}
                            options={randomEvent.options}
                            idRightOpt={randomEvent.idRightOpt}
                            keyword={randomEvent.keyword}
                            reward={randomEvent.reward}
                        />
                    )
                }
            </Box>
        </Box>
    );
}