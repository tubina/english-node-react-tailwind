 
export const user_repository = (
    userName?: string
)=>{
    let data = [];
    data = [
        {
            name:"felipe",
            native_language: "portuguese",
            teach_language: "english"
        },
        {
            name:"joao",
            native_language: "portuguese",
            teach_language: "english"
        },
        {
            name:"maria",
            native_language: "portuguese",
            teach_language: "english"
        }
    ];

    if(userName)
    {
        data = data.filter((data)=> data.name === userName)
    }

    return data;
}