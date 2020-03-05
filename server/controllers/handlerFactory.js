const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const QueryBuilder = require('../utils/queryBuilder');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    /* req.body = {
      name: 'Test Creat Form',
      details: [
        {
          id: 11,
          text: 'True way',
          type: 'input',
          placeholder: 'yo',
          initialValue: '5',
          currentValue: '10',
        },
        {
          id: '11',
          text: 'Fprm 3 Text',
          type: 'text',
          placeholder: 'Testing input',
          initialValue: '',
          currentValue: 'Simple Text',
        },
      ],
    }; */
    console.log(req.body)
    const doc = await Model.create(req.body);
    console.log(doc)
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    console.log(req.requestTime);
    // Same as - Form.findOne({_id: req.param.id})
    debugger;
    let query = Model.findById(req.params.id);
    if (populateOptions) query = query.populate(populateOptions);
    const doc = await query;
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    console.log(req.requestTime);
    console.log(req.query);
    // execute query here
    const builder = new QueryBuilder(Model.find(), req.query);

    // Setup the query fields
    builder
      .filter()
      .sort()
      .select()
      .paginate();

    console.log(builder.query);

    const doc = await builder.query;
    res.status(201).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
