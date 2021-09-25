import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Header  from './Header';
import Footer from './Footer';
class App extends React.Component{
  render(){
    return(
      <div className="mainContainer ">
        <Header />
        <h1 className="mr-5 mt-5 ">REACT LOVE</h1>
        <div className="container mb-5 mt-5">
          <h1 className="mr-5 mt-5">This is main body </h1>
        </div>





        




          <Footer />
          

        
      </div>

    )
  }
}
export default App;