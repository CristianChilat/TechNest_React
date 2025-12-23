import styles from './profile.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Profile() {
	return (
		<section className={styles.profileContainer}>
			<ButtonGroup variant="outlined" aria-label="Basic button group">
				<Button className={styles.profileCategoryButton}>Personal data</Button>
				<Button className={styles.profileCategoryButton}>My purchases</Button>
			</ButtonGroup>
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
							<div className={styles.inputInfoContainer}>
								<input type="email" placeholder="Email"/>
								<Button
									variant="contained"
									sx={{
										boxShadow: 0,
									}}
								>
									Confirm email
								</Button>
							</div>
						</label>
					</div>
					<div>
						<label htmlFor="">
							<div>Phone number</div>
							<div className={styles.inputInfoContainer}>
								<input type="tel" placeholder="Phone number"/>
								<Button
									variant="contained"
									sx={{
										boxShadow: 0,
									}}
								>
									Confirm phone
								</Button>
							</div>
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
					<div>
						<Button
							variant="contained"
							sx={{
								boxShadow: 0,
							}}
						>
							Save data
						</Button>
					</div>
				</form>
				<form action="">
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
					<Button
						variant="contained"
						sx={{
							boxShadow: 0,
						}}
					>
						Change password
					</Button>
				</form>
			</div>
		</section>
	)
}

export default Profile;