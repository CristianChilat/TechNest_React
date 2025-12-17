import styles from './profile.module.css';

function Profile() {
	return (
		<section className={styles.profileContainer}>
			<div className={styles.navigation}>
				<div>Personal data</div>
				<div>My purchases</div>
			</div>
			<div className={styles.content}>
				<form action="#">
					<div>
						<label htmlFor="">
							<div>Full name</div>
							<input type="text" placeholder="Name"/>
						</label>
					</div>
					<div>
						<label htmlFor="">
							<div>Email address</div>
							<input type="email" placeholder="Email"/>
						</label>
					</div>
					<div>
						<label htmlFor="">
							<div>Phone number</div>
							<input type="tel" placeholder="Phone number"/>
						</label>
					</div>
					<div>
						<label htmlFor="">
							<div>Your city</div>
							<input type="text" placeholder="City"/>
						</label>
					</div>
					<div>
						<label htmlFor="">
							<div>Home address</div>
							<input type="text" placeholder="Addres"/>
						</label>
					</div>
				</form>
				<form action="">
					<div>
						<label htmlFor="">
							<div>Enter your old password</div>
							<input type="password" placeholder="Old password"/>
						</label>
						<label htmlFor="">
							<div>Enter your new password</div>
							<input type="password" placeholder="New password"/>
						</label>
						<label htmlFor="">
							<div>Confirm the password</div>
							<input type="password" placeholder="New password"/>
						</label>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Profile;