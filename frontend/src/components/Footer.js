import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';


const Footer = () =>{
	return (
		<footer bg='warning'>
			 <Container>
			 	<Row>
			 		<Col className='text-center py-3'>
                        Copyright &copy; ShopOgreat
			 		</Col>
			 	</Row>
			 </Container>
	    </footer>
		);
}

export default Footer;