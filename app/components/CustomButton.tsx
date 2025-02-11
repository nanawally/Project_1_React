import styles from "./CustomButton.module.css"

interface CustomButton{
    customButtonName: string
}

// className === class
// id === id (remains the same)
export function CustomButton(props: CustomButton) {
  return (
    <div>
      <button className={styles.btn}>{props.customButtonName}</button>
    </div>
  );
}