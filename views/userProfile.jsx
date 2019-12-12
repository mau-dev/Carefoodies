const React = require("react");
const Layout = require('./layouts');

class User extends React.Component {

    render() {
        const postsList = this.props.posts.map(item => {
            let { giver_id, posted_by, receiver_id, requested_by, pending_request, settled_request, title, img, ingredients, area, address, content, expiry_date, time_posted } = item;
            let button = <form className=" request-food form-inline " method="GET" action={"/pendingRequest"}>
                                    <input className="btn  my-sm-0" type="submit" value="Accept Request" style={{ marginRight: '10px', float: 'right', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px'}}/>
                                </form>

            if (pending_request === false) {
                button = <form >
                                    <input className="btn  my-sm-0" type="submit" value="Accept Request" style={{ marginRight: '10px', float: 'right', backgroundColor: '#CC46E0', color: 'white', borderRadius: '8px', visibility: "hidden"}}/>
                                </form>
            }

            return (
                <div className="card col-xl-3 col-lg-3 col-md-5 col-sm-9 col-10  float-left" style={{ margin: '50px 1%', borderRadius: '10px'}}>
               <a href={"/posts/"+item.id}> <img height="300px" width="auto" src={item.img} href={"/posts/"+item.id} className="card-img-top" style={{  padding: '15px 0', objectFit: 'cover'}}/></a>
                <div className="card-bodys" style={{  marginBottom: '20px'}}>

                     <h5 className="card-title">{title}</h5>


                     <p className="card-text "><span className="mr-2 "><img width="15px" src="/images/location-icon.png"/></span>{address.substr(0, 30)}</p>



                    <p className="card-text " > {pending_request !== false ? 'Requested by '+ requested_by.charAt(0).toUpperCase() + requested_by.slice(1) : 'No Requests'} </p>
                   <span style={{  float: 'right'}}>
                    {button}

                    </span>


                 </div>
                <div class="offset-md-1">
                </div>
            </div>

            )
        });


        return (
            <Layout>
                <div className="container-fluid d-flex justify-content-center" style={{ backgroundColor: '#F7F7F5', height: '100%'}}>
                    <div className="row d-flex flex-row flex-wrap align-items-center justify-content-center" >
                    {postsList}
                    </div>
                </div>
             </Layout>
        );
    }
}

module.exports = User;