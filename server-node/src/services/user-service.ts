import { user_repository } from "../repository/user-repository";

 
export const user_service = async () =>{
    const data = user_repository();
    return data;
}

export const user_filter = async (name: string) => {

    const data = name.split("="); 

    const dataR = user_repository(data[1]);
    return dataR;
}