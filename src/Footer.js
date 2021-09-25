// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'

// class Footer extends React.Component{
//     render(){
//         return(
//             // 
//             <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
//             <ul className="navbar-nav">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home</a>
//                 </li>
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Active</a>
//                 </li>
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Disabled</a>
//                 </li>
//             </ul>
//         </nav>
//         )
//     }
// }
// export default Footer;
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h3 className="title">Footer Content</h3>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Courses</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Practise</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">Using Bootstrap</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;