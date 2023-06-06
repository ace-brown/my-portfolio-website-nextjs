import React from "react";

import Button from "../ui/button";
import classes from "./project-search.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectSearch() {
  return (
    <form className={` ${styles.container} ${classes.form}`}>
      <div className={classes["form__controls"]}>
        <div className={classes["form__control"]}>
          <label htmlFor="year">Year</label>
          <select className={classes["form__select"]} id="year">
            <option value="">2021</option>
            <option value="">2022</option>
            <option value="">2023</option>
            <option value="">2024</option>
          </select>
        </div>
        <div className={classes["form__control"]}>
          <label htmlFor="month">Month</label>
          <select className={classes["form__select"]} id="month">
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

        <Button>Search</Button>
      </div>
    </form>
  );
}
