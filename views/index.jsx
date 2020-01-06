const React = require("react");
const Layout = require('./layouts');

class Index extends React.Component {

    render() {
        const postsList = this.props.posts.map(item => {
            let { id, giver_id, posted_by, receiver_id, requested_by, pending_request, settled_request, title, img, ingredients, area, address, content, expiry_date, time_posted } = item;
            let button = <input className="btn my-2 my-sm-0" type="submit" value="Request" onClick="this.innerHTML = 'Pending...'" style={{ marginRight: '10px', float: 'right', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px'}}/>

          if (this.props.currentUser === posted_by && pending_request === true) {
                button = <input className="btn my-2 my-sm-0" type="submit" value="View Requests" style={{ marginRight: '10px', float: 'right', backgroundColor: '#5CE048', color: 'white', borderRadius: '8px'}}/>
            }  else if (pending_request === true) {
                console.log(this.props.currentUser + "cur user");
                button = <input className="btn my-2 my-sm-0" type="submit" value="Pending" onClick="this.innerHTML = 'Pending...'" style={{ marginRight: '10px', float: 'right', backgroundColor: '#1A55D6', color: 'white', borderRadius: '8px'}}/>
            }


             let available = <span style={{ color: '#5CE048'}}>Available</span>;



            return (



                <div className="card col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10 float-left" style={{ margin: '50px 1%', borderRadius: '10px'}}>
               <a href={"/posts/"+item.id}> <img height="300px" width="auto" src={item.img} href={"/posts/"+item.id} className="card-img-top" style={{  padding: '15px 0', objectFit: 'cover'}}/></a>
                <div className="card-bodys" style={{  marginBottom: '20px'}}>
                     <h5 className="card-title">{title}</h5>
                    <p className="card-text "><span className="mr-2 "><img width="15px" src="/images/location-icon.png"/></span>{address.substr(0, 30)}</p>

                    <p className="card-text d-inline-block">{this.props.currentUser !== posted_by ? "Posted by " + posted_by.charAt(0).toUpperCase() + posted_by.slice(1) : "Posted by you" }</p><br/>
                    <p id="request_text"className="card-text  "> {requested_by !== null ? 'Requested by ' + requested_by.charAt(0).toUpperCase() + requested_by.slice(1) : available } </p>
                    <span style={{  float: 'right'}}>
                             <form className=" request-food form-inline my-2" method="POST"  action={"/posts/"+id + "/edit?_method=put"}>
                             {button}
                                </form>
                    </span>
                 </div>
                <div className="offset-md-1">
                </div>
            </div>

            )
        });


        return (
            <div>
            <Layout>
                <div className="container-fluid d-flex justify-content-center" style={{ backgroundColor: '#F7F7F5'}}>
                    <div className="row d-flex flex-row flex-wrap align-items-center justify-content-center" >
                    {postsList}
                    </div>
                </div>
             </Layout>
             </div>
        );
    }
}

module.exports = Index;