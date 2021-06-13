import React from 'react';
import {Row, Col } from 'react-bootstrap';

import products from '../product.js'
import Product from '../components/Product.js'


const HomeScreen = () =>{
	// console.log(products)
	return (
		  <>
		  	<h1>Latest Products on ShopoGreat</h1>
		  	<Row>
		  		{products.map(product =>(

		  			<Col sm={12} md={6} lg={3}>
		  				<Product product={product} />
		  			</Col>
		  			))}
		  	</Row>
		  </>
		)
}


export default HomeScreen;