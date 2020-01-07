const React = require("react");
const Layout = require('./layouts');
const NavbarLogged = require('./navbarLoggedIn');
const Head = require('./head');

class NewPost extends React.Component {
  render() {
    return (
        <div>
        <Head />
           <NavbarLogged />
                <div style={{width: '100%', monHeight: '100vh',backgroundColor: '#F7F7F5'}}>
                <div className="container col-md-10" style={{ margin: '0 auto'}}>
                    <form method="post" action="/posts" className="col-md-8 col-11 text-center" style={{ margin: '0 auto', paddingBottom: '2rem'}} ><br/><br/>
                        <h3 className="text-center" className="col-md-8 col-11" style={{margin: '0 auto'}}>Post food: </h3><br/>
                        <input type="text" name="title" placeholder="Title" className="col-md-8 col-11" style={{ height: '50px'}} /><br/><br/>
                        <input type="text" name="ingredients" placeholder="Ingredients" className="col-md-8 col-11" style={{ height: '50px'}} /><br/><br/>
                        <input type="url" name="img" placeholder="Upload Img"  className="col-md-8 col-11"/><br/><br/>
                        <input type="text" name="area" placeholder="District/area"
                        className="col-md-8 col-11"style={{ height: '50px'}} /><br/><br/>
                        <input type="text" name="address" placeholder="Address" className="col-md-8 col-11" style={{ height: '50px'}} /><br/><br/>
                        <input type="text" name="content" placeholder="Meal Info" className="col-md-8 col-11" style={{height: '50px'}} /><br/><br/>
                        <input type="text" name="expiry_date" placeholder="Expiry Date"  className="col-md-8 col-11"style={{ height: '50px'}} /><br/><br/>
                        <input type="submit" value="Submit" className="btn  btn-block"  className="col-md-8 col-11"style={{ backgroundColor: '#CC46E0', height: '50px', color: 'white', border: 'none', borderRadius: '8px'}} />
                    </form>
                    </div>
                </div>

        </div>
    );
  }
}

module.exports = NewPost;