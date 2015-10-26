'use strict';

var https = require('https');
var formEncoder = require('form-urlencoded');
var mongoose = require('mongoose');

module.exports = {
    getAccessToken: function(req, res, next) {
        if (req.app.locals.access_token) {
            next();
            return;
        }
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
                req.app.locals.access_token = JSON.parse(responseData.join(''));
                next();
            });
        });
        authRequest.on('error', function(e) {
            console.log('Unable to authenticate user.');
            console.log(e);
            req.app.locals.access_token = null;
            next();
        });
        authRequest.write(postData);
        authRequest.end();
    },
    getUserDetails: function(req, res, next) {
        if (!req.app.locals.access_token) {
            next();
            return;
        }
        var options = {
            hostname: 'www.googleapis.com',
            port: 443,
            path: '/youtube/v3/channels?part=snippet&mine=true',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + req.app.locals.access_token.access_token
            }
        };
        var detailsRequest = https.request(options, function(res) {
            res.setEncoding('utf8');
            var responseData = [];
            res.on('data', function(chunk) {
                responseData.push(chunk);
            });
            res.on('end', function() {
                try {
                    var userSchema = new mongoose.Schema({ any: {} }, {strict: false});
                    var User = mongoose.model('User', userSchema);
                    var currentUser = new User(JSON.parse(responseData.join('')));
                    currentUser.save(function(err, user) {
                        if (err) {
                            console.log('Error saving user to database', err);
                            next();
                        } else {
                            req.app.locals.currentUser = user;
                        }
                        next();
                    });
                } catch (e) {
                    console.log('Exception thrown: ', e);
                    next();
                }
            });
        });
        detailsRequest.on('error', function(e) {
            console.log('Unable to retrieve user details.');
            console.log(e);
            req.app.locals.current_user = null;
            next();
        });
        detailsRequest.end();
    }
};
