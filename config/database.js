var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sairam0292:Password@1@cluster0-ccdhv.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
.then(() => {
    console.log('DB Connected');
}, err => {
    console.log(err);
});
