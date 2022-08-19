import styles from "./category.module.css";

export const Category = ({ category, id }) => (
  <section id={id} className={styles.category}>
    <h3 className={styles.categoryTitleStyle}>{category.label}</h3>
    {category.items.map((categoryItem) => (
      <CategoryItem label={categoryItem.name} price={categoryItem.price} />
    ))}
  </section>
);

const CategoryItem = ({ label, price }) => {
  const EURO_BASE = 7.5345;
  const priceInteger = Number(price.replace(",", "."));
  const euroPrice = (priceInteger / EURO_BASE).toFixed(4);
  console.log(euroPrice);

  return (
    <li key={label} className={styles.categoryItemStyle}>
      <p style={{ margin: 0, gridColumnStart: 0, gridColumnEnd: 2 }}>{label}</p>
      <div className={styles.categoryPrices}>
        <p style={{ margin: 0 }}>{price} HRK</p>
        <p style={{ margin: 0, marginLeft: 16 }}>{euroPrice} EUR</p>
      </div>
    </li>
  );
};
