import styles from './footer.module.css';
import logo from '../../../assets/navBarIcons/logoTechNest.png'
import {ReactComponent as FacebookIcon} from '../../../assets/socialMedias/facebookIcon.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/socialMedias/twitterIcon.svg';
import {ReactComponent as InstagramIcon} from '../../../assets/socialMedias/instagramIcon.svg';
import {ReactComponent as YoutubeIcon} from '../../../assets/socialMedias/youtubeIcon.svg';
import {ReactComponent as PhoneIcon} from '../../../assets/contactIcons/phoneIcon.svg';
import {ReactComponent as GeoIcon} from '../../../assets/contactIcons/geoIcon.svg';
import {ReactComponent as MailIcon} from '../../../assets/contactIcons/mailIcon.svg';

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
							<FacebookIcon/>
						</div>
						<div>
							<TwitterIcon/>
						</div>
						<div>
							<InstagramIcon/>
						</div>
						<div>
							<YoutubeIcon/>
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
							<GeoIcon />
							<span> 123 Tech Street, Silicon Valley, CA 94025</span>
				 		</div>
						<div>
							<PhoneIcon />
							<span> +1 (555) 123-4567</span>
						</div>
						<div>
							<MailIcon />
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