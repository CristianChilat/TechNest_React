import styles from './products.module.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';
import productsData from "./productsData";
import {Link} from 'react-router';

function Products() {
	return (
		<div className={styles.productsContainer}>
			<div className={styles.labelAndCountItemsContainer}>
				<div>All products</div>
				<div>Items count</div>
				<Link to={"/"}>Home</Link>
			</div>
			<div>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{productsData.map((product, index) => (
						<Grid key={index} size={{ xs: 10, sm: 10, md: 4 }}>
							<Card
								sx={{
									position: 'relative',
								}}
								className={!product.inStock ? styles.disabledProduct : styles.activeProduct}
							>
								<CardMedia
									sx={{
										height: '15em',
										position: 'relative',
									}}
									image={product.image}
								>
									{product.isNew && product.inStock && (
										<div className={styles.productBadge} style={{backgroundColor: '#f97316', left: '1em'}}>New</div>
									)}
									{product.discount && product.inStock && (
										<div className={styles.productBadge} style={{backgroundColor: '#f93816', right: '1em'}}>-{product.discount}%</div>
									)}
									{!product.inStock && (
										<div className={styles.outOfStockLabel}>Out of stock</div>
									)}
								</CardMedia>
								<CardContent
									sx={{
										minHeight: '10em',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
									}}
								>
									<div>
										<h3>{product.name}</h3>
										<h4 className={styles.productCategoryLabel}>{product.category}</h4>
										<div className={styles.ratingAndReviewContainer}>
											<StarIcon sx={{ color: '#f97316' }} />
											<div>{product.rating}</div>
											<div style={{opacity: 0.6}}>({product.reviews})</div>
										</div>
									</div>
									<div className={styles.priceContainer}>
										<div>{product.price}$</div>
										{product.originalPrice && product.inStock && (
											<div style={{opacity: 0.6, textDecoration: "line-through"}}>{product.originalPrice}$</div>
										)}

									</div>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										sx={{
											backgroundColor: '#f97316',
											color: 'white',
											width: '100%',
											padding: '0.5em 0',
											disabled: product.inStock,
											cursor: !product.inStock ? 'default' : 'pointer',
										}}

									>
										<ShoppingCartOutlinedIcon />
										Add to card
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	)
}

export default Products;