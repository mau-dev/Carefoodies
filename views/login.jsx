var React = require('react');
const Layout = require('./layouts');
const Navbar = require('./navbar');
const LoginForm = require('./logFormComponent');

class Login extends React.Component {
  render() {
        return (
            <div style={{fontFamily: 'Montserrat'}}>
                <Navbar />
                <main style={{backgroundColor: '#F7F7F5', height: '90vh'}}>
                    <div style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0 ', padding: '5% ', float: 'left'}}>
                        <h1 style={{color: '#CC46E0', margin: '10% auto ', width: '35%', fontSize: '86px', fontWeight: '900'}}>Share<br/> Excess<br/> Food<br/>
                        </h1>
                    </div>
                    <div style={{backgroundColor: '#F7F7F5', width: '50vw', height: '100%', display: 'block', margin: '0 ', padding: '10% ', float: 'right'}}>
                        <LoginForm /> {this.props.children}
                    </div>
                </main>
            </div>
    );
  }
}

module.exports = Login;