'use strict';

var https = require('https');
var formEncoder = require('form-urlencoded');

module.exports = {
    getOauthUserDetails: function(req, res, next) {
        var postData = formEncoder.encode({
            code: req.query.code,
            client_id: req.app.locals.params.oauth.client_id,
            client_secret: req.app.locals.params.oauth.client_secret,
            redirect_uri: req.app.locals.params.oauth.redirect_uri,
            grant_type: 'authorization_code'
        });
        var options = {
            hostname: 'accounts.google.com',
            port: 443,
            path: '/o/oauth2/token',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length
            }
        };
        var authRequest = https.request(options, function(res) {
            res.setEncoding('utf8');
            var responseData = [];
            res.on('data', function(chunk) {
                responseData.push(chunk);
            });
            res.on('end', function() {
                console.log(responseData.join(''));
                next();
            });
        });
        authRequest.on('error', function(e) {
            console.log('Unable to authenticate user.');
            console.log(e);
            next();
        });
        authRequest.write(postData);
        authRequest.end();
    },
};
