// import UserContext from './context.js'
// import { useContext } from 'react';
// export default function Alldata(){
//     let users = useContext(UserContext)
//     console.log("hi",users.users[0].amount)

//     return(<>
    
//     <h1>Alldata</h1>
//     {/* {JSON.stringify(users)} */}
    
//     <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">NAME</th>
//       <th scope="col">E-MAIL</th>
//       <th scope="col">PASSWORD</th>
//       <th scope="col">BALANCE</th>
//     </tr>
//   </thead>
//   <tbody>
// {users.users.map((item)=><tr>
//     <td>{item.name}</td>
//     <td>{item.email}</td>
//     <td>{item.password}</td>
//     <td>{item.amount}</td>
//     </tr>)}
//   </tbody>
// </table>
    
    
//     </>)
// }


//import UserContext from "./context";
// //import { useContext } from "react";
// import axios from "axios";
// import { useState,useEffect } from "react"
// export default function Alldata(){
//let users=useContext(UserContext)
//console.log("hii",users.users[0].amount)
// let [data,setData]=useState([])
// function handleClick(e){
//   e.preventDefault();
//  let result= axios.get('http://localhost:8080/data')
//  setData(result.data)
  
// }
// return(
// <>
// <h1>ALL-DATA</h1>
// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">NAME</th>
//       <th scope="col">E-MAIL</th>
//       <th scope="col">PASSWORD</th>
//       <th scope="col">HANDLE</th>
//     </tr>
//   </thead>
//   <tbody>
//    { data.map((item)=><tr>
//     <td>{item.name}</td>
//    <td>{item.email}</td>
//    <td>{item.password}</td>
//    <td>{item.amount}</td>
//    </tr>)}
   

    
//   </tbody>
// </table>
// <button onClick={handleClick}>FETCH</button>
// </>)
// }




//import UserContext from "./context"
// import { useContext } from "react"
import { useState, useEffect } from "react";
import axios from "axios";
export default function Alldata() {
  // let  users=useContext(UserContext)
  // console.log("hi",users.users[0].amount)
  let [data, setData] = useState([])

  async function handleClick(e){
    e.preventDefault();
   let result = await(axios.get('http://localhost:8080/data'))
   setData(result.data)
   alert('Fetched')
  }
  return (
    <>
      <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' 
        }}>
            <div style={{ 
                width: '60rem', 
                padding: '20px', 
                borderRadius: '15px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                textAlign: 'center' // Aligns text inside the box
            }}>
      <h1> Alldata</h1>
      <table class="table">
        <thead>
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">password</th>
            <th scope="col">balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => <tr>
            <td>{item.name}<button>Del</button></td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.amount}</td></tr>)}
        </tbody>
      </table>

      <button onClick={handleClick}>Fetch</button>
</div>
   </div>
    </>
  )
}