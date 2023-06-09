import React from "react";
import { useRef } from "react";
import { useRouter } from "next/router";

import Button from "../ui/button";
import classes from "./project-search.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectSearch(props) {
  const router = useRouter();
  const monthInputRef = useRef();
  const yearInputRef = useRef();

  const findProjectHandler = (year, month) => {
    const filterdProjectFullPath = `/projects/${year}/${month}`;
    router.push(filterdProjectFullPath);
  };

  const projectSubmitHandler = (event) => {
    event.preventDefault();
    const selectedMonth = monthInputRef.current.value;
    const selectedYear = yearInputRef.current.value;

    findProjectHandler(selectedYear, selectedMonth);
  };

  return (
    <form
      className={` ${styles.container} ${classes.form}`}
      onSubmit={projectSubmitHandler}
    >
      <div className={classes["form__controls"]}>
        <div className={classes["form__control"]}>
          <label htmlFor="year">Year</label>
          <select
            className={classes["form__select"]}
            id="year"
            ref={yearInputRef}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className={classes["form__control"]}>
          <label htmlFor="month">Month</label>
          <select
            className={classes["form__select"]}
            id="month"
            ref={monthInputRef}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>

        <Button>Find</Button>
      </div>
    </form>
  );
}
