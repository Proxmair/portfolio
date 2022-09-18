import { User } from "../model/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res
        .status(200)
        .cookie("token", token, {
          expires: new Date(Date.now() + 600000),
          httpOnly: true,
        })
        .json({
          success: true,
          message: "Logged In Successfully",
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const logout = async (req, res) => {
    try {
      res
        .status(200)
        .cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
        })
        .json({
          success: true,
          message: "Logged Out Successfully",
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const getUser = async (req, res) => {
    try {
      const password=process.env.PASSWORD;
      const user = await User.findOne({password}).select("-password");
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const myProfile = async (req, res) => {
    try {
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
export const updateProfile=async(req,res)=>{
  try {
    const user = await User.findById(req.user._id);
    user.email=req.body.email;
    user.about.text=req.body.aboutText;
    user.about.list=req.body.aboutList;
    user.work.text=req.body.workText;
    user.work.list=req.body.workList;
    user.service.text=req.body.serviceText;
    user.service.list=req.body.serviceList;
    user.socials.text=req.body.socialsText;
    user.socials.list=req.body.socialsList;
    user.socials.whatsApp=req.body.whatsApp;
    user.socials.faceBook=req.body.faceBook;
    user.socials.linkedIn=req.body.linkedIn;
    user.socials.hackerRank=req.body.hackerRank;
    user.socials.gitHub=req.body.gitHub; 
    await user.save()
    res.status(200).json({
      success: true,
      message:"Profile Updated"
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}