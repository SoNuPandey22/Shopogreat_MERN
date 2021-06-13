
import './App.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomeScreen from  './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen';
import Header from './components/Header.js';
import Footer from  './components/Footer.js';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
         <Container>
           <Route path='/' component={ HomeScreen } exact />
           <Route path='/product/:id' component={ProductScreen } /> 
         </Container>
      </main>
      <Footer/> 
    </Router>
  );
}

export default App;
