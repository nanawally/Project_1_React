import { Link } from "react-router";
import styles from "./CustomButton.module.css";

interface CustomFunctionButton {
  customButtonName: string;
  customOnClickFunction: () => void;
}

interface CustomNavButton {
  customButtonName: string;
  navigateTo: string;
}

// className === class
// id === id (remains the same)

export function CustomFunctionButton(props: CustomFunctionButton) {
  return (
    <button className={styles.btn} onClick={props.customOnClickFunction}>
      {props.customButtonName}
    </button>
  );
}

export function CustomNavButton(props: CustomNavButton) {
  return (
    <Link to={props.navigateTo}>
      <button className={styles.btn}>{props.customButtonName}</button>
    </Link>
  );
}
