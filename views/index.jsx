const React = require("react");
const Layout = require('./layouts');

class Index extends React.Component {

  render() {
        const postsList = this.props.posts.map(item => {
        let { title, img, ingredients, area, address, content, expiry_date, time_posted } = item;

  return (
            <div className="card col-md-3 float-left" style={{ margin: '50px 3%', maxWidth: '30%', borderRadius: '10px'}}>
                <img height="300px" width="auto" src={item.img} className="card-img-top" style={{  padding: '15px 0'}}/>
                <div className="card-bodys">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{address}</p>
                </div>
                <div class="offset-md-1">
                </div>
            </div>

          )
});


return (
            <Layout>
                <div className="container-fluid d-flex justify-content-center" style={{ backgroundColor: '#F7F7F5'}}>
                    <div className="row d-flex flex-row flex-wrap align-items-center justify-content-around" >
                    {postsList}
                    </div>
                </div>
             </Layout>
    );
}
}

module.exports = Index;