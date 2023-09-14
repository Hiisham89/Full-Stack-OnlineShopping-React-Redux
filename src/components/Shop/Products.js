import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dumy_items = [
  { id: 1, title: "test", price:6.5, description: "This is a first product" },
  { id: 2, title: "Mytest", price:5.3, description: "This is a second product" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dumy_items.map((item)=>
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />

        )}
      </ul>
    </section>
  );
};

export default Products;
