import { React, useState } from "react";
import styles from "../../styles/DateRangeSelect.module.css";

export default function DateRangeSelect(props) {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [startDate, setStartDate] = useState(props.minDate);
  const [endDate, setEndDate] = useState(props.maxDate);

  const updateStartDate = (newStartDate) => {
    const dateStart = new Date(newStartDate);
    const dateMin = new Date(props.minDate);

    if (dateStart < dateMin) {
      setStartDate(props.minDate);
    } else {
      setStartDate(newStartDate);
    }
  };

  const updateEndDate = (newEndDate) => {
    const dateEnd = new Date(newEndDate);
    const dateMax = new Date(props.maxDate);

    if (dateEnd > dateMax) {
      setEndDate(props.maxDate);
    } else {
      setEndDate(newEndDate);
    }
  };

  return (
    <div id={styles.container}>
      <div id={styles.top}>
        <div id={styles.textContainer}>
          {`${props.startDate.replaceAll(
            "-",
            "/"
          )} - ${props.endDate.replaceAll("-", "/")}`}
        </div>
        <div
          id={styles.dropDownIconContainer}
          onClick={() => setDropDownActive(!dropDownActive)}
        >
          <svg
            id={styles.dropDownIcon}
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </div>
      </div>
      {dropDownActive && (
        <div id={styles.bottom}>
          <div
            className={styles.dropDownElement}
            id={styles.startDateContainer}
          >
            <div className={styles.dateLabel}>Start Date:</div>
            <input
              className={styles.dateInput}
              type="date"
              value={startDate}
              onChange={(e) => updateStartDate(e.target.value)}
              onBlur={() => props.updateSelectedStartDate(startDate)}
            />
          </div>
          <div className={styles.dropDownElement} id={styles.endDateContainer}>
            <div className={styles.dateLabel}>End Date:</div>
            <input
              className={styles.dateInput}
              type="date"
              value={endDate}
              onChange={(e) => updateEndDate(e.target.value)}
              onBlur={() => props.updateSelectedEndDate(endDate)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
