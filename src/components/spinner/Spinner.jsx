import React from "react";
import styles from "./spinner.module.css";

const Spinner = () => {
    return (
        <div className={styles.spinnerOverlay}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default Spinner;
