import NavBar from "./navBar/navBar.jsx";
import Footer from "./footer/footer.jsx";

const Layout = ({children}) => {
	return <>
		<NavBar />
		{children}
		<Footer />
	</>
}

export default Layout;