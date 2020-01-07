var React = require("react");


class Navbar extends React.Component {
    render() {
        return (
           <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                    <title>Carefoodies</title>
                </head>
                <body>
                    <div className="container-fluid" style={{ padding:'0'}}>
                        <nav className="navbar navbar-expand-lg " style={{ padding: '10px 50px', borderBottom: '1px solid #E3E3E1', backgroundColor: 'white',fontFamily: 'Montserrat'}}>
                            <span className="navbar-brand" style={{ color: '#CC46E0', fontWeight: 'bold'}}><a href="/"><img src="/images/carefoodies-logo.png" style={{ height: '30px', marginTop: '-13px'}}/></a></span>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <img src="/images/menu.png" style={{ height: '24px'}}/>
                            </button>



                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav mr-auto mt-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ color: '#CC46E0'}} href="./posts/"></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ color: '#CC46E0'}} href="./posts/new"></a>
                                    </li>
                                 </ul>
                                <form className="form-inline my-2 my-lg-0" method="GET" action={"/login"}>
                                    <input className="btn my-2 my-sm-0" type="submit" value="Log In" style={{ border: '1px solid #CC46E0', color: '#CC46E0', borderRadius: '8px'}}/>
                                </form>
                                <form className="form-inline my-2 my-lg-0" method="GET" action={"/register"}>
                                    <input className="btn my-2 my-sm-0" type="submit" value="Register" style={{ marginLeft: '20px', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px'}}/>
                                </form>
                            </div>
                        </nav>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = Navbar;