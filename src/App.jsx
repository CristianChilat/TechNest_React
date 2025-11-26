import './App.css';
import Layout from "./shared/layouts";
import Carousel from "./components/carousel/carousel.jsx";
import ProductsFilter from "./components/productsFilter/ProductsFilter";

function App() {
  return (
   <div>
       <Layout>
        <main>
            <section>
                <Carousel />
            </section>
	        <section>
<ProductsFilter />
	        </section>
        </main>
       </Layout>
   </div>
  );
}

export default App;
