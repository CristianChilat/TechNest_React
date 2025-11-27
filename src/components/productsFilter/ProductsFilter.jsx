import React from 'react';
import styles from './ProductsFilters.module.css';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'start',
	color: 'black',
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
	}),
}));

const marks = [
	{
		value: 0,
		label: "0$"
	},
	{
		value: 2000,
		label: "2000$"
	},
];

function valuetext(value) {
	return `${value}$`;
}

function ProductsFilter() {
	const [value, setValue] = React.useState([0, 2000]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={styles.filterContainer}>
			<Stack
				direction="column"
				spacing={1}
				sx={{
					justifyContent: "flex-start",
					alignItems: "stretch",
				}}
			>
				<Item
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div className={styles.label}>Filters</div>
					<div className={styles.resetButton}>Reset</div>
				</Item>
				<Item
					sx={{
						display: "flex",
						flexWrap: "wrap",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "1em"
					}}
				>
					<div className={[styles.priceRangeLabel, styles.label].join(' ')}>Price range</div>
					<div className={styles.resetButton}>Reset</div>
					<div className={styles.sliderContainer}>
						<Slider
							getAriaLabel={() => 'Price range'}
							value={value}
							onChange={handleChange}
							valueLabelDisplay="auto"
							getAriaValueText={valuetext}
							marks={marks}
							max={2000}
							sx={{
								color: 'black',
								width: '90%'
							}}
						/>
					</div>
				</Item>
				<Item>
					<div className={styles.label}>
						Category
					</div>
					<div>
						<FormGroup>
							<FormControlLabel control={<Checkbox />} label="Computer Components" />
							<FormControlLabel control={<Checkbox />} label="Phones & Tablets" />
							<FormControlLabel control={<Checkbox />} label="Audio & Video" />
							<FormControlLabel control={<Checkbox />} label="Gaming" />
							<FormControlLabel control={<Checkbox />} label="Household Appliances" />
						</FormGroup>
					</div>
				</Item>
				<Item>
					<div className={styles.label}>
						Brand
					</div>
					<div>
						<FormGroup>
							<FormControlLabel control={<Checkbox />} label="TechCorp" />
							<FormControlLabel control={<Checkbox />} label="SmartDevices" />
							<FormControlLabel control={<Checkbox />} label="GamerPro" />
							<FormControlLabel control={<Checkbox />} label="AudioMax" />
							<FormControlLabel control={<Checkbox />} label="HomeComfort" />
						</FormGroup>
					</div>
				</Item>
				<Item>
					<div className={styles.label}>
						Availability
					</div>
					<FormControlLabel control={<Checkbox />} label="In stock only" />
				</Item>
			</Stack>
		</div>
	)
}

export default ProductsFilter;