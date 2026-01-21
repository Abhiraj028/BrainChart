import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { JWTType, ResponseCodes } from "./utils";
require("dotenv").config();

export const AuthMiddleware = (req:Request,res:Response, next:NextFunction) =>{
    try{
        const Auth = req.headers["authorization"];
        if(!Auth){
            return res.status(ResponseCodes.BadRequest).json({msg:"Faulty Authorization, retry later"});
        }
        const token = Auth.split(" ")[1]
        if(!token){
            return res.status(ResponseCodes.BadRequest).json({msg:"Token error. Try again later"});
        }
        const decode = jwt.verify(token,process.env.JWT_KEY!);
        req.user = decode as JWTType;
        console.log(req.user);
        next();

    }catch(err : unknown){
        if(err instanceof Error){
            res.status(ResponseCodes.InternalError).json({msg:"Error occured: ",err});
        }else{
            res.status(ResponseCodes.InternalError).json({msg:"Unknown error occured",err});
        }
    }
}