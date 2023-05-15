import { ADDTASK, HANDELDELETE, HANDELDONE, HANDLEEDIT } from "./TypeActions"

export const addTask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}
export const handeldone=(payload)=>{
    return(
        {
            type : HANDELDONE,
            payload
        }
    )
}
export const handeldelete=(payload)=>{
    return(
        {
            type : HANDELDELETE,
            payload
        }
    )
}
export const handleEdit=(payload)=>{
    return(
        {
            type : HANDLEEDIT,
            payload
        }
    )
}