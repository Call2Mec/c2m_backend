import mongoose from "mongoose";
import validator from "validator";

const fleetSchema = mongoose.Schema({
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
  addressProof: {
    type: String,
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
});

export default mongoose.model("Fleet", fleetSchema);
