const React = require('react');
const Navbar = require('./navbar');
const NavbarLogged = require('./navbarLoggedIn');

class Head extends React.Component {
    render() {
        return (

                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto:900&display=swap" rel="stylesheet"></link>

                    <title>Carefoodies</title>


                </head>

        );
    };
};

module.exports = Head;