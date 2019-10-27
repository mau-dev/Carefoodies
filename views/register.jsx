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

class Register extends React.Component {

  render() {
        return (
            <div style={{fontFamily: 'Montserrat'}}>
            <Navbar />
                <main style={{backgroundColor: '#F7F7F5', height: '90vh'}}>
                     <div style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0', padding: '6% 0 0 6% ', float: 'left'}}>
                       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
                        <h1 style={{color: '#CC46E0', margin: '0 auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Share</h1>
                        <h1 style={{color: '#CC46E0', margin: '0 auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Excess
                        </h1>
                        <h1 style={{color: '#CC46E0', margin: '0 auto 2% auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Food
                        </h1>
                        <p style={{paddingLeft: '30%', fontSize: '18px'}}>Share the food you don’t need instead of throwing it away and help other people while helping the environment</p>

    </div>
    <div className="carousel-item">
                        <h1 style={{color: '#CC46E0', margin: '0 auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Find
                        </h1>
                        <h1 style={{color: '#CC46E0', margin: '0 auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Free
                        </h1>
                        <h1 style={{color: '#CC46E0', margin: '0 auto 2% auto ', width: '40%', fontSize: '86px', fontWeight: '900', borderBottom: '25px solid #5CE048'}}>Food
                        </h1>
                        <p style={{paddingLeft: '30%', fontSize: '18px'}}>Waste less. Save money and help reducing food waste.</p>
    </div>

  </div>

</div>
                    </div>
                    <div style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0 ', padding: '10% ', float: 'right'}}>
                        <RegisterForm /> {this.props.children}
                    </div>
                </main>
            </div>
    );
  }
}

module.exports = Register;