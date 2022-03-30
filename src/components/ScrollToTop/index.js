import { Scrollchor } from "react-scrollchor";
import styles from "./scrolltotop.module.css";

export const ScrollToTop = () => (
  <Scrollchor to="" className={styles.scrollToTop}>
    <img
      src="https://dfusic.github.io/kaktus-cjenik/assets/icons/scrollToTop.svg"
      alt="Scroll to top"
    />
  </Scrollchor>
);
