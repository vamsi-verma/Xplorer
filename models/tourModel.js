const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    //here in required the two values are 1st value shows that name is required, 2nd argument defines error when user doesn't insert name
    required: [true, 'A tour must hav a name!!'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});
// Here the variable name is started with uppercase as it is the convention for model Names.
const Tour = mongoose.model('Tour', tourSchema);

module.export = Tour;
