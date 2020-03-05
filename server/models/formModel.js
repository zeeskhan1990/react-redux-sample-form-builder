const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A form must have a name'],
    unique: true,
    // validate: [validator.isAlpha, 'Must only contain characters']
  },
  details: [
    {
      id: {
        type: Number,
        required: [true, 'A form element must have an id'],
        unique: true,
      },
      type: {
        type: String,
        required: [true, 'A form element must have a type'],
      },
      text: String,
      placeholder: String,
      initialValud: String,
      currentValue: String,
      fileUrl: String,
    },
  ],
  created_at: {
    type: Date,
    //Mongoose will convert the milliseconds to date
    default: Date.now()
  }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
