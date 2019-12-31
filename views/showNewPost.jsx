// module.exports = showSinglePost;
const React = require('react');
const Layout = require('./layouts');
const NavbarLogged = require('./navbarLoggedIn');
const Head = require('./head');

class ShowNewPost extends React.Component {
    render() {
// grab and destructure object


        let {id, giver_id, posted_by, receiver_id, requested_by, pending_request, settled_request, title, img, ingredients, area, address, content, expiryDate, time_posted  } = this.props;
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
                            <img src={img} className="img-fluid" style={{float: 'left', width: '50%', margin: ' 5px', height: '450px', objectFit: 'cover'}}/>
                               <div style={{float: 'left', height: '400px', margin: ' 20px', width: '35%'}} >
                            <h1 >{title}</h1>
                            <h5>posted by {posted_by}</h5>
                            <h5>requested by {requested_by}</h5>
                                <p >{ingredients}</p>
                                <p >{area}</p>
                                <p >{address}</p>
                             <p >{content}</p>
                             <p >{expiryDate}</p>

<div className="row">
                                <div className="col">
                                    <form method="GET" action={"/posts/"+id+"/edit"}>
                                        <input type="submit" className="btn btn-block" value="Edit"/>
                                    </form>
                                </div>
                                <div className="col">
                                    <form method="POST" action={"/posts/"+id+"?_method=delete"}>
                                        <input type="submit" className="btn btn-block" value="Delete"/>
                                    </form>
                                </div>
                            </div>

                        </div>


                            </div>


                         </div>

                        </div>
                        </main>
                        </div>

     </div>
     </div>

        );
    };
};

module.exports = ShowNewPost;




// class ShowNewPost extends React.Component {
//     render() {
// // grab and destructure object
//         let {id, giver_id, receiver_id, pending_request, settled_request, title, img, ingredients, area, address, content, expiryDate, time_posted  } = this.props;
//         return (
//             <div>
//             <NavbarLogged/>
//             <div style={{backgroundColor: '#F7F7F5', width: '100%', height: '100%'}}>
//                 <main style={{backgroundColor: '#F7F7F5', width: '80%', margin: ' auto'}}>
//                     <div className="row" style={{backgroundColor: '#ffffff' , height: '500px', margin: ' auto'}}>
//                         <div className="img-container" style={{float: 'left', width: '100%'}} >
//                             <div className="sing-p-img" style={{height: 'auto', margin: ' 15px'}}>
//                             <img src={img} className="img-fluid" style={{float: 'left', width: 'auto%', margin: ' 5px', height: '400px'}}/>
//                                <div style={{float: 'right', height: 'auto', margin: ' 5px'}} >
//                             <h1 >{title}</h1>
//                             <h5>posted by {giver_id} </h5>
//                                 <p >{ingredients}</p>
//                                 <p >{area}</p>
//                                 <p >{address}</p>
//                              <p >{content}</p>
//                              <p >{expiryDate}</p>

//                             <div className="row">
//                                 <div className="col">
//                                     <form method="GET" action={"/posts/"+id+"/edit"}>
//                                         <input type="submit" className="btn btn-block" value="Edit"/>
//                                     </form>
//                                 </div>
//                                 <div className="col">
//                                     <form method="POST" action={"/posts/"+id+"?_method=delete"}>
//                                         <input type="submit" className="btn btn-block" value="Delete"/>
//                                     </form>
//                                 </div>
//                             </div>

//                         </div>

//                             </div>


//                          </div>

//                         </div>
//                         </main>
//                         </div>

//      </div>

//         );
//     };
// };

// module.exports = ShowNewPost;