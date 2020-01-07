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


                                           {/*} <div className="col-md-7 col-11" style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0 ', padding: '0 5%', float: 'right'}}> */}
                                        <div className= "col-md-10 h-md-75 p-5 d-flex flex-row flex-wrap" style={{backgroundColor: '#ffffff', borderRadius: '8%'}}>
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
                    {/* </div> */}



                    </div>
                    </div>
    </div>
                </main>

            </div>
            </div>
    );
  }
}

module.exports = Welcome;