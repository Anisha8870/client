// import userContext from "./context.js";
// import {useContext,useState} from "react";
// import {Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import UserContext from "./context.js";
// import './App.css';
// export default function Register()
// {
//    let users=useContext(UserContext)
//    let [name,setName]=useState();
//    let [email,setEmail]=useState();
//    let [password,setPassword]=useState();
//    function handleSubmit(e)
//    {
//     e.preventDefault();
//     console.log(name)
//     console.log(email)
//     console.log(password)
//     users.users.push({name:name,email:email,password:password,amount:1000})

//    }
//     return (
//         <>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text" name="name" required  onChange={(e)=>setName(e.target.value)}/><br /><br />

//                 <label>E-mail:</label>
//                 <input type="email" name="email" required  onChange={(e)=>setEmail(e.target.value)}/><br /><br />

//                 <label>Password:</label>
//                 <input type="password" name="password" required onChange={(e)=>setPassword(e.target.value)}/><br /><br />

//                 <Button type="submit">Submit</Button>
//             </form>
//         </>
//     );
// }


import React, { useState, useContext } from "react";
//import UserContext from "./context";
import axios from 'axios';

export default function Register() {
    // let users = useContext(UserContext);
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name, email, pass);
        // users.users.push(
        let item = { name: Name, email: Email, password: pass, amount: 1000 };
        axios.post('http://localhost:8080/create',item)
        alert("Submitted Sucessfully");
    }

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' 
        }}>
            <div style={{ 
                width: '25rem', 
                padding: '20px', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                textAlign: 'center' // Aligns text inside the box
            }}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
    