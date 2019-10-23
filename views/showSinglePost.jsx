var React = require("react");

class showSinglePost extends React.Component {

  render() {
     console.log(this.props.posts);
    const post = this.props.posts.map(item => {
        return(
          <div>
              <main  style={{ margin: '0 auto',  width: '800px', fontFamily: 'Montserrat'}} >
         <h5>Id: {item.id}</h5>
          <h5>Title: {item.title} </h5>
          <h5>Ingredients: {item.ingredients}</h5>
          <img width="500px" src={item.photo_url} />
        </main>
        </div>

          )

       });

    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
        <body>
        {post}

        </body>
      </html>
    );


  }
};


module.exports = showSinglePost;