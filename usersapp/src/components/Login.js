import React,{useState} from "react";
import {api} from "../RestAPI/ApiConstants";
export function Login (){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return (
        <form method="POST" onSubmit={getToken} action={`${api.root}/users/login`} className="mt-5">
        <div className="input-group mb-3">
            <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="E-mail" id="basic-url" aria-describedby="basic-addon3"></input>
        </div>
        <div className="input-group mb-3">
            <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Password" aria-label="Amount (to the nearest dollar)"></input>
        </div>
        <button type="submit" className="btn btn-primary">Sign-In</button>
        </form>
    )
}