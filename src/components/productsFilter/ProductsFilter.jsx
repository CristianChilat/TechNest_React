import React from 'react';
import styles from './ProductsFilters.module.css';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'start',

	color: (theme.vars ?? theme).palette.text.secondary,
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
					<div className={styles.filterResetButton}>Reset</div>
				</Item>
				<Item
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "1em"
					}}
				>
					<div className={[styles.priceRangeLabel, styles.label].join(' ')}>Price range</div>
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
							width: '90%',
							alignSelf: 'center'
						}}
					/>
				</Item>
			</Stack>
		</div>
	)
}

export default ProductsFilter;