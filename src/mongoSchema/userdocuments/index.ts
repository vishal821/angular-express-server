export {};
const mongoose = require('mongoose')

const UserDocuments = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    creatorUserId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    messageId: {
      type: String,
    },
    url: {
      type: String,
    },
    name: {
      type: String,
    },
    documentType: {
      type: String,
    },
    doctype: {
      type: String,
    },
    selectDate: {
      type: String,
    },
    message: {
      type: String,
    },
    access: {
      type: String
    },
    type: {
      type: String,
    },
    size: {
      type: Number,
    },
    mailDateTime: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: { createdAt: "createdOn", updatedAt: "modifiedOn" } }
);

module.exports = function (db) {
  return db.model("UserDocument", UserDocuments);
};
