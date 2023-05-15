import { useDispatch } from "react-redux"
import { handeldelete, handeldone, handleEdit } from "../Redux/Actions"
import { useState } from "react"
import * as React from 'react';


const CardTask =({el})=>{
    const dispatch=useDispatch()
    const [edit,setEdit] =useState(false)
    const [text,setText] = useState(el.text)
    const hEdit=()=>{
        dispatch(handleEdit({id : el.id,text}))
        setEdit(!edit)
    }
    return(
        <div className="alaya">
            {
                edit ? <input className="in" type="text" onChange={(e)=>setText(e.target.value)} value={text}/> : <h3 className={el.done && "islem"}>{el.text}</h3>
            }
           
           <h2>{el.done}</h2>
           <button onClick={()=>dispatch(handeldelete(el.id))} className="aa">Delete</button>
           <button className="jj" onClick={()=>dispatch(handeldone(el.id))} >Done</button>
           <button className="ee" onClick={()=> edit ? hEdit() : setEdit(!edit)}>{edit ? "Valider" : "Edit"}</button> 
           
        </div>
    )
}
export default CardTask