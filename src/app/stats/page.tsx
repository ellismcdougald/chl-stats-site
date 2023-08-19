"use client";

import { useState } from "react";
import FilterContainer from "../../components/FilterContainer";
import styles from "../../styles/Stats.module.css";

export default function Stats() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div id={styles.container}>
      <FilterContainer setSelectedPlayers={setSelectedPlayers} />
    </div>
  );
}
