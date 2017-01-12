import express from 'express';
import expressHandlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import path from 'path';
var app = express();
app.use(cookieParser());
app.use(express.static('build'));
// set up handlebars
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');
app.get('/', function(req, res){
  res.status(200).render('content', {
    needToRenderFast: !(req.cookies.fastweb === 'cache')
  });
});
app.listen(3000, function(){
console.log('Local server is listening...');
});
