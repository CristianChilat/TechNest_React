import Carousel from "./carousel/carousel";
import styles from "../../App.module.css";
import ProductsFilter from "./productsFilter/ProductsFilter";
import Products from "./products/Products";
import React from  'react';

function Home() {
	return (
		<>
			<section>
				<Carousel />
			</section>
			<section className={styles.productsAndFilterContainer}>
				<ProductsFilter />
				<Products />
			</section>
		</>
	)
}

export default Home;