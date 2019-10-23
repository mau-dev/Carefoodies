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
    const { usernamename, email, password } = userRegistrationInfo;
    let hashedPassword = sha256(newUser.password + SALT);
    const queryString = `INSERT INTO users (usernamename, email, password) VALUES('${usernamename}','${email}','${password}') RETURNING *`;;

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
                    let hashedCookie = sha256(SALT + user_id);
                    response.cookie('user_id', user_id);
                    response.cookie('hasLoggedIn', hashedCookie);
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

//see all posts page
app.get('/posts/', (request, response) => {
    const queryText = "SELECT * FROM posts";
    pool.query(queryText, (err, queryRes) => {
        const postsDB = queryRes.rows;
        const data = {
            posts: postsDB
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
});

//insert into post
app.post('/posts', (request, response) => {
    let { title, img, ingredients, area, address, content, expiry_date, time_posted } = request.body;
    queryText = `INSERT INTO posts (title, img, ingredients, area, address, content, expiry_date, time_posted) VALUES ('${title}', '${img}', '${ingredients}', '${area}', '${address}', '${content}', '${expiry_date}', ${time_posted}) RETURNING *`
    pool.query(queryText, (err, queryRes) => {
        console.log(queryRes.rows[0])
        response.render('showNewPost', queryRes.rows[0]);
    })
})

//show single post
app.get('/posts/:id', (request, response) => {
    const queryText = "SELECT * FROM posts";
    pool.query(queryText, (err, queryRes) => {
        console.log(queryRes);
        const postsDB = queryRes.rows; //the array of objects from the database
        const data = {
            posts: postsDB
        };
        response.render('showSinglePost', data);
    })
});


// update post
app.put('/posts/:id', (request, response) => {
    let { id } = request.params;
    let { title, photo_url, ingredients } = request.body;
    const queryText = `UPDATE posts SET title='${title}', img='${photo_url}', ingredients='${ingredients}', area='${area}', address='${address}', content='${content}', expiry_date='${expiry_date}', time_posted=${time_posted}WHERE id=${id} RETURNING *`;
    pool.query(queryText, (err, queryRes) => {
        response.render('show', queryRes.rows[0]);
    });
});

//delete post
app.delete('/posts/:id', (request, result) => {
    let { id } = request.params;
    const queryText = `DELETE FROM posts WHERE id=${id}`;
    pool.query(queryText, (err, queryRes) => {
        response.render('home');
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