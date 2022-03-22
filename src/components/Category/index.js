import styles from "./category.module.css";

export const Category = ({ category, id }) => (
  <section id={id}>
    <h3 className={styles.categoryTitleStyle}>{category.label}</h3>
    {category.items.map((categoryItem) => (
      <CategoryItem label={categoryItem.name} price={categoryItem.price} />
    ))}
  </section>
);

const CategoryItem = ({ label, price }) => (
  <li key={label} className={styles.categoryItemStyle}>
    <p style={{ margin: 0 }}>{label}</p>
    <p style={{ margin: 0 }}>{price}</p>
  </li>
);
