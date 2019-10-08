const { User } = require('../models/user');

let createError = require('http-errors');
const authErr = createError(401, 'Authentication Required!');

// authentication middleware
function basicAuth (req, res, next) {
    
    if(req.method === "POST") {
      return next();
    } 

    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    console.log(req.body);
    
    const [username, password] = new Buffer(b64auth, 'base64').toString().split(':')
  
    if (!username || !password) {
      return next( authErr )
    }

    try {

      User.findOne({
        username: username
      }, function (err, user) {
        if (err) {
          console.log(err);
          return next(authErr);
        }

        if (user.password === password) {
          res.locals.user = { _id: user._id, name: user.name, username: user.username};
          return next(); // success
        } else {
          return next(authErr); // error
        }
      })

    } catch (err) {
        console.log(err);
        return next(authErr);
    }

}

module.exports = {
    basicAuth: basicAuth
}