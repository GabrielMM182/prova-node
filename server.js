var app = require('./config/express');

var porta = process.env.PORT || 3000;
    
app.listen(porta, function(){
    console.log('Server ON in port' + porta);
})