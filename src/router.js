const handle = require('./handlers.js');

const router = (req, res) => {
  const url = req.url;
  if (url === '/') handle.page('login', res);
  else if (url === '/student') {
    res.writeHead(302, { location: '/' });
    res.end();
  } else if (url.indexOf('/student?') !== -1) handle.page('student', res);
  else if (url === '/getsubjectdetails') handle.subject(req, res);
  else if (url === '/teacher') handle.page('teacher', res);
  else if (url === '/subjects') handle.page('subjects', res);
  else if (url === '/signin') handle.signIn(req, res);
  else if (url.indexOf('public') !== -1) handle.public(url, res);
  else if (url === '/getSubjects') handle.handleSubjects(res);
  else if (url === '/getHomeworks') handle.handleHomeworks(res);
  else if (url === '/getSubSubjects') handle.handleSubSubjects(res);
  else if (url === '/checkauth') handle.checkAuth(req, res);
  else if (url === '/logout') handle.logOut(res);
  else handle.page('404', res);
};

module.exports = router;
