import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "Enter User Name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Enter Password"],
    select: false,
  },
  about:{
    text:String,
    list:[
      {
        url:String,
        image:String,
      }
    ]
  },
  service:{
    text:String,
    list:[
      {
        name:String,
        description:String,
        image:String
      }
    ]
  },
  work:{
    text:String,
    list:[
      {
        name:String,
        description:String,
        image:String,
        url:String,
      }
    ]
  },
  socials:{
    text:String,
    whatsApp:{
      image:String,
      url:String
    },
    faceBook:String,
    linkedIn:String,
    hackerRank:String,
    gitHub:String
  }
});
export const User = mongoose.model("User", userSchema);


