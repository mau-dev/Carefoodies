var React = require("react");

class Home extends React.Component {
  render() {


    return (
      <html>
        <head>
        </head>
        <body>
         <h1 style={{width: '100%', margin: '20% auto', textAlign: 'center', fontFamily: 'Montserrat'}}> Requested by {this.props.currentUser}</h1>
        </body>
      </html>
    );




}


}

module.exports = Home;