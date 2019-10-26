const mongoose = require('mongoose');

mongoose.connect('mongo "mongodb+srv://cluster0-mb4az.gcp.mongodb.net/test" --username marmol89', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
