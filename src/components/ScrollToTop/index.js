import { Scrollchor } from "react-scrollchor";
import styles from "./scrolltotop.module.css";

export const ScrollToTop = () => (
  <Scrollchor to="" className={styles.scrollToTop}>
    <svg fill="blue">
      <symbol
        viewBox="0 0 1030 638"
        aria-labelledby="bfsi-ant-caret-up-title"
        id="si-ant-caret-up"
      >
        <title id="bfsi-ant-caret-up-title">icon caret-up</title>
        <path d="M1017 570L541 12Q530 0 515 0t-26 12L13 570q-16 19-7 43.5T39 638h952q24 0 33-24.5t-7-43.5z" />
      </symbol>
    </svg>
  </Scrollchor>
);
