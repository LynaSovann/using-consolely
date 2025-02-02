import styles from "./page.module.css";
import consolely from "consolely";

export default function Home() {
  const console = consolely

  return (
    <div className={styles.page}>
        <p>{console.hobby}</p>
        <p>{console.new}</p>
    </div>
  );
}
