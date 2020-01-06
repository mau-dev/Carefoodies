// var React = require('react');
// const Layout = require('./layouts');
// const Navbar = require('./navbar');
// const RegisterForm = require('./regFormComponent');

// class Register extends React.Component {

//   render() {
//         return (
//             <div style={{fontFamily: 'Montserrat'}}>
//             <Navbar />
//                 <main style={{backgroundColor: '#F7F7F5', height: '90vh'}}>
//                      <div style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0', padding: '6% 0 0 10% ', float: 'left'}}>
//                         <h1 style={{color: '#CC46E0', margin: '0 auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Share
//                         </h1>
//                         <h1 style={{color: '#CC46E0', margin: '0 auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Excess
//                         </h1>
//                         <h1 style={{color: '#CC46E0', margin: '0 auto 2% auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Food
//                         </h1>
//                         <p style={{paddingLeft: '30%', fontSize: '18px'}}>Share the food you don’t need instead of throwing it away and help other people while helping the environment</p>
//                     </div>
//                     <div style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0 ', padding: '10% ', float: 'right'}}>
//                         <RegisterForm /> {this.props.children}
//                     </div>
//                 </main>
//             </div>
//     );
//   }
// }

// module.exports = Register;

var React = require('react');
const Layout = require('./layouts');
const Navbar = require('./navbar');
const RegisterForm = require('./regFormComponent');
const Head = require('./head');

class Register extends React.Component {

  render() {
        return (
           <div>
            <Head />
            <div style={{fontFamily: 'Montserrat'}}>
                <Navbar />

                <main style={{backgroundColor: '#F7F7F5', minHeight: '100vh'}}>
                <div className="container pt-md-5 pb-md-2">
                <div className="row pt-md-4 pt-4">

                      <div className= "col-md-6 col-sm-10 col-11 m-md-0 float-left " style={{backgroundColor: '#F7F7F5'}}>
                       <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
  <div className="carousel-inner col-md-12 " style={{height: "70vh"}}>
    <div className="carousel-item active" style={{width: "100%"}}>
                        <div className="pt-md-4 py-4 ">
                        <h1 className="col-md-6 col-11 px-0 " style={{color: '#CC46E0', margin: '0 auto ',  fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Share</h1>
                        <h1 className="col-md-6 col-11 px-0" style={{color: '#CC46E0', margin: '0 auto ',  fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Excess
                        </h1>
                        <h1 className="col-md-6 col-11 px-0" style={{color: '#CC46E0', margin: '0 auto 2% auto ', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Food
                        </h1>
                        <p className="col-md-9 col-11 float-md-right" style={{fontSize: '18px', margin: '0 auto ',  padding: '0'}}>Share the food you don’t need instead of throwing it away and help other people while helping the environment</p>
</div>
    </div>
    <div className="carousel-item">
    <div className="pt-md-4 py-4">
                        <h1 className="col-md-6 col-11 px-0 " style={{color: '#CC46E0', margin: '0 auto ', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Find
                        </h1>
                        <h1 className="col-md-6 col-11 px-0" style={{color: '#CC46E0', margin: '0 auto ', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Free
                        </h1>
                        <h1 className="col-md-6 col-11 px-0" style={{color: '#CC46E0', margin: '0 auto 2% auto ', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Food
                        </h1>
                        <p className="col-md-9 col-11 float-md-right" style={{fontSize: '18px',  margin: '0 auto ',  padding: '0'}}>Waste less. Save money and help reducing food waste.</p>
    </div>
    </div>

  </div>

</div>
                    </div>
                         <div className= "col-md-6 col-sm-12 col-12  d-flex align-content-center justify-content-center m-md-auto my-4 float-right" style={{backgroundColor: '#F7F7F5'}}>
                        <RegisterForm /> {this.props.children}
                    </div>
                    </div>
    </div>
                </main>

            </div>
            </div>
    );
  }
}

module.exports = Register;