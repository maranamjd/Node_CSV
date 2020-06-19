
var logData = {username: 'root', password: 'pass'};

module.exports = function(app, urlEncode){

  app.post('/login', urlEncode, function(req, res){
    if(req.body.username === logData.username && req.body.password === logData.password){
      res.render('profile', {page: 'profile'});
    }
    else {
      res.render('index', {page: 'index', notif: 1});
    }
  });

  app.get('/logout', function(req, res){
    res.render('index', {page: 'index', notif: 0});
  });

}
