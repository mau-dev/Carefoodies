var React = require('react');
const Layout = require('./layouts');
const Navbar = require('./navbar');
const Head = require('./head');


class LogForm extends React.Component {

  render() {

        return (
            <div>
            <Head />
            <div style={{display: 'block', margin: '15% 3%'}}>

                <form method="POST" action="/login" style={{width: '300px', display: 'block'}}>

                    <input name="username" className="text-center" placeholder="Username" style={{width: '300px', textAlign: 'left', display: 'block', margin: '15px 0', height: '50px'}}/>

                    <input name="email" className="text-center" placeholder="Email" style={{width: '300px', display: 'block', margin: '15px auto', height: '50px'}}/>
                    <input name="password" className="text-center" placeholder="Password" style={{width: '300px', display: 'block', margin: '15px auto', height: '50px'}}/>
                     <input type="submit" action="/posts" value= "Log In" className="btn btn-block" style={{width: '300px', display: 'block', margin: '10px auto', height: '50px', borderRadius: '8px', backgroundColor: '#CC46E0', color: 'white'}}/>
                </form>
                <p className="text-center" style={{color: 'red', width: '300px', margin: '0', padding: '0'}}>Wrong Username!</p>

            </div>
            </div>
    );
}
}
module.exports = LogForm;