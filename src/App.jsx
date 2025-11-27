import styles from './App.module.css';
import Layout from "./shared/layouts";
import Carousel from "./components/carousel/carousel.jsx";
import ProductsFilter from "./components/productsFilter/ProductsFilter";
import Products from "./components/products/Products";


function App() {
  return (
   <div>
       <Layout>
        <main>
            <section>
                <Carousel />
            </section>
	        <section className={styles.productsAndFilterContainer}>
				<ProductsFilter />
		        <Products />
	        </section>
        </main>
       </Layout>
   </div>
  );
}

export default App;
