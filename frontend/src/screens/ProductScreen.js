import React from 'react';
import { Link } from  'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating.js'
import products from '../product';

const ProductScreen = ( { match } ) =>{
	const product = products.find(p => p._id === match.params.id)
	console.log(product);
	return (
		<>
		<Link className='btn btn-light py-2 my-2 ' to='/'> G0 Back </Link>
			<Card>
			   <Row>
			   	<Col md={6} >
			   	   <Image src={ product.images } alt={product.name} fluid/>
		   	       
			   	</Col>
			    <Col md={3}>
                   <ListGroup>
                   		 <ListGroup.Item variant='flush'>
                             <h2>{product.name}</h2>
                   		 </ListGroup.Item>
                   		 <ListGroup.Item>
                   	         <Rating value={product.ratings} text={`from ${product.numReviews} reviews`} />
                         </ListGroup.Item>
                         <ListGroup.Item>
                   	         <h4>{`Price ${product.price}`}</h4>
                         </ListGroup.Item>
                            <ListGroup.Item>
                   	         <p><b>Description: </b>{product.description}</p>
                         </ListGroup.Item>
                   </ListGroup>

			    </Col>
			    <Col md={3}>
			    	<ListGroup>
			    		
			    	</ListGroup>
			    </Col>	
			   
			</Card>
		</>
		)
}

export default ProductScreen;