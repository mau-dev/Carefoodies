var React = require("react");
const Layout = require('./layouts');
const Navbar = require('./navbar');

class NewPost extends React.Component {
  render() {
    return (
        <div>
            <Navbar/>
                <div style={{width: '100%', height: '90vh',backgroundColor: '#F7F7F5'}}>
                    <form method="post" action="/posts" style={{width: '500px', margin: '0 auto'}} ><br/><br/>
                        <h3 class="text-center" style={{width: '500px', margin: '0 auto'}}>Post food: </h3><br/>
                        <input type="text" name="title" placeholder="Title" style={{width: '500px', height: '50px'}} /><br/><br/>
                        <input type="text" name="ingredients" placeholder="Ingredients" style={{width: '500px', height: '50px'}} /><br/><br/>
                        <input type="file" name="photo_url" placeholder="Upload Img"  style={{width: '500px'}}/><br/><br/>
                        <input type="text" name="area" placeholder="District/area" style={{width: '500px', height: '50px'}} /><br/><br/>
                        <input type="text" name="address" placeholder="Address" style={{width: '500px', height: '50px'}} /><br/><br/>
                        <input type="text" name="content" placeholder="Meal Info" style={{width: '500px', height: '50px'}} /><br/><br/>
                        <input type="text" name="expiry_date" placeholder="Expiry Date" style={{width: '500px', height: '50px'}} /><br/><br/>
                        <input type="submit" value="Submit" class="btn  btn-block" style={{width: '500px', backgroundColor: '#CC46E0', color: 'white'}} />
                    </form>
                </div>

        </div>
    );
  }
}

module.exports = NewPost;