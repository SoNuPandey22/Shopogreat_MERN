import React, { useState } from 'react';

import Rating from './Rating' ;
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap'


const Products = ({product}) =>{
	console.log(product.images)
	
  return (
     <Card style={{height: 'auto'}}className='my-3 p-3 rounded'>
         <Link to={`product/${product._id}`}>
           <Card.Img style={{height:200}}src={product.images} alt='prodcut-image' variant='top' />
         </Link>
	      <Card.Body>
		       <Link to={`/product/${product._id}`}>
		         <Card.Title as='div'>
		             <strong>{product.name}</strong>
		         </Card.Title>
		       </Link>

		       <Card.Text as='div'>
		           ${product.price}
		       </Card.Text>
		       <Card.Text as='div'>
		          <Rating 
		             value={product.ratings} 
		             text={`${product.numReviews} reviews`}
		             color= {`yellow`}
		           />
		       </Card.Text>
	     </Card.Body>
     </Card>
   )
}

export default Products;