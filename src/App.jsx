import Layout from "./shared/layouts/index";
import {Outlet} from "react-router";
import styles from "./App.module.css";

function App() {
  return (
   <div className={styles.App}>
	   <Layout>
		   <main className={styles.content}>
			   <Outlet />
		   </main>
	   </Layout>
   </div>
  );
}

export default App;
