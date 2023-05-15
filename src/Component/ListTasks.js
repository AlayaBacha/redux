import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTaks =()=>{
    const tasks=useSelector(state=>state.tasks)
    const [Navtasks, setNavTasks] = useState("All")
    return(
        <div>
           <div className="nav">
             <button className="bt" onClick={()=>setNavTasks("All")}>All</button>
             <button className="bt" onClick={()=>setNavTasks("Done")}>Done</button>
             <button className="bt" onClick={()=>setNavTasks("NotDone")}>NotDone</button>
           </div>
          {/* {
            tasks.map(el => <CardTask el={el}/>)
          } */}
          {
            Navtasks == "All" ?
            tasks.map(el => <CardTask el={el}/>)
            :
            Navtasks == "Done" ?
            tasks.filter(el=> el.done == true).map(el => <CardTask el={el}/>)
            :
            tasks.filter(el=> el.done == false).map(el => <CardTask el={el}/>)
          }
        </div>
    )
}
export default ListTaks