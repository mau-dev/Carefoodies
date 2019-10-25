var React = require('react');
const Layout = require('./layouts');
const Navbar = require('./navbar');


class LogForm extends React.Component {

  render() {

        return (
            <div style={{display: 'block', margin: '15% 3%'}}>
                <form method="POST" action="/login" style={{width: '300px', display: 'block'}}>
                    <input name="username" class="text-center" placeholder="Username" style={{width: '300px', textAlign: 'left', display: 'block', margin: '5px 0', height: '50px'}}/>
                    <input name="email" class="text-center" placeholder="Email" style={{width: '300px', display: 'block', margin: '0 auto', height: '50px'}}/>
                    <input name="password" class="text-center" placeholder="Password" style={{width: '300px', display: 'block', margin: '0 auto', height: '50px'}}/>
                     <input type="submit" action="/posts" value= "Log In" class="btn btn-block" style={{width: '300px', display: 'block', margin: '10px auto', height: '50px', borderRadius: '8px', backgroundColor: '#CC46E0', color: 'white'}}/>
                </form>
            </div>
    );
}
}
module.exports = LogForm;