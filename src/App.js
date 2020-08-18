import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect, Link } from "react-router-dom";
import ProductList from './containers/ProductList';
import Product from './containers/Product';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";

function App() {
   return (
      <div>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand as={Link} to="/">Itemu</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link as={Link} to="/">Home</Nav.Link>
                  </Nav>
                  <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button as={Link} to="/" variant="outline-success">Search</Button>
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         {/* <Navbar bg="dark" expand="lg">
            <NavLink to={"/"}>Search</NavLink>
         </Navbar> */}
         <Switch>
            <Route path={"/"} exact component={ProductList} />
            <Route path={"/product/:product"} exact component={Product} />
            <Redirect to={"/"} />
         </Switch>
      </div>
   );
}

export default App;
