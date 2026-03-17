"use client";

import styles from "@/app/page.module.css";
import { Box, Button } from "@mui/material";
import { SelectMui } from "../SelectMui/SelectMui";
import { IEvent } from "@/interfaces/event.interface";
import { ChallengeCard } from "../ChallengeCard/ChallengeCard";
import testEvents from "@/data/test-events.json";

export const PageComponent = () => {
    const events: IEvent[] = testEvents;

    return (
        <Box component="div" className={styles.page}>
            <Box component="main" className={styles.main}>
                <Box>
                    <SelectMui />
                    <Button variant="contained">¡vamos!</Button>
                </Box>
                {
                    events.map((event: IEvent, idx: number) => {
                        return (
                            <ChallengeCard
                                key={idx}
                                id={event.id}
                                type={event.type}
                                category={event.type}
                                mainText={event.mainText}
                                options={event.options}
                                idRightOpt={event.idRightOpt}
                                keyword={event.keyword}
                                reward={event.reward}
                            />
                        );
                    })
                }
            </Box>
        </Box>
    );
}