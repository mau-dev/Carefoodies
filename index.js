console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');

var SALT = "Foodies that care about the food waste;"

// Initialise postgres client
const configs = {
    user: 'mariadimitrijevic',
    host: '127.0.0.1',
    database: 'carefoodies_db',
    port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function(err) {
    console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();
//public folder use
app.use(express.static('public'));

//body parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//method override
app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

app.use(cookieParser());

//plan
// layout component for register/login
//landing page goes to registerForm.jsx, app.get('/register')
// register form has login button that app.get('/login') and navigates to loginFprm.jsx
//submit login button redirects to /home => home.jsx
//layout component for navbar after login
//layout component for layout with posts for home/index page home.jsx


/**
 * ===================================
 * Routes
 * ===================================
 */


//landing page displays register form
//login button on register page navigates to login form

//index - render home
app.get('/', (request, response) => {
    //landing page display register form
    response.render('register');
});

// register
//get form
app.get('/register', (request, response) => {
    response.render('register')

});



// register post method
app.post('/register', (request, response) => {

    console.log(request.body);
    let newUser = request.body;
    let hashedPassword = sha256(newUser.password + SALT);

    const queryString = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';

    const values = [
        newUser.username,
        newUser.email,
        hashedPassword
    ];

    pool.query(queryString, values, (err, queryRes) => {

        let userID = queryRes.rows[0].id;
        let hashedCookie = sha256(userID + 'loggedin' + SALT);
        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        } else {
            console.log('query result:', queryRes);
            response.cookie('loggedin', hashedCookie)
            response.cookie('user_id', userID)

            response.render('login');
        }
    });
});

//login
//get form
app.get('/login', (request, response) => {
    response.render('login')
});

var currentUser;

//login post method
app.post('/login', (request, response) => {
    let newUser = request.body;
    let requestUsername = request.body.username;
    let requestPassword = request.body.password;
    // check in the database for a row with this user
    const queryString = "SELECT * from users WHERE username='" + requestUsername + "'";
    console.log("db query", queryString);

    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        } else {
            console.log('query result:', result.rows);
            // if this user exists in the db
            if (result.rows.length > 0) {
                let hashedRequestPassword = sha256(requestPassword + SALT);
                console.log("hashed request password: " + hashedRequestPassword);
                // check to see if the password in request.body matches what's in the db
                //or hashedRequestPassword === requestPassword ?
                if (hashedRequestPassword === result.rows[0].password) {
                    let user_id = result.rows[0].id
                    console.log(result.rows[0].username);
                    let user_username = result.rows[0].username;


                    let hashedCookie = sha256(SALT + user_id);


                    response.cookie('user_id', user_id);
                    response.cookie('user_username', user_username);

                    response.cookie('hasLoggedIn', hashedCookie);
                    console.log('user id logged in as ' + user_id);
                  //not working
                   const currentUser = request.cookies['user_username'];
                   console.log('this is currentUser from inside ' + currentUser);
                    // if it matches they have been verified, log them in
                    //after login redirect to posts page
                    response.redirect('/posts/', 302);
                } else {
                    response.status(403).send('wrong password');
                }
            } else {
                response.status(403).send('wrong username');
            }
        }
    });
});


console.log('this is currentUser ' + currentUser);

//see all posts page
app.get('/posts/', (request, response) => {
    const queryText = "SELECT * FROM posts";
    pool.query(queryText, (err, queryRes) => {
        const postsDB = queryRes.rows;
        const currentUser = request.cookies['user_username'];
        const data = {
            posts: postsDB,
            currentUser: currentUser
        };
        // if (err) {
        //     return console.error('Error executing query', err.stack)
        // }
        // console.log(queryRes.rows);
        response.render('index', data);
    });
});

//table for creating new post, display form for new post
app.get('/posts/new', (request, response) => {
    // respond with HTML page with form to create new post
    response.render('addNewPostForm');
    console.log("getting the new data");
});

//insert into post
app.post('/posts',(request, response)=>{
    // request.cookie('user_username', user_username);
     const currentUser = request.cookies['user_username'];
     const currentUserId = request.cookies['user_id'];

    //get current user id
    //set the giver_id of the post as current user id
    let giver_id = currentUserId;
    let postedBy = currentUser;

    let { receiver_id, pending_request, settled_request, title, img, ingredients, area, address, content, expiry_date } = request.body;
    queryText = `INSERT INTO posts ( giver_id, title, img, ingredients, area, address, content, expiry_date) VALUES ( '${giver_id}', '${title}', '${img}', '${ingredients}', '${area}', '${address}', '${content}', '${expiry_date}') RETURNING *`
    // getUserName = "SELECT username from users WHERE id='" + {giver_id} + "'";
    pool.query(queryText, (err,queryRes)=>{


        response.render('showNewPost', queryRes.rows[0]);
    });
});


// //insert into post
// app.post('/posts',(request, response)=>{
//     let { giver_id, receiver_id, pending_request, settled_request, title, img, ingredients, area, address, content, expiry_date } = request.body;
//     queryText = `INSERT INTO posts ( title, img, ingredients, area, address, content, expiry_date) VALUES ( '${title}', '${img}', '${ingredients}', '${area}', '${address}', '${content}', '${expiry_date}') RETURNING *`
//     pool.query(queryText,(err,result)=>{
//         response.render('showSinglePost',result.rows[0]);
//     });
// });



//show single post
app.get('/posts/:id',(request,response)=>{
    let {id} = request.params;
    queryText = `SELECT * FROM posts WHERE id=${id}`;
    pool.query(queryText,(err,queryRes)=>{
        response.render('showSinglePost', queryRes.rows[0]);
    });
});


// update post
app.put('/posts/:id', (request, response) => {
    let { id } = request.params;
    let { title, photo_url, ingredients } = request.body;
    const queryText = `UPDATE posts SET title='${title}', img='${img}', ingredients='${ingredients}', area='${area}', address='${address}', content='${content}', expiry_date='${expiry_date}', time_posted=${time_posted}WHERE id=${id} RETURNING *`;
    pool.query(queryText, (err, queryRes) => {
        response.render('showSinglePost', queryRes.rows[0]);
    });
});

//delete post
app.delete('/posts/:id', (request, response) => {
    let { id } = request.params;
    const queryText = `DELETE FROM posts WHERE id=${id}`;
    pool.query(queryText, (err, queryRes) => {
        response.render('index');
    });
});


// Create a route and jsx file that renders a form for the user to register.
// GET /register
// Create a route that accepts the POST request from the form.
// After the user has been put in the DB, set cookies to set them as logged in:
// a cookie for their username
// a cookie for their hashed loggedIn cookie
// their user id
// Redirect them to the home page.


//figure out how this will work?
app.get('/pendingRequest/new', (request, response) => {
    //  const currentUser = request.cookies['user_username'];
    // //landing page display register form
    // // response.render('pendingRequest');
    // response.cookie('user_username', user_username);
    // response.send(currentUser);
    // // response.render('pendingRequest');
});

app.post('/pendingRequest', (request, response) => {


   const currentUser = request.cookies['user_username'];
   const data = {
    currentUser: currentUser
   }


    // response.render('pendingRequest');
    //update table with receiver id
    //redirect to same page
    //if current user === giver_id user hide request button
    //if receiver id === null, show request button
    // if receiver id not null, change button to pending
 //    response.cookie('user_username', user_username)
 //    //
 // response.send("requert made by " + currentUser);
 response.render('pendingRequest', data);


//set the receiver id of the post

})

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function() {

    console.log("closing");

    server.close(() => {

        console.log('Process terminated');

        pool.end(() => console.log('Shut down db connection pool'));
    })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);