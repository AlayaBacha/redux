import { ADDTASK, HANDELDELETE, HANDELDONE, HANDLEEDIT } from "./TypeActions"

const initilState={
    tasks:[
        {text:"Wake Up",id:Math.random(),done:false},
        {text:"Eat Breakfast",id:Math.random(),done:false},
        {text:"Go To Work",id:Math.random(),done:false}
    ]
}
 const Reducer =(state=initilState,action)=>{
    switch (action.type) {
      
        case ADDTASK : return{...state,tasks:[{text:action.payload,id:Math.random(),done:false},...state.tasks]}   
        case HANDELDONE : return{...state,tasks:state.tasks.map(el => el.id === action.payload?{...el,done: !el.done} :el)}
        case HANDELDELETE : return{...state,tasks:state.tasks.filter(el => el.id !== action.payload)}
        case HANDLEEDIT : return {...state,tasks : state.tasks.map(el=> el.id == action.payload.id ? {...el,text : action.payload.text} : el)}
        default: return state
           
    }
}
export default Reducer
