// module.exports = showSinglePost;
const React = require('react');
const Layout = require('./layouts');
const NavbarLogged = require('./navbarLoggedIn');

class ShowNewPost extends React.Component {
    render() {
// grab and destructure object
        let {id, giver_id, receiver_id, pending_request, settled_request, title, img, ingredients, area, address, content, expiryDate, time_posted  } = this.props;
        return (
            <div>
            <NavbarLogged/>
            <div style={{backgroundColor: '#F7F7F5', width: '100%', height: '100%'}}>
                <main style={{backgroundColor: '#F7F7F5', width: '80%', margin: ' auto'}}>
                    <div className="row" style={{backgroundColor: '#ffffff' , height: '500px', margin: ' auto'}}>
                        <div className="img-container" style={{float: 'left'}} >
                            <div className="sing-p-img" style={{height: 'auto', margin: ' 15px'}}>
                            <img src={img} className="img-fluid" style={{float: 'left', width: 'auto%', margin: ' 5px', height: '400px'}}/>
                               <div style={{float: 'right', width: '35%', height: 'auto', margin: ' 5px'}} >
                            <h1 >{title}</h1>
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

        );
    };
};

module.exports = ShowNewPost;



// var React = require("react");

// class ShowNewPost extends React.Component {

//   render() {
//      console.log(this.props.posts);
//     const post = this.props.posts.map(item => {
//         return(
//           <div>

//               <main  style={{ margin: '0 auto',  width: '800px', fontFamily: 'Montserrat'}} >
//          <h5> {item.id}</h5>

//           <h5>{item.title} </h5>
//           <h5>{item.ngredients}</h5>
//           <img width="500px" src={item.img} />
//           <h5>{item.area}</h5>
//           <h5>{item.address}</h5>
//           <h5>{item.content}</h5>
//           <h5>{item.expiry_date}</h5>
//           <h5>{item.time_posted}</h5>

//         </main>
//         <form method="GET" action={"/posts/"+item.id+"/edit"} style={{ width: '800px', fontFamily: 'Montserrat'}}>
//             <input type="submit" className="btn btn-warning btn-block" value="Edit"/>
//          </form>
//          <form method="POST" action={"/posts/"+item.id+"?_method=delete"}>
//               <input type="submit" className="btn btn-danger btn-block" value="Delete"/>
//           </form>

//         </div>

//           )

//        });

//     return (
//       <html>
//       <head>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
//         <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
//         <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
//         </head>
//         <body>
//         {post}

//         </body>
//       </html>
//     );


//   }
// };


// module.exports = ShowNewPost;