const mongoose = require('mongoose')

const ConnectionSchema = mongoose.Schema({
  hostname: {
    type: String,
    required: true,
    default: "",
  },
  dbname: {
    type: String,
    required: true,
    default: "",
  },
  clientType: {
    type: String
  },
  active: {
    type: Boolean,
    default: true,
  },
},{ timestamps: { createdAt: "createdOn", updatedAt: "modifiedOn" } }
);

module.exports = mongoose.model('connections', ConnectionSchema);
