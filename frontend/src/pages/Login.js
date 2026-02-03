import axios from "axios"
import {useState} from "react"


export default function(){

 const[email,setEmail]=useState("")
 const[pass,setPass]=useState("")
 const[err,setErr]=useState("")
 const[loading,setLoading]=useState(false)

 return(
 <div className="h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">

 <div className="bg-white p-8 rounded-xl shadow-xl w-80 space-y-4">

 <h1 className="text-2xl font-bold text-center">Login</h1>

 <input className="border w-full p-2 rounded"
 placeholder="Email"
 onChange={e=>setEmail(e.target.value)}/>

 <input type="password"
 className="border w-full p-2 rounded"
 placeholder="Password"
 onChange={e=>setPass(e.target.value)}/>

 {err && <p className="text-red-500 text-sm">{err}</p>}

 <button disabled={loading}
 className="bg-indigo-600 text-white w-full py-2 rounded disabled:opacity-50"
 onClick={async()=>{

 if(!email.includes("@")) return setErr("Invalid email")
 if(pass.length<6) return setErr("Password min 6 chars")

 try{
 setLoading(true)
 const r=await axios.post("http://localhost:5000/api/v1/auth/login",{email,password:pass})
 localStorage.setItem("t",r.data.token)
 window.location="/dash"
 }catch{
 setErr("Invalid credentials")
 }finally{
 setLoading(false)
 }
 }}>
 {loading?"Loading...":"Login"}
 </button>

 </div>
 </div>
 )
}
