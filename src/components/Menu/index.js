import { Scrollchor } from "react-scrollchor";
import styles from "./menu.module.css";

export const Menu = ({ menuItems, icon }) => (
  <ul className={styles.menu}>
    {menuItems.map((category) => (
      <MenuItem
        label={category.label}
        key={category.label}
        icon={category.icon}
        scrollId={category.scroll_id}
      />
    ))}
  </ul>
);

const MenuItem = ({ label, icon, scrollId }) => (
  <li className={styles.menuItem}>
    <Scrollchor to={scrollId} className={styles.link} animate={{ offset: -20 }}>
      <img src={icon} alt={label} className={styles.menuItemIcon} />
      <span className={styles.menuItemLabel}>{label}</span>
    </Scrollchor>
  </li>
);
