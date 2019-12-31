var React = require("react");
const Layout = require('./layouts');
const NavbarLogged = require('./navbarLoggedIn');
const Head = require('./head');

class Home extends React.Component {
  render() {


    return (
        <div>
        <Head />


<div style={{backgroundColor: '#F7F7F5', width: '100%', height: '90vh'}}>
            <NavbarLogged/>
            <div style={{backgroundColor: '#F7F7F5', width: '100%', height: '100%'}}>
                <main style={{backgroundColor: '#F7F7F5', width: '80%', margin: ' auto'}}>
                    <div className="row" style={{backgroundColor: '#ffffff' , height: '500px', margin: ' 7% auto'}}>
                        <div className="img-container" style={{float: 'left', width: '100%'}} >
                            <div className="sing-p-img" style={{height: 'auto', margin: ' 15px'}}>
                            <img src="./images/carefoodies-1.jpg" className="img-fluid" style={{float: 'left', width: 'auto', margin: ' 5px', height: '450px'}}/>
                               <div style={{float: 'left', height: '400px', margin: ' 20px 50px', width: '35%'}} >
                            <h1 style={{width: '100%', margin: '20% auto', textAlign: 'center', fontFamily: 'Montserrat'}}> Thanks for the request {this.props.currentUser}! <br/> The user {this.props.postedBy} will be nottified.</h1>

                              <span style={{  float: 'right'}}>
                             <form className=" request-food form-inline my-2" method="GET" action={"/posts"}>
                                    <input className="btn my-2 my-sm-0" type="submit" value="Back" style={{ marginRight: '10px', float: 'right', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px'}}/>
                                </form>
                    </span>



                        </div>

                            </div>


                         </div>

                        </div>
                        </main>
                        </div>

     </div>
     </div>




    );




}


}

module.exports = Home;