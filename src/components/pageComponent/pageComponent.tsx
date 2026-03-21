"use client";

import { Box } from "@mui/material";
import { SelectMui } from "../SelectMui/SelectMui";
import { IEvent } from "@/interfaces/event.interface";
import { ChallengeCard } from "../ChallengeCard/ChallengeCard";
import technologyEvents from "@/data/technology.data.json";
import comedyEvents from "@/data/comedy.data.json";
import fashionEvents from "@/data/fashion.data.json";
import gamingEvents from "@/data/gaming.data.json";
import travelEvents from "@/data/travel.data.json";
import toysEvents from "@/data/toys.data.json";
import { useCategory } from "@/context/category-context";
import { ButtonMui } from "../ButtonMui/ButtonMui";
import React, { useState } from "react";
import { backgroundSx, foregroundSx, mainBoxSx } from "./pageComponent.styles";

export const PageComponent = () => {
    const { category, setCategory } = useCategory();

    const [showCard, setShowCard] = useState<boolean>(false);
    const [randomEvent, setRandomEvent] = useState<IEvent | null>(null);

    const technologyData: IEvent[] = technologyEvents as IEvent[];
    const comedyData: IEvent[] = comedyEvents as IEvent[];
    const fashionData: IEvent[] = fashionEvents as IEvent[];
    const gamingData: IEvent[] = gamingEvents as IEvent[];
    const travelData: IEvent[] = travelEvents as IEvent[];
    const toysData: IEvent[] = toysEvents as IEvent[];
    const events: IEvent[] = [...technologyData, ...comedyData, ...fashionData, ...gamingData, ...travelData, ...toysData];

    const handleShowCard: React.MouseEventHandler = () => {
        const filteredEvents: IEvent[] = events.filter((event) => event.category === category);
        const randomEvent = filteredEvents.length > 0
            ? filteredEvents[Math.floor(Math.random() * filteredEvents.length)]
            : null;

        setCategory(category);
        setRandomEvent(randomEvent);
        setShowCard(true);
    }

    const backgroundStyles = backgroundSx({category});
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