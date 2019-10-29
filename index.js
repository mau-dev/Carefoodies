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

//require moment.js
var moment = require('moment');
moment().format();

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


// Create a route and jsx file that renders a form for the user to register.
// GET /register
// Create a route that accepts the POST request from the form.
// After the user has been put in the DB, set cookies to set them as logged in:
// a cookie for their username
// a cookie for their hashed loggedIn cookie
// their user id
// Redirect them to the home page.

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

            response.redirect('login');
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
                    response.redirect('/welcome', 302);
                } else {
                    // response.status(403).send('wrong password');
                    response.status(403).render('wrongPassword');
                }
            } else {
                // response.status(403).send('wrong username');
                response.status(403).render('wrongUsername');
            }
        }
    });
});


app.get('/welcome', (request, response) => {
     const currentUser = request.cookies['user_username'];
     data = {
        currentUser: currentUser
     }
    response.render('welcome', data);
});




//see all posts page
app.get('/posts/', (request, response) => {
    const queryText = "SELECT * FROM posts ORDER BY (id)";
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
    //on the actual post replace 'posted by userId' with 'posted by username'
    let postedBy = currentUser;
    // response.cookie('postedBy', postedBy);


    let { receiver_id, pending_request, settled_request, title, img, ingredients, area, address, content, expiry_date } = request.body;
    queryText = `INSERT INTO posts ( giver_id, posted_by, title, img, ingredients, area, address, content, expiry_date) VALUES ( '${giver_id}', '${postedBy}', '${title}', '${img}', '${ingredients}', '${area}', '${address}', '${content}', '${expiry_date}') RETURNING *`

    pool.query(queryText, (err,queryRes)=>{



        response.render('showNewPost', queryRes.rows[0]);
    });
});



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
    let { title, img, ingredients, area, address, content, expiry_date, time_posted } = request.body;
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



/**
 * ===================================
 * tuesday's new approach
 * ===================================
 */

//update the database app.put
app.put('/posts/:id/edit',(request,response)=>{
    let id = request.params.id;


 const currentUser = request.cookies['user_username'];
    const currentUserId = request.cookies['user_id'];
    //attempt to use cookie stored from post as postedBy
    const postedBy = request.cookies['postedBy']; //this remains the user who posted last
    console.log("posted by" + postedBy);
    console.log("req.body" + request.body.giver_id);



    // let { id } = currentUserId ;
   const data = {
    currentUser: currentUser,
    currentUserId: currentUserId,
    postedBy: postedBy
   }
  console.log('this should be receiver id' + currentUserId);
  console.log('this should be requested_by' + currentUser);
  console.log('the id ' + id);
    // queryText = `SELECT * FROM posts WHERE id=${id}`
       // const queryText = `UPDATE posts SET receiver_id=${currentUserId}, requested_by=${currentUser} WHERE id=${id}`;
       const queryText = `UPDATE posts SET receiver_id='${currentUserId}', pending_request=TRUE, requested_by='${currentUser}' WHERE id=${id}`;
        // UPDATE posts SET receiver_id=4, requested_by='kenny' WHERE id=1;
    pool.query(queryText,(err,result)=>{
        console.log(result);
        // console.log('query', result.rows[0] );
        // response.render('pendingRequest',result.rows[0]);
        response.render('pendingRequest', data);

        // console.log('new stuff', requested_by)
    });
});

//edit app.get
app.get('/posts/:id',(request,response)=>{
    let {id} = request.params.id;

 const currentUser = request.cookies['user_username'];
    const currentUserId = request.cookies['user_id'];
    //attempt to use cookie stored from post as postedBy
    const postedBy = request.cookies['postedBy']; //this remains the user who posted last
    console.log("posted by" + postedBy);
    console.log("req.body" + request.body.giver_id);


    // let { id } = currentUserId ;
   const data = {
    currentUser: currentUser,
    currentUserId: currentUserId,
    postedBy: postedBy
   }



   const queryText = `SELECT * FROM posts WHERE id=${id}`
   // const queryText = `UPDATE posts SET receiver_id=${currentUserId}, requested_by=${currentUser} WHERE id=${id} RETURNING *`;
    pool.query(queryText,(err,result)=>{
        // console.log('query', result.rows[0] );
        // res.render('index',result.rows[0]);
        response.render('pendingRequest', data);
    });
});






// //figure out how this will work?
// app.get('/pendingRequest/new', (request, response) => {
//     //  const currentUser = request.cookies['user_username'];
//     // //landing page display register form
//     // // response.render('pendingRequest');
//     // response.cookie('user_username', user_username);
//     // response.send(currentUser);
//     // // response.render('pendingRequest');
// });


//commented out on tuesday




// // this should be app.put/patch, and query = update posts... make app.post for posting requested to user ptofile
// app.get('/pendingRequest', (request, response) => {


//    const currentUser = request.cookies['user_username'];
//     const currentUserId = request.cookies['user_id'];
//     //attempt to use cookie stored from post as postedBy
//     const postedBy = request.cookies['postedBy']; //this remains the user who posted last
//     console.log("posted by" + postedBy);
//     console.log("req.body" + request.body.giver_id);


//     let { id } = currentUserId ;
//    const data = {
//     currentUser: currentUser,
//     currentUserId: currentUserId,
//     postedBy: postedBy
//    }

//  const queryText = `UPDATE posts SET receiver_id=${currentUserId}, requested_by=${currentUser} WHERE id=${id} RETURNING *`;
//  //comment this out to prevent of createing new posts on request
//   // const queryText = `INSERT INTO posts ( receiver_id, requested_by) VALUES ( '${currentUserId }', '${currentUser}') RETURNING *`

//     // response.render('pendingRequest');
//     //update table with receiver id
//     //redirect to same page
//     //if current user === giver_id user hide request button
//     //if receiver id === null, show request button
//     // if receiver id not null, change button to pending
//  //    response.cookie('user_username', user_username)
//  //    //
//  // response.send("requert made by " + currentUser);



// pool.query(queryText, (err, queryRes) => {

//         // response.render('pendingRequest', queryRes.rows[0]);

//         response.render('pendingRequest', data);
//     });


//  // response.render('pendingRequest', data);


// //set the receiver id of the post

// });

// //test for put/pstch
// app.put('/posts/:id', (request, response) => {

// let {id} = request.params;
//    const currentUser = request.cookies['user_username'];
//     const currentUserId = request.cookies['user_id'];
//     //attempt to use cookie stored from post as postedBy
//     const postedBy = request.cookies['postedBy'];


//     // let { id } = currentUserId ;
//    const data = {
//     currentUser: currentUser,
//     currentUserId: currentUserId,
//     postedBy: postedBy
//    }

//  const queryText = `UPDATE posts SET receiver_id=${currentUserId}, requested_by=${currentUser} WHERE id=${id} RETURNING *`;
//  //comment this out to prevent of createing new posts on request
//   // const queryText = `INSERT INTO posts ( receiver_id, requested_by) VALUES ( '${currentUserId }', '${currentUser}') RETURNING *`

//     // response.render('pendingRequest');
//     //update table with receiver id
//     //redirect to same page
//     //if current user === giver_id user hide request button
//     //if receiver id === null, show request button
//     // if receiver id not null, change button to pending
//  //    response.cookie('user_username', user_username)
//  //    //
//  // response.send("requert made by " + currentUser);

// pool.query(queryText, (err, queryRes) => {
//         // response.render('pendingRequest', queryRes.rows[0]);
//         response.redirect('pendingRequest', data);
//     });


//  // response.render('pendingRequest', data);


// //set the receiver id of the post

// })


// commented out on tuesday until here



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