import { React, useState, useEffect } from "react";
import styles from "../../styles/NumberSelect.module.css";

export default function NumberSelect(props) {
  const changeValue = (by) => {
    let intValue = parseInt(props.value);
    intValue += by;
    props.updateValue(intValue.toString());
  };

  return (
    <div id={styles.container}>
      <div id={styles.inputDiv}>
        <input
          id={styles.input}
          type="text"
          autoComplete="off"
          value={props.value}
          onChange={(e) => props.updateValue(e.target.value)}
        ></input>
      </div>
      <div id={styles.borderDiv}></div>
      <div id={styles.incrementDiv}>
        <svg
          className={styles.icon}
          id={styles.upIcon}
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          onClick={() => changeValue(props.increment)}
        >
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
        <svg
          className={styles.icon}
          id={styles.downIcon}
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          onClick={() => changeValue(props.increment * -1)}
        >
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </div>
    </div>
  );
}
