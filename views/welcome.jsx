var React = require('react');
const Layout = require('./layouts');
const Navbar = require('./navbar');
const NavbarLogged = require('./navbarLoggedIn');
const LoginForm = require('./logFormComponent');
const Head = require('./head');

class Welcome extends React.Component {
  render() {
        return (
            <div>
            <Head />
            <div style={{fontFamily: 'Montserrat'}}>
                <NavbarLogged />
                <main style={{backgroundColor: '#F7F7F5', height: '100vh'}}>
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
                                        <div style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0 ', padding: '0 5%', float: 'right'}}>
                                        <div style={{backgroundColor: '#ffffff', width: '80%', height: '450px', borderRadius: '8%', margin: '15% auto', padding: '40px'}}>
                      <h3 style={{width: '70%', margin: '5% auto 0 auto', textAlign: 'center', fontFamily: 'Montserrat'}}> Welcome back <span style={{color: '#5CE048', textTransform: 'capitalize'}}> {this.props.currentUser}</span>! </h3>
                      <div style={{width: '90%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',  margin: '30px auto'}}>
                      <form className="d-inline my-2 my-lg-0" method="GET" action={"/posts"}>
                                    <input className="btn my-2 my-sm-0" type="submit" value="Start exploring" style={{ display: 'inline', border: '1px solid #CC46E0', color: '#CC46E0', borderRadius: '8px'}}/>
                                </form>
                                <form className="d-inline my-2 my-lg-0" method="GET" action={"/posts/new"}>
                                    <input className="btn my-2 my-sm-0" type="submit" value="Share food" style={{ display: 'inline', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px'}}/>
                                </form>
                                </div>
                                <img src="./images/welcome-img.png"  className="img-fluid" style={{float: 'left', width: '80%', height: 'auto', margin: '10%'}}/>
                    </div>
                    </div>
                </main>
            </div>
            </div>
    );
  }
}

module.exports = Welcome;