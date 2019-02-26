import React, {Component} from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, Container } from "mdbreact";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'


const Home = () =>
  <div>
    <h2>Home</h2>
  </div>;
 const BreadCrumbs = ({routing})=> {
  return (
    <Router>
    <Container>
     
      <MDBBreadcrumb color="white pink">
    
        <MDBBreadcrumbItem iconRegular icon="circle"><a href ="/ProjectButtonHome">VideoPlayer</a></MDBBreadcrumbItem>
        <MDBBreadcrumbItem iconRegular icon="circle">Library</MDBBreadcrumbItem>
        <MDBBreadcrumbItem iconRegular icon="circle" >Data</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </Container>
    </Router>
  );
};


export default BreadCrumbs;

// active