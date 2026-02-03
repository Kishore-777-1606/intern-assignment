import axios from "axios"
import {useState} from "react"

export default function(){

 const[email,setEmail]=useState("")
 const[pass,setPass]=useState("")
 const[msg,setMsg]=useState("")
 const[loading,setLoading]=useState(false)

 return(
 <div className="h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">

 <div className="bg-white p-8 rounded-xl shadow-xl w-80 space-y-4">

 <h1 className="text-2xl font-bold text-center">Signup</h1>

 <input className="border w-full p-2 rounded"
 placeholder="Email"
 onChange={e=>setEmail(e.target.value)}/>

 <input type="password"
 className="border w-full p-2 rounded"
 placeholder="Password"
 onChange={e=>setPass(e.target.value)}/>

 {msg && <p className="text-sm">{msg}</p>}

 <button disabled={loading}
 className="bg-indigo-600 text-white w-full py-2 rounded disabled:opacity-50"
 onClick={async()=>{

 if(!email.includes("@")) return setMsg("Invalid email")
 if(pass.length<6) return setMsg("Password min 6 chars")

 try{
 setLoading(true)
 await axios.post("http://localhost:5000/api/v1/auth/signup",{email,password:pass})
 setMsg("Account created. Go login.")
 }catch{
 setMsg("User already exists")
 }finally{
 setLoading(false)
 }
 }}>
 {loading?"Creating...":"Signup"}
 </button>

 <button className="text-indigo-600 text-sm w-full"
 onClick={()=>window.location="/"}>
 Back to login
 </button>

 </div>
 </div>
 )
}
