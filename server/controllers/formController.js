// const fs = require('fs');
const Form = require('./../models/formModel');
const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getForm = factory.getOne(Form);
exports.createForm = factory.createOne(Form);
exports.updateForm = factory.updateOne(Form);
exports.deleteForm = factory.deleteOne(Form);
exports.getAll = factory.getAll(Form);
exports.getFormsList = catchAsync(async (req, res, next) => {
  // .find returns a query object, .aggregate returns an aggregate object, when used with await it runs and returns result
  console.log("---- REQUEST RECEIVED IN FORMS LIST ---- ")
  
  const formList = await Form.aggregate([
    {
      $group: {
        _id: '$created_at',
        forms: {
          $push: {
            name: '$name',
            id: '$_id',
          },
        },
        date: {
          $first: {
            $dateToString: {
              format: '%Y-%m-%d',
              date: '$created_at',
            },
          },
        },
      },
    },
  ]);

  console.log(" **** FORMS LIST **** ");
  console.log(formList)

  res.status(201).json({
    status: 'success',
    data: {
      formList,
    },
  });
});

