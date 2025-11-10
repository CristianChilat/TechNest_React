import styles from './footer.module.css';
import logo from '../../../assets/navBarIcons/logoTechNest.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Footer() {
	return (
		<footer>
			<div className={styles.mainContentContainer}>
				<div className={styles.leftSide}>
					<div className={styles.logoContainer}>
						<img src={logo} alt=""/>
						<h3>Tech Nest</h3>
					</div>
					<div className={styles.quote}>
						Your trusted destination for quality <br/>
						electronics and household appliances.
					</div>
					<div className={styles.socialMediasContainer}>
						<div>
							<FacebookIcon fontSize='small' />
						</div>
						<div>
							<XIcon fontSize='small' />
						</div>
						<div>
							<InstagramIcon fontSize='small' />
						</div>
						<div>
							<YouTubeIcon fontSize='small' />
						</div>
					</div>
				</div>
				<div className={styles.middleSide}>
					<div className={styles.contentContainer}>
						<div>
							Quick Links
						</div>
						<div className={styles.links}>
							<div>About us</div>
							<div>Contact</div>
							<div>FAQ</div>
							<div>Shipping info</div>
							<div>Returns</div>
						</div>
					</div>
					<div className={styles.contentContainer}>
						<div>Customer services</div>
						<div className={styles.links}>
							<div>Track order</div>
							<div>Warranty</div>
							<div>Support center</div>
							<div>Privacy policy</div>
							<div>Terms of service</div>
						</div>
					</div>
				</div>
				<div className={styles.rightSide}>
					<div>Contact us</div>
					<div className={styles.contentContainer}>
						<div>
							<PlaceOutlinedIcon />
							<span> 123 Tech Street, Silicon Valley, CA 94025</span>
				 		</div>
						<div>
							<CallOutlinedIcon />
							<span> +1 (555) 123-4567</span>
						</div>
						<div>
							<EmailOutlinedIcon />
							<span> support@technest.com</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.copyRightContainer}>
				<div className={styles.copyRightText}>
					&copy; 2025 TechNest. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer;