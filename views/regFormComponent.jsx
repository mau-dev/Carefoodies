var React = require('react');
const Layout = require('./layouts');
const Navbar = require('./navbar');


class RegForm extends React.Component {

  render() {

        return (

            <div style={{display: 'flex', alignItems: "center"}}>
                <form method="POST" action="/register" style={{width: '300px', display: 'block'}}>
                    <input name="username" className="text-center" placeholder="Username" style={{width: '300px', textAlign: 'left', display: 'block', margin: '15px 0', height: '50px'}}/>
                    <input name="email" className="text-center" placeholder="Email" style={{width: '300px', display: 'block', margin: '15px auto', height: '50px'}}/>
                    <input name="password" className="text-center" placeholder="Password" style={{width: '300px', display: 'block', margin: '15 auto', height: '50px'}}/>
                    <input type="submit" value= "Register" action="/register"  className="btn btn-block" style={{width: '300px', display: 'block', margin: '10px auto', height: '50px', borderRadius: '8px', backgroundColor: '#CC46E0', color: 'white'}}/>
                 </form>
            </div>

    );

}
}
module.exports = RegForm;