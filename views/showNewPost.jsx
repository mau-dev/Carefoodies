const React = require('react');


class ShowNewPost extends React.Component {

    render() {

        let {id, title, img, ingredients, area, address, content, expiry_date, time_posted } = this.props;

        return(

         <html>
            <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
        <body>
              <main  style={{ margin: '0 auto',  width: '800px', fontFamily: 'Montserrat'}} >
         <h5>Id: {id}</h5>
          <h5>Title: {title} </h5>
          <h5>Ingredients: {ingredients}</h5>
          <img width="500px" src={photo_url} />
        </main>
        <form method="GET" action={"/posts/"+id+"/edit"} style={{ width: '800px', fontFamily: 'Montserrat'}}>
            <input type="submit" className="btn btn-warning btn-block" value="Edit"/>
         </form>
         <form method="POST" action={"/posts/"+id+"?_method=delete"}>
              <input type="submit" className="btn btn-danger btn-block" value="Delete"/>
          </form>

        </body>
      </html>

          )



    };
};

module.exports = ShowNewPost;