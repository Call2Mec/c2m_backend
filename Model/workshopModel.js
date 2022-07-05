import mongoose from "mongoose";
import validator from "validator";

const workshopSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required"],
  },
  phoneNo: {
    type: [String],
    required: [true, "Please provide  contact details"],
  },
  email: {
    type: String,
    required: {
      values: true,
      message: "Please provide your email",
    },
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  state: {
    type: String,
    required: [true, "Please provide  State"],
  },
  city: {
    type: String,
    required: [true, "Please provide  city"],
  },
  address: {
    type: String,
    required: [true, "Please provide  address"],
  },
  addressProof: {
    type: String,
    // required: [true, "Please provide  address proof"],
  },
  vucProof: {
    type: String,
  },
  aadhar: {
    type: String,
  },
  pan: {
    type: String,
  },
  gst: {
    type: String,
  },
  tradeliscence: {
    type: String,
  },
  ghmcpermission: {
    type: String,
  },
  cancelcheque: {
    type: String,
  },
  vendorAgreement: {
    type: String,
  },
});

export default mongoose.model("Workshop", workshopSchema);
