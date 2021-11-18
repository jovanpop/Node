import React ,{useState} from "react";
import { api } from "../RestAPI/ApiConstants";
export function Register (){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // function register (){
    //     const user={
    //         first_name: firstName,
    //         last_name: lastName,
    //         email: email,
    //         password: password
    //     }
    //     fetch(`http://localhost:5000/users/register`,{
    //         method:'POST',
    //         mode: 'no-cors',
    //         body: JSON.stringify(user)
    //     })
    //     .catch (err=>{
    //         alert(err);
    //     })
    // }
    return(
    <form /* onSubmit={register} */ method="POST" action={`${api.root}/users/register`} className="mt-5">
        <div className="input-group mb-3">
            <input type="text" name="first_name" value={firstName} onChange={e=>setFirstName(e.target.value)} className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>    
        <div className="input-group mb-3">
            <input type="text" name="last_name" value={lastName} onChange={e=>setLastName(e.target.value)} className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        </div>
        <div className="input-group mb-3">
            <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="E-mail" id="basic-url" aria-describedby="basic-addon3"></input>
        </div>
        <div className="input-group mb-3">
            <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Password" aria-label="Amount (to the nearest dollar)"></input>
        </div>
        <button type="submit" className="btn btn-primary">Sign-Up</button>
    </form>
    )
}