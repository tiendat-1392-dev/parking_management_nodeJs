const ErrorResponse = require("../helpers/ErrorResponse");
const parameterModel = require("../models/parameter.model");
const stacModel = require("../models/statistical.models");
const userModel = require("../models/user.model");

module.exports = {
  getAll: async (req, res, next) => {
    const account = await userModel.countDocuments();
    const transport = await stacModel.countDocuments({ isOut: 0 });
    const newParameter = await parameterModel.findByIdAndUpdate(
      "63b9a550f0eeb779d4a61b09",
      { account, transport },
      { new: true }
    );

    return res.status(200).json(newParameter);
  },
};
