import axios from "axios"
import {useEffect,useState} from "react"

export default function(){

 const[tasks,setTasks]=useState([])
 const[newTask,setNew]=useState("")
 const[search,setSearch]=useState("")
 const[user,setUser]=useState(null)

 const auth={headers:{Authorization:"Bearer "+localStorage.getItem("t")}}

 const load=async()=>{
 const t=await axios.get("http://localhost:5000/api/v1/tasks",auth)
 const u=await axios.get("http://localhost:5000/api/v1/auth/me",auth)
 setTasks(t.data)
 setUser(u.data)
 }

 useEffect(()=>{load()},[])

 return(
 <div className="min-h-screen bg-gray-100 p-10">

 <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 space-y-4">

 {user && <p className="text-sm text-gray-500">Logged in as {user.email}</p>}

 <h2 className="text-xl font-bold">My Tasks</h2>

 <div className="flex gap-2">
 <input className="border flex-1 p-2 rounded" placeholder="New task" onChange={e=>setNew(e.target.value)}/>
 <button className="bg-green-500 text-white px-4 rounded"
 onClick={()=>axios.post("http://localhost:5000/api/v1/tasks",{title:newTask},auth).then(load)}>Add</button>
 </div>

 <input className="border p-2 rounded w-full" placeholder="Search" onChange={e=>setSearch(e.target.value)}/>

 {tasks.filter(t=>t.title.includes(search)).map(t=>
 <div key={t._id} className="flex justify-between border rounded p-2">

 <input defaultValue={t.title}
 className="border px-1"
 onBlur={e=>axios.put("http://localhost:5000/api/v1/tasks/"+t._id,{title:e.target.value},auth).then(load)}
 />

 <button className="text-red-500"
 onClick={()=>axios.delete("http://localhost:5000/api/v1/tasks/"+t._id,auth).then(load)}>✕</button>
 </div>
 )}

 <button className="text-indigo-600" onClick={()=>{localStorage.clear();window.location="/"}}>Logout</button>

 </div>
 </div>
 )
}
