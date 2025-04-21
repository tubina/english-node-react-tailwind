import express, {Express, Request, Response} from "express";
import { routes } from './routes/routes';

const app: Express = express(); 

app.get(routes.home, function(req: Request, res: Response){
    res.send("aaaaa")
}) 

app.get(routes.users, function(req: Request, res: Response){
  res.send("users")
}) 

app.get(routes.login, function(req: Request, res: Response){
  res.send("login")
})

export { app }
