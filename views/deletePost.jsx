const React = require('react');
const Head = require('./head');

class Delete extends React.Component {
  render() {
    console.log("delete" + this.props.id);
    let override = '/posts/' + this.props.id + '?_method=delete';
    return(
      <html>
      <Head />
        <body>
          <h1>Delete: {this.props.posts.title}</h1>
          <form action={override} method="POST">
            <p>Delete post</p>
            <input type="submit" defaultValue="Delete"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Delete;