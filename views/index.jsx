const React = require("react");
const Layout = require('./layouts');

class Index extends React.Component {

  render() {
        const postsList = this.props.posts.map(item => {
        let { id, giver_id, posted_by, receiver_id, requested_by, pending_request, settled_request, title, img, ingredients, area, address, content, expiry_date, time_posted  } = item;
         let button = <input className="btn my-2 my-sm-0" type="submit" value="Request" onClick="this.innerHTML = 'Pending...'" style={{ marginRight: '10px', float: 'right', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px'}}/>

        if (pending_request === true ){
            button = <input className="btn my-2 my-sm-0" type="submit" value="Pending" onClick="this.innerHTML = 'Pending...'" style={{ marginRight: '10px', float: 'right', backgroundColor: '#1A55D6', color: 'white', borderRadius: '8px'}}/>
        }
  return (
            <div className="card col-md-3 float-left" style={{ margin: '50px 1%', maxWidth: '30%', borderRadius: '10px'}}>
               <a href={"/posts/"+item.id}> <img height="300px" width="auto" src={item.img} href={"/posts/"+item.id} className="card-img-top" style={{  padding: '15px 0'}}/></a>
                <div className="card-bodys" style={{  marginBottom: '20px'}}>
                     <h5 className="card-title">{title}</h5>
                    <p className="card-text">{address}</p>

                    <p className="card-text">Posted by user {posted_by}</p>
                    <p className="card-text">requested by {requested_by}</p>
                    <span style={{  float: 'right'}}>
                             <form className=" request-food form-inline my-2" method="POST"  action={"/posts/"+id + "/edit?_method=put"}>
                             {button}
                                </form>
                    </span>
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