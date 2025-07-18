// components/OpeningSoon.js
import Image from "next/image";
import styles from "./OpeningSoon.module.css";

const OpeningSoon = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/Opening Soon.png"
        alt="Opening Soon"
        layout="responsive"
        width={1920}
        height={1080}
        className={styles.image}
      />
      <div className={styles.overlayText}>
        Contact Us: 070 5 78 78 78
      </div>
    </div>
  );
};

export default OpeningSoon;
