import express from "express";
import {login,myProfile,getUser,updateProfile,logout} from '../controllers/User.js';
import {isAuthenticated} from '../middleware/auth.js'

export const userRouter=express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated, myProfile);
userRouter.route("/update").post(isAuthenticated,updateProfile)
