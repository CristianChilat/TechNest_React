import React from  'react';
import Carousel from "./carousel/carousel";
import ProductsAndFilter from "./productsAndFilters/ProductsAndFilter";

function Home() {
	return (
		<>
			<section>
				<Carousel />
			</section>
			<section>
				<ProductsAndFilter />
			</section>
		</>
	)
}

export default Home;