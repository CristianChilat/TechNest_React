import Layout from "./shared/layouts/index";
import {Outlet} from "react-router";

function App() {
  return (
   <div>
	   <Layout>
		   <main>
			   <Outlet />
		   </main>
	   </Layout>
   </div>
  );
}

export default App;
