import UserContext from './context.js'
import { useContext,useState } from 'react';
import {Button} from 'react-bootstrap';
export default function Deposit(){
    let users=useContext(UserContext)
    let [bal,setBal]=useState(users.users[0].amount)
    let[cash,setCash]=useState(0)
    function handleSubmit(e){
        e.preventDefault()
        let cashback=Number(cash)
        setBal(bal-cashback)
        alert("insufficient balance")
    }
    users.users[0].amount=bal
    return(<>
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
    <form onSubmit={handleSubmit}>
    <h1>Cashback:</h1>
    <input type="Number" onChange={(e)=>setCash(e.target.value)}></input>
    <Button type="submit"> Submit </Button>
    </form>
    <h2>Balance:${bal}</h2>
    
</div>
    </div>
    
    
    
    </>)
}