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


function Products() {
	return (
		<div className={styles.productsContainer}>
			<div className={styles.labelAndCountItemsContainer}>
				<div>All products</div>
				<div>Items count</div>
			</div>
			<div>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
					{productsData.map((_, index) => (
						<Grid key={index} size={{ xs: 10, sm: 10, md: 4 }}>
							<Card
								sx={{
									position: 'relative',
								}}
							>
								{productsData[index].isNew && (
									<div className={styles.productBadge} style={{backgroundColor: '#f97316', left: '1em'}}>New</div>
								)}
								{productsData[index].discount && (
									<div className={styles.productBadge} style={{backgroundColor: '#f93816', right: '1em'}}>-{productsData[index].discount}%</div>
								)}
								<CardMedia
									sx={{ height: '15em' }}
									image={productsData[index].image}
								/>
								<CardContent
									sx={{
										minHeight: '10em',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
									}}
								>
									<div>
										<h3>{productsData[index].name}</h3>
										<h4 className={styles.productCategoryLabel}>{productsData[index].category}</h4>
										<div className={styles.ratingAndReviewContainer}>
											<StarIcon sx={{ color: '#f97316' }} />
											<div>{productsData[index].rating}</div>
											<div style={{opacity: 0.6}}>({productsData[index].reviews})</div>
										</div>
									</div>
									<div className={styles.priceContainer}>
										<div>{productsData[index].price}$</div>
										{productsData[index].originalPrice && (
											<div style={{opacity: 0.6, textDecoration: "line-through"}}>{productsData[index].originalPrice}$</div>
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