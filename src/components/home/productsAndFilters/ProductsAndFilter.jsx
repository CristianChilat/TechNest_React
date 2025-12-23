import Products from './products/Products'
import Filter from './productsFilter/ProductsFilter'
import styles from './productsAndFilter.module.css'
import {useState} from "react";
import products from './products/productsData'

function ProductsAndFilter() {
	const [filters, setFilters] = useState({
		inStock: null,
		priceRange: [0, 2000],
		categories: [],
		brands: []
	});

	const filteredProducts = products.filter((product) => {
		if (filters.inStock && !product.inStock) return false;

		if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
		
		if (filters.categories.length > 0 && !filters.categories.includes(product.category)) return false;
		
		return !(filters.brands.length > 0 && !filters.brands.includes(product.brand));
	});

	const updateFilters = (newFilters) => {
		setFilters(newFilters);
	};

	return (
		<div className={styles.productsAndFilterContainer}>
			<Filter onFilterChange={updateFilters} filters={filters} />
			{filteredProducts.length === 0 ? (
				<div>
					Unfortunately no products found for your filters.
				</div>
			) : (
				<Products filteredProducts={filteredProducts} />
			)}
		</div>
	)
}

export default ProductsAndFilter;