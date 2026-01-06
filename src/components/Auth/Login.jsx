import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        setEmail("");
        setPassword("");
    }
  return (
    <div className=' flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-cyan-300 to-cyan-700'>
        <div className='border-gray-500 shadow-gray-700 p-10 h-150 w-100 rounded-3xl shadow-lg bg-white flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-extrabold text-cyan-900 p-10'>Login</h1>
            <div >
                <form 
                    onSubmit={(e)=>{
                        submitHandler(e);
                    }}
                    className='flex flex-col gap-4 items-center justify-center'
                >
                    <input 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required type="email" placeholder="Email" className='outline-none border border-gray-900 p-2 rounded-3xl'/>
                    <input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required type="password" placeholder="Password" className='outline-none border border-gray-900 p-2 rounded-3xl'/>
                    <button className='bg-cyan-600 w-30 p-2 rounded-3xl'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login