import express, { Request, Response } from "express"; 
import { user_filter, user_service } from "../services/user-service";

export const getUserController = async (req: Request, res: Response) => {

   const content_user = await user_service();

    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(
        JSON.stringify(  
            content_user
        )
    )
}

export const getUserFilter = async (req: Request, res: Response) =>{
 
    const content_user = await user_filter(req.url);
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(
        JSON.stringify(
            content_user
        )
    )
}