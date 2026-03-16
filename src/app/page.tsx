import styles from "./page.module.css";
import { Box, Button } from "@mui/material";
import { SelectMui } from "@/components/SelectMui/SelectMui";
import { ChallengeCard } from "@/components/ChallengeCard/ChallengeCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box>
          <SelectMui />
          <Button variant="contained">¡vamos!</Button>
        </Box>
        <ChallengeCard
          type="Pregunta"
          category="Videojuegos"
          mainText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis qui laboriosam ipsam delectus iusto! Molestiae magnam explicabo eveniet vitae non!"
          options={["opt1", "opt2", "opt3"]}
          idRightOpt={2}
          keyword="clave"
          reward="¡Ganaste!"
        />
      </main>
    </div>
  );
}
