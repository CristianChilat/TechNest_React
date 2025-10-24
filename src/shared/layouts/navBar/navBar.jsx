import styles from './navBar.module.css';
import logo from '../../../assets/logoTechNest.png'
import profileIcon from '../../../assets/profileButtonIcon.svg'
import cartIcon from '../../../assets/cartButtonIcon.svg'
import promoIcon from '../../../assets/promoButtonIcon.svg'
import burgerMenuIcon from '../../../assets/burgerMenuButtonIcon.svg'
import searchIcon from '../../../assets/searchButtonIcon.svg'

function NavBar() {
	return (
		<nav>
			<div className={styles.logoSideContainer}>
				<img className={styles.mainLogo} src={logo} alt="No logo :(" draggable={false}/>
				<h1>TechNest</h1>
			</div>
			<div className={styles.buttonsSideContainer}>
				<div className={styles.searchContainer}>
					<input id={styles.searchInput} type="text" placeholder="Search your product"/>
					<button id={styles.searchButton}>
						<img src={searchIcon} alt=""/>
					</button>
				</div>
				<div>
					<button className={styles.buttons}>
						<img src={profileIcon} alt=""/>
					</button>
				</div>
				<div>
					<button className={styles.buttons}>
						<img src={cartIcon} alt=""/>
					</button>
				</div>
				<div>
					<button className={styles.buttons}>
						<img src={promoIcon} alt=""/>
					</button>
				</div>
				<div>
					<button className={styles.buttons}>
						<img src={burgerMenuIcon} alt=""/>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;