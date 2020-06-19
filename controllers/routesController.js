
function readCSV(filename, encoding, iconv, res, fs){
  var samp    = [];
  var newdata = [];

  iconv.skipDecodeWarning = true;

  fs.readFile(filename, {encoding: 'binary'}, function(err, data){
    data = iconv.decode(data, encoding);
    newdata = data.split('\n');
    for (var item in newdata) {
      samp.push(newdata[item].split(/(".*?"|[^",]+)/g));
    }
    console.log(samp);
    res.render('about', {data: samp, page: 'about'});
  });

}

module.exports = function(app, fs, iconv, urlEncode){


  app.get('/profile', function(req, res){
    res.render('profile', {page: 'profile'});
  });

  app.get('/contact', function(req, res){
    res.render('contact', {page: 'contact'});
  });

  app.get('/', function(req, res){
    res.render('index', {page: 'index'});
  });

  app.get('/about', function(req, res){
    res.render('about', {page: 'about'});
  });

  app.post('/about/upload', urlEncode, function(req, res){
    if(req.files){
      var file = req.files.file,
          filename = req.files.file.name,
          encoding = req.body.encoding;
          file.mv('./uploads/' + filename, function(err){
            if(err){
              console.log('file upload error');
            }
            else {
              filename = './uploads/' + filename;
              readCSV(filename, encoding, iconv, res, fs);
            }
          });
    }
  });



}
