import { useState } from 'react'
function Login() {
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const handleSubmit = (e)=>{
    e.preventDefault()
    }
    return (
    <form onSubmit={handleSubmit}>
    <label>Email:</label>
    <input type="email" required placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <label>Password:</label>
    <input type="password" required placeholder='Enter your Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    <button type="submit">Submit</button>
    </form>
)
}
export default Login
