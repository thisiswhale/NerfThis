extends layout

block content
  img(src="#{user.picture}")
  h2 Welcome #{user.nickname}!
  br
  a(href='/logout') Logout
  h2 User Profile
  pre #{userProfile}

  router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('user', {
    user: req.user ,
    userProfile: JSON.stringify(req.user, null, '  ')
  });
});