import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, Container } from "mdbreact";



const BreadCrumbs = props => {
  return (
    <Container>
      <MDBBreadcrumb light color="pink lighten-4">
        <MDBBreadcrumbItem iconRegular icon="star">Home</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb light color="pink lighten-3">
        <MDBBreadcrumbItem iconRegular icon="star">Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem iconRegular icon="star" active>Library</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb light color="pink lighten-2">
        <MDBBreadcrumbItem iconRegular icon="star">Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem iconRegular icon="star">Library</MDBBreadcrumbItem>
        <MDBBreadcrumbItem iconRegular icon="star" active>Data</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </Container>
  );
};

export default BreadCrumbs;