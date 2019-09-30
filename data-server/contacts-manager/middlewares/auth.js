function basicAuth (req, res, next) {
    // authentication middleware
  
    const auth = {user: 'admin', password: 'supersecret'} // change this
  
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [user, password] = new Buffer(b64auth, 'base64').toString().split(':')
  
    // Verify login and password are set and correct
    if (user && password && user === auth.user && password === auth.password) {
      // Access granted...
      res.set('Gandalf', 'You shall pass!')
      return next()
    }
  
    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.set('Gandalf', 'You shall not pass!');
    res.status(401).send('Authentication required.') // custom message
}

module.exports = {
    basicAuth: basicAuth,
}