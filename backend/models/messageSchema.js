import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    minLength: [2, "Name Must Contain At Least 2 Character!"],
  },
  subject:{
    type:String,
    minLength:[2,"Subject Must Contain At Least 2 Character!"],
  },
  message:{
    type:String,
    minLength:[2,"Message Must Contain At Least 2 Character!"],
  },
  createdAt:{
    type:Date,
    default:Date.now(),
  },
});
 export default Message = mongoose.model("Message", messageSchema);