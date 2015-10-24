var express = require('express');
var router = express.Router();

var oauth = require('../modules/oauth');

/* GET home page. */
router.get('/', function(req, res, next) {
  var authorizationUri = 'https://accounts.google.com/o/oauth2/auth?' +
    'client_id=' + encodeURIComponent(req.app.locals.params.oauth.client_id) + '&' +
    'redirect_uri=' + encodeURIComponent(req.app.locals.params.oauth.redirect_uri) + '&' +
    'response_type=' + 'code' + '&' +
    'scope=' + encodeURIComponent('https://www.googleapis.com/auth/youtube.readonly');
  res.render('index', {
    params: req.app.locals.params,
    authorizationUri: authorizationUri
  });
});

router.use('/oauth_redirect', oauth.getOauthUserDetails);
router.get('/oauth_redirect', function(req, res, next) {
    res.send('Done');
});

module.exports = router;
