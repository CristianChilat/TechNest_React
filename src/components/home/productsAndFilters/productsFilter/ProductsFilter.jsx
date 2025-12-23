import React from 'react';
import styles from './ProductsFilters.module.css';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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

const brands = [
	"TechCorp",
	"SmartDevices",
	"GamerPro",
	"AudioMax",
	"HomeComfort"
];

const categories = [
	"Computer Components",
	"Phones & Tablets",
	"Audio & Video",
	"Gaming",
	"Household Appliances"
];

function valuetext(value) {
	return `${value}$`;
}

function ProductsFilter({ filters, onFilterChange }) {
	const handlePriceChange = (event, newValue) => {
		onFilterChange({ ...filters, priceRange: newValue });
	};

	const handleCategoryChange = (category) => {
		const newCategories = filters.categories.includes(category)
			? filters.categories.filter(c => c !== category)
			: [...filters.categories, category];
		onFilterChange({ ...filters, categories: newCategories });
	};

	const handleBrandChange = (brand) => {
		const newBrands = filters.brands.includes(brand)
			? filters.brands.filter(b => b !== brand)
			: [...filters.brands, brand];
		onFilterChange({ ...filters, brands: newBrands });
	};

	const handleInStockChange = (checked) => {
		onFilterChange({ ...filters, inStock: checked });
	};

	const handleReset = () => {
		onFilterChange({
			inStock: false,
			priceRange: [0, 2000],
			categories: [],
			brands: []
		});
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
					<div className={styles.resetButton} onClick={handleReset}>Reset</div>
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
					<div 
						className={styles.resetButton}
						onClick={() => onFilterChange({ ...filters, priceRange: [0, 2000] })}
					>
						Reset
					</div>
					<div className={styles.sliderContainer}>
						<Slider
							getAriaLabel={() => 'Price range'}
							value={filters.priceRange}
							onChange={handlePriceChange}
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
							{categories.map((category, index) => (
								<FormControlLabel 
									control={
										<Checkbox 
											checked={filters.categories.includes(category)}
											onChange={() => handleCategoryChange(category)}
										/>
									} 
									label={category} 
									key={index} 
								/>
							))}
						</FormGroup>
					</div>
				</Item>
				<Item>
					<div className={styles.label}>
						Brand
					</div>
					<div>
						<FormGroup>
							{brands.map((brand, index) => (
								<FormControlLabel 
									control={
										<Checkbox 
											checked={filters.brands.includes(brand)}
											onChange={() => handleBrandChange(brand)}
										/>
									} 
									label={brand} 
									key={index} 
								/>
							))}
						</FormGroup>
					</div>
				</Item>
				<Item>
					<div className={styles.label}>
						Availability
					</div>
					<FormControlLabel 
						onChange={(e) => handleInStockChange(e.target.checked)} 
						control={<Checkbox checked={filters.inStock} />} 
						label="In stock only" 
					/>
				</Item>
			</Stack>
		</div>
	)
}

export default ProductsFilter;