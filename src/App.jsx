import './App.css';
import Layout from "./shared/layouts";
import Carousel from "./components/carousel/carousel.jsx";

function App() {
  return (
   <div>
       <Layout>
        <main>
            <section>
                <Carousel />
            </section>
        </main>
       </Layout>
   </div>
  );
}

export default App;
