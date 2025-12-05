const products = [
	{
		id: 1,
		name: "Gaming Laptop Pro X15",
		price: 1299,
		originalPrice: 1599,
		rating: 4.8,
		reviews: 256,
		image: "https://images.unsplash.com/photo-1606625000171-fa7d471da28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjA2MDkwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Computer Components",
		inStock: false,
		isNew: true,
		discount: 19
	},
	{
		id: 2,
		name: "Smartphone Elite 5G",
		price: 899,
		originalPrice: 999,
		rating: 4.6,
		reviews: 432,
		image: "https://images.unsplash.com/photo-1675953935267-e039f13ddd79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzYwNjQ4NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Phones & Tablets",
		inStock: true,
		isNew: true,
		discount: 10
	},
	{
		id: 3,
		name: "Wireless Noise-Canceling Headphones",
		price: 249,
		originalPrice: 329,
		rating: 4.9,
		reviews: 789,
		image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYwNjU5NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Audio & Video",
		inStock: true,
		discount: 24
	},
	{
		id: 4,
		name: "RGB Mechanical Gaming Keyboard",
		price: 149,
		rating: 4.7,
		reviews: 543,
		image: "https://images.unsplash.com/photo-1728439652771-a27b8e851489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGtleWJvYXJkJTIwcmdifGVufDF8fHx8MTc2MDY4ODQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Gaming",
		inStock: true,
		isNew: true
	},
	{
		id: 5,
		name: "RTX 4070 Graphics Card",
		price: 599,
		rating: 4.8,
		reviews: 312,
		image: "https://images.unsplash.com/photo-1658673847785-08f1738116f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBncHV8ZW58MXx8fHwxNzYwNjg4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Computer Components",
		inStock: false
	},
	{
		id: 6,
		name: "Smart Watch Series 7",
		price: 399,
		originalPrice: 449,
		rating: 4.5,
		reviews: 876,
		image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2MDU5ODEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Phones & Tablets",
		inStock: true,
		discount: 11
	},
	{
		id: 7,
		name: "10-Inch Android Tablet Pro",
		price: 499,
		rating: 4.4,
		reviews: 234,
		image: "https://images.unsplash.com/photo-1672239069328-dd1535c0d78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYwNjQ0NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Phones & Tablets",
		inStock: true,
		isNew: true
	},
	{
		id: 8,
		name: "4K Ultra HD Gaming Monitor 27\"",
		price: 449,
		originalPrice: 599,
		rating: 4.7,
		reviews: 456,
		image: "https://images.unsplash.com/photo-1611648694931-1aeda329f9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vbml0b3J8ZW58MXx8fHwxNzYwNjg4NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Computer Components",
		inStock: true,
		discount: 25
	},
	{
		id: 9,
		name: "Wireless Gaming Mouse Pro",
		price: 79,
		rating: 4.6,
		reviews: 623,
		image: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZXxlbnwxfHx8fDE3NjA2MDkwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Gaming",
		inStock: true
	},
	{
		id: 10,
		name: "Bluetooth Portable Speaker",
		price: 129,
		originalPrice: 159,
		rating: 4.5,
		reviews: 345,
		image: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYwNjQyNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Audio & Video",
		inStock: true,
		discount: 19
	},
	{
		id: 11,
		name: "Smart Coffee Maker with Timer",
		price: 199,
		rating: 4.3,
		reviews: 198,
		image: "https://images.unsplash.com/photo-1740803292819-db75045edc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtYWtlciUyMGFwcGxpYW5jZXxlbnwxfHx8fDE3NjA2ODg0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Household Appliances",
		inStock: true,
		isNew: true
	},
	{
		id: 12,
		name: "Robot Vacuum Cleaner",
		price: 349,
		originalPrice: 449,
		rating: 4.6,
		reviews: 567,
		image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHZhY3V1bXxlbnwxfHx8fDE3NjA2MDQ0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "Household Appliances",
		inStock: true,
		discount: 22
	}
];

export default products;