// module.exports = showSinglePost;
const React = require('react');
const Layout = require('./layouts');
const NavbarLogged = require('./navbarLoggedIn');

class ShowSinglePost extends React.Component {
    render() {
// grab and destructure object
        let {id, giver_id, posted_by, receiver_id, requested_by, pending_request, settled_request, title, img, ingredients, area, address, content, expiryDate, time_posted  } = this.props;
        return (
            <div style={{backgroundColor: '#F7F7F5', width: '100%', height: '90vh'}}>
            <NavbarLogged/>
            <div style={{backgroundColor: '#F7F7F5', width: '100%', height: '100%'}}>
                <main style={{backgroundColor: '#F7F7F5', width: '80%', margin: ' auto'}}>
                    <div className="row" style={{backgroundColor: '#ffffff' , height: '500px', margin: ' 7% auto'}}>
                        <div className="img-container" style={{float: 'left', width: '100%'}} >
                            <div className="sing-p-img" style={{height: 'auto', margin: ' 15px'}}>
                            <img src={img} className="img-fluid" style={{float: 'left', width: 'auto', margin: ' 5px', height: '450px'}}/>
                               <div style={{float: 'left', height: '400px', margin: ' 20px 50px', width: '35%'}} >
                            <h1 >{title}</h1>
                            <h5>posted by {posted_by} </h5>
                            <h5>requested by {requested_by}</h5>
                                <p >{ingredients}</p>
                                <p >{area}</p>
                                <p >{address}</p>
                             <p >{content}</p>
                             <p >{expiryDate}</p>
                              <span style={{  float: 'right'}}>
                          {/* this is post method <form className=" request-food form-inline my-2" method="PUT" action={"/posts/"+id"/edit"}>*/}
                          <form className=" request-food form-inline my-2" method="POST"  action={"/posts/"+id + "/edit?_method=put"}>
                          {/* this is post method <form className=" request-food form-inline my-2" method="GET" action={"/pendingRequest"}>*/}


                                    <input className="btn my-2 my-sm-0" type="submit" value="Request" style={{ marginRight: '10px', float: 'right', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px'}}/>

                                </form>
                    </span>



                        </div>

                            </div>


                         </div>

                        </div>
                        </main>
                        </div>

     </div>

        );
    };
};

module.exports = ShowSinglePost;