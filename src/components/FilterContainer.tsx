"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/FilterContainer.module.css";
import DropDownSingleSelect from "./selectBoxes/DropDownSingleSelect";
import DropDownSelect from "./selectBoxes/DropDownSelect";
import NumberSelect from "./selectBoxes/NumberSelect";
import DateRangeSelect from "./selectBoxes/DateRangeSelect";
import DropDownSearchSelect from "./selectBoxes/DropDownSearchSelect";

export default function FilterContainer(props: any) {
  const [filterOptions, setFilterOptions] = useState({
    stats: ["Totals", "Rates"],
    strengths: ["All", "EV", "PP", "SH"],
    players: [],
    earliestBirthdate: null,
    latestBirthdate: null,
    leagues: [
      { value: "OHL", id: 1 },
      { value: "WHL", id: 2 },
      { value: "QMJHL", id: 3 },
    ],
    teams: [],
    positions: [
      { value: "C", id: 1 },
      { value: "LW", id: 2 },
      { value: "RW", id: 3 },
      { value: "D", id: 4 },
    ],
  });
  const [filterSelections, setFilterSelections] = useState({
    stats: "Totals",
    strengths: "All",
    minGP: 15,
    earliestBirthdate: null,
    latestBirthdate: null,
    leagues: [
      { value: "OHL", id: 1 },
      { value: "WHL", id: 2 },
      { value: "QMJHL", id: 3 },
    ],
    teams: [],
    positions: [
      { value: "C", id: 1 },
      { value: "LW", id: 2 },
      { value: "RW", id: 3 },
      { value: "D", id: 4 },
    ],
    players: [],
  });

  async function getTeams(
    fOptions: any,
    fSelections: any,
    leagueSelections: { value: string; id: number }[]
  ) {
    const res = await fetch(
      `http://localhost:3000/api/teams/${leagueSelections
        .map((inst) => inst.id)
        .join("-")}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }

    const fetchedTeams = (await res.json()).map(
      (el: { code: string; team_id: number }) => {
        return {
          value: el.code,
          id: el.team_id,
        };
      }
    );

    setFilterOptions({ ...fOptions, teams: fetchedTeams });
    setFilterSelections({
      ...fSelections,
      teams: fetchedTeams,
    });
  }

  useEffect(() => {
    if (filterSelections.leagues.length > 0) {
      getTeams(filterOptions, filterSelections, filterSelections.leagues);
    } else {
      setFilterSelections({ ...filterSelections, teams: [] });
    }
  }, [JSON.stringify(filterSelections.leagues)]);

  // Get players
  useEffect(() => {
    async function getPlayers(
      leagueSelections: { value: string; id: number }[],
      teamSelections: { value: string; id: number }[],
      positionSelections: { value: string; id: number }[],
      earliestBirthdate: string | null,
      latestBirthdate: string | null
    ) {
      const res = await fetch(
        `http://localhost:3000/api/players/${leagueSelections
          .map((inst) => inst.id)
          .join("-")}/${teamSelections
          .map((inst) => inst.id)
          .join("-")}/${positionSelections
          .map((inst) => inst.id)
          .join("-")}/${earliestBirthdate}/${latestBirthdate}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }

      const fetchedPlayers = (await res.json()).map(
        (el: { name: string; player_id: number }) => {
          return {
            value: el.name,
            id: el.player_id,
          };
        }
      );

      setFilterOptions({ ...filterOptions, players: fetchedPlayers });
      setFilterSelections({
        ...filterSelections,
        players: fetchedPlayers,
      });
    }

    if (
      filterSelections.leagues.length > 0 &&
      filterSelections.teams.length > 0 &&
      filterSelections.positions.length > 0 &&
      filterSelections.earliestBirthdate &&
      filterSelections.latestBirthdate
    ) {
      getPlayers(
        filterSelections.leagues,
        filterSelections.teams,
        filterSelections.positions,
        filterSelections.earliestBirthdate,
        filterSelections.latestBirthdate
      );
    } else {
      setFilterSelections({ ...filterSelections, players: [] });
    }
  }, [
    JSON.stringify(filterSelections.leagues),
    JSON.stringify(filterSelections.teams),
    JSON.stringify(filterSelections.positions),
    JSON.stringify(filterSelections.earliestBirthdate),
    JSON.stringify(filterSelections.latestBirthdate),
  ]);

  // Get earliest and latest birthdates
  useEffect(() => {
    async function getEarliestAndLatestBirthdates() {
      const earliestRes = await fetch(
        "http://localhost:3000/api/birthdates/earliest"
      );
      if (!earliestRes.ok) {
        throw new Error("Failed to fetch data.");
      }
      const fetchedEarliestBirthdate = (await earliestRes.json())[0].min;

      const latestRes = await fetch(
        "http://localhost:3000/api/birthdates/latest"
      );
      if (!latestRes.ok) {
        throw new Error("Failed to fetch data.");
      }
      const fetchedLatestBirthdate = (await latestRes.json())[0].max;

      console.log("run");

      setFilterOptions({
        ...filterOptions,
        earliestBirthdate: fetchedEarliestBirthdate,
        latestBirthdate: fetchedLatestBirthdate,
      });
      setFilterSelections({
        ...filterSelections,
        earliestBirthdate: fetchedEarliestBirthdate,
        latestBirthdate: fetchedLatestBirthdate,
      });
      getTeams(
        {
          ...filterOptions,
          earliestBirthdate: fetchedEarliestBirthdate,
          latestBirthdate: fetchedLatestBirthdate,
        },
        {
          ...filterSelections,
          earliestBirthdate: fetchedEarliestBirthdate,
          latestBirthdate: fetchedLatestBirthdate,
        },
        filterSelections.leagues
      );
    }

    getEarliestAndLatestBirthdates();
  }, []);

  console.log(filterOptions.earliestBirthdate);
  if (filterOptions.earliestBirthdate && filterOptions.latestBirthdate) {
    return (
      <div id={styles.container}>
        <>
          <div className={styles.inputDiv}>
            <span>Stats:</span>
            <DropDownSingleSelect
              options={filterOptions.stats}
              selectedOption={filterSelections.stats}
              updateSelectedOption={(newSelection: string) =>
                setFilterSelections({
                  ...filterSelections,
                  stats: newSelection,
                })
              }
            />
          </div>
          <div className={styles.inputDiv}>
            <span>Strength:</span>
            <DropDownSingleSelect
              options={filterOptions.strengths}
              selectedOption={filterSelections.strengths}
              updateSelectedOption={(newSelection: string) =>
                setFilterSelections({
                  ...filterSelections,
                  strengths: newSelection,
                })
              }
            />
          </div>
          <div className={styles.inputDiv}>
            <span>Min GP:</span>
            <NumberSelect
              increment={1}
              value={filterSelections.minGP}
              updateValue={(newSelection: number) =>
                setFilterSelections({
                  ...filterSelections,
                  minGP: newSelection,
                })
              }
            />
          </div>
          <div className={styles.inputDiv}>
            <span>Birthdate Range:</span>
            <DateRangeSelect
              startDate={filterSelections.earliestBirthdate}
              endDate={filterSelections.latestBirthdate}
              updateSelectedStartDate={(newSelection: any) =>
                setFilterSelections({
                  ...filterSelections,
                  earliestBirthdate: newSelection,
                })
              }
              updateSelectedEndDate={(newSelection: any) =>
                setFilterSelections({
                  ...filterSelections,
                  latestBirthdate: newSelection,
                })
              }
              maxDate={filterOptions.latestBirthdate}
              minDate={filterOptions.earliestBirthdate}
            />
          </div>
          <div className={styles.inputDiv}>
            <span>League:</span>
            <DropDownSelect
              options={filterOptions.leagues}
              selectedOptions={filterSelections.leagues}
              updateSelectedOptions={(newSelection: any) =>
                setFilterSelections({
                  ...filterSelections,
                  leagues: newSelection,
                })
              }
            />
          </div>
          <div className={styles.inputDiv}>
            <span>Team:</span>
            <DropDownSearchSelect
              options={filterOptions.teams}
              selectedOptions={filterSelections.teams}
              updateSelectedOptions={(newSelection: any) =>
                setFilterSelections({
                  ...filterSelections,
                  teams: newSelection,
                })
              }
            />
          </div>
          <div className={styles.inputDiv}>
            <span>Position:</span>
            <DropDownSelect
              options={filterOptions.positions}
              selectedOptions={filterSelections.positions}
              updateSelectedOptions={(newSelection: any) =>
                setFilterSelections({
                  ...filterSelections,
                  positions: newSelection,
                })
              }
            />
          </div>
          <div className={styles.inputDiv}>
            <span>Players:</span>
            <DropDownSearchSelect
              options={filterOptions.players}
              selectedOptions={filterSelections.players}
              updateSelectedOptions={(newSelection: any) =>
                setFilterSelections({
                  ...filterSelections,
                  players: newSelection,
                })
              }
            />
          </div>
          <button
            id={styles.submitButton}
            onClick={() => {
              props.getFilterSelections(
                filterSelections.stats,
                filterSelections.strengths,
                filterSelections.players,
                filterSelections.teams,
                filterSelections.minGP
              );
            }}
          >
            <div id={styles.textContainer}>Submit</div>
            <div id={styles.dropDownIconContainer}>
              <svg
                id={styles.icon}
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
          </button>
        </>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
