var localMessages = [
  {
    id: 0,
    name: "Michael Joshua Marana",
    email: "mj@gmal.com",
    message: "hello world!"
  },
  {
    id: 1,
    name: "John Doe",
    email: "jdoe@gmal.com",
    message: "hi!"
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    email: "juan@gmal.com",
    message: "kamusta?"
  }
];

module.exports = function(app, urlEncode){

  app.get('/messages', function(req, res){
    res.render('messages', {page: 'messages', messages: localMessages});
  });

  app.post('/sendMessage', urlEncode, function(req, res){
    res.render('index', {page: 'index', notif: 2});
    var newMessage = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    };
    localMessages.push(newMessage);
  })

}
